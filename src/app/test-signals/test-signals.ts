import { Component, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'app-test-signals',
  imports: [],
  templateUrl: './test-signals.html',
  styleUrl: './test-signals.css',
})
export class TestSignals implements OnInit{
  
  title = signal('Testing-signal');
  age = signal(30);
  gender = signal('female');
  // isMajor = computed(()=> this.age() >= 18 ? true : false);
  isMajor = computed(()=> {
    if(this.gender() === 'male') {
      return this.age() >= 18 ? true : false;
    } else {
      return false;
    }
  });
  ngOnInit(): void {
    setTimeout(() => {
      this.age.set(12);
    }, 5000);
    setTimeout(() => {
      this.title.update(()=> this.title() + ' Value changed after 9 seconds');
    },9000)
    setTimeout(() => {
      this.gender.set("male");
      this.age.set(21);
    },12000)
    // this.title.set('updated signal');
    // this.title.update(()=>this.title()+" new value");
    
  }

}
