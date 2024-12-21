export default function ProductGrid() {
    const products = [
      { name:"Nike Air Max Pulse",price:"$10,000",image:"/10.jpeg"},
      { name:"Nike Air Max 97 SE",price:"$20,000",image:"/11.jpeg"},
      { name:"Nike Air Max Pulse",price:"$30,000",image:"/12.jpeg"},
    ];
  
    return (
      <div>
        <div><h1 className="font-semibold text-xl text-left ml-7 mt-7">Best of Air Max</h1></div>
        <section className="w-screen flex gap-5 justify-evenly mt-[10px] flex-col md:flex-row">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-3.5 rounded-lg text-center shadow-md">
            <img src={product.image} className="max-w-full h-auto mb-2.5" alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </section>
      </div>
      
    );
  }
  