import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <div className="bg-base-200 ">
      <div className="navbar gap-20  align-elements">
      <div className="flex-1  ">
        <a href="products" className="btn btn-ghost text-xl">Online Shop</a>
      </div>
      <ul className="menu  menu-horizontal">
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
            <Link href="/contact">Contact</Link>
        </li>
        <li>
            <Link href="/products">Products</Link>
        </li>
      </ul>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://picsum.photos/50/50"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
