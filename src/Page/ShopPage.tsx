import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {useEffect, useState} from "react";
import Navbar, {Item} from "@/components/noLib/Navbar.tsx";
import ProductCard, {Product} from "@/components/noLib/ProductCard.tsx";
import ProductCardLong from "@/components/noLib/ProductCardLong.tsx";
import {Icons} from "@/Page/MainPage.tsx";
import {useParams} from "react-router-dom";


import {atomWithStorage} from "jotai/utils";
import {useAtom} from "jotai";


type Category = {
    name: string
    image: string
}

type Shop = {
    name: string,
    id: string
    image: string,
    Category: Category
    products: Product[]
}

//Retrieve localCart from the localStorage
const localCart = atomWithStorage('cart', [] as Item[])

export default function ShopPage() {

    //Cart Management
    const [cart, setCart] = useAtom(localCart)

    // Shop Infos
    const shopID = useParams()
    const [shopInfo, setShopInfo] = useState<Shop | undefined>(undefined)

    function addToCart(product: Product) {

        if (cart.length > 0) {
            console.log(cart[0].id === product.id)
            if (product.id != cart[0].id) {
                alert("Vous ne pouvez pas commander des produits de deux restaurants différents")
                return
            }
        }
        setCart([...cart, product] as Item[])
    }


    //Retrieve the shop ID from the URL
    useEffect(() => {
        retrieveShopInfo().then(r => r)
    }, [])


    //Retrieve the shop information from the API
    async function retrieveShopInfo() {
        await fetch(`http://localhost:8080/shop/${shopID.id}`)
            .then(res => res.json())
            .then(({data}) => {
                if (!data) {
                    return
                }
                setShopInfo(data)
            })
    }
    if (!shopInfo) return (
        <div className="flex w-full h-full justify-center flex-col items-center">
            <Icons.spinner className="h-24 w-24 stroke-1 text-ub-green animate-spin"/>
        </div>
    )

    return (
        <>
            <Navbar/>
            <div className="px-9 pt-20 min-w-screen m-auto h-auto">
                <img
                    src={shopInfo.image ? "https://i.pinimg.com/originals/2b/8d/34/2b8d3481fd0855dfb0608f3198fd8adc.jpg" : "https://i.pinimg.com/originals/2b/8d/34/2b8d3481fd0855dfb0608f3198fd8adc.jpg"}
                    alt="No Image Data"
                    className="w-full h-72 object-cover rounded-xl"/>
                <div className="mt-5">
                    <h1 className="text-3xl font-bold">{shopInfo.name ? shopInfo.name : ""}</h1>
                    <p className="text-gray-500">{shopInfo.Category.name ? shopInfo.Category.name : ""}</p>
                </div>
            </div>
            <div className="h-screen size-full px-9 pt-20 min-w-screen m-auto flex">
                <div className='categoryListing w-1/5 h-full bg-gray-100 rounded-xl shadow-2xl'>
                    {
                        // TODO: Add the category listing here
                    }
                </div>
                <div className="productListing w-4/5 h-full">
                    <div className="font-medium text-2xl m-12">Article en vedettes</div>
                    <Carousel className="pl-0 pt-5 m-12 max-w-8xl min-w-96">
                        <div>
                            <CarouselPrevious/>
                            <CarouselNext/>
                        </div>
                        <CarouselContent key={"carousel"}>
                            {shopInfo.products.map((product, index) => (
                                <CarouselItem className="basis-56"><ProductCard addToCart={() => addToCart(product)}
                                                                                product={product}
                                                                                key={index}></ProductCard></CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="m-12">
                        <div className="font-medium text-2xl mt-24">Tous les articles</div>
                        <div className="flex flex-wrap gap-10 min-w-96">
                            {shopInfo.products.map((product, index) => (
                                <ProductCardLong addToCart={() => addToCart(product)} product={product}
                                                 key={index}></ProductCardLong>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
