import { select, selectAll } from "d3-selection";
import { min, max, range } from "d3-array";
import { transition } from "d3-transition";
import { getEdgeColor } from "./scales";

export const drawMatrix = (nodes, edges) => {

  // Order characters (nodes) by number of lines
  nodes.sort((a, b) => b.totalLines - a.totalLines);
  
  // Create the data matrix
  const edgeHash = {};
  edges.forEach(edge => {
    const link1 = {
      source: edge.source,
      target: edge.target,
      weight: edge.weight
    };
    const id1 = `${edge.source}-${edge.target}`;
    edgeHash[id1] = link1;
    
    const link2 = {
      source: edge.target,
      target: edge.source,
      weight: edge.weight
    };
    const id2 = `${edge.target}-${edge.source}`;
    edgeHash[id2] = link2;
  });
  console.log("edgeHash", edgeHash);

  const matrix = [];
  const itemWidth = 16;
  const padding = 2;
  nodes.forEach((charA, i) => {
    nodes.forEach((charB, j) => {
      if (charA !== charB) {
        const id = `${charA.id}-${charB.id}`;
        const item = {
          id: id,
          source: charA.id,
          target: charB.id,
          x: i * (itemWidth + padding),
          y: j * (itemWidth + padding)
        };
        if (edgeHash[id]) {
          item["weight"] = edgeHash[id].weight;
          matrix.push(item)
        }
      }
    });
  });
  console.log("matrix", matrix);


  // Dimensions
  const innerWidth = nodes.length * (itemWidth + padding);
  const innerHeight = nodes.length * (itemWidth + padding);
  const margin = { top: 130, right: 0, bottom: 0, left: 130 };
  const width = innerWidth + margin.right + margin.left;
  const height = innerHeight + margin.top + margin.bottom;


  // Append SVG container
  const svg = select("#matrix")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
    .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Append matrix dots
  const minWeight = min(edges, d => d.weight);
  const maxWeight = max(edges, d => d.weight);
  svg
    .selectAll(".matrix-dot")
    .data(matrix)
    .join("rect")
      .attr("class", "matrix-dot")
      .attr("x", d => d.x)
      .attr("y", d => d.y)
      .attr("width", itemWidth)
      .attr("height", itemWidth)
      .attr("fill", d => d.weight ? getEdgeColor(minWeight, maxWeight, d.weight) : "white");

  // Append labels
  svg
    .selectAll(".label-left")
    .data(nodes)
    .join("text")
      .attr("class", "label-left")
      .attr("x", -8)
      .attr("y", (d, i) => i * (itemWidth + padding) + itemWidth / 2)
      .attr("text-anchor", "end")
      .attr("dominant-baseline", "middle")
      .text(d => d.name)
      .style("font-size", "13px");
  svg // Shouldn't that be done with a scale?
    .selectAll(".label-top")
    .data(nodes)
    .join("text")
      .attr("class", "label-top")
      .attr("dominant-baseline", "middle")
      .attr("transform", (d, i) => `translate(${i * (itemWidth + padding) + itemWidth / 2}, -8) rotate(-90)`)
      .text(d => d.name)
      .style("font-size", "13px");


  // Add legend
  const weights = range(minWeight, maxWeight + 1);
  const legend = select(".matrix-legend")
    .append("ul")
    .selectAll(".legend-color")
    .data(weights)
    .join("li")
      .attr("class", "legend-color");
  legend
    .append("div")
      .attr("class", "legend-color-circle")
      .style("background-color", d => getEdgeColor(minWeight, maxWeight, d));
  legend
    .append("div")
      .attr("class", "legend-color-label")
      .text(d => d);


  // Interaction - Mouse over dot
  selectAll(".matrix-dot")
    .on("mouseenter", (e, d) => {
      const t = transition()
        .duration(150);
      
      selectAll(".matrix-dot")
        .transition(t)
        .attr("fill-opacity", dot => dot.id === d.id ? 1 : 0.1);

      selectAll(".label-top")
        .transition(t)
        .style("opacity", label => label.id === d.source ? 1 : 0.1);

      selectAll(".label-left")
        .transition(t)
        .style("opacity", label => label.id === d.target ? 1 : 0.1);

      const charA = nodes.find(char => char.id === d.source).name;
      const charB = nodes.find(char => char.id === d.target).name;
      select(".matrix-tooltip-charA").text(charA);
      select(".matrix-tooltip-charB").text(charB);
      select(".matrix-tooltip-scenes").text(d.weight);
      select(".matrix-tooltip").classed("hidden", false);
    })
    .on("mouseleave", (e, d) => {
      selectAll(".matrix-dot")
        .attr("fill-opacity", 1);

      selectAll(".label-top, .label-left")
        .style("opacity", 1);

      select(".matrix-tooltip").classed("hidden", true);
    });

};