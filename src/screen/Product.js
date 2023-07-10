import React from "react";
import Layout from "../components/Layout";
import { sideBarItems } from "../utils";
import NewProduct from "../components/Product/NewProduct";
import Products from "../components/Product/Products";
import UpdateProduct from "../components/Product/UpdateProduct";



const ProductPage = ()=>{
    return (
        <Layout title={sideBarItems.product}>

            <div className="w-full">

            < div className="sm:flex bg-gray-100 items-center justify-between px-4">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Product</p>
                        <div className="py-4">
                            <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-white">New Product</p>
                            </button>
                        </div>
             </div>
        
           

           <Products/>
           <NewProduct/>

           <UpdateProduct/>



            </div>

            

        </Layout>

    )
};

export default ProductPage;