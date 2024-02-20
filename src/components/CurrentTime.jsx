import React from "react";

const CurrentTime = ({ people, cities, countries }) => (
  <div className="currentTime">
    {people.map((person) => {
      const city = cities.find((city) => city.city_id === person.city_id);
      const country = countries.find(
        (country) => country.country_id === city.country_id
      );
      const currentTime = new Date().toLocaleTimeString("en-US", {
        timeZone: country.timeZone,
      });
      return (
        <div key={person.person_id}>
          <p>{`${person.name} ${person.surname1}: ${currentTime}`}</p>
        </div>
      );
    })}
  </div>
);

export default CurrentTime;
