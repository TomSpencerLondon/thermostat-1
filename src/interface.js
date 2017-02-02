var thermostat = new Thermostat();
getServerApi();

$(document).ready(function() {



  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=8b4169f9317d5d8aabb05fe31ea2354f&units=metric', function(data){
      $('#current-temperature').text(data.main.temp);
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=8b4169f9317d5d8aabb05fe31ea2354f';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  };

  displayWeather('london');

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
    });

updateDisplay();


  $('#temperature-up').click(function() {
    thermostat.up();
    updateDisplay();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateDisplay();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateDisplay();
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateDisplay();
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateDisplay();
  });

});

function updateDisplay() {
$('#temperature').text(thermostat.getCurrentTemperature());
$('#temperature').attr('class', thermostat.energyUsage());
postServerApi();
};

function getServerApi() {
  $.getJSON('http://localhost:4567/api', function(result) {
    console.log(result['temperature'])
  })

}

function postServerApi() {
  $.post('http://localhost:4567/api', {'temperature':thermostat.getCurrentTemperature()})
};
