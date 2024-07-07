// request

import Link from "next/link";

const getData = async () => {
  const request = await fetch("https://dummyjson.com/products");

  const data = await request.json();

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
            <details className="dropdown">
              <summary className="btn m-1">{product.title} </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <Link href={`/singleProduct/${product.id}`}>
                    <h1 className="text-3xl hover:text-green-600">
                      Read more....
                    </h1>
                  </Link>
                </li>
              </ul>
            </details>
          </div>
        );
      })}
    </div>
  );
}

export default products;
