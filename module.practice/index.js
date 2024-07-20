import { founduser, letallStudent, onlyonSitestudent as newonlyonSitestudent } from "./student.js";
import * as student from "./data.js";
const result = letallStudent();
console.log(result);
let onlyonSitestudents = newonlyonSitestudent();
console.log(onlyonSitestudents);
let foundusers = founduser(1008);
console.log(foundusers);
console.log(student);
