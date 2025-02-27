import { useState } from "react";
import { MdDehaze } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import LanguageSwitcher from "../shared/LanguageSwitcher";
import SearchInput from "../shared/SearchInput";
import { navLinkMenu } from "../../services/dataConfict";
import { useTranslation } from "react-i18next";

export default function Navigation() {
    const {t}=useTranslation();
    const [isOpenAndroidMenu, setOpenAndroidMenu] = useState(false);

    return (
        <nav className="w-full grid grid-cols-12">
            {/* Desktop Navigation */}
            <div className="hidden xl:flex justify-between items-center h-[5.5rem] col-span-10 col-start-2">
                <div className="flex gap-10 text-xl text-gray-500">
                    {navLinkMenu.map(item => (
                        <NavLink
                            to={item.href}
                            key={item.name}
                            className={({ isActive }) =>
                                `hover:text-black ${isActive ? "font-semibold text-black" : ""}`
                            }
                        >
                            {t(item.name)}
                        </NavLink>
                    ))}
                </div>
                <div className="w-fit flex gap-10 items-center">
                    <LanguageSwitcher />
                    <SearchInput actionPath="/products" dataQuery="name" defaultValue="" />
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="xl:hidden grid grid-cols-7 justify-between items-center h-[5.5rem] col-span-12 px-4">
                <button className="text-3xl text-gray-500 hover:text-black col-span-1 place-items-center" onClick={() => setOpenAndroidMenu(prev => !prev)}>
                    <MdDehaze />
                </button>
                <div className="text-xl font-bold col-span-3 col-start-3 place-items-center text-center">Seafood</div>
                <div className="col-span-2 place-items-end">
                    <LanguageSwitcher />
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpenAndroidMenu && (
                <div className="absolute left-0 w-full h-full bg-white shadow-md py-2 rounded-md border">
                    {/* <Input className="w-full py-2" /> */}
                    {navLinkMenu.map(item => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            onClick={() => setOpenAndroidMenu(false)}
                            className="block px-4 py-4 text-gray-700 hover:bg-gray-200 hover:text-black transition"
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
}