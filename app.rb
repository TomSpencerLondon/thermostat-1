require 'sinatra/base'
require 'sinatra/json'
require 'json'
require 'sinatra/session'

class Server < Sinatra::Base

register Sinatra::Session

set :sessions, true 
enable :sessions
set :session_secret, "My session secret"

  get '/' do
    'Hello Server!'
  end

  get '/api' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    $temp = session[:temperature]
    p $temp
    {'temperature' => $temp}.to_json
  end

  post '/api' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    $temp = params[:temperature]
    #p session[:temperature]
    200
  end



  # start the server if ruby file executed directly
  run! if app_file == $0
end
