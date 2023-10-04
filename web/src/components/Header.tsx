import { FormEvent, useState } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { List, X, WhatsappLogo, Question, MagnifyingGlass, UserCircle, ShoppingCartSimple } from "@phosphor-icons/react";

export const Header = () => {
    const [menuState, setMenuState] = useState(false);
    const [searchInput, setSearchInput] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const search = formData.get("search") as string;
        setSearchParams({ search });
    }

    return (
        <header className="h-20 border border-black">
            <section className="bg-app-blue-100 w-full text-white flex flex-row items-center justify-between px-7 py-3">
                <Link to="/" className="flex flex-col">
                    <h1 className="font-bold laptop:text-5xl mobile:text-2xl">
                        <span className="text-app-orange-100">XEK</span>
                        <span>MAT</span>
                    </h1>
                    <h2 className="font-medium laptop:text-lg mobile:text-sm text-app-orange-100 text-right">
                        Interiores
                    </h2>
                </Link>
                <div className="flex flex-row gap-4 text-base font-light">
                    <Link to="/" className="flex flex-row laptop:gap-1 items-center">
                        <span>
                            <WhatsappLogo size={24} weight="light" />
                        </span>
                        <span>Fale connosco pelo WhatsAapp</span>
                    </Link>
                    <Link to="/" className="flex flex-row laptop:gap-1 items-center">
                        <span>
                            <Question size={24} weight="light" />
                        </span>
                        <span>Tire as dúvidas</span>
                    </Link>
                </div>
                <div>
                    <form onSubmit={handleSearchSubmit} className=" border-b border-white flex flex-row justify-between pb-1 px-2">
                        <input
                            type="search"
                            name="search"
                            placeholder="Pesquisar..."
                            defaultValue={searchParams.get("search") ?? ""}
                            className={`${searchInput ? "mobile:block" : "mobile:hidden"
                                } laptop:block rounded bg-transparent outline-bone focus:outline-none focus:border-none`}
                            onBlur={() => setSearchInput(false)}
                        />
                        <button type="submit">
                            <MagnifyingGlass size={24} weight="thin" />
                        </button>
                    </form>
                </div>
            </section>
            <section className="h-full flex justify-between items-center laptop:flex-row px-36 bg-slate-100">
                <nav className="flex gap-10 laptop:flex-row mobile:flex-col mobile:text-xl laptop:text-lg font-light text-center mobile:min-h-[calc(100vh-270px)] laptop:min-h-fit">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `hover:text-app-orange-100 ${isActive ? "font-light text-app-orange-100 border-b border-app-orange-100 pb-1" : "text-app-blue-100"
                            }`
                        }
                    >
                        Página Inicial
                    </NavLink>
                    <NavLink
                        to="/loja"
                        className={({ isActive }) =>
                            `hover:text-app-orange-100 ${isActive ? "font-light text-app-orange-100 border-b border-app-orange-100 pb-1" : "text-app-blue-100"
                            }`
                        }
                    >
                        Loja
                    </NavLink>
                    <NavLink
                        to="/sobre"
                        className={({ isActive }) =>
                            `hover:text-app-orange-100 ${isActive ? "font-light text-app-orange-100 border-b border-app-orange-100 pb-1" : "text-app-blue-100"
                            }`
                        }
                    >
                        Sobre
                    </NavLink>
                    <NavLink
                        to="/contacto"
                        className={({ isActive }) =>
                            `hover:text-app-orange-100 ${isActive ? "font-light text-app-orange-100 border-b border-app-orange-100 pb-1" : "text-app-blue-100"
                            }`
                        }
                    >
                        Contacto
                    </NavLink>
                </nav>
                <div className="flex flex-row gap-10 text-lg font-thin">
                    <Link to="/" className="flex flex-row laptop:gap-1 items-center">
                        <span>
                            <UserCircle size={28} weight="fill" />
                        </span>
                        <span>Login</span>
                    </Link>
                    <Link to="/" className="flex flex-row laptop:gap-1 items-center">
                        <span>
                            <ShoppingCartSimple size={28} weight="fill" />
                        </span>
                        <span className="bg-app-blue-100 h-5 w-5 text-white rounded-[50%] flex justify-center items-center">0</span>
                    </Link>
                </div>
            </section>
        </header>
    );
};
