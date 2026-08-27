
import React from 'react'
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6 px-6">
      <div className="container mx-auto">
        
        {/* اللوجو */}
        <h2 className="text-2xl font-bold text-center mb-10">GLOWIFY</h2>

        {/* اللينكات */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          
          {/* Contact */}
          <div>
            <h3 className="font-bold uppercase mb-4">CONTACT INFORMATION</h3>
            <p className="text-gray-600 mb-2">+20 100 123 4567</p>
            <p className="text-gray-600 mb-2">hello@glowify.com</p>
            <p className="text-gray-600">123 Makeup Street, Cairo, Egypt</p>
          </div>

          {/* My Account */}
          <div>
            <h3 className="font-bold uppercase mb-4">MY ACCOUNT</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-pink-500">Sign In</a></li>
              <li><a href="#" className="hover:text-pink-500">View Bag</a></li>
              <li><a href="#" className="hover:text-pink-500">My Wishlist</a></li>
              <li><a href="#" className="hover:text-pink-500">Track My Order</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold uppercase mb-4">INFORMATION</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-pink-500">About Us</a></li>
              <li><a href="#" className="hover:text-pink-500">Blog</a></li>
              <li><a href="#" className="hover:text-pink-500">FAQ</a></li>
              <li><a href="#" className="hover:text-pink-500">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold uppercase mb-4">CUSTOMER SERVICES</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-pink-500">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-pink-500">Secure Shopping</a></li>
              <li><a href="#" className="hover:text-pink-500">International Shipping</a></li>
              <li><a href="#" className="hover:text-pink-500">Affiliates</a></li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h3 className="font-bold uppercase mb-4">PAYMENT & SHIPPING</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-pink-500">Terms of Use</a></li>
              <li><a href="#" className="hover:text-pink-500">Payment Methods</a></li>
              <li><a href="#" className="hover:text-pink-500">Shipping Guide</a></li>
              <li><a href="#" className="hover:text-pink-500">Locations We Ship To</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}
export default Footer