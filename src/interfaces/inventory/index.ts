import { ProductInterface } from 'interfaces/product';
import { GrocerInterface } from 'interfaces/grocer';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  product_id: string;
  grocer_id: string;
  quantity: number;
  last_updated: any;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  grocer?: GrocerInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
  grocer_id?: string;
}
