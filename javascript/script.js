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

        // Save stored data for today in selected city
        $.ajax({url:localWeather, method: 'GET' }).then(function(data){
            $(".tempFahr").text("Temperature: " + data.main.temp + "°F");
            $(".cityName").html("<h1>" + data.name + "</h1>");
            $(".icon").html("<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='current weather icon'>");
            $(".windSpeed").text("Wind Speed: " + data.wind.speed + " MPH");
            $(".humidity").text("Humidity: " + data.main.humidity + "%");
            console.log(data)

            // Get the UV Index data
            var lon = data.coord.lon;
            var lat = data.coord.lat;
            var uvIndex = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
        
            $.ajax({url:uvIndex, method: 'GET'})
                .then(function(uvData) {
                    console.log(uvData)

                    $(".uvI").text("UV Index: " + uvData.value);
                    $(".uvI").css("background-color", "yellow");
                        
                })
            
        })

        // Save stored data for 5-day forecast
        $.ajax({url:localForecast, method: 'GET'}).then(function(data5day){
            console.log(data5day)

        // Create content for Day 1
        var day1 = moment(data5day.list[0].dt_txt).format("ddd, MMM D");

        $(".day1date").html("<h6>" + day1 + "</h6>");
        $(".day1png").html("<img src='https://openweathermap.org/img/w/" + data5day.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day1temp").text("Temp: " + data5day.list[0].main.temp + "°F")
        $(".day1hum").text("Humidity: " + data5day.list[0].main.humidity + "%");

        // Create content for Day 2
        var day2 = moment(data5day.list[8].dt_txt).format("ddd, MMM D");

        $(".day2date").html("<h6>" + day2 + "</h6>");
        $(".day2png").html("<img src='https://openweathermap.org/img/w/" + data5day.list[8].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day2temp").text("Temp: " + data5day.list[8].main.temp + "°F")
        $(".day2hum").text("Humidity: " + data5day.list[8].main.humidity + "%");

        // Create content for Day 3
        var day3 = moment(data5day.list[16].dt_txt).format("ddd, MMM D");

        $(".day3date").html("<h6>" + day3 + "</h6>");
        $(".day3png").html("<img src='https://openweathermap.org/img/w/" + data5day.list[16].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day3temp").text("Temp: " + data5day.list[16].main.temp + "°F")
        $(".day3hum").text("Humidity: " + data5day.list[16].main.humidity + "%");

        // Create content for Day 4
        var day4 = moment(data5day.list[24].dt_txt).format("ddd, MMM D");

        $(".day4date").html("<h6>" + day4 + "</h6>");
        $(".day4png").html("<img src='https://openweathermap.org/img/w/" + data5day.list[24].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day4temp").text("Temp: " + data5day.list[24].main.temp + "°F")
        $(".day4hum").text("Humidity: " + data5day.list[24].main.humidity + "%");

        // Create content for Day 5
        var day5 = moment(data5day.list[32].dt_txt).format("ddd, MMM D");

        $(".day5date").html("<h6>" + day5 + "</h6>");
        $(".day5png").html("<img src='https://openweathermap.org/img/w/" + data5day.list[32].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day5temp").text("Temp: " + data5day.list[32].main.temp + "°F")
        $(".day5hum").text("Humidity: " + data5day.list[32].main.humidity + "%");
        })
    })

        
    
})