import React, {useState} from "react"
import Icon from "./Components/Icon"
// react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// react strap
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row, Card, CardBody, Container } from 'reactstrap';
import "./App.css"

tictoktoeArray = new Array(9).fill("")
const App = ()=>{
    const [isCross, setIsCross]= useState(true)
    const [winnerMessage, setWinnerMessage]= useState("")

    const playAgain=() =>{
        setIsCross(true)
        setWinnerMessage("")
        tictoktoeArray.fill("")
    }

    const findWinner =({index}) =>{
        if(tictoktoeArray[0] == tictoktoeArray[1] && 
            tictoktoeArray[0] == tictoktoeArray[2]){
                console.log(tictoktoeArray[0])
            }
        else if(tictoktoeArray[3] == tictoktoeArray[4] && 
                tictoktoeArray[3] == tictoktoeArray[5]){
                    console.log(tictoktoeArray[3])
            }
        else if(tictoktoeArray[6] == tictoktoeArray[7] && 
                tictoktoeArray[6] == tictoktoeArray[8]){
                console.log(tictoktoeArray[6])
            }
        else if(tictoktoeArray[0] == tictoktoeArray[3] && 
            tictoktoeArray[0] == tictoktoeArray[6]){
            console.log(tictoktoeArray[0])
        }
        else if(tictoktoeArray[1] == tictoktoeArray[4] && 
            tictoktoeArray[1] == tictoktoeArray[5]){
            console.log(tictoktoeArray[1])
        }
        else if(tictoktoeArray[2] == tictoktoeArray[5] && 
            tictoktoeArray[2] == tictoktoeArray[8]){
            console.log(tictoktoeArray[2])
        }
        else if(tictoktoeArray[0] == tictoktoeArray[4] && 
            tictoktoeArray[0] == tictoktoeArray[8]){
            console.log(tictoktoeArray[0])
        }
        else if(tictoktoeArray[2] == tictoktoeArray[4] && 
            tictoktoeArray[2] == tictoktoeArray[6]){
            console.log(tictoktoeArray[2])
        }
    }

    const changeIcon =() =>{
          if(winnerMessage){
            return toast.success(winnerMessage, {
                position: toast.POSITION.BOTTOM_RIGHT
              });
          } 
          else if(tictoktoeArray[{index}]== ""){
              return  isCross? "cross" : "circle"
          }
          else{
            return toast.success("select a diffferent box", {
                position: toast.POSITION.BOTTOM_RIGHT
              }); 
          }
        
    }
    
}

export default App;