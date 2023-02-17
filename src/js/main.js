import { createLegend } from "./legend";
import { loadData } from "./load-data";
import { appendNodes } from "./nodes";

createLegend();

// Load data
const data = loadData();

// Append the nodes
appendNodes(data);