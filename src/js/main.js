import { createLegend } from "./legend";
import { loadData } from "./load-data";
// import { prepData } from "./prep-data";
import { drawMatrix } from "./matrix";

// import { appendNodes } from "./nodes";

createLegend();

// Load data
// prepData();
const [nodes, edges] = loadData();

// Draw the adjacency matrix
drawMatrix(nodes, edges);


// Append the nodes
// appendNodes(data);