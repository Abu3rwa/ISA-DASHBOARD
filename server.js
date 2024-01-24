const Excel = require("exceljs");
const workbook = new Excel.Workbook();

// workbook.xlsx.readFile("./sampleData.xlsx").then((d) => {
//   console.log(d.csv);
// });
const worksheet = workbook.xlsx.read("sampleData.xlsx");

console.log(worksheet);
