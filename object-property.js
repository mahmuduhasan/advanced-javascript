const students = [
    {id: 21, name:'Ikramul'},
    {id: 24, name:'Mahmud'},
    {id: 23, name:'Apurbo'},
    {id: 21, name:'Shawon'}
];
// const StudentName =[];
// for(let i=0; i<students.length; i++){
//     const nameStudent = students[i];
//     StudentName.push(nameStudent.name);
// }
// console.log(StudentName);

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter(s => s.id>22);
const firstBigger = students.find(s => s.id>22);
console.log(names,"\n",ids);
console.log(bigger);
console.log(firstBigger);