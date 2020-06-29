module.exports = ({ items, grand_total, payment, amount, words }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <style>
      html {
        zoom: 0.753
        }
.container {
    margin-right: auto;
    margin-left: auto;

    max-width: 80%;

    padding-right: 10px;
    padding-left: 10px;
    text-align: center;
  }
  .address {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .address-box{
      border: 1px solid orange;        
    margin: 1rem;
    text-align: left;
    padding: 0 0.5rem;
  }
  .address-box-center{
      border: 1px solid orange;        
    margin: 1rem;
    padding: 1rem;
  }
  table {
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
  }

  th,
  td {
    border: 1px solid black;
    padding: 0.5rem;
  }
  .table-cell {
    position: relative;
}
.table-cell:before {
    position: absolute;
    content: "";
    top: -1px;
    left:-1px;
    background-color: transparent;
    border-right: solid #666 1px;
    width: 100% ;
    height: 100%;
}
      </style>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>PDF</title>
    </head>
    <body>
      <div class="container">
        <h1><span style="text-decoration: underline;">Voucher</span> - Do Friendly generates voucher for Brand Friends</h1>
        <div class="address">
          <div class="address-box">
            <p>From,</p>
            <p>Do Friendly</p>
            <p>No. 7, 1st Floor, 8th Main Road, 4th</p>
            <p>Cross, S.L.V Indl Area, Peenya 2nd</p>
            <p>Stage, Bengaluru - 560058</p>
            <p>www.dofriendly.com</p>
            <p>Contact#: 9380231006</p>
            <p>GST#: 29ABACS8364B1Z9</p>
            <p>PAN#: ABACS8364B</p>
          </div>
          <div class="address-box">
            <p>Invoice#: &lt;I20AAA001&gt;</p>
            <p>Date: &lt;Last day of month&gt;</p>
            <p>SAC Code: 992833</p>
          </div>
  
          <div class="address-box">
            <p>To,</p>
            <p>&lt;Braind Friend ID&gt;</p>
            <p>Contact Name:&lt;User name&gt;</p>
            <p>Contact#: &lt;Contact#&gt;</p>
            <p>Address: &lt;Address&gt;</p>
          </div>
        </div>
        <table>
          <tr>
            <th>Sl. No</th>
            <th>Mode</th>
            <th>Payment ID</th>
            <th>Txn Id</th>
            <th>Transaction value</th>
            <th>Convenience fee</th>
            <th>Amount</th>
          </tr>
           ${items
             .map((key) => {
               return ` <tr>
                <td>${key.no}</td>
                <td>${key.mode}</td>
                <td>${key.paymentid}</td>
                <td>${key.txnid}</td>
                <td>${key.t_value ? key.t_value : "-"}</td>
                <td>${key.c_fee ? key.c_fee + "%" : "-"}</td>
                <td>${key.amount}</td>
            </tr>`;
             })
             .join("")}
          <tr>
            <td colspan="3">Grand Total</td>
                <td>${grand_total.txnid ? grand_total.txnid : "-"}</td>
                <td>${grand_total.t_value ? grand_total.t_value : "-"}</td>
                <td>${grand_total.c_fee ? grand_total.c_fee : "-"}</td>
                <td>${grand_total.amount ? grand_total.amount : "-"}</td>
          </tr>
          <tr>
            <td colspan="3">(Less) Payment Gateway Charges</td>
            <td>${payment.txnid ? payment.txnid : "-"}</td>
            <td>${payment.t_value ? payment.t_value : "-"}</td>
            <td>${payment.c_fee ? payment.c_fee : "-"}</td>
            <td>${payment.amount ? payment.amount : "-"}</td>
          </tr>
          <tr>
            <td colspan="6">Payable Amount</td>
            <td>${amount.amount}</td>
          </tr>
        </table>
        <p><strong>Voucher Amount in words:</strong>${words}</p>
      </div>
    </body>
  </html>
  
    
        `;
};
