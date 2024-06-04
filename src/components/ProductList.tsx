import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
    return <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
            <div className="relative w-full h-80">
                <Image src="https://cdn.pixabay.com/photo/2024/05/22/06/39/ai-generated-8779808_1280.jpg" alt="" sizes="25vw" fill className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />

                <Image src="https://cdn.pixabay.com/photo/2024/05/30/10/38/woman-8798294_1280.jpg" alt="" sizes="25vw" fill className="absolute object-cover rounded-md" />
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$49</span>
            </div>

            <div className="text-sm tex-gray-500">
                My description
            </div>
            <button className="rounded-2xl ring-1 reing-main text-main py-2 px-4 text-xs w-max hover:bg-main hover:text-white">Add to carrt</button>
        </Link>
    </div>
}

export default ProductList