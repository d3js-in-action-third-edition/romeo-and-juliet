import { characters } from "./helper";

export const loadData = () => {

  // Load the data
  const data = require("../data/romeo_and_juliet.json");
  console.log("data", data);

  // Calculate the total number of lines for each character
  characters.forEach(c => {
    c["totalLines"] = 0;
  });
  data.forEach(d => {
    const character = characters.find(c => c.id === d.Player);
    character.totalLines += 1;
  });
  console.log("characters", characters);

  return data;

};