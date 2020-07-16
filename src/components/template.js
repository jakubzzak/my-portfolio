import React from "react";
import style from '../styles/Templ.module.css'
import {Container} from "semantic-ui-react";

const Template = (props) => {

    return (
        <Container className={style.templ} style={{ backgroundColor: props.bg, color: props.bg === "white" ? "black":"white" }} />
    )
}

export default Template;