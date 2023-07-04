import React from "react";
import Item from "./Item";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { products, total, formatMoney } = useCart();
  return (
    <div className="cart">
      <h1 style={{ textAlign: "center" }}>
        {products.length > 0
          ? `ยอดที่ต้องชำระเงินรวม : ${formatMoney(total)} บาท`
          : "ไม่มีสินค้าในตระกร้า"}
      </h1>
      {products.map((data) => {
        return <Item key={data.id} {...data} />;
      })}
    </div>
  );
};

export default Cart;
