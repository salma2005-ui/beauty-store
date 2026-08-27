import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <main >
     <Navbar />
     <Hero/>
      <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
     <Sidebar/>
     <Footer/>
    </main>
  )
}
