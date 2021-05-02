class Student {
    constructor(studentId){
        this.studentId=studentId;
        this.answers=[];
    }

    addAnswer(question) {

        this.answers.push(question);

       
    }

    getid(){
      return this.id;
    }


}

class Question{

 constructor(id, answer){
     this.id=id;
     this.answer=answer;
 }

 checkAnswer(answer) {
  if(this.answer==answer){
    return 1;
  }else{
    return 0;
  }
 }

getqid(){
  return this.id;
}


}

class Quiz{

    constructor(questions,student){
        this.questions=questions;
        this.student=student;
    }

    scoreStudentBySid(sid){

let studentfiler=this.student.find(a=>a.studentId==sid).answers;

let count=0;
for (let id in this.questions){

let studentanswer=studentfiler[id]; 

let correctanswer=this.questions.find(c=>c.id==studentanswer.id);

  let answercheck=studentanswer.answer;
 
  count+=correctanswer.checkAnswer(answercheck);

}

return count;

    }
    


 getAverageScore(){
return this.student.map(student=>this.scoreStudentBySid(student.studentId)).
        reduce((acc,curr,index,array)=>acc+curr/array.length,0);
 }
    
}


const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
