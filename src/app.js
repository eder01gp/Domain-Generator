/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domainsName = "";

const domainGenerator = (arrayP, arrayA, arrayN) => {
  for (pronouns of arrayP) {
    for (adjetives of arrayA) {
      for (nouns of arrayN) {
        domainsName += pronouns + adjetives + nouns + "<br>";
      }
    }
  }
  document.getElementById(domainNames).innerHTML = domainsName;
};

window.onload = domainGenerator;

domainGenerator(pronoun, adj, noun);
