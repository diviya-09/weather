const button=document.getElementById("button");
const city = document.getElementById("city");
const country=document.getElementById("country");
const weather=document.getElementById("weather");
let counter=0;
button.onclick = () => {
    axios.get('https://www.freetestapi.com/api/v1/weathers')  // axios is used to connet the api and content
    .then(function(respone){
        console.log(respone);
        button.textContent = "Next";
        weather.textContent="";
        console.log(respone.data[counter].city);
        console.log(respone.data[counter].country);
        city.textContent=respone.data[counter].city;
        country.textContent=respone.data[counter].country;
        setTimeout(function(){
            weather.textContent=respone.data[counter].weather_description;
        },1500);
        counter++;
    })
    .catch(function(error){
        console.log(error);
    })
};