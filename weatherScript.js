// This function gets recources from the API=http://openweathermap.org/current 
//Have used API Key to fetch the information  
function getCurrentWeather(p1) {
  var city=document.getElementById("inputTextBox").value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=3b277f92b7bc88a7c9f9abd5223e3665')
    .then((response) => response.json())
    .then((json) => {console.log(json)
    weather_0.style.display = "block";
    document.getElementById("p_id").innerHTML=json.weather[0].description
    max_Temp_0.style.display = "block";
    document.getElementById("p1_id").innerHTML=json.main.temp_max
    min_Temp_0.style.display = "block";
    document.getElementById("p2_id").innerHTML=json.main.temp_min
    document.getElementById("CurrentResponse_Div").style.display = "block";
    document.getElementById("error_Id").style.display = "none";
    document.getElementById("ForecastResponse_Div").style.display = "none";
    document.getElementById("inputTextBox").value=""
    }).catch(function() {
      document.getElementById("ForecastResponse_Div").style.display = "none";
      document.getElementById("CurrentResponse_Div").style.display = "none";
      document.getElementById("error_Id").innerHTML="ENTER A VALID CITY NAME"
      document.getElementById("error_Id").style.display = "block";
      document.getElementById("inputTextBox").value=""
     
  });
 
}

// This function gets recources from the API=http://openweathermap.org/forecast5

function getForecast(p1) {
 var city=document.getElementById("inputTextBox").value;
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=3b277f92b7bc88a7c9f9abd5223e3665')
    .then((response) => response.json())
    .then((json) => {console.log(json)
    date_0.style.display = "block";
    document.getElementById("p3_id").innerHTML=json.list[0].dt_txt
    max_Temp_1.style.display = "block";
    document.getElementById("p4_id").innerHTML=json.list[0].main.temp_max
    min_Temp_1.style.display = "block";
    document.getElementById("p5_id").innerHTML=json.list[0].main.temp_min
    date_1.style.display = "block";
    document.getElementById("p6_id").innerHTML=json.list[1].dt_txt
    max_Temp_2.style.display = "block";
    document.getElementById("p7_id").innerHTML=json.list[1].main.temp_max
    min_Temp_2.style.display = "block";
    document.getElementById("p8_id").innerHTML=json.list[1].main.temp_min
    date_2.style.display = "block";
    document.getElementById("p9_id").innerHTML=json.list[2].dt_txt
    max_Temp_3.style.display = "block";
    document.getElementById("p10_id").innerHTML=json.list[2].main.temp_max
    min_Temp_3.style.display = "block";
    document.getElementById("p11_id").innerHTML=json.list[2].main.temp_min
    date_3.style.display = "block";      
    document.getElementById("p12_id").innerHTML=json.list[3].dt_txt
    max_Temp_4.style.display = "block";
    document.getElementById("p13_id").innerHTML=json.list[3].main.temp_max
    min_Temp_4.style.display = "block";
    document.getElementById("p14_id").innerHTML=json.list[3].main.temp_min
    date_4.style.display = "block";
    document.getElementById("p15_id").innerHTML=json.list[4].dt_txt
    max_Temp_5.style.display = "block";
    document.getElementById("p16_id").innerHTML=json.list[4].main.temp_max
    min_Temp_5.style.display = "block";
    document.getElementById("p17_id").innerHTML=json.list[4].main.temp_min
    document.getElementById("ForecastResponse_Div").style.display = "block";
    document.getElementById("error_Id").style.display = "none";
    document.getElementById("CurrentResponse_Div").style.display = "none";
    document.getElementById("inputTextBox").value=""


    }).catch(function() {
      document.getElementById("ForecastResponse_Div").style.display = "none";
      document.getElementById("CurrentResponse_Div").style.display = "none";
      document.getElementById("error_Id").innerHTML="ENTER A VALID CITY NAME"
      document.getElementById("error_Id").style.display = "block";
      document.getElementById("inputTextBox").value=""
  });
}



