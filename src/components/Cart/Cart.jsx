import { LuShoppingCart, LuArrowRight } from "react-icons/lu"
import {Menu, Button} from "@chakra-ui/react"
import {CartEmpty} from "./CartEmpty.jsx";
import {CartElement} from "./CartElement.jsx";
import { Tooltip } from "../ui/tooltip"

export function Cart(props){

    return (
        <>
            <Menu.Root>
                <Menu.Trigger>
                    <Tooltip
                        content={"Cart"}
                        positioning={{placement: "right-center"}}
                    >
                        <LuShoppingCart size={60} className="bg-green-300 !p-2 rounded-sm hover:bg-green-400"/>
                    </Tooltip>
                </Menu.Trigger>
                <Menu.Positioner>
                    <Menu.Content className={"!flex flex-col content-center "}>
                        {props.items.map((item, index) => (
                            <CartElement key={index} item={item} />
                        ))}
                        <Button colorPalette="teal" variant="outline">
                            Check Out <LuArrowRight />
                        </Button>
                    </Menu.Content>
                </Menu.Positioner>
            </Menu.Root>
        </>
    );
}