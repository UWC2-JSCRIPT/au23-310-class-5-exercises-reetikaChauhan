// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const header_text = document.getElementById('weather-head')
header_text.innerText = "February 10 Weather Forecast, Seattle"

// Change the styling of every element with class "sun" to set the color to "orange"
const sunobj = document.querySelectorAll(".sun")
sunobj.forEach((element) => {
        element.style.color = 'orange'
});
// Change the class of the second <li> from to "sun" to "cloudy"
const links = document.getElementsByTagName("ul")[0]
const lis = links.getElementsByTagName("li")[1]
lis.classList.replace("sun","cloudy")
