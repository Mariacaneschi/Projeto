import React from "react";
import { Carousel } from "react-bootstrap";
import { carousel } from "bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./mobile.css";
import ResponsiveMenu from 'react-responsive-navbar';
import React, { Component } from 'react';
 

class Example extends Component {
    render() {
      return (
        <ResponsiveMenu
          menuOpenButton={<div />}
          menuCloseButton={<div />}
          changeMenuOn="500px"
          largeMenuClassName="large-menu-classname"
          smallMenuClassName="small-menu-classname"
          menu={
            <ul> LOL
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          }
        />
      );
    }
  }

const Mobile = () => (
    <header id="headermobile">
        <div id="img4">
      <div id="titulo5">Pokedex online</div></div>
        
    </header>

);
export default Mobile;