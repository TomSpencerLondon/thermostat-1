require 'sinatra/base'
require 'sinatra/json'
require 'json'

class Server < Sinatra::Base
  set :public_folder, File.dirname(__FILE__)
  set :root, File.dirname(__FILE__)
  set :views, File.dirname(__FILE__)

  get '/' do
    File.read('thermostat.html')
  end

  post '/api' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    $temperature = params[:temperature]
    200
  end

  get '/api' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    {'temperature': $temperature}.to_json
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
