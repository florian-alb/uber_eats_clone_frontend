import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {SearchIcon} from "lucide-react";

import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {useState} from "react";

export default function Navbar() {
    // @ts-ignore
    const [haveItems, setHaveItems] = useState(false)


    function cartContent() {
        if (!haveItems) {
            return (
                    <div className="text-center text-gray-500">Votre panier est vide !</div>
            )
        }
        return (
                <div className="text-center text-gray-500">Votre panier est REMPLLIIIIII!</div>
        )
    }


    return (
        <div className="w-full h-16 flex items-center justify-between px-10 py-5 text-2xl">
            <div className="flex">
                <Sheet>
                    <SheetTrigger>
                        <img src="src/assets/svg/burger-menu.svg" alt="menu"
                             className="min-w-6 min-h-6 w-6 h-6 bold mt-1"/>
                    </SheetTrigger>
                    <SheetContent className="bg-white border-none pt-14" side={"left"}>
                        <SheetHeader>
                            <Button
                                className="rounded-xl min-h-14 py-5 mx-5 bg-black text-white text-lg hover:bg-gray-950 duration-200">Inscription</Button>
                            <Button
                                className="rounded-xl min-h-14 py-5 mx-5 bg-gray-200 text-lg duration-200 hover:bg-gray-300 mt-20">Connexion</Button>
                            <SheetDescription className="flex flex-col gap-5 py-5 font-medium">
                                <a className="hover:underline" href="#">Créez un compte professionnel</a>
                                <a className="hover:underline" href="#">Ajoutez votre restaurant</a>
                                <a className="hover:underline" href="#">Devenez coursier-partenaire</a>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                <div className="ml-5 tracking-tight font-medium">
                    Uber
                    <span className="ml-2 font-bold">Eats</span>
                </div>
            </div>
            <ToggleGroup type={"single"} className="flex bg-gray-300 rounded-full px-5 mx-5 h-10">
                <ToggleGroupItem className="text-gray-500 aria-checked:font-bold size-fit p-1 rounded-full min-w-28"
                                 value="Livraison">Livraison</ToggleGroupItem>
                <ToggleGroupItem className="text-gray-500 aria-checked:font-bold size-fit p-1 rounded-full min-w-28"
                                 value="emporter">À emporter</ToggleGroupItem>
            </ToggleGroup>
            <div className="flex content-between gap-5 w-full">

                <Input type="text"
                       className="DeliverPosition flex items-center w-full max-w-64 rounded-full px-10   border-none font-medium"/>
                <img src="src/assets/svg/map.svg" alt="location"
                     className="absolute mt-2 mx-2 min-w-6 min-h-6 w-6 h-6 gree"/>


                <div className="min-w-96 w-full mx-5">
                    <SearchIcon className="w-4 h-4 mt-3 ml-4 absolute"/>
                    <Input type="text" placeholder="Rechercher dans Uber Eats"
                           className="w-full max-w-screen-2xl rounded-full pl-10 placeholder:text-gray-500 border-none bg-gray-300"/>
                </div>

            </div>
            <Popover>
                <PopoverTrigger className="flex">
                    <img src="src/assets/svg/cart.svg" alt="search"
                         className="min-w-6 min-h-6 max-h-8 max-w-8 rounded-full"/>
                    <div
                        className="absolute min-w-4 mx-6 max-h-5 bg-ub-green top-3 rounded-full text-white text-xs flex justify-center items-center">0
                    </div>
                </PopoverTrigger>
                <PopoverContent className="flex justify-center mt-2.5 rounded-xl">
                    <div className="text-center text-gray-500">{cartContent()}</div>
                </PopoverContent>
            </Popover>
            <div className="flex gap-2 mx-5">
                <Button className="rounded-full hover:bg-gray-300">Connexion</Button>
                <Button className="rounded-full bg-gray-300 hover:bg-gray-400">Inscription</Button>
            </div>
        </div>
    )
}