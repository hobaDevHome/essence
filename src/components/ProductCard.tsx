import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          />
          <button 
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-200"
            onClick={(e) => e.preventDefault()}
          >
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <div className="p-6">
          <h3 className="font-serif text-xl text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{product.notes}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-medium">{product.price}</span>
            <button 
              className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
              onClick={(e) => e.preventDefault()}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}