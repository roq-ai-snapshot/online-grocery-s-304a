import { InventoryInterface } from 'interfaces/inventory';
import { OrderItemInterface } from 'interfaces/order-item';
import { GrocerInterface } from 'interfaces/grocer';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  grocer_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  order_item?: OrderItemInterface[];
  grocer?: GrocerInterface;
  _count?: {
    inventory?: number;
    order_item?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  grocer_id?: string;
}
