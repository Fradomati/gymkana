import React from "react";

// Images
import ripple from "../../../public/images/loading.svg"
// Styles
import { ImgLoading } from "./style"
import { CenterMiddleCointaner } from "../../globalStyles/containers"

export const Loading = () => {

    return (
        <>
            <CenterMiddleCointaner>
                <ImgLoading src={ripple} />
            </CenterMiddleCointaner>
        </>
    )
}