const yargs = require('yargs')
const students = require('./students')
yargs.command({
    command:'add',
    describe:'Add student',
    builder:{
        id:{
            describe:'the student id',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'student name',
            demandOption:true,
            type:'string'
        },
        degres:{
            describe:'the degress of the student',
            demandOption:true,
            type:'array'
        },
        total:{
            describe:'This is body in add command',
            // demandOption:true,
            type:'number'
        },
        comment:{
            describe:'Comment on the student',
            // demandOption:true,
            type:'string'
        }   
    },
    handler:(argv)=>{
        students.addStudent(argv.id,argv.name,argv.degres,argv.total,argv.comment)
        
        argv.degres.forEach(deg => {
            argv.total+=deg.degres
        });
        console.log(argv.total);
        }
})

// delete
yargs.command({
    command:'del',
    describe:'Delete student',
    builder:{
        id:{
            describe:'This is student in delete command',
            demandOption:true,
            type:'number'
        }
    },
    handler:(argv)=>{
        students.deleteStudent(argv.id)
        console.log('Student has deleted')
    }
})
// // read 
yargs.command({
    command:'read',
    describe:'Read student',
    builder:{
        id:{
            describe:'This is student in read command',
            demandOption:true,
            type:'number'
        }
    },
    handler:(argv)=>{
        students.readStudent(argv.id)
        console.log('Student has read')
    }
})
// // list
yargs.command({
    command:'list',
    describe:'Students list',
    handler:()=>{
        students.listStudent(argv.name,argv.total)
        console.log('Student has listed')
    }
})

yargs.parse()