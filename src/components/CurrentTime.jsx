import React from "react";
import moment from "moment-timezone";

const CurrentTime = ({ people, cities, countries }) => {
  const getCurrentTime = (city) => {
    if (city === "Pamplona") {
      const timeZone = moment.tz("Europe/Madrid").format('HH:mm:ss');
      return timeZone;
    }
    if (city === "Burdeos") {
      const timeZone = moment.tz("Europe/Paris").format('HH:mm:ss');
      return timeZone;
    }

    if (city === "Santa Cruz de Tenerife") {
      const timeZone = moment.tz("Atlantic/Canary").format('HH:mm:ss');
      return timeZone;
    }

    if (city === "Tokyo") {
      const timeZone = moment.tz("Asia/Tokyo").format('HH:mm:ss');
      return timeZone;
    }
    if (city === "Bogotá") {
      const timeZone = moment.tz("America/Colombia").format('HH:mm:ss');
      return timeZone;
    }
  };

  return (
    <div className="currentTime">
      <h5>Hora actual por cada país:</h5>

      {people.map((person) => {
        const city = cities.find((city) => city.city_id === person.city_id);
        if (!city) return null;
        const country = countries.find(
          (country) => country.country_id === city.country_id
        );
        if (!country) return null;
        console.log(city);
        const currentTime = getCurrentTime(city.cityName);

        return (
          <div key={person.person_id}>
            <p>{`${person.name} ${person.surname1}: ${currentTime}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentTime;
