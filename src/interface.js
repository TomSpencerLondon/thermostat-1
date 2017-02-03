var thermostat = new Thermostat();
getServerAPI();

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
    postServerAPI()
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
  $.post('http://localhost:4567/api', {'temperature':thermostat.getCurrentTemp(),
                                       'city': $('#current-city').val(),
                                       'powersm': thermostat.powerSaveStatus})
}

function getServerAPI() {
  $.when($.getJSON("http://localhost:4567/api")).then(function(jsonObject){
    var temp = jsonObject[0].temperature
    var city = jsonObject[0].city
    var powersm = jsonObject[0].powersm

    if (temp===null || isNaN(temp)){temp = thermostat.DEFAULT_TEMP}
    thermostat._temp = parseInt(temp)
    $('#currenttemp').text(temp)

    if (city===null){city = 'London'}
    $('#current-city').val(city)

    if (powersm===null){powersm=true}
    thermostat.powerSaveStatus = powersm
    $("#myonoffswitch").attr('checked', powersm);
    $('#powersaving').text(powersm)
  })
}
