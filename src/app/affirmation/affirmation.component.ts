import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-affirmation',
  templateUrl: './affirmation.component.html',
  styleUrls: ['./affirmation.component.css']
})
export class AffirmationComponent {
  @Output() affirmationOutput!: string;
  @Output() modeOutput!: string;

  randPrevious:number = 0;
  affirmation:string[] = [
    "The grind dont stop. I see you are putting the work. You got this",
    "Hello future millionaire. Get up and get to it. You are going achieve everything you dreamed of.",
    "If most people worked half as hard as you do, they would be successfull af.",
    "Don't listen to the negativity. You know what you are capable of. Grind Grind Grind",
    "Winnie is lucky to have such a hard working mother. You will be a great example for her."
  ];

  constructor() 
  { 
    let rand = Math.floor(Math.random() * (1 + 4  - 0) + 0);
    this.affirmationOutput = this.affirmation[rand];  
  }

  generate() {
    let rand = Math.floor(Math.random() * (1 + 4  - 0) + 0);
    this.affirmationOutput = this.affirmation[rand];  
  }

  activateMode(){
    this.modeOutput = "Bad B***h Mode Activated!!!!!!!"
  }
}
