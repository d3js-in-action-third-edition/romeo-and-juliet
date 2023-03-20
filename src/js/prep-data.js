import { characters } from "./helper";

export const prepData = () => {

  // Load the data
  const data = require("../data/romeo_and_juliet.json");
  const data_og = require("../data/romeo_and_juliet_og.json");

  // data_og.forEach(l => {
  //   if (l.Player === "BENVOLIO") {
  //     data.find(line => line.PlayerLine === l.PlayerLine).Player = "benvolio";
  //   }
  // })
  console.log("data", data);

  // Calculate the total number of lines for each character
  characters.forEach(c => {
    c["totalLines"] = 0;
  });
  const scenes = [];
  let totalLines = 0;
  const charEntered = [];
  data.forEach((d, i) => {
    const character = characters.find(c => c.id === d.Player);
    character.totalLines += 1;

    if (!charEntered.includes(character.id)) {
      character["firstLineNumber"] = i;
      character["firstLine"] = d.PlayerLine;
      charEntered.push(character.id);
    }

    // if (!scenes.find(s => s.scene === d.scene)) {
    //   scenes.push({
    //     scene: d.scene,
    //     firstLine: i
    //   });
    // }
    if (!scenes.includes(d.scene)) {
      scenes.push(d.scene);
    }

    totalLines += 1;
  });
  console.log("characters", characters); // Nodes list
  console.log("totalLines", totalLines);

  // Create edge list
  console.log("scenes", scenes);
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
            if (!edges.find(e => (e.source === source && e.target === target) || (e.source === target && e.target === source))) {
              edges.push({
                source: source,
                target: target,
                weight: 1
              });
            } else {
              const edge = edges.find(e => (e.source === source && e.target === target) || (e.source === target && e.target === source));
              edge.weight += 1;
            }
          }
        });
      });
    }
  });
  edges.forEach(edge => {
    edge.weight = edge.weight / 2;
  });
  console.log("edges original", edges);

  // return data;

};