import React from "react";
import "./App.css";
import CurrentTime from "./components/CurrentTime";
import PeopleTable from "./components/PeopleTable";
import jsonData from "../JSON.json";

function App() {
  return (
    <>
      <PeopleTable
        people={jsonData.people}
        cities={jsonData.cities}
        countries={jsonData.countries}
        studies={jsonData.studies}
        genders={jsonData.gender}
        bloodTypes={jsonData.bloodType}
      />
      <CurrentTime
        people={jsonData.people}
        cities={jsonData.cities}
        countries={jsonData.countries}
      />
    </>
  );
}

export default App;
