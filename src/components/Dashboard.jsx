// import React from "react";

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Hello. Welcome To The Dashboard.</h1>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Invoice = () => {
  const [invoice, setInvoice] = useState({
    strCustomerName: "",
    strCustomerEmail: "",
    row: [
      {
        strProductName: "",
        intQuantity: "",
        numPrice: "",
      },
    ],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleProductChange = (event, index) => {
    const { name, value } = event.target;
    const newProducts = [...invoice.row];
    newProducts[index][name] = value;
    setInvoice({ ...invoice, row: newProducts });
  };

  const handleAddProduct = () => {
    setInvoice({
      ...invoice,
      row: [
        ...invoice.row,
        {
          strProductName: "",
          intQuantity: "",
          numPrice: "",
        },
      ],
    });
  };

  const handleRemoveProduct = (index) => {
    const newProducts = [...invoice.row];
    newProducts.splice(index, 1);
    setInvoice({ ...invoice, row: newProducts });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.0.103:5001/ApiForMyProjects/Invoice/CreateInvoice",
        {
          strCustomerName: invoice.strCustomerName,
          strCustomerEmail: invoice.strCustomerEmail,
          row: invoice.row.map((product) => ({
            strProductName: product.strProductName,
            intQuantity: parseInt(product.intQuantity),
            numPrice: parseFloat(product.numPrice),
          })),
        }
      );
      console.log(response.data);
      // Handle success
      toast.success(response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
      });
    } catch (e) {
      // Handle error
      toast.warn(e.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
      });
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="invoice">
        <div className="customer">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            className="customerInput"
            name="strCustomerName"
            value={invoice.strCustomerName}
            onChange={handleInputChange}
          />
        </div>
        <div className="customer">
          <label htmlFor="customerEmail">Customer Email:</label>
          <input
            type="email"
            className="customerInput"
            name="strCustomerEmail"
            value={invoice.strCustomerEmail}
            onChange={handleInputChange}
          />
        </div>
        <div className="invoiceDetails">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {invoice.row.map((product, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="strProductName"
                      value={product.strProductName}
                      onChange={(event) => handleProductChange(event, index)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="numPrice"
                      value={product.numPrice}
                      onChange={(event) => handleProductChange(event, index)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="intQuantity"
                      value={product.intQuantity}
                      onChange={(event) => handleProductChange(event, index)}
                    />
                  </td>
                  <td>
                    <button
                      className="smart-button"
                      type="button"
                      onClick={() => handleRemoveProduct(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="save">
          <button
            className="smart-button"
            type="button"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
          <button className="smart-button" type="submit">
            Save Invoice
          </button>
        </div>
      </div>
    </form>
  );
};

export default Invoice;

