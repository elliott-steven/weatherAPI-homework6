//Make sure document is loaded before starting
$(document).ready(function() {

    //This will pull the local date for me
        $(".currentDay").text(moment().format("MMMM Do, YYYY"));

    var apiKey = "846ac882595fcf3cd80bd25c5757d8a2"
    

    $("#citySearch").on("click",function(event){
        event.preventDefault()
        console.log("Search is Run")
        var city = $("#searchText").val()
        // Gets weather for the city
        var localWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey
        // Gets the 5-day forecast
        var localForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" +apiKey

        // Save stored data into object "data"
        $.ajax({url:localWeather, method: 'GET' }).then(function(data){
            $(".tempFahr").text("Temperature " + data.main.temp + "°F");
            $(".city").html("<h1>" + data.name + "</h1>");
            $(".icon").html("<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='current weather icon'>");
            $(".windSpeed").text("Wind Speed: " + data.wind.speed + " MPH");
            $(".humidity").text("Humidity: " + data.main.humidity + "%");
            console.log(data)
            
        })
        $.ajax({url:localForecast, method: 'GET'}).then(function(data5day){
            console.log(data5day)

        })
    })

        
    
})