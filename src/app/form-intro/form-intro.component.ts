import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-form-intro',
  templateUrl: './form-intro.component.html',
  styleUrls: ['./form-intro.component.css']
})
export class FormIntroComponent implements OnInit {
  //name: string;
  favoriteColorControl = new FormControl('');
  favoriteColor: string;
  coffeeForm: FormGroup;
  hotcoldsel=["Hot", "Cold"];
  addssel=["Milk","Sugar"];
  nutsel=["ピーナッツ","アーモンド","くるみ"];

  constructor( private fb: FormBuilder ) { 
    this.coffeeForm = this.fb.group({
      name: ["ブレンド", [Validators.required]],
      taste:["バランスのよい口当たり",[Validators.required]],
      hotcold: this.hotcoldsel[0],
      adds: this.fb.array([]),
      nut: this.nutsel[0]
    });
  }

  get name() { return <FormControl>this.coffeeForm.get("name"); }
  get taste() { return <FormControl>this.coffeeForm.get("taste"); }

  ngOnInit() {
  }

  onCheckChanged( item:string, isChecked:boolean ) {
    let formArray = <FormArray>this.coffeeForm.controls.adds;
    if(isChecked){
      formArray.push(new FormControl(item));
    }else{
      let index = formArray.controls.findIndex(elm => elm.value == item);
      formArray.removeAt(index);
    }
  }

}
