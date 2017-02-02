var thermostat = new Thermostat();

$(document).ready(function() {


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
};
