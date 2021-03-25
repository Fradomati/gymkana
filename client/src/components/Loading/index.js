import React from "react";

// Images
import { ripple } from "../../../public/images/ripple-loading.gif"
// Styles
import { ImgLoading } from "./style"

export const Loading = () => {

    return (
        <>
            <ImgLoading src={ripple} />
        </>
    )
}