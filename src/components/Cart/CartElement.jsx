import {Button, Card, Alert, Portal} from "@chakra-ui/react"
import { LuImageOff } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import {DeleteDialog} from "../Dialog/DeleteDialog.jsx";
import {useState} from "react";

export function CartElement(props) {
    const [isDeleted, setIsDeleted] = useState(false);

    return (
        <>
        <Card.Root className={"!flex-row"}>
            <Card.Header className={" w-fit"}>
                {props.item.image ?? <LuImageOff/>}
            </Card.Header>
            <Card.Body className={""}>
                {props.item.name ?? "Product name"}
            </Card.Body>

            <Card.Footer className={"!flex-col justify-end w-fit  w-fit"}>
                <Button className={"!bg-red-400 !p-1 rounded-sm"}>
                    <DeleteDialog onDelete={() => setIsDeleted(true)}>
                        <LuTrash2 size={30} color="white" className={"  rounded-sm"} />
                    </DeleteDialog>
                </Button>
            </Card.Footer>
        </Card.Root>
            {isDeleted &&
                <Portal>
                <Alert.Root status="success" inline={false}
                            position="fixed"
                            buttom="1rem"
                            right="0"
                            transform="translateX(-50%)"
                            zIndex="toast"
                            width="fit-content"
                            borderRadius="md"
                            boxShadow="md"
                >
                    <Alert.Indicator />
                    <Alert.Title>{props.item.name} has been deleted!</Alert.Title>
                </Alert.Root>
                </Portal>
                }
        </>
    )
}