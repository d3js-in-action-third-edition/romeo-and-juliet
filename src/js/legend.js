import { select } from "d3-selection";
import { houses, houses } from "./helper";

export const createLegend = () => {

  const housesLegend = select(".legend-houses")
    .append("ul")
    .selectAll(".legend-house")
    .data(houses)
    .join("li")
      .attr("class", "legend-house");

  housesLegend
    .append("span")
      .attr("class", "legend-house-color")
      .style("background-color", d => d.color);

  housesLegend
    .append("span")
      .attr("class", "legend-house-label")
      .text(d => d.house);

};