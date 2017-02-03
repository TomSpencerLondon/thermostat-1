var thermostat = new Thermostat();
getServerAPI()

$(document).ready(function() {

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  $('#up').on('click', function() {
    thermostat.increase();
    updateTemperature();
  });

  $('#down').on('click', function() {
    thermostat.decrease();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('.onoffswitch-label').click(function() {
    if(thermostat.powerSaveStatus === false) {
      thermostat.powerSaveOn();}
    else
      {thermostat.powerSaveOff();}
    $('#powersaving').text(thermostat.isPowerSave());
  });
});

function updateTemperature() {
  $('#currenttemp').text(thermostat._temp);
  $('#currenttemp').attr('class', thermostat.energyUsage());
  postServerAPI()
}

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&APPID=07549dd4f855daf2a59beb7db97b47a0';
  var units = '&units=metric';
  $.get( url + token + units, function(data) {
    $('#Ambient-temperature').text(data.main.temp);
  });
}

function postServerAPI() {
  $.post('http://localhost:4567/api', {'temperature':thermostat.getCurrentTemp()})
}

function getServerAPI() {
  console.log("HELLO")
  $.getJSON('http://localhost:4567/api', function(jsonObject) {

    console.log(jsonObject)
    console.log("HERE")
    if (jsonObject['temperature']===null || isNaN(jsonObject['temperature'])){
      var temp = thermostat.DEFAULT_TEMP}
    else
      {var temp = jsonObject['temperature']
    }
    thermostat._temp = parseInt(temp)
    $('#currenttemp').text(temp)
  })
}
