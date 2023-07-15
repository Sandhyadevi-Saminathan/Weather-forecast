import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Weather() {
    const [error, seterror] = useState(true);
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const APIKey = '546b8e7bc2e42c8c92a2572386d39b0a';


    const getData = async () => {
        try {
            const datas = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            setWeatherData(datas.data)
            console.log(datas.data)
            seterror(true)

        } catch (error) {
            console.log(error)
            console.log(error.response.data.message)
            if (error.response.data.message === "city not found") {
                seterror(false)
            }


        }
    }
    useEffect(() => {
        getData();
    })

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = () => {
        getData();
    }

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.charCode === 13) {
            getData();
        }
    };

    const name = weatherData ? weatherData.name : '';
    const country = weatherData ? weatherData.sys.country : '';
    const humidity = weatherData ? weatherData.main.humidity : '';
    const pressure = weatherData ? weatherData.main.pressure : '';
    const temp = weatherData ? weatherData.main.temp : '';
    const weather = weatherData ? weatherData.weather[0].description : '';
    const iconcode = weatherData ? weatherData.weather[0].icon : '#';

    const d = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const month = new Array([]);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";


    return (

        <>


            <div className='center-screen'>

                <div className="weather">
                    <h1 class="title mb-5">Weather Forecast</h1>
                    <input id="weatherInput" type="text" name="city" placeholder="Enter a city name"
                        onChange={handleChange}
                        onKeyPress={handleKeypress}
                        style={{ fontFamily: "cursive" }}
                    />

                    <button className='btn btn-danger' onClick={handleSubmit} style={{ fontFamily: "cursive", fontSize: "20px" }}>Search</button>

                </div>
            </div>

            {error === false ? (
                <span style={{ color: "black", fontFamily: "cursive", fontSize: "35px" }}>Enter a valid city name</span>) : weatherData !== null ?
                (

                    <>

                        < div class="card text-dark bg-warning mt-3" style={{ width: "30rem", borderRadius: "40%" }}>
                            <div class="card-body ">
                                <h5 class="card-text" style={{ fontSize: "35px" }}> {name}, {country}</h5>
                                <h5 class="card-text" > {days[d.getDay()]}, {month[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</h5>
                                <h5 class="card-text" style={{ fontSize: "40px" }}> {Math.round(temp)}' C</h5>
                                <img src={`http://openweathermap.org/img/w/${iconcode}.png`} alt="Weather icon" style={{ height: "80px", width: "80px" }} />

                                <h5 class="card-text" style={{ textTransform: "capitalize", fontSize: "20px" }}>{weather}</h5>

                                <h5 class="card-text" style={{ fontSize: "25px" }}>Humidity : {humidity}%</h5>
                                <h5 class="card-text" style={{ fontSize: "25px" }}>Pressure : {pressure} hPa</h5>
                            </div>
                        </div >
                    </>


                ) : null
            }




        </>
    )

}
export default Weather