import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  total_price: yup.number().integer().required(),
  order_date: yup.date().required(),
  delivery_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  grocer_id: yup.string().nullable().required(),
});
