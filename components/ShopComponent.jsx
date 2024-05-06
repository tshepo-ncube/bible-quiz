"use client";
import React, { useEffect, useState } from "react";

export default function ShopComponent() {
  const shopItems = [
    { itemName: "Item 1", price: 0.99, quantity: 400 },
    { itemName: "Item 2", price: 2.99, quantity: 900 },
    { itemName: "Item 3", price: 4.99, quantity: 1500 },
    { itemName: "Item 3", price: 7.99, quantity: 5000 },
    // Add more items as needed
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Shop</h2>
        {shopItems.map((item, index) => (
          <ShopItem
            key={index}
            itemName={item.itemName}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </main>
  );
}

const ShopItem = ({ itemName, price, quantity }) => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-gray-100 rounded-lg mb-2">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-500 mr-24 text-white rounded p-2 h-10 flex items-center justify-center">
          {quantity} &#x1f48e;
        </div>
        <div className="text-lg font-semibold">purchase gems</div>
      </div>
      <button className="bg-green-500 ml-24 text-white rounded p-4 h-10 flex items-center justify-center">
        ${price}
      </button>
    </div>
  );
};
