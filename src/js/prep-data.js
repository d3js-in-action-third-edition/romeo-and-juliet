import { characters } from "./helper";

export const prepData = () => {

  // Load the data
  const data = require("../data/romeo_and_juliet.json");
  console.log("data", data);

  // Calculate the total number of lines for each character
  characters.forEach(c => {
    c["totalLines"] = 0;
  });
  const scenes = [];
  data.forEach(d => {
    const character = characters.find(c => c.id === d.Player);
    character.totalLines += 1;

    if (!scenes.includes(d.scene)) {
      scenes.push(d.scene);
    }
  });
  console.log("characters", characters); // Nodes list

  // Create edge list
  // console.log("scenes", scenes);
  const edges = [];
  scenes.forEach(scene => {
    const lines = data.filter(d => d.scene === scene);

    // console.log(scene, lines);
    const sceneCharacters = [];
    lines.forEach(l => {
      const character = l["Player"];
      if (!sceneCharacters.includes(character)) {
        sceneCharacters.push(character);
      }
    });
    // console.log(sceneCharacters);

    if (sceneCharacters.length > 1) {
      sceneCharacters.forEach(source => {
        sceneCharacters.forEach(target => {
          if (source !== target) {
            if (!edges.find(e => e.source === source && e.target === target)) {
              edges.push({
                source: source,
                target: target,
                weight: 1
              });
            } else {
              const edge = edges.find(e => e.source === source && e.target === target);
              edge.weight += 1;
            }
          }
        });
      });
    }
  });
  console.log("edges", edges);

  return data;

};