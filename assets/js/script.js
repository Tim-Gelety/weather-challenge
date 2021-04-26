
var list = JSON.parse(localStorage.getItem('citylist')) || [];


// Renders city-history to the page
function renderCityBtn(list) {
	// Empties out the html
	$('#city-history').empty();

	// loop
	for (var i = 0; i < list.length; i++) {

		// Creates a button cityBtn
		var cityBtn = $('<button>');
		cityBtn.attr('city-id', i);
		cityBtn.addClass('submit');
		cityBtn.text(list[i]);

		$('#city-history').append(cityBtn);
	}
}

$('#add-city').on('click', function (event) {
	event.preventDefault();

	var cityName = $('#city-name').val().trim();

	list.push(cityName);
	renderCityBtn(list);

	// api stuff goes in here 
	// api goodness 
	function callWeather() {
		var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=aeea392bbcc60da53d27c2fd993bb104'
		fetch(apiUrl).then(function (response) {
			response.json()

				.then(function (response) {
					console.log(response)
					// temperature in kelvin
					console.log("TEMP: " + response.main.temp + "K")
					// percentage humidity 
					console.log("Humidity: " + response.main.humidity + "%")
					// windspeed  in meters per second??
					console.log("Windspeed: " + response.wind.speed + " m/s");
				});
		});
	};
	// remember to return 
	callWeather()
	// Save the city-history into localStorage
	localStorage.setItem('citylist', JSON.stringify(list));

	// Clear the textbox 
	$('#city-name').val('');
});

$(document).on('click', '.submit', function () {
	// go find the item from the array at this address reused cityName same value different way of getting it
	var cityId = $(this).attr('city-id');
	var cityName = (list['citylist', cityId])

	function callWeather() {
		var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=aeea392bbcc60da53d27c2fd993bb104'
		fetch(apiUrl).then(function (response) {
			response.json()

				.then(function (response) {
					console.log(response);
					// temperature in kelvin
					console.log("TEMP: " + response.main.temp + "K")
					// percentage humidity 
					console.log("Humidity: " + response.main.humidity + "%")
					// windspeed  in meters per second??
					console.log("Windspeed: " + response.wind.speed + " m/s");
				});
		});
	};

	renderCityBtn(list);
	callWeather()
	// Save the city-history into localStorage
	localStorage.setItem('citylist', JSON.stringify(list));
});

renderCityBtn(list);