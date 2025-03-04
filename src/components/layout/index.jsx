import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";



export default function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="sticky bg-white w-full z-50 col-span-12 top-0">
                <Navigation />
                <hr />
            </div>
            <div className="grid grid-cols-12 ">
                <Breadcrumb />
                <Outlet />
            </div>
            <div className="mt-8">
                <hr />
                <Footer />
            </div>
        </div>
    )
}