import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";

import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";

import User from "./User";
import CartStatus from "./CartStatus";

export default function Navbar() {
  //상태를 만들어줘야함
  //로그인 상태를 확인해야함

  const { user, login, logout } = useAuthContext();
  // console.log(user)

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>

        {user && <Link to="/carts">
          <CartStatus /></Link>}

        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <BsFillPencilFill />
          </Link>
        )}

        {user && <User user={user} />}

        {!user && <Button text={"login"} onClick={login} />}
        {user && <Button text={"logout"} onClick={logout} />}
      </nav>
    </header>
  );
}
