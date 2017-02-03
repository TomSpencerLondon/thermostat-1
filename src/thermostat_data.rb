class ThermostatData

  include DataMapper::Resource

  property :id,           Serial
  property :temperature,  Integer
  property :city,         String
  property :powersm,      Boolean

end
