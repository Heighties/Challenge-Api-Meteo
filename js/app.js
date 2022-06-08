// https://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&appid=83a3a64d8c5c44db4351d1b9d6738aaa&units=metric
const APIKEY = '83a3a64d8c5c44db4351d1b9d6738aaa'

// document.querySelector('#city').addEventListener('input',function(){
    let apiCall = function(city){
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=${APIKEY}&units=metric`;

    fetch(url)
    .then((response) =>
    response.json()
    .then((data) => {
        console.log(data);
        document.querySelector('#city-block').innerHTML = data.name;
        document.querySelector('#tmp-block').innerHTML = 
        "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°';
        document.querySelector('#hmd-block').innerHTML =
        "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
        document.querySelector('#wnd-block').innerHTML =
        "<i class='fas fa-wind'></i>" + data.main.speed + ' km/h';
    })
    ).catch(err => console.log('Erreur : ' + err));
    }

    document.querySelector('form').addEventListener('submit', function(e){
        e.preventDefault();
        let ville = document.querySelector('#input_city').value;

        apiCall(ville);
    });



    // });
