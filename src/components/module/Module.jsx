import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const Module = ({ children,open, title, handleOpen,onSubmit }) => {

    return (
        <>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>{title}</DialogHeader>
                <DialogBody>
                    {children || ""}
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={onSubmit}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default Module