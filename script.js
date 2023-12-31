const apiKey = "c773b535657f2a97eb40454403c032e4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


 async function checkWeather(city){
    const response = await fetch(apiUrl +  city + `&appid=${apiKey}`);

    if( response.status == 404){
     document.querySelector(".error").style.display = "block"
     document.querySelector(".weather").style.display = "none"

    }else{
     var data =  await response.json();
    

    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
if(data.weather[0].main == "Clouds"){
     weatherIcon.src = "img/images/clouds.png";
}
else if(data.weather[0].main == "Clear"){
     weatherIcon.src = "img/images/clear.png";
} 
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "img/images/rain.png";
}
else if(data.weather[0].main == "Drizzel"){
weatherIcon.src = "img/images/drizzel.png";
}
else if(data.weather[0].main == "Mist"){
weatherIcon.src = "img/images/mist.png";
}
else if(data.weather[0].main == "Snow"){
weatherIcon.src = "img/images/snow.png";
}  

document.querySelector(".weather").style.display ="block"
document.querySelector(".error").style.display = "none"
}
         
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


searchBox.addEventListener("keypress", function(e){
     if(e.key == "Enter"){
          e.preventDefault();
          document.getElementById("myBtn").click();
     }
})

