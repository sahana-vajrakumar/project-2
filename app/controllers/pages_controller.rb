class PagesController < ApplicationController

    before_action :check_if_logged_in, except: [:home]

  def home

  end

end
