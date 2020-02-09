import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Chart } from 'chart.js';
declare var $: any;

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions = [];
  quizForm: FormGroup;
  isValidFormSubmitted:boolean;
  selectedanswer: any;
  arr=[];
  disablebtn: boolean;
  barchart = [];

  constructor(private Questions: QuizService,public fb: FormBuilder) { 
    this.isValidFormSubmitted = true;
    this.disablebtn = false
  }
  

  ngOnInit() {
       this.quizForm = this.fb.group({
        correctanswer: ['', [Validators.required]]
       });

    this.Questions.getquestion()
    .subscribe((res:any[])=>{
      if(res.length!=0){
        this.questions= res;
        }
     });
   }

   selanswer(e,index,id){
     this.selectedanswer = e.value; 
     this.arr.push(this.selectedanswer);
     if(this.arr.length === null){
      return 0;
      }
      else if(this.arr.length < this.questions.length ){
          this.isValidFormSubmitted = true;
          this.disablebtn = false;
      }
      else{
          this.isValidFormSubmitted = false;
          this.disablebtn = true;
      }
    }

   onSubmit(){
    //  debugger;
     var scorecorrect = 0;
     var scorefalse = 0;
     for(var i=0;i<this.questions.length;i++){
     var xs= this.arr[i];
      if(xs == true){
        scorecorrect=scorecorrect+1;
      }
      else if(xs == false){
        scorefalse= scorefalse+1; 
      }
      else{
        return 0;
      }
     }
     $('#chart').modal('show');
     this.barchart = new Chart('barChart', {
      type: 'bar',
    data: {
     labels: ["Correct", "InCorrect"],
     datasets: [{
         label: 'Score',
         data: [scorecorrect,scorefalse],
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)'
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)'
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Score Chart",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
    
     }	    


   resetForm(){
	  this.quizForm.reset();
	}
}


