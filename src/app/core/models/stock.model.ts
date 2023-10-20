import {ResourceModel} from "../common/resource.model";
import {Type_product} from "./constant/type_product.model";
import {State} from "./constant/state.model";

export class StockModel extends ResourceModel<StockModel> {

  id?: string;
  nbProduct?: number;
  unit?: string;
  total_quantity?: number;
  storage?: number;
  free_storage?: number;
  used_storage?: number;
  LocalDate?: Date;
  location?: string;
  type_product?:Type_product
  state?:State

  constructor(model?: Partial<StockModel>) {
    super(model);
  }
}
