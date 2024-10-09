"use client"
import {signOut} from 'next-auth/react'
// import ProductCard from "@/components/ProductCard";
import ProductForm from "@/components/ProductForm";

function Newpage() {
  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <div>
        <h1 className="text-white text-5xl">Dashboard</h1>

        {/* <ProductCard/> */}
        <ProductForm/>
      </div>
    </section>
  )
}
export default Newpage