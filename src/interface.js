$(document).ready(function() {

    var thermostat = new Thermostat();
    updateTemperature();
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
    if(thermostat.powerSaveStatus == false) {
    thermostat.powerSaveOn();
  } else {
      thermostat.powerSaveOff();
  }
  $('#powersaving').text(thermostat.isPowerSave());
})

  function updateTemperature() {
    $('#currenttemp').text(thermostat._temp);
    $('#currenttemp').attr('class', thermostat.energyUsage());
  }
});
