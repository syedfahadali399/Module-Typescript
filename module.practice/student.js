import student from "./data.js";
export let letallStudent = () => {
    return student;
};
export let onlyonSitestudent = () => {
    let result = student.filter((student) => student.isOnsite);
    return result;
};
export let founduser = (rollNo) => {
    let founduser = student.find((student) => student.id === rollNo);
    if (founduser) {
        return true;
    }
    else {
        return false;
    }
};
export default letallStudent;
