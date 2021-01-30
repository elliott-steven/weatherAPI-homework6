//Make sure document is loaded before starting
$(document).ready(function() {

    var apiKey = "846ac882595fcf3cd80bd25c5757d8a2"
    var cityData = ""

    $("#citySearch").on("click",function(event){
        event.preventDefault()
        console.log("Search is Run")
        var city = $("#searchText").val()
        var localWeather = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey

        $.ajax({url:localWeather, method: 'GET' }).then(function(data){
            cityData = data
            $(".city-info").text(cityData.name)
            console.log(cityData)
        })
    })
    
})