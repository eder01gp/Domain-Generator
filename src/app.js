/* eslint-disable */

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ending = [".com", ".io", ".net", ".us"];
let domainsName = "";

const domainGenerator = (arrayP, arrayA, arrayN, arrayE) => {
  for (let pronouns of arrayP) {
    for (let adjetives of arrayA) {
      for (let nouns of arrayN) {
        for (let ends of arrayE)
          domainsName += pronouns + adjetives + nouns + ends + "<br>";
      }
    }
  }
  document.getElementById("htmldomainnames").innerHTML = domainsName;
  console.log(domainsName);
};

window.onload = domainGenerator(pronoun, adj, noun, ending);

document.getElementById("btnclear").addEventListener("click", function() {
  document.getElementById("htmldomainnames").innerHTML = " ";
});
