import React from "react";
import style from '../styles/Templ.module.css'
import {Container} from "semantic-ui-react";
import {PropTypes} from "@material-ui/core";

const Template = ({bg}) => {

    return (
        <Container className={style.templ} style={{ backgroundColor: bg, color: bg === "white" ? "black":"white" }} />
    )
}

Template.prototype = {
  bg: PropTypes.String.isRequired
}

export default Template;