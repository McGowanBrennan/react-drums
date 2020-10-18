import React from "react";
import "./drums.scss";
import drum7 from "./drums/drum1.wav";
import drum8 from "./drums/drum2.wav";
import drum4 from "./drums/drum3.wav";
import drum5 from "./drums/drum4.wav";
import drum6 from "./drums/drum5.wav";
import drum9 from "./drums/drum6.wav";
import drum1 from "./drums/drum7.wav";
import drum2 from "./drums/drum8.wav";
import drum3 from "./drums/drum9.wav";

class Drums extends React.Component{
    constructor(){
        super()
        this.state = {

        }
        this.drum4 = new Audio(drum4);
        this.drum5 = new Audio(drum5);
        this.drum7 = new Audio(drum7);
        this.drum8 = new Audio(drum8);
        this.drum6 = new Audio(drum6);
        this.drum9 = new Audio(drum9);
        this.drum1 = new Audio(drum1);
        this.drum2 = new Audio(drum2);
        this.drum3 = new Audio(drum3);
        
    }

    handleClick = e =>{
        let drumNum = e.target.id
        console.log(drumNum)
        if(parseInt(drumNum) === 7 ){
            console.log("jid")
            this.drum7.play()
        }
        if(parseInt(drumNum) === 8 ){
            console.log("jid")
            this.drum8.play()
        }
        if(parseInt(drumNum) === 4 ){
            console.log("jid")
            this.drum4.play()
        }
        if(parseInt(drumNum) === 5 ){
            console.log("jid")
            this.drum5.play()
        }
        if(parseInt(drumNum) === 6 ){
            console.log("jid")
            this.drum6.play()
        }
        if(parseInt(drumNum) === 9 ){
            console.log("jid")
            this.drum9.play()
        }
        if(parseInt(drumNum) === 1 ){
            console.log("jid")
            this.drum1.play()
        }
        if(parseInt(drumNum) === 2 ){
            console.log("jid")
            this.drum2.play()
        }
        if(parseInt(drumNum) === 3 ){
            console.log("jid")
            this.drum3.play()
        }

    }

    _handleKeyDown = (event) => {
        console.log(event.keyCode)
        switch( event.keyCode ) {
            case 97:
                this.drum7.play()
                break;
            
            case 98:
            this.drum8.play()
                break;
            
            case 99:
                this.drum9.play()
                break;
            case 100:
                this.drum4.play()
                break;
            case 101:
                this.drum5.play()
                break;
            case 102:
                this.drum6.play()
                break;
            case 103:
                this.drum1.play()
                break;
            case 104:
                this.drum2.play()
                break;
            case 105:
                this.drum3.play()
                break;
            default: 
                break;
        }
    }

    handleKeyPress = (event) => {
        console.log(event.key)
        if(event.key === 'Enter'){
          console.log('enter press here! ')
        }
      }

    componentDidMount(){
        document.addEventListener("keydown", this._handleKeyDown);
    }

    render(){
        return(
            <div class = "container1">
                <div class = "header">
                    <h1>React.js Drums</h1>
                    <h3>Simple responsive drum kit made using React.js and SCSS.</h3>
                </div>
                <div class="drums">
                    <div class="container2">
                        <button class="drum1" id="1" onClick = {this.handleClick}>Perc</button>
                        <button class="drum2" id="2" onClick = {this.handleClick}>Clap</button>
                        <button class="drum3" id="3" onClick = {this.handleClick}>Perc</button>
                        <button class="drum4" id="4" onClick = {this.handleClick}>Snare</button>
                        <button class="drum5" id="5" onClick = {this.handleClick}>Snare</button>
                        <button class="drum6" id="6" onClick = {this.handleClick}>Hat</button>
                        <button class="drum7" id="7" onClick = {this.handleClick}>Kick</button>
                        <button class="drum8" id="8" onClick = {this.handleClick}>Kick</button>
                        <button class="drum9" id="9" onClick = {this.handleClick}>Hat</button>
                    </div>
                </div>
                <div class="footer">
                    <h5>***Press the buttons to hear the sounds then use your NumPad to make a beat.***</h5>
                </div>
            </div>
        )
    }
}

export default Drums