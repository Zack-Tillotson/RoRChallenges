class ApplicationController < ActionController::Base
  protect_from_forgery

  # GET /
  def main 
    @challenges = Challenge.all

    respond_to do |format|
      #index.html
    end
  end

end
