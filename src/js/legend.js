import { select } from "d3-selection";
import { houses, characters } from "./helper";

export const createLegend = () => {

  const housesLegends = select("#legend .row")
    .selectAll(".col")
    .data(houses)
    .join("div")
      .attr("class", "col col-3");

  housesLegends
    .append("h3")
      .text(d => d.house);

  const charactersList = housesLegends
    .append("ul")
    .selectAll(".character")
    .data(d => characters.filter(c => c.house === d.house))
    .join("li")
      .attr("class", "character");

  charactersList
    .append("span")
      .attr("class", "color-container")
      .style("background-color", d => {
        switch (d.id) {
          case "ROMEO":
          case "JULIET":
            return "#FAFBFF";
          default:
            return houses.find(h => h.house === d.house).color;
        };
      })
      .style("border-color", d => houses.find(h => h.house === d.house).color)
      .style("opacity", d => d.importance === "primary" ? 1 : 0.4);

  charactersList
    .append("span")
      .attr("class", "character-name")
      .text(d => d.name);

};