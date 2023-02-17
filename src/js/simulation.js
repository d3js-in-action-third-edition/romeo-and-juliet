import { forceSimulation, forceX, forceY, forceCollide } from "d3-force";
import { selectAll } from "d3-selection";
import { characters } from "./helper";

export const runSimulation = () => {

  const tick = () => {
    selectAll(".node")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  };

  const simulation = forceSimulation(characters)
    .on("tick", tick)
    .force("x", forceX().strength(0.001) )
    .force("y", forceY().strength(0.001) )
    .force("collide", forceCollide().radius(d => d.radius + 3 ) )
    .stop();

  simulation.restart();

};