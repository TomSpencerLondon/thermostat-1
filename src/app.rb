require 'sinatra/base'
require 'sinatra/json'
require_relative 'data_mapper_setup'

class Server < Sinatra::Base
  set :public_folder, File.dirname(__FILE__)
  set :root, File.dirname(__FILE__)
  set :views, File.dirname(__FILE__)
  set :json_encoder, :to_json
  use Rack::MethodOverride

  get '/' do
    'HOME PAGE'
  end

  post '/api' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    thermostat = ThermostatData.get(1)
    if thermostat == nil
      createTable(params[:temperature], params[:city], params[:powersm])
    else
      updateTable(params[:temperature], params[:city], params[:powersm])
    end
    200
  end

  get '/api' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    thermostat = ThermostatData.get(1)
    if thermostat == nil
      createTable(params[:temperature], params[:city], params[:powersm])
    end
    ThermostatData.all.to_json
  end

  def createTable(temperature=20, city="London", powersm=true)
    ThermostatData.create(temperature:temperature, city:city, powersm:powersm)
  end

  def updateTable(temperature=20, city="London", powersm=true)
    ThermostatData.update(temperature: temperature, city: city, powersm: powersm)
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
