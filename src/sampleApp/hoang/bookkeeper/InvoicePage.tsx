import { Link, Outlet, useLocation } from "react-router-dom";
import { invoiceData } from "./invoiceData";

export default function InvoicePage() {

    const location = useLocation();

    return (
        <div style={{ display: "flex"}}>
            <nav style={{ borderRight: "1px solid black" }}>
                {invoiceData.map(inv=> (
                    <p key={inv.number}>
                        <Link
                        to={`/invoice/${inv.number}`}
                        style={{
                            color: location.pathname.includes(inv.number.toString()) ? "red" : "black"
                        }}>
                            {inv.name}
                        </Link>
                    </p>
                ))}
            </nav>

            <main>
                <Outlet/>
            </main>
        </div>
    )
}