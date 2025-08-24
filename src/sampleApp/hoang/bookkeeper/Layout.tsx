import { Outlet, Link } from "react-router-dom";

 export default function Layout() {
    return (
        <div>
        <h1>Bookkeeper</h1>
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/contact">Contact</Link> |{" "}
            <Link to="/invoice">Invoice</Link>
        </nav>
        <hr />
        <Outlet />
        </div>
    );
 }