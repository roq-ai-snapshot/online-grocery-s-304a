import { InventoryInterface } from 'interfaces/inventory';
import { OrderInterface } from 'interfaces/order';
import { ProductInterface } from 'interfaces/product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GrocerInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  inventory?: InventoryInterface[];
  order?: OrderInterface[];
  product?: ProductInterface[];
  user?: UserInterface;
  _count?: {
    inventory?: number;
    order?: number;
    product?: number;
  };
}

export interface GrocerGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
