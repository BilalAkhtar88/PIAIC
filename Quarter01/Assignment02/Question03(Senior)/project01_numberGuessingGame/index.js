#!/usr/bin/env node
import { welcome, startGame } from "./module1.js";
const numOfTurns = 3;
const min = 1;
const max = 10;
welcome(numOfTurns);
startGame(numOfTurns, min, max);
//await startGame(numOfTurns,min, max);
