export interface Product {
  id: string;
  slug?: string;
  name: string;
  description: string;
  category: 'Dairy' | 'Juices' | 'Condiments' | 'Milk' | 'Dairy Alternatives';
  image: string;
  price: number;
  tags: string[];
  nutrition?: {
    calories: number;
    fat: number;
    protein: number;
    carbs: number;
    sugar: number;
  };
  ingredients?: string[];
  isFeatured?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface CartItem extends Product {
  quantity: number;
}
