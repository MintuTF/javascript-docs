

let student={
    firstName:'john',
    lastName:'smith',
    grades:[90,80,70],
    inputNewGrade:function(grade){
        this.grades.push(grade)
    },
    avergeGrade:function(){
      return this.grades.reduce((avg,r,index,array)=>avg+r/array.length ,0);
    }
}

// student.firstName='minte'

// console.log(student.firstName);

 let studentArray=[Object.create(student),Object.create(student)];