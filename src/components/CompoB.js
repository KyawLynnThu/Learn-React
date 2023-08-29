import React from "react";
import { styled } from "styled-components";

const Button = styled.button`
    border: none;
    border-radius: 10px;
    background-color: hotpink;
    color: white;
    padding: 5px 10px;

    &:hover {
        background-color: blue;
    }
`
function CompoB() {
    return(
        <div>
            <Button>Click Me</Button>
      </div >
    )
}

export default CompoB;