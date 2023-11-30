import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apart-form',
  templateUrl: './apart-form.component.html',
  styleUrls: ['./apart-form.component.css']
})
export class ApartFormComponent implements OnInit {

  ngOnInit(): void {
    this.fg.get('terrace.selected')?.valueChanges.subscribe(value => {
      if (value === true) {
        this.fg.get('surfaceterrace')?.enable();
      } else {
        this.fg.get('surfaceterrace')?.disable();
      }
    });
    
  
  }
  
fg = new FormGroup({
  numap:    new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
  FloorNub: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
  surface: new FormControl('', Validators.required),
  terrace: new FormGroup({
    selected: new FormControl(false) 
  }),
  surfaceterrace: new FormControl({ value: '', disabled: true }, Validators.required),
  cat: new FormGroup({
    selected: new FormControl('') // Default value for cat radio buttons
  }),
  desc: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  residence: new FormControl('', Validators.required),
});

  
  

  
  showForm(){
    console.log(this.fg.value)
  }
  
  
    onInput(event: any) {
      const inputValue = event.target.value;
      // Replace non-numeric characters with an empty string
      const numericValue = inputValue.replace(/\D/g, '');
      // Update the form control value
      this.fg.get('FloorNub')?.setValue(numericValue, { emitEvent: false });
      this.fg.get('numap')?.setValue(numericValue, { emitEvent: false });

    }

  
}
