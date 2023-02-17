import { scaleRadial } from "d3-scale";

export const getRadius = (maxLines, lines) => {
  const radialScale = scaleRadial()
    .domain([0, maxLines])
    .range([0, 50]);

  return radialScale(lines);
};