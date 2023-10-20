import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../core/services/product/product.service";
import {ConfirmationService, MessageService} from "primeng/api";

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

  public editProductForm!: FormGroup;

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
    this.getProductById();
    this.initForm();
    console.log(this.product);
  }

  initForm(){
    this.productForm = this.formBuilder.group({
      'name_product': [this.product, Validators.required],
      'description': ['', Validators.required],
      'price': ['', Validators.required],
      'type_product': ['', Validators.required],
      'image': ['', Validators.required],
      'quantity':['',Validators.required],
      count_order:0
    })
  }

  getProductById(){
    this.productService.getProductById(this.ProductId).subscribe((res:any) => {
      this.product = res
      console.log(this.product);
    });
  }


  cancel(){
    this.modalEditProduct = false;
    this.closeModalEditProduct.emit(this.modalEditProduct);
  }

  editProduct(){
    this.productToUpdate = this.productForm.value
    console.log(this.productToUpdate)
    this.productService.updateProduct(this.productToUpdate).subscribe(res => {
      console.log(this.product)
    })
  }

}
