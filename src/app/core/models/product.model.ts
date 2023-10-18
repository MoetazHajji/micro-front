import {ResourceModel} from "../common/resource.model";
import {Type_product} from "./constant/type_product.model";

export class ProductModel extends ResourceModel<ProductModel>{

  id?: string;
  reference?: string;
  name_product?: string;
  description?: string;
  price?: number;
  quantity?: number;
  count_order?: number;
  image?: string;
  rating?: number;
  type_product?:Type_product

  constructor(model?: Partial<ProductModel>) {
    super(model);
  }
}
