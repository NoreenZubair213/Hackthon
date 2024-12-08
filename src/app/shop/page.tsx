'use client';
import Navbar from "./navbar";
import Footer from "@/components/Footer";

export default function Shop() {
  const products = [
      { id: 1, name: "Trenton modular sofa_3", price: "12,000", image: "/img-1.png" },
      { id: 2, name: "Granite dining table with dining chair", price: "18,000", image: "/img-2.png" },
      { id: 3, name: "SOutdoor bar table and stool", price: "35,000", image: "/img-3.png" },
      { id: 4, name: "Plain console with teak mirror", price: "6,500", image: "/img-4.png" },
      { id: 5, name: "BGrain coffee table", price: "55,000", image: "/img-10.png" },
      { id: 6, name: "Kent coffee table", price: "45,000", image: "/img-11.png" },
      { id: 7, name: "Round coffee table_color 2", price: "10,000", image: "/img-12.png" },
      { id: 8, name: "BReclaimed teak coffee table", price: "22,000", image: "/img-13.png" },
      { id: 9, name: "Grain coffee table", price: "65,000", image: "/img-14.png" },
      { id: 10, name: "Kent coffee table", price: "15,000", image: "/img-15.png" },
      { id: 11, name: "Round coffee table_color 2", price: "20,000", image: "/img-16.png" },
      { id: 12, name: "Reclaimed teak coffee table", price: "14,000", image: "/img-17.png" },
      { id: 13, name: "Plain console_", price: "8,000", image: "/img-18.png" },
      { id: 14, name: "Reclaimed teak Sideboard", price: "40,000", image: "/img-19.png" },
      { id: 15, name: "CSJP_0825", price: "30,000", image: "/img-20.png" },
      { id: 16, name: "Bella chair and table", price: "9,500", image: "/img-21.png" },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="container mx-auto p-6">
        {/* Shop Title */}
        <div> <section className="text-center mb-8 relative"> <img src="/hero-shop.jpg" alt="" className="w-full h-[400px] object-cover opacity-80" /> <div className="absolute inset-0 flex flex-col justify-center items-center text-white"> <h2 className="text-3xl font-bold">Shop</h2> <p className="text-lg">Browse our latest products</p> </div> </section> <section className="flex justify-between items-center mb-4 px-4"> <div className="flex items-center space-x-2"> <button className="bg-gray-800 text-white py-1 px-3 rounded">Filter</button> <button className="bg-gray-800 text-white py-1 px-3 rounded">Grid View</button> <button className="bg-gray-800 text-white py-1 px-3 rounded">List View</button> </div> <div className="text-gray-600">Showing 1–16 of 312 results</div> <div className="flex items-center space-x-2"> <label htmlFor="show" className="text-gray-600">Show</label> <input type="number" id="show" name="show" defaultValue="16" className="w-16 text-center border rounded" /> <label htmlFor="sort" className="text-gray-600">Sort by</label> <select id="sort" name="sort" className="border rounded p-1"> <option value="default">Default</option> </select> </div> </section> </div>

        {/* Product Grid */}
        <section className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className=" p-4 hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="text-[14px] font-[400] pt-[10px]">{product.name}</h3>
              <p className="text-black font-[500] text-[18px]">Rs. {product.price}</p>
            </div>
          ))}
        </section>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-3">
          <button className="px-4 py-2 bg-[#FBEBB5] rounded">
            1
          </button>
          <button className="px-4 py-2 bg-[#FFF9E5] rounded">
            2
          </button>
          <button className="px-4 py-2 bg-[#FFF9E5] rounded">
            3
          </button>
          <button className="px-4 py-2 bg-[#FFF9E5] rounded">
            Next
          </button>
        </div>
      </main>

      {/* Footer */}
    <Footer/>
    </div>
  );
}
