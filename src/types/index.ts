export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'Milk' | 'Juices' | 'Dairy Alternatives';
  price: number;
  image: string;
  description: string;
  nutrition: {
    calories: number;
    fat: number;
    protein: number;
    carbs: number;
    sugar: number;
  };
  ingredients: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
