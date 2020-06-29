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
      <title>PDF</title>
    </head>
    <body>
      <div class="container">
        <h1><span style="text-decoration: underline;">TAX INVOICE</span> - Do Friendly Invoicing to Business</h1>
        <div class="address">
        <div class="address-box">
        <p>Bill to, <br/> <br/>
        &lt;Business ID&gt; <br /> 
        &lt;Business Name&gt; <br />
        Contact Name:&lt;User name&gt; <br />
        Contact#: &lt;Contact#&gt; <br />
        Address: &lt;Address&gt;</p>
        <p>GST#: &lt;GST&gt; </br>
        PAN#: &lt;PAN&gt;</h1></p>
    </div>
    <div class="address-box-center">
        <p>Invoice#: &lt;I20AAA001&gt; </br>
            Date: &lt;Last day of month&gt; </br>
            SAC Code: 992833</p>
    </div>
    <div class="address-box">
        <p>From, </br> </br>
            Do Friendly</br>
                No. 7, 1st Floor, 8th Main Road, 4th</br>
        Cross, S.L.V Indl Area, Peenya 2nd</br>
Stage, Bengaluru - 560058</br>
www.dofriendly.com</br>
Contact#: 9380231006</br>
GST#: 29ABACS8364B1Z9</br>
PAN#: ABACS8364B</p>
    </div>
        </div>
        <table>
        
        <tr>
          <th class="table-cell" rowspan="2">Sl. No</th>
          <th class="table-cell" rowspan="2">Mode</th>
          <th class="table-cell" rowspan="2">Receipt ID</th>
          <th class="table-cell" rowspan="2">Txn Id</th>
          <th class="table-cell" rowspan="2">Transaction value</th>
          <th class="table-cell" rowspan="2">Commission rate %</th>
          <th class="table-cell" rowspan="2">Gross value</th>
          <th colspan="3">GST AMOUNT</th>
          <th rowspan="2">Net Amount</th>
    </tr>
    <tr>
        <th>CGST (9%)</th>
        <th>CGST (9%)</th>
        <th>CGST (18%)</th>
    </tr>
            ${items
              .map((key) => {
                return ` <tr>
                <td>${key.no}</td>
                <td>${key.mode}</td>
                <td>${key.r_id}</td>
                <td>${key.txnid}</td>
                <td>${key.t_value ? key.t_value : "-"}</td>
                <td>${key.c_rate ? key.c_rate + "%" : "-"}</td>
                <td>${key.g_value}</td>
                <td>${key.cgst ? key.cgst : "-"}</td>
                <td>${key.sgst ? key.sgst : "-"}</td>
                <td>${key.igst ? key.igst : "-"}</td>
                <td>${key.net_amount}</td>
            </tr>`;
              })
              .join("")}
           
            <tr>
                <td colspan="4">Grand Total</td>
                <td>${grand_total.t_value}</td>
                <td>${grand_total.c_rate ? grand_total.c_rate + "%" : "-"}</td>
                <td>${grand_total.gross_value}</td>
                <td>${grand_total.cgst}</td>
                <td>${grand_total.sgst}</td>
                <td>${grand_total.igst ? grand_total.igst : "-"}</td>
                <td>${grand_total.net_amount}</td>
            </tr>
            <tr>
              <td colspan="4">(Add) Payment Gateway Charges @ 2%</td>
              <td>${payment.t_value}</td>
                <td>${payment.c_rate ? grand_total.c_rate + "%" : "-"}</td>
                <td>${payment.gross_value}</td>
                <td>${payment.cgst}</td>
                <td>${payment.sgst}</td>
                <td>${payment.igst ? payment.igst : "-"}</td>
                <td>${payment.net_amount}</td>
          </tr>
          <tr>
              <td colspan="6">Receivable Amount</td>
              <td>${amount.gross_value}</td>
              <td>${amount.cgst}</td>
              <td>${amount.sgst}</td>
              <td>${amount.igst ? amount.igst : "-"}</td>
              <td>${amount.net_amount}</td>
          </tr>
        </table>
        <p><strong>Amount in words: ${words}</strong> </p>
      </div>
    </body>
  </html>
  
      `;
};
