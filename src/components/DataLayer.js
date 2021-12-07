import React from "react";
import moment from "moment";
import TempCard from ".TempCard";

const DataLayer = (props) => {
  const lon = props.lon;
  const lat = props.lat;

  const oneWeatherAPI = async () => {
    try {
      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely&units=imperial&appid=${process.env.API_KEY}`
      )
        .then((response) => {
          if (!response.ok) {
            console.log("404");
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (!data) {
            console.log("No data recorded");
            return;
          }
          console.log(data);
          return data;
        });
    } catch (err) {
      console.log(err);
    }
  };

  const data = oneWeatherAPI();
  return (
    <div>
      <TempCard
        day={moment.unix(data.daily[0].dt).format("ddd")}
        tempMax={data.daily[0].temp.max}
        tempMin={data.daily[0].temp.min}
        icon={data.daily[0].weather[0].icon}
      />
      <TempCard
        day={moment.unix(data.daily[1].dt).format("ddd")}
        tempMax={data.daily[1].temp.max}
        tempMin={data.daily[1].temp.min}
        icon={data.daily[1].weather[0].icon}
      />
      <TempCard
        day={moment.unix(data.daily[2].dt).format("ddd")}
        tempMax={data.daily[2].temp.max}
        tempMin={data.daily[2].temp.min}
        icon={data.daily[2].weather[0].icon}
      />
      <TempCard
        day={moment.unix(data.daily[3].dt).format("ddd")}
        tempMax={data.daily[3].temp.max}
        tempMin={data.daily[3].temp.min}
        icon={data.daily[3].weather[0].icon}
      />
      <TempCard
        day={moment.unix(data.daily[4].dt).format("ddd")}
        tempMax={data.daily[4].temp.max}
        tempMin={data.daily[4].temp.min}
        icon={data.daily[4].weather[0].icon}
      />
    </div>
  );
};

export default DataLayer;
