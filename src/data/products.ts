export interface Product {
  id: number;
  name: string;
  notes: string;
  price: string;
  image: string;
  description: string;
  bestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Midnight Rose",
    notes: "Bulgarian Rose, Vanilla, Oud",
    price: "$180",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
    description: "A sophisticated blend of Bulgarian rose and rich oud, sweetened with vanilla for an enchanting evening fragrance.",
    bestSeller: true
  },
  {
    id: 2,
    name: "Ocean Breeze",
    notes: "Sea Salt, Bergamot, Cedar",
    price: "$150",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    description: "Fresh and invigorating, this scent captures the essence of a coastal morning with notes of sea salt and citrus.",
    bestSeller: true
  },
  {
    id: 3,
    name: "Golden Amber",
    notes: "Amber, Sandalwood, Musk",
    price: "$220",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
    description: "A warm and sensual fragrance that combines rich amber with exotic sandalwood and subtle musk.",
    bestSeller: true
  },
  {
    id: 4,
    name: "Velvet Orchid",
    notes: "Black Orchid, Jasmine, Vanilla",
    price: "$195",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFduZGXGTDm0LX-ekXr-lBtFDr-LL-j46Ng&s",
    description: "An elegant floral composition featuring rare black orchid and jasmine, grounded by smooth vanilla."
  },
  {
    id: 5,
    name: "Citrus Paradise",
    notes: "Grapefruit, Mandarin, Neroli",
    price: "$165",
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800",
    description: "A bright and uplifting blend of citrus notes, perfect for adding freshness to your day."
  },
  {
    id: 6,
    name: "Dark Woods",
    notes: "Cedarwood, Vetiver, Patchouli",
    price: "$210",
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
    description: "A deep and mysterious fragrance that combines earthy vetiver with rich woods and patchouli."
  }
];