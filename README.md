# Thermostat - Javascript
#### Technologies: Javascript, Ruby, Jasmine, JQuery, API, Sinatra, HTML, CSS

### [Makers Academy] (http://www.makersacademy.com) - Week 5 Pair Programming Project

* [Setting up the applicaion] (#Setup)
* [Running Jasmine tests] (#Jasmine)
* [Running Sinatra Web Server] (#Sinatra)
* [User Stories] (#Stories)
* [Use live on Heroku] (#Heroku)

## <a name="Setup">Setting up the applicaion</a>
```shell
$ git clone https://github.com/adrianeyre/thermostat
$ cd thermostat
$ git checkout <branch name>
```
where `<branch name>` is `day-two` or `day-three`

## <a name="Jasmine">Running Jasmine tests</a>
```shell
$ open -a safari SpecRunner.html
```

## <a name="Sinatra">Running Sinatra Web Server</a>
```shell
$ Ruby app.rb
```

## <a name="Stories">User Stories</a>
```
Thermostat starts at 20 degrees

You can increase the temperature with an up function

You can decrease the temperature with a down function

The minimum temperature is 10 degrees

If power saving mode is on, the maximum temperature is 25 degrees

If power saving mode is off, the maximum temperature is 32 degrees

Power saving mode is on by default

You can reset the temperature to 20 with a reset function

You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage,
anything else is high-usage.
```

## <a name="Heroku">Use live on Heroku</a>

[Termostat:] (https://adrianeyre-thermostat.herokuapp.com) not all functionality works on the Heroku site
