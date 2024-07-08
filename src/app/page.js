import React from "react";
function Home() {
  return (
    <div className="wrapper">
      <img src="./bg-image.jpg" alt="" />

      <div className="flex justify-around mt-6">
        <h1 className="text-5xl text-yellow-500">Online Shopping</h1>
        <a className="text-5xl text-fuchsia-800" href="products">
          ↖️ Our Store 
        </a>
      </div>
    </div>
  );
}

export default Home;
