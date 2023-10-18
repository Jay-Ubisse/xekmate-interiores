import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, X, ShoppingBag } from "@phosphor-icons/react";
import { HashLink } from "react-router-hash-link";
import { cart } from "../data/products"

export const Header = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <header
      className="h-32"
    >
      <section className="bg-app-blue-100 px-5 w-full relative h-full flex justify-between items-center laptop:flex-row">
        <div>
          <Link to="/" className="flex flex-col">
            <h1 className="font-bold laptop:text-5xl mobile:text-2xl">
              <span className="text-app-orange-100">XEK</span>
              <span className="text-white">MAT</span>
            </h1>
            <h2 className="font-medium laptop:text-lg mobile:text-sm text-app-orange-100 text-right">
              Interiores
            </h2>
          </Link>
        </div>
        <div
          className={`${menuState ? "mobile:flex bg-app-blue-100" : "mobile:hidden bg-transparent"
            } laptop:gap-2 mobile:gap-16 items-center laptop:flex laptop:flex-row-reverse mobile:flex-col mobile:w-screen laptop:w-fit mobile:h-screen laptop:h-fit laptop:overflow-hidden mobile:fixed laptop:relative top-0 left-0 mobile:pt-10 laptop:pt-0 z-30`}
        >
          <div className="flex flex-row justify-end mobile:w-full laptop:w-fit mobile:pb-12 laptop:pb-0">
            <X
              size={32}
              className="mr-5 laptop:hidden text-app-orange-100"
              onClick={() => setMenuState(false)}
            />
          </div>
          <nav
            className="flex gap-6 laptop:flex-row mobile:flex-col mobile:text-xl laptop:text-lg text-center mobile:min-h-[calc(100vh-270px)] laptop:min-h-fit pr-2 text-app-orange-100"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:border-b border-app-orange-100 pb-2 ${isActive ? "border-b border-app-orange-100 pb-2 font-semibold" : "border-none text-white"
                }`
              }
            >
              Página inicial
            </NavLink>
            <NavLink
              to="/loja"
              className={({ isActive }) =>
                `hover:border-b border-app-orange-100 pb-2 ${isActive ? "border-b border-app-orange-100 pb-2 font-semibold" : "border-none text-white"
                }`
              }
            >
              Loja
            </NavLink>
            <HashLink
              to="/#about"
              className="hover:border-b border-app-orange-100 pb-2 text-white"
              onClick={() => setMenuState(false)}
            >
              Sobre nós
            </HashLink>
            <HashLink
              to="/#contact"
              className="hover:border-b border-app-orange-100 pb-2 text-white"
              onClick={() => setMenuState(false)}
            >
              Contacto
            </HashLink>
          </nav>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <ShoppingBag
              size={32}
              className="text-app-orange-100"
            />
            <span className="text-white bg-app-orange-100 w-5 h-5 text-sm rounded-[50%] flex items-center justify-center">
              {cart.length}
            </span>
          </div>
          <List
            size={32}
            className="laptop:hidden text-app-orange-100"
            onClick={() => setMenuState(true)}
          />
        </div>
      </section>
    </header>
  );
};
