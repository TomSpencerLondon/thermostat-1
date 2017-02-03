require 'sinatra/base'
require 'sinatra/json'
# require 'json'
require_relative 'data_mapper_setup'

class Server < Sinatra::Base
  set :public_folder, File.dirname(__FILE__)
  set :root, File.dirname(__FILE__)
  set :views, File.dirname(__FILE__)
  set :json_encoder, :to_json
  use Rack::MethodOverride

  get '/' do
    File.read('thermostat.html')
  end

  post '/api' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    # DataMapper.auto_migrate!
    # ThermostatData.first_or_create(temperature: params[:temperature],
    #                                city: params[:city],
    #                                powersm: params[:powersm])
    # DataMapper.finalize
    ThermostatData.get(1)
    ThermostatData.update(temperature: params[:temperature],
                                   city: params[:city],
                                   powersm: params[:powersm])
    200
  end

  get '/api' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    thermostat = ThermostatData.get(1)
    {'temperature': thermostat.temperature,
     'city': thermostat.city,
     'powersm': thermostat.powersm}.to_json
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
