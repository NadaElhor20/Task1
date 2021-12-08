const fs = require('fs');
const addStudent = (id, name, degres, total, comment) =>{
    const students = loadStudents();
    const duplicateId = students.filter((student) => {
        return student.id===id;
    });
  
    if (duplicateId.length===0){
        students.push(
            {
                id,
                name,
                degres,
                total,
                comment
               }
        );
        saveStudents(students);
        console.log("save succefully");
    }
    else{
        console.log("error");
    }
};
const loadStudents = () => {
   
    try{
        const dataBuffer = fs.readFileSync("students.json").toString();
    return JSON.parse(dataBuffer);  
    }
    catch(e){
        return [];
    }
};

const saveStudents = (students) =>{

const saveData = JSON.stringify(students);   

fs.writeFileSync("students.json",saveData)

};
///////////////////////////////////////////////////
// delet

const deleteStudent=(id)=>{
    const students = loadStudents();
    const studentsToKeep=students.filter((student)=>{
        return student.id!==id;
    });
        console.log(studentsToKeep);
        saveStudents(studentsToKeep);
          }

//   ///////////////////////////////////////////////////
// // read

const readStudent=(id)=>{
    const students = loadStudents();
    const student=students.find((student)=>{
        return student.id===id;
    });
    if(student){
        console.log(student);
    }   
    else{
        console.log("Student is not exist");
    }
        
      
  }
//   ///////////////////////////////////////////////////
// // list

const listStudent=()=>{
    const students = loadStudents();
    students.forEach((student) =>{
        return console.log(student.name,student.total)} );
        
      
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////





module.exports = {
    addStudent,
    deleteStudent,
    readStudent,
    listStudent
};