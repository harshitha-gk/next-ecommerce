// "use client"
import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { WixClientContext } from "@/context/wixContext"
import { useWixClient } from "@/hooks/useWixClient"
import { wixClientServer } from "@/lib/wixClientServer"
import { Suspense, useContext, useEffect } from "react"

const HomePage =async () => {
//   const wixClient=await wixClientServer()
//   const res=await wixClient.products.queryProducts().find()

//  console.log(res,"res")
  // useEffect( ()=>{
  //   const getProducts=async()=>{
  //     const res = await WixContext.products.queryProducts().find();
  //     console.log(res,"res")
  //   }
  //    getProducts()
  // },[WixContext])

  return (
    <div className=''>
      <Slider />
      <div className="mt-14 px-4 md:px-8 lg:px-16 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        {/* <Suspense fallback={"loading"}> */}
        <ProductList categoryId={process.env.FEATURE_PRODUCTS_CATEGORY_ID!} limit={4}/>
        {/* </Suspense> */}
      </div>
      <div className="mt-14 ">
        <h1 className="text-2xl  px-4 md:px-8 lg:px-16 2xl:px-64 mb-12">Categories</h1>
        < CategoryList />
      </div>
      <div className="mt-14 px-4 md:px-8 lg:px-16 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        {/* <ProductList /> */}
      </div>
    </div>
  )
}

export default HomePage