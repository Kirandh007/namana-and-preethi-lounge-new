import { QRCodeSVG } from "qrcode.react";
import jsPDF from "jspdf";
import { FaDownload, FaPrint } from "react-icons/fa";
import logo from "../assets/namana-preethi-logo.png";

export default function InvoiceModal({ invoice, onClose }) {
  if (!invoice) return null;

  const download = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Namana & Preethi's Lounge", 20, 20);
    doc.setFontSize(10);
    doc.text("Data Science Department, BIET College, Davangere", 20, 28);
    doc.text(`Invoice: ${invoice.invoiceNumber}`, 20, 42);
    doc.text(`Customer: ${invoice.customerName}`, 20, 50);
    invoice.items.forEach((item, i) => {
      doc.text(`${item.name} x ${item.quantity} - Rs ${item.price * item.quantity}`, 20, 66 + i * 8);
    });
    doc.text(`GST 5%: Rs ${invoice.gst.toFixed(2)}`, 20, 150);
    doc.text(`Grand Total: Rs ${invoice.grandTotal.toFixed(2)}`, 20, 160);
    doc.save(`${invoice.invoiceNumber}.pdf`);
  };

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4">
      <div className="max-h-[92vh] w-full max-w-2xl overflow-auto rounded-3xl bg-cream p-7 text-blackwood shadow-premium">
        <div id="invoice-print">
          <div className="flex items-start justify-between gap-6 border-b border-blackwood/15 pb-5">
            <div className="flex items-start gap-4">
              <img src={logo} alt="Namana & Preethi's Lounge logo" className="h-20 w-20 rounded-2xl object-cover" />
              <div>
              <h2 className="font-display text-3xl font-bold">Namana & Preethi's Lounge</h2>
              <p className="text-sm">Data Science Department, BIET College, Davangere</p>
              <p className="mt-3 font-bold">GST Invoice: {invoice.invoiceNumber}</p>
              </div>
            </div>
            <QRCodeSVG value={invoice.invoiceNumber} size={86} />
          </div>
          <div className="mt-5 grid gap-2 text-sm">
            <p><strong>Customer:</strong> {invoice.customerName}</p>
            <p><strong>Mobile:</strong> {invoice.mobile || "Demo customer"}</p>
            <p><strong>Date:</strong> {new Date().toLocaleString()}</p>
          </div>
          <div className="mt-5 overflow-hidden rounded-2xl border border-blackwood/15">
            <table className="w-full text-left text-sm">
              <thead className="bg-blackwood text-cream"><tr><th className="p-3">Item</th><th>Qty</th><th>Rate</th><th>Total</th></tr></thead>
              <tbody>
                {invoice.items.map(item => (
                  <tr key={item._id} className="border-t border-blackwood/10">
                    <td className="p-3">{item.name}</td><td>{item.quantity}</td><td>₹{item.price}</td><td>₹{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 ml-auto max-w-xs space-y-2 rounded-2xl bg-blackwood p-5 text-cream">
            <p className="flex justify-between"><span>Subtotal</span><strong>₹{invoice.subtotal.toFixed(2)}</strong></p>
            <p className="flex justify-between"><span>GST 5%</span><strong>₹{invoice.gst.toFixed(2)}</strong></p>
            <p className="flex justify-between border-t border-cream/20 pt-2 text-lg"><span>Grand Total</span><strong className="text-gold">₹{invoice.grandTotal.toFixed(2)}</strong></p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <button onClick={() => window.print()} className="gold-button px-5 py-3"><FaPrint /> Print Bill</button>
          <button onClick={download} className="gold-button px-5 py-3"><FaDownload /> Download PDF</button>
          <button onClick={onClose} className="rounded-full border border-blackwood/20 px-5 py-3 font-bold">Close</button>
        </div>
      </div>
    </div>
  );
}
