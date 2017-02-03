require 'data_mapper'
require 'dm-migrations'
require 'dm-postgres-adapter'
require_relative 'thermostat_data'

DataMapper.setup(:default, "postgres://localhost/thermostat_development")
DataMapper.finalize
DataMapper.auto_upgrade!
