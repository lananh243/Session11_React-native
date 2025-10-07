export interface Shopping {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItem extends Shopping {
  quantity: number;
}