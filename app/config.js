#!/usr/bin/env node
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

try {
  const TEMPLATE_FILE = path.resolve("src", "environments", "environment.ts");
  const NODE_ENV = process.env.NODE_ENV || "production";
  const ENV_FILE = path.resolve(
    "src",
    "environments",
    `environment.${NODE_ENV}.ts`
  );

  const template = fs.readFileSync(TEMPLATE_FILE, { encoding: "utf8" });

  const content = ejs.render(template, {
    env: process.env,
  });

  fs.writeFileSync(ENV_FILE, content);

  if (fs.existsSync(ENV_FILE)) {
    console.log(`${ENV_FILE} has been created!`);
  } else {
    throw new Error(`Can not create ${ENV_FILE}`);
  }
} catch (error) {
  console.error(error);
}
