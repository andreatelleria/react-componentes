import React from 'react';

const hobbiesArray = ['leer', 'ver películas', 'dormir'];
const listItems = hobbiesArray.map((hobby, index) =>
  <li key={index}>{hobby}</li>
);

const HobbiesList = () => (
  <div>Mis hobbies son:
      <ul>{listItems}</ul>
  </div>
)

export default HobbiesList;