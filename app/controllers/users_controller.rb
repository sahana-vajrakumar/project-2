class UsersController < ApplicationController
  # before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :check_if_logged_in, except: [:new, :create]

  before_action :check_user_id, except: [:new, :create]

  # find out which user's page it is
  # compare the user's page with current user
  def check_user_id
    @user = User.find params[:id]
    unless @current_user == @user
      flash[:error] = "You must be authorised to view this page."
      redirect_to @current_user
    end
  end

  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find params[:id]
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
    @user = User.find params[:id]
  end

  # POST /users
  # POST /users.json
  def create

    user = User.create user_params

    if user.persisted?
    # did user get saved? is the user present now?
      session[:user_id] = user.id
      redirect_to user
      # will take you to the show page
    else
      flash[:errors] = user.errors.full_messages
      redirect_to new_user_path
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    @user = User.find params[:id]
    User.update user_params
    redirect_to @current_user
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    User.destroy params[:id]
    redirect_to root_path
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :icon)
    end
end
