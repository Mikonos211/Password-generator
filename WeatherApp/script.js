const apiKey = "b14539c172cd5c797bbeb023e67cb564";
       const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

       const searchBox = document.querySelector(".search input");
       const searchBtn = document.querySelector(".search button");
       const weatherIcon = document.querySelector(".weather-icon")
     
        async function checkWeather(city) {
            const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
            var data = await response.json();
            console.log(data);
            if (data.cod == 200) {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = parseInt(data.main.temp)  + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png"
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png"
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png"
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png"
            }

                document.querySelector(".weather").style.display = "block"
            }else{
                document.querySelector(".weather").style.display = "none"
                alert("Incorect City");
            }

        }

        searchBtn.addEventListener("click", function(){
        checkWeather(searchBox.value);
        searchBox.value = "";
       })


        checkWeather();