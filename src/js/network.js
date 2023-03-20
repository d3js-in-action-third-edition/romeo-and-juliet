import { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide } from "d3-force";
import { select, selectAll } from "d3-selection";
import { min, max } from "d3-array";
import { getRadius, charColorScale, getEdgeColor } from "./scales";

export const drawNetwork = (nodes, edges) => {

  const networkNodes = JSON.parse(JSON.stringify(nodes));
  const networkEdges = JSON.parse(JSON.stringify(edges));
  console.log("networkNodes", networkNodes);

  // const nodeHash = networkNodes.reduce((hash, node) => {
  //   hash[node.id] = node;
  //   return hash;
  // });
  // console.log("nodeHash", nodeHash);

  // networkEdges.forEach(edge => {
  //   edge.source = nodeHash[edge.source];
  //   edge.target = nodeHash[edge.target];
  // });
  console.log("networkEdges", networkEdges);

  // Dimensions
  const width = 1140;
  const height = 800;

  // Append SVG container
  const svg = select("#network")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
    .append("g")
      .attr("transform", `translate(${width/2}, ${height/2})`);

  // Append links
  const minWeight = min(networkEdges, d => d.weight);
  const maxWeight = max(networkEdges, d => d.weight);
  svg
    .selectAll(".network-link")
    .data(networkEdges)
    .join("line")
      .attr("class", "network-link")
      .attr("stroke", d => getEdgeColor(minWeight, maxWeight, d.weight))
      .attr("stroke-width", d => d.weight);

  // Append nodes
  const maxLines = max(networkNodes, d => d.totalLines);
  svg
    .selectAll(".network-node")
    .data(networkNodes)
    .join("circle")
      .attr("class", d => `network-node network-node-${d.id}`)
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", d => {
        d["radius"] = getRadius(maxLines, d.totalLines);
        return d.radius;
      })
      .attr("fill", d => charColorScale(d.house))
      .attr("stroke", "#FAFBFF")
      .attr("stroke-width", 1);

  const updateNetwork = () => {
    selectAll(".network-link")
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    selectAll(".network-node")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  };

  const simulation = forceSimulation()
    .force("charge", forceManyBody().strength(-1000))
    .force("collide", forceCollide().radius(d => d.radius + 2) )
    .force("center", forceCenter().x(0).y(0))
    .force("link", forceLink().id(d => d.id).strength(d => d.weight/10))
    .force("bounding", () => { // custom force to keep nodes in frame
      networkNodes.forEach(node => {
        if (node.x < -width/2 + node.radius) {
          node.vx = 1;
        }
        if (node.y < -height/2 + node.radius) {
          node.vy = 1;
        }
        if (node.x > width/2 - node.radius) {
          node.vx = -1;
        }
        if (node.y > height/2 - node.radius) {
          node.vy = -1;
        }
      });
    })
    .nodes(networkNodes)
    .on("tick", updateNetwork);

  simulation
    .force("link")
    .links(networkEdges);



};