import { createLegend } from "./legend";
import { loadData } from "./load-data";
import { runSimulation } from "./simulation";

createLegend();

// Load data
const data = loadData();

// Run the simulation
runSimulation(data);