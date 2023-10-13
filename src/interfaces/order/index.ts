import { OrderItemInterface } from 'interfaces/order-item';
import { UserInterface } from 'interfaces/user';
import { GrocerInterface } from 'interfaces/grocer';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  total_price: number;
  order_date: any;
  delivery_date?: any;
  user_id: string;
  grocer_id: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  user?: UserInterface;
  grocer?: GrocerInterface;
  _count?: {
    order_item?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  grocer_id?: string;
}
