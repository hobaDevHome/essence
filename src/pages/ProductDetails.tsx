import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  const handleClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const phoneNumber = "+201271152273"; // Replace with the recipient's phone number
    const message = "Hello, I have a question!";

    // Create the appropriate link based on the device
    const whatsappLink = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}` // App link for mobile
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`; // Web link for desktop

    // Open the link in a new tab
    window.open(whatsappLink, "_blank");
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Product not found</h1>
          <Link
            to="/gallery"
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Link
          to="/gallery"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Gallery
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-[4/5] bg-white rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="font-serif text-4xl text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-6">{product.notes}</p>
            <p className="text-gray-600 mb-8">{product.description}</p>

            <div className="mb-8">
              <span className="text-3xl font-medium text-gray-900">{product.price}</span>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div className='mt-8'>
              <p >Need help? Chat with us on WhatsApp!</p>
              <button
                onClick={handleClick}
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#25D366", // WhatsApp green color
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  marginTop: 5
                }}
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}