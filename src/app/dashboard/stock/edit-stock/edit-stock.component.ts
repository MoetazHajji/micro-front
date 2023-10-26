import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductModel} from "../../../core/models/product.model";
import {ProductService} from "../../../core/services/product/product.service";
import {StockService} from "../../../core/services/stock/stock.service";
import {StockModel} from "../../../core/models/stock.model";

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class EditStockComponent implements OnInit {

  @Input() modalEditStock:boolean=true ;
  @Input() StockId : any
  @Output() closeModalEditStock=new EventEmitter<boolean>();
  @Output() refreshStock=new EventEmitter<boolean>();


  public stockForm!: FormGroup;

  public editStockForm!: FormGroup;

  stock:StockModel = new StockModel();
  stockToUpdate!:any;

  state = [
    { label: 'Available', value: 'AVAILABLE' },
    { label: 'Arriving', value: 'ARRIVING' },
    { label: 'Out Of Stock', value: 'OUT_OF_STOCK' }
  ];

  type_product = [
    { label: 'Equipment', value: 'EQUIPMENT' },
    { label: 'Reagent', value: 'REAGENT' },
  ];

  constructor(
    private stockService:StockService,
    private messageService:MessageService,
    private confirmationService:ConfirmationService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.stockForm = this.formBuilder.group({
      'unit': ['', Validators.required],
      'storage': ['', Validators.required],
      'location':['',Validators.required],
      'type_product':['',Validators.required],
      'state':['',Validators.required],
      nbProduct:0,
      total_quantity:0
    })
  }

  cancel(){
    this.modalEditStock = false;
    this.closeModalEditStock.emit(this.modalEditStock);
  }

  editStock(){
    this.stockToUpdate = this.stockForm.value
    console.log(this.stockToUpdate)
    this.stockService.updateStock(this.stockToUpdate).subscribe(res => {
      console.log(this.stock)
    })
  }



}
