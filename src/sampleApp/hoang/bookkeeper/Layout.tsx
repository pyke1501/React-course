import { Link } from "react-router-dom";

 export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <div>
            <h1>Bookkeeper</h1>
            <nav>
                <Link to="/bookeeper">Home</Link> |{" "}
                <Link to="/bookeeper/contact">Contact</Link> |{" "}
                <Link to="/bookeeper/invoice">Invoice</Link>
            </nav>
            <hr />
            {children}
        </div>
    );
 }