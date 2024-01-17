import React from 'react'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Typography,
} from "@material-tailwind/react";
import { FaRegUser } from "react-icons/fa6";
import { jwtDecode } from 'jwt-decode';
import { getFromLS } from '../../utils/localStorage';
import { IoLogOutOutline } from "react-icons/io5";

const MenuBar = ({ logOut }) => {
    const token = getFromLS("a-token") || "";
    const { full_name } = jwtDecode(token)
    console.log(full_name);
    return (
        <Menu
            animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
            }}
        >
            <MenuHandler>
                <Button> Menu</Button>
            </MenuHandler>
            <MenuList className='p-1'>
                <MenuItem className="flex items-center gap-2">
                    <FaRegUser />
                    <Typography  variant="small" className="font-medium">
                        {full_name || "John Doe"}
                    </Typography>
                </MenuItem>
                <MenuItem onClick={() => logOut()} className="flex items-center gap-2">
                    <IoLogOutOutline />
                    <Typography variant="small" className="font-medium">
                        LogOut
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default MenuBar