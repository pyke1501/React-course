import { useParams } from "react-router";
import { invoiceData } from "./invoiceData";

export default function InvoiceDetail() {
    const { invoiceId } = useParams();
    const invoice = invoiceData.find((inv) => inv.number.toString() === invoiceId);

    if(!invoice) return <h3>Invoice not found</h3>

    return (
        <div>
            <h2>Total Due: {invoice.amount}</h2>
            <p>{invoice.name}: {invoice.number}</p>
            <p>Due Date: {invoice.due}</p>
        </div>
    )
}