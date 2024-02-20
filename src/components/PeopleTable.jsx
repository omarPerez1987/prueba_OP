import React from "react";

const PeopleTable = ({
  people,
  cities,
  countries,
  studies,
  genders,
  bloodTypes,
}) => (
  <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Altura</th>
          <th>Peso</th>
          <th>Ciudad</th>
          <th>País</th>
          <th>Estudios</th>
          <th>Género</th>
          <th>Grupo Sanguíneo</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr key={person.person_id}>
            <td>{person.name}</td>
            <td>{person.surname1}</td>
            <td>{person.age}</td>
            <td>{person.height}</td>
            <td>{person.weight}</td>
            <td>
              {cities.find((city) => city.city_id === person.city_id)?.cityName}
            </td>
            <td>
              {
                countries.find(
                  (country) =>
                    country.country_id ===
                    cities.find((city) => city.city_id === person.city_id)
                      ?.country_id
                )?.countryName
              }
            </td>
            <td>
              {person.study_id
                ? studies.find((study) => study.study_id === person.study_id)
                    ?.level
                : "N/A"}
            </td>
            <td>
              {
                genders.find((gender) => gender.gender_id === person.gender_id)
                  ?.type
              }
            </td>
            <td>
              {
                bloodTypes.find(
                  (bloodType) => bloodType.bloodType_id === person.bloodtype_id
                )?.bloodName
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PeopleTable;
