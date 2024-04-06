import React from 'react'
import Module from '../module/Module'
import click from "./img/click.png"

const BuyModule = ({ open, handleOpen, title,children }) => {

    return (
        <Module open={open} handleOpen={handleOpen} title={title}>
            {children}
        </Module>
    )
}

export default BuyModule