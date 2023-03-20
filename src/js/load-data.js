export const loadData = () => {

  const nodes = require("../data/nodes.json");
  const links = require("../data/links.json");
  console.log("nodes", nodes);
  console.log("links", links);

  return [nodes, links];

};