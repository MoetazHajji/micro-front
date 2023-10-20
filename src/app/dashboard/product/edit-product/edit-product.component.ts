import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../core/services/product/product.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {ProductModel} from "../../../core/models/product.model";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class EditProductComponent implements OnInit {

  @Input() modalEditProduct:boolean=true ;
  @Input() ProductId : any
  @Output() closeModalEditProduct=new EventEmitter<boolean>();
  @Output() refreshProduct=new EventEmitter<boolean>();


  public productForm!: FormGroup;

  product!:any;
  productToUpdate!:any;

  type_product = [
    { label: 'Equipment', value: 'EQUIPMENT' },
    { label: 'Reagent', value: 'REAGENT' },
  ];

  constructor(
    private productService:ProductService,
    private messageService:MessageService,
    private confirmationService:ConfirmationService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();


  }

  initForm(){

    this.productService.getProductById(this.ProductId).subscribe((res:any) =>{
      this.product = res
      this.productForm = this.formBuilder.group({
        'id':[this.ProductId],
        'name_product': [this.product.name_product, Validators.required],
        'description': [this.product.description, Validators.required],
        'price': [this.product.price, Validators.required],
        'type_product': [this.product.type_product, Validators.required],
        'image': [this.product.image, Validators.required],
        'quantity':[this.product.quantity,Validators.required],
        count_order:0
      })
    })

  }


  cancel(){
    this.modalEditProduct = false;
    this.closeModalEditProduct.emit(this.modalEditProduct);
  }

  editProduct(){
    this.productToUpdate = this.productForm.value
    this.productService.updateProduct(this.productToUpdate).subscribe(res => {
      console.log(this.product)
    })
  }

}
