import { createLegend } from "./legend";
import { loadData } from "./load-data";
import { prepData } from "./prep-data";
import { drawMatrix } from "./matrix";
import { drawArcDiagram } from "./arc";
import { drawBeeswarm } from "./beeswarm";
import { drawNetwork } from "./network";

createLegend();

// Load data
prepData();
const [nodes, links] = loadData();

// Draw the adjacency matrix
drawMatrix(nodes, links);

// Draw the arc diagram
drawArcDiagram(nodes, links);

// Draw the beeswarm
drawBeeswarm(nodes);

// Draw the network
drawNetwork(nodes, links);