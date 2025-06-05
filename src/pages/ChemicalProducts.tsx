import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const chemicalProducts = [
  {
    id: "chem-1",
    title: "Fluid Additives",
    description: "Water-based, Oil and Synthetic additives that address all downhole challenges",
    image: "public/fluid.png",
    category: "chemical" as const,
    subcategory: "chem-cat-1"
  },
  {
    id: "chem-2",
    title: "WBM",
    description: "Water-based drilling fluids that deliver cost-effective, efficient performance with minimized environmental impact",
    image: "public/wbm.png",
    category: "chemical" as const,
    subcategory: "chem-cat-1"
  },
  {
    id: "chem-3",
    title: "Nonaqueous Drilling Fluids",
    description: "Oil-based & Synthetic based drilling fluid systems designed for a wide range of demanding applications",
    image: "public/nonaquous.png",
    category: "chemical" as const,
    subcategory: "chem-cat-1"
  },
  {
    id: "chem-4",
    title: "Pre Operation Consultancy & Technical Support",
    description: "Technical support before operations to help clients accurately plan based on formation, location, and product requirements",
    image: "public/support.jpg",
    category: "chemical" as const,
    subcategory: "chem-cat-2"
  },
  {
    id: "chem-5",
    title: "Onsite & Remote Support",
    description: "Full operational support for drilling fluids and additives from both remote locations and physical sites",
    image: "assests/consult.jpg",
    category: "chemical" as const,
    subcategory: "chem-cat-2"
  },
];

const categoryNames = {
  "chem-cat-1": "Drilling Fluid Solutions & Products",
  "chem-cat-2": "Tech Support of High performance mud formulations",
};

const ChemicalProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const location = useLocation();
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    if (category) {
      setCategoryFilter(category);
    }
  }, [location]);
  
  const filteredProducts = chemicalProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || product.subcategory === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to="/chem-cat" className="group flex items-center text-pharma-teal hover:text-pharma-blue transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Categories
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-pharma-teal mb-4">Chemical Products</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of high-quality chemical products designed for industrial and research applications.
            </p>
            
            <div className="mt-6 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pharma-teal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {categoryFilter && (
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  className="text-pharma-teal border-pharma-teal hover:bg-pharma-teal hover:text-white"
                  onClick={() => setCategoryFilter("")}
                >
                  Clear Category Filter
                </Button>
              </div>
            )}
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={item}>
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No products found matching your search.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChemicalProducts;