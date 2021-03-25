import React from "react";

// Images
import ripple from "../../../public/images/loading.svg"
// Styles
import { ImgLoading } from "./style"

export const Loading = () => {

    return (
        <>
            <ImgLoading src={ripple} />
        </>
    )
}