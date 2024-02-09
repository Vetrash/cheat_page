const fs = require("fs");
const parse5 = require("parse5");

const pathDataFile = "./src/data/listPages.js";
const pathDataFileTemplate = "./src/data/templates/listPages.js";
const pathFolderQuestion = "src/pages/questions";

const sections = fs.readdirSync(pathFolderQuestion);

const fullList = {};
sections.forEach((section) => {
  const questionsFiles = fs.readdirSync(`${pathFolderQuestion}/${section}`);

  questionsFiles.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

  const list = [];

  questionsFiles.forEach((question) => {
   // console.log(question);
    const data = fs.readFileSync(
      `${pathFolderQuestion}/${section}/${question}`,
      "utf8"
    );

    const regex = /<h2>([\s\S]*?)<\/h2>/;
    const match = data.match(regex);
    //console.log(match)

    const title = match[1]? match[1]: 'Error';
    const id = question.replace(/\D/g, "");
    list.push({ title, id });
  });

  fullList[section] = list;
});

const dataTemplate = fs.readFileSync(pathDataFileTemplate, "utf8");

const newFile =
  dataTemplate + `const List = ${JSON.stringify(fullList, null, "\t")}`;

fs.writeFileSync(pathDataFile, newFile, "utf-8");

console.log("Файл перезаписан успешно");
