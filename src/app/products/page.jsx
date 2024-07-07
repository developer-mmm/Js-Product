// request

import Link from "next/link";

const getData = async () => {
  const request = await fetch("https://dummyjson.com/products");

  const data = await request.json();

  //  thumbnail

  return data;
};

async function products() {
  const { products } = await getData();
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`/singleProduct/${product.id}`}>
              <h1 className="text-3xl">{product.title}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default products;
