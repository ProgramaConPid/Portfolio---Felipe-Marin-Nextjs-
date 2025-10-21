"use client"

import React from "react";
import products from "@/constant/main";
import { useRouter } from "next/navigation";

const Products = () => {
  const router = useRouter();

  const handleProduct = (id: number) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Productos Tecnológicos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {product.nombre}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium text-gray-700">Categoría:</span>{" "}
                {product.categoria}
              </p>
              <p className="text-lg font-semibold text-indigo-600 mb-4">
                ${product.precio.toLocaleString()}
              </p>

              <button
                onClick={() => handleProduct(product.id)}
                className="w-full bg-indigo-600 text-white font-medium py-2 rounded-xl hover:bg-indigo-700 transition-colors duration-300 cursor-pointer"
              >
                Leer más
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
