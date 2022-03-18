import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [listOfCities, setListOfCities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/listAll").then((response) => {
      setListOfCities(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div>
      {listOfCities.map((value, key) => {
        return (
          <div className="city">
            <div className="name">{value.name} </div>
            <div className="name">{value.longitude} </div>
            <div className="name">{value.latitude} </div>
            <div className="name">{value.weather} </div>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
