#!/usr/bin/env node

import uniqueRandomArray from "unique-random-array";
import data from "./data.js";

const [, , times = 3, ...fandoms] = process.argv;

// default to using all the data
let selectedData = fandoms.length === 0 ? Object.values(data).flat() : [];

// if you have fandoms specified in args, use them instead
for (const i in fandoms) {
  selectedData = selectedData.concat(data[fandoms[i]]);
}

const generateAttack = () => {
  let attack = "";
  const uniqueSelectedData = Array.from(new Set([...selectedData]));
  const generator = uniqueRandomArray(uniqueSelectedData);

  for (let i = 0; i < times; i++) {
    attack += generator() + " ";
  }

  return attack.trim();
};

console.log(generateAttack());
