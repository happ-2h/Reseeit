export interface Product {
  id:              number;
  date_purchased:  string;
  name:            string;
  price_purchased: number | null;
  condition:       string | null;
  category:        string;
};