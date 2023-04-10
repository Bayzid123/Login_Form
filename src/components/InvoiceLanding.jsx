import React, { useState, useEffect } from "react";
import axios from "axios";

const InvoiceLandingPage = () => {
  const [invoiceData, setInvoiceData] = useState([]);

  useEffect(() => {
    const fetchInvoiceData = async () => {
      try {
        const response = await axios.get(
          "http://10.209.100.87:5001/ApiForMyProjects/Invoice/GetInvoice"
        );
        setInvoiceData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInvoiceData();
  }, []);

  return (
    <div className="invoice-data">
      <h1 className="invoice-data__title">Invoice Data</h1>
      <table className="invoice-data__table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.map((invoice) => (
            <tr key={invoice.intInvoiceId} className="invoice-data__row">
              <td className="invoice-data__cell">{invoice.strCustomerName}</td>
              <td className="invoice-data__cell">{invoice.strCustomerEmail}</td>
              <td className="invoice-data__cell">{invoice.strProductName}</td>
              <td className="invoice-data__cell">{invoice.intQuantity}</td>
              <td className="invoice-data__cell">{invoice.numPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default InvoiceLandingPage;