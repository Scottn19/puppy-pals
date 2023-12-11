import React, { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";
import './index.css';


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log("we are rendering");
  console.log(featPupId);

  // Find the featured puppy based on featPupId
  const featuredPup = puppies.find((puppy) => puppy.id === featPupId);

  return (
    <div>
      {featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => (
        <p
          onClick={() => setFeatPupId(puppy.id)}
          key={puppy.id}
          style={{ cursor: "pointer" }}
        >
          {puppy.name}
        </p>
      ))}
    </div>
  );
}

export default App;
