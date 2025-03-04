import { Link, useLocation } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Breadcrumb() {
    const { t } = useTranslation();
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(x => x);
    console.log(pathnames);

    return (
        pathnames?.length > 0 && (
            <nav className=" rounded-lg col-span-10 col-start-2 py-4 text-[16px] mt-4">
                <ol className="flex space-x-2 text-gray-400 items-center">
                    <li>
                        <Link to="/" className="text-xl hover:text-gray-700"><FaHome /></Link>
                    </li>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        return (
                            <li key={name} className="flex items-center ">
                                <span className="mx-2">{">"}</span>
                                <Link to={routeTo} className="capitalize text-gray-700 font-semibold">{t(name)}</Link>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        )
    )
}