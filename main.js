
const cityname=document.getElementById("cityname");
const submitBtn = document.getElementById("submitBtn");
const city_name=document.getElementById("city_name");
const temp_realval=document.getElementById("temp_realval");
const temp_status=document.getElementById("temp_status");
let datahide=document.querySelector(".middle_layer");
const getInfo= async(event)=>
{
   event.preventDefault();
let cityval=cityname.value;
if(cityval===""){
    city_name.innerHTML=`please write the name before search`;
    // datahide.classList.add(data_hide);

}else{
            try{
 let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=da2760bdda059f6e6d1941e98044c005&units=metric`
const response= await fetch(url);
const data=await response.json();
const arrdata=[data];

city_name.innerText=`${arrdata[0].name} , ${arrdata[0].sys.country}`;
temp_realval.innerHTML=arrdata[0].main.temp;
tempMood=arrdata[0].weather[0].main;

if(tempMood==="Sunny"){
    temp_status.innerHTML="<i class='fas fa-sun'style='color: #eccc68;'></i>";
}else if(tempMood==="Clouds"){
    temp_status.innerHTML="<i class='fas fa-cloud'style='color: #ccffff;'></i>";
}else if(tempMood==="Rainy"){
    temp_status.innerHTML="<i class='fas fa-rain'style='color: #a4b0be;'></i>";
}else{
    temp_status.innerHTML="<i class='fas fa-sun'style='color: #eccc68;'></i>";
}
// datahide.classList.remove (data_hide);



    } catch{
        city_name.innerHTML=`please write the city name properly`;
        // datahide.classList.add (data_hide);

    }



}

}

submitBtn.addEventListener("click",getInfo);