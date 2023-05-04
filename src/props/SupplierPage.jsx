/* eslint-disable no-unused-vars */
import { useState } from "react";
import SupplierTable from "./SupplierTable";
import { data } from "../suppliersData";

function SupplierPage() {
  const [products, setproducts] = useState(data);

  return (
    <>
      <SupplierTable products={products} />
    </>
  );
}

export default SupplierPage;
