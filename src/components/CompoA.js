import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
    width: 350px;
    heightL 150px;
    background-color: grey;

    h1 {
        color: red;
    }

    h2 {
        color: white;
    }
`
function CompoA() {
    return(
        <Container>
            <h1>CompoA Title</h1>
            <h2>CompoA</h2>
        </Container >
    )
} 

export default CompoA; 