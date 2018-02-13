class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  before_action :fetch_user

  def check_if_logged_in
    if @current_user.nil?
      flash[:error] = "You must be logged in to view this page."
      redirect_to login_path
    end
  end

  def check_if_admin
    unless @current_user.present? && @current_user.is_admin?
      flash[:error] = "You must be an admin to view this page."
      redirect_to login_path
    end
  end


  private
  def fetch_user

    # retrieve the currently logged in user's data from the database
    # but only if they're actually logged in
    if session[:user_id].present?
      @current_user = User.find_by id: session[:user_id]
      # if just using User.find, and no user found, it breaks
    end

    # On the off chance the session user ID does not exist in the database (ie. we have reseeded the 'users' table), delete the session
    session[:user_id] = nil unless @current_user.present?

  end
end
