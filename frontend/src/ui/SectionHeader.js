import React from "react";
import {Container} from "react-bootstrap";
import background from "../../../public_html/assets/images/TextBanner_Dissolve3dPixels_Blue.png"

export function SectionHeader (props) {
    return (
        <>
            <Container className="px-5 py-2 mb-5" style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: '75% 100%'}}>
                <h3 style={{fontFamily: ''}}>&#8226; {props.text}</h3>
            </Container>

        </>
    );
}