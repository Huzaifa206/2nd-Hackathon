export default function ProductGrid() {
    const products = [
      { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/10.jpeg' },
      { name: 'Nike Air Max 97 SE', price: '₹16,995', image: '/11.jpeg' },
      { name: 'Nike Air Max Pulse', price: '₹13,995', image: '/12.jpeg' },
    ];
  
    return (
      <div>
        <div><h1 className="font-semibold text-xl text-left ml-7 mt-7">Best of Air Max</h1></div>
        <section className="productGrid">
        {products.map((product, index) => (
          <div key={index} className="productCard">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </section>
      </div>
      
    );
  }
  