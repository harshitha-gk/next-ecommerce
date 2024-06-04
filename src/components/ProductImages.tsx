"use client"
import Image from "next/image"
import { useState } from "react"

const images = [{
    id: 1,
    url: "https://cdn.pixabay.com/photo/2024/05/30/09/23/ai-generated-8798197_1280.png",
},
{
    id: 2,
    url: "https://cdn.pixabay.com/photo/2024/05/31/08/10/book-8800052_1280.jpg",
},
{
    id: 3,
    url: "https://cdn.pixabay.com/photo/2024/05/29/20/24/child-8797169_1280.png",
}, {
    id: 4,
    url: "https://cdn.pixabay.com/photo/2024/05/31/03/25/dahlia-8799651_1280.jpg",
}]
const ProductImages = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className="div">
            <div className="h-[500px] relative">
                <Image src={images[index].url} fill alt="" sizes="50vw" className="object-cover rounded-md" />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {images.map((img, i) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(i)}>
                        <Image src={img.url} alt="" fill className="object-cover rounded-md" />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ProductImages