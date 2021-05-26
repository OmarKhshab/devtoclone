import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})
export class WritePostComponent implements OnInit {

  public form: FormGroup;
  public imagePreview: any;
  public imageBoolean = new BehaviorSubject(false);

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      image:new FormControl(null,{validators: [Validators.required],asyncValidators:[mimeType]})
    })
  }
  public onSubmit(form: NgForm) {
    
  }
  public onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      this.imageBoolean.next(true);
    };
    reader.readAsDataURL(file);
  }
  public removePic(){
    this.imageBoolean.next(false);
  }
}
