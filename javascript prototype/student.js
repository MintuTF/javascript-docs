

// let student={
//     firstName:'',
//     lastName:'',
//    grades:[],
//     inputNewGrade:function(grade){
//         this.grades.push(grade)
//     },
//     avergeGrade:function(){
//       return this.grades.reduce((avg,r,index,array)=>avg+r/array.length ,0);
//     }
// }
// let student1=Object.create(student);
// student1.firstName='john';
// student1.lastName='smith';
// student1.inputNewGrade(90);
// student1.inputNewGrade(98);
// student1.inputNewGrade(88);

// let student2=Object.create(student);
// student2.firstName='bini';
// student2.lastName='bom';
// student2.inputNewGrade(99);
// student2.inputNewGrade(98);
// student2.inputNewGrade(90);


// let student3=Object.create(student);
// student3.firstName='sam';
// student3.lastName='kal';
// student3.inputNewGrade(98);
// student3.inputNewGrade(90);
// student3.inputNewGrade(99);
// student3.avergeGrade();

// let studentArray=[student1,student2,student3];

// let avgtotal=studentArray.map(val=>val.avergeGrade()).
//                    reduce((avg,val,index,array)=>avg+val/array.length,0);


// console.log(avgtotal); 



function Student(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.grades=[];
    this.inputNewGrade=function(grade){
        this.grades.push(grade)
    };
    this.avergeGrade=function(){
      return this.grades.reduce((avg,r,index,array)=>avg+r/array.length ,0);
    }

}





    


let student1=new Student('john','smith');


student1.inputNewGrade(92);
student1.inputNewGrade(91);
student1.inputNewGrade(93);
    

let student2=new Student('mite','smith');
student2.inputNewGrade(90);
student2.inputNewGrade(80);
student2.inputNewGrade(95);


let student3=new Student('sew','met');
student3.inputNewGrade(95);
student3.inputNewGrade(90);
student3.inputNewGrade(93);


let studentArray=[student1,student2,student3];
let avgtotal=studentArray.map(val=>val.avergeGrade()).
                   reduce((avg,val,index,array)=>avg+val/array.length,0);
                   console.log(avgtotal); 


// sort method

Array.prototype.sort=function(){
    let min=studentArray[0].avergeGrade;
    
     
    for(let i=0; i<studentArray.length-1; i+=1){
        let m = i;
        for(let j=i+1; j<studentArray.length; j+=1){
            if(studentArray[m].avergeGrade>studentArray[j].avergeGrade)
                m = j;
        }
        let temp = studentArray[m];
        studentArray[m] = studentArray[i];
        studentArray[i] = temp;
    }
        
    }

    for (let ele of studentArray){
        console.log(ele);
    }
    
// 