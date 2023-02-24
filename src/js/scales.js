import { scaleRadial, scaleOrdinal, scaleLinear } from "d3-scale";
import { houses } from "./helper";

export const getRadius = (maxLines, lines) => {
  const radialScale = scaleRadial()
    .domain([0, maxLines])
    .range([0, 60]);

  return radialScale(lines);
};

export const charColorScale = scaleOrdinal()
  .domain(houses.map(h => h.house))
  .range(houses.map(h => h.color));

export const getEdgeColor = (minWeight, maxWeight, weight) => {
  const edgeColorScale = scaleLinear()
    .domain([minWeight, maxWeight])
    .range(["#C3D2DB", "#364652"]);

  return edgeColorScale(weight);
}; 