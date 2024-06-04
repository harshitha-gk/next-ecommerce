import Image from "next/image";


const CartModel = () => {

    const cartItems = false
    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px)rgb(0,0,0,0.2)] bg-main top-12 right-0 flex flex-col gap-6 z-60">
            {
                cartItems ? (
                    <div className="div">
                        cart is empty
                    </div>
                ) : (
                    <>
                        <h2 className="text-xl">Shopping Cart</h2>
                        <div className="flex flex-col gap-8">
                            <div className="flex gap-4">
                                <Image src="https://pixabay.com/photos/fish-clownfish-nature-beach-8265114/" alt="" width={72} height={96} className="object-cover rounded-md" />
                                <div className="flex flex-col justify-between w-full">
                                    <div className="div">
                                        <div className="flex items-center justify-between gap-8">
                                            <h3 className="font-semibold">Product Name</h3>
                                            <div className="p-1 bg-gray-50 rounded-sm ">
                                                $49
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            available
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Qt.2 </span>
                                        <span className="text-blue-500">Remove</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="">
                            <div className="flex items-center justify-between font-semibold">
                                <span>
                                    subtitle
                                </span>
                                <span>
                                    $49
                                </span>

                            </div>
                            <p className="text-gray-500 text-sm mt-2 mb-4">hdfkjfdghjkfkhjgjfh</p>
                            <div className="flex justify-between text-sm">
                                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                                    view cart
                                </button>
                                <button className="rounded-md py-3 px-4 bg-black text-white">
                                    checkout
                                </button>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}
export default CartModel;