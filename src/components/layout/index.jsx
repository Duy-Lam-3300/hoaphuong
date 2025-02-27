import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";



export default function MainLayout({ children }) {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <div className="grid grid-cols-12">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}