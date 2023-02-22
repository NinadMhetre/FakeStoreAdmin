import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ProductSetupService } from 'src/app/shared/services/product-setup.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-master-details',
  templateUrl: './product-master-details.component.html',
  styleUrls: ['./product-master-details.component.scss']
})
export class ProductMasterDetailsComponent implements OnInit {
  @Input() productData:{};
  @Input() categoryData:[];
  @Input() submitBtn:boolean;
  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();

  submitDisabled=false;

  resetBtn = true;
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private productSetupService:ProductSetupService) { }

  ngOnInit(){
    this.initializeForm();
    if(this.productData.hasOwnProperty('id')){
      this.resetBtn=false;
      this.patchForm(this.productData);
    }
  }

  patchForm(fdata:any){
    this.productForm.patchValue({
      id: fdata.id,
      title: fdata.title,
      price: fdata.price,
      description: fdata.description,
      image: fdata.image,
      category: fdata.category
    });
  }

  onReset(){
    this.initializeForm();
  }

  onBack(){
    this.onCancel.emit();
  }

  onSubmit(){
    if(this.productForm.invalid){
      this.showPopup('Please enter Required Data!','','warning');
    }
    else{
      this.submitDisabled=true;
      this.productSetupService.createProduct(this.productForm.getRawValue()).subscribe(data=>{
        this.submitDisabled=false;
        this.showPopup('Entry Submitted!','','success');
        this.onSave.emit();
      });
    }


  }

  initializeForm(){
    this.productForm = this.formBuilder.group({
      id: [''],
      title: ["", [Validators.required,Validators.maxLength(250)]],
      price: [0.0, [Validators.required]],
      description: ["", [Validators.maxLength(250)]],
      image: ["", [Validators.required,Validators.maxLength(250)]],
      category: ["", [Validators.required]]
    });
  }

  showPopup(message:any, text:any, icon:any)
  {
      Swal.fire({ title: message, text: text, icon: icon, timer: 2000, showConfirmButton: false });
  }

}
