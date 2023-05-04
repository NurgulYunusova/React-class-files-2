/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
function SupplierTable(props) {
  let { products } = props;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Contact Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr style={{ textAlign: "center" }}>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SupplierTable;
