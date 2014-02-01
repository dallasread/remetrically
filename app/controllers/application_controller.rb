class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_filter :verify_authenticity_token, if: Proc.new { request.format == :json }
  before_filter :authenticate_user_from_api_key!, if: Proc.new { params[:api_key] && request.format == :json }
  before_filter :authenticate_user!
  before_filter :set_user
  
  private
  
  def set_user
    @user = current_user
  end
  
  def authenticate_user_from_api_key!
    if /(contacts\#(save|overwrite)|events\#create)/ =~ "#{controller_name}##{action_name}"
      user = User.where(api_key: params[:api_key]).first
      sign_in user, store: false if user
    else
      false
    end
  end
end
