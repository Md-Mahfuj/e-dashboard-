import React from "react";
import Layout from "../components/Layout";
import { sideBarItems } from "../utils";

import Orders from "../components/Order/Orders";
import UpdateOrder from "../components/Order/UpdateOrder"





const OrderPage = ()=>{
    return (
        <Layout title={sideBarItems.order}>
            <div className="w-full">

            <div className="flex py-4 items-center justify-between">
                            <div className="flex items-center">
                                <a href="javascript:void(0)">
                                    <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                                        <p>All</p>
                                    </div>
                                </a>
                                <a href="javascript:void(0)">
                                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                                        <p>Done</p>
                                    </div>
                                </a>
                                <a href="javascript:void(0)">
                                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                                        <p>Pending</p>
                                    </div>
                                </a>
                            </div>
                          
            </div>
            <Orders/>
            <UpdateOrder/>

            </div>
        </Layout>
    )
};
export default OrderPage;