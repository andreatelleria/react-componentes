import React from 'react';

const listArray = ['leer', 'ver películas', 'dormir'];
const listItems = listArray.map((hobby) =>
  <li>{hobby}</li>
);

const HobbiesList = () => (
  <div>Mis hobbies son:
      <ul>{listItems}</ul>
  </div>
)

export default HobbiesList;