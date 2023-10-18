import { Injectable } from '@angular/core';
import {StockApi} from "../../api/stock.api";
import {StockModel} from "../../models/stock.model";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(
    private stockApi:StockApi
  ) {
  }
  createProduct(stock:StockModel){
    return this.stockApi.createStock(stock);
  }

  updateProduct(stock:StockModel){
    return this.stockApi.updateStock(stock);
  }

  getProductById(id:string){
    return this.stockApi.searchStockById(id);
  }

  findAllProducts(params?:any){
    return this.stockApi.findAll(params);
  }

  removeProduct(id : string){
    return this.stockApi.removeStock(id);
  }
}
