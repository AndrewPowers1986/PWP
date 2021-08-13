import React from "react";
import {Image} from "react-bootstrap";

export function ShowcaseItem (props) {
    return (
        <>
            <div className="mx-3">
                <a href={props.projectURL} className="d-flex justify-content-center"><Image src={props.imgURL} alt={props.projectURL}/></a>
                <div className="p-2">
                    <p className="text-center">{props.projectText}</p>
                </div>
            </div>
        </>
    )
}