// request

import Link from "next/link";

const getData = async (id) => {
  const request = await fetch("https://dummyjson.com/products/" + id);

  const data = await request.json();

  //  thumbnail

  return data;
};

async function Product({ params }) {
  const product = await getData(params.id);
  return (
    <div className="card">
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 max-w-sm mx-auto ">
      <img
        src={product.thumbnail} 
        alt="Product Image"
        width={240}
        height={240}
        className="object-cover w-full rounded-lg mb-4"
      />
      <h2 className="font-bold text-lg mb-2">{product.title}</h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
        {product.description}
      </p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl text-yellow-400 font-bold">${product.price}</span>
        
      </div>
    </div>
  </div>
  );
}

export default Product;
