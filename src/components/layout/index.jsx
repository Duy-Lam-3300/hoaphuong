import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";



export default function MainLayout({ children }) {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <hr />
            <div className="grid grid-cols-12">
                <Outlet />
            </div>
            <hr />
            <div>
                <Footer />
            </div>
        </div>
    )
}