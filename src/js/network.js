import { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide } from "d3-force";
import { select, selectAll } from "d3-selection";
import { min, max } from "d3-array";
import { transition } from "d3-transition";
import { getRadius, charColorScale, getEdgeColor } from "./scales";

export const drawNetwork = (nodes, edges) => {

  const networkNodes = JSON.parse(JSON.stringify(nodes));
  const networkEdges = JSON.parse(JSON.stringify(edges));
  console.log("networkNodes", networkNodes);
  console.log("networkEdges", networkEdges);

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
  const width = 850;
  const height = 600;

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
      .attr("fill", d => charColorScale(d.house));

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
          node.vx = 5;
        }
        if (node.y < -height/2 + node.radius) {
          node.vy = 5;
        }
        if (node.x > width/2 - node.radius) {
          node.vx = -5;
        }
        if (node.y > height/2 - node.radius) {
          node.vy = -5;
        }
      });
    })
    .nodes(networkNodes)
    .on("tick", updateNetwork);

  simulation
    .force("link")
    .links(networkEdges);


  // Interactions
  selectAll(".network-node")
    .on("mouseenter", (e, d) => {
      console.log(d)
      const t = transition()
        .duration(150);

      const isLinked = char => {
        return networkEdges.find(edge => 
          (edge.source.id === d.id && edge.target.id === char.id) || 
          (edge.source.id === char.id && edge.target.id === d.id))
            ? true
            : false;
      };

      selectAll(".network-link")
        .transition(t)
        .attr("stroke-opacity", link => link.source.id === d.id || link.target.id === d.id ? 1 : 0);
    
      selectAll(".network-node")
        .transition(t)
        .attr("fill-opacity", char => char.id === d.id || isLinked(char) ? 1 : 0 );

      select(".network-character")
        .text(d.name);
      select(".network-description")
        .text(d.description);
      select(".network-sidebar")
        .classed("hidden", false);
    })
    .on("mouseleave", () => {

      selectAll(".network-link")
        .attr("stroke-opacity", 1);

      selectAll(".network-node")
        .attr("fill-opacity", 1);

      select(".network-sidebar")
        .classed("hidden", true);
    });

};