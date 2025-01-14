import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useState } from 'react'; // Import useState

import { } from '../../api/'

export default function Home() {
  const bestSellers = products.filter(product => product.bestSeller);

  // State for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    console.log('-----------  new api link')
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('../../api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Perfume"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Discover Your Signature Scent</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Explore our collection of handcrafted fragrances, each telling its own unique story.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                At Essence, we believe that every fragrance tells a story. Our journey began with a simple passion:
                to create unique scents that capture moments, memories, and emotions.
              </p>
              <p className="text-gray-600">
                Each perfume in our collection is carefully crafted using the finest ingredients,
                blending traditional techniques with modern innovation to create truly remarkable fragrances.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=1000"
                alt="Perfume Making Process"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-12">Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}