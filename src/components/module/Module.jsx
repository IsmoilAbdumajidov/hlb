import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const Module = ({ children,open, title, handleOpen }) => {

    return (
        <>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>{title}</DialogHeader>
                <DialogBody>
                    {children || ""}
                    
                </DialogBody>
                {/* <DialogFooter>
                </DialogFooter> */}
            </Dialog>
        </>
    )
}

export default Module