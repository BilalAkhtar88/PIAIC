#!/usr/bin/env node
import showBanner from "node-banner";
import { q1 } from "./questions.js";
async function banner() {
    await new Promise((res) => {
        showBanner('   QUIZ', 'Pakistan Studies - 5 Questions');
        setTimeout(res, 1000);
    });
}
await banner();
let ans1 = q1();
console.log("The answer is ", ans1);
/*

import answer1 from "./questions.js";

async function banner () {
  await new Promise ((res) => {
      showBanner ('   QUIZ',
      'Pakistan Studies - 5 Questions')
      setTimeout(res, 2000);
  });
}

let quiz = async () => {
    console.log("The answer is " + answer1);
}

await banner();
quiz();

*/ 
