import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const Module = ({ open, title, handleOpen, children }) => {

    return (
        <>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader className="font-normal">{title}</DialogHeader>
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