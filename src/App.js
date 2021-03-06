import React, {useState} from "react"
import Icon from "./Components/Icon"
// react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// react strap
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row, Card, CardBody, Container } from 'reactstrap';
import "./App.css"

const tictoktoeArray = new Array(9).fill("")
const App = ()=>{
    const [isCross, setIsCross]= useState(true)
    const [winMessage, setWinMessage]= useState("")

    const playAgain=() =>{
        setIsCross(true)
        setWinMessage("")
        tictoktoeArray.fill("")
    }

    const findWinner =() =>{
        if(tictoktoeArray[0] == tictoktoeArray[1] && 
            tictoktoeArray[0] == tictoktoeArray[2]
            && (tictoktoeArray[0] != "")
            ){
                setWinMessage(tictoktoeArray[0])
            }
        else if(tictoktoeArray[3] == tictoktoeArray[4] && 
                tictoktoeArray[3] == tictoktoeArray[5]
                && (tictoktoeArray[3] != "")
                ){
                    setWinMessage(tictoktoeArray[3])
            }
        else if(tictoktoeArray[6] == tictoktoeArray[7] && 
                tictoktoeArray[6] == tictoktoeArray[8]
                && (tictoktoeArray[6] != "")
                ){
                    setWinMessage(tictoktoeArray[6])
            }
        else if(tictoktoeArray[0] == tictoktoeArray[3] && 
            tictoktoeArray[0] == tictoktoeArray[6]
            && (tictoktoeArray[0] != "")
            ){
                setWinMessage(tictoktoeArray[0])
        }
        else if(tictoktoeArray[1] == tictoktoeArray[4] && 
            tictoktoeArray[1] == tictoktoeArray[5]
            && (tictoktoeArray[1] != "")
            ){
                setWinMessage(tictoktoeArray[1])
        }
        else if(tictoktoeArray[2] == tictoktoeArray[5] && 
            tictoktoeArray[2] == tictoktoeArray[8]
            && (tictoktoeArray[2] != "")
            ){
                setWinMessage(tictoktoeArray[2])
        }
        else if(tictoktoeArray[0] == tictoktoeArray[4] && 
            tictoktoeArray[0] == tictoktoeArray[8]
            && (tictoktoeArray[0] != "")
            ){
                setWinMessage(tictoktoeArray[0])
        }
        else if(tictoktoeArray[2] == tictoktoeArray[4] && 
            tictoktoeArray[2] == tictoktoeArray[6]
            && (tictoktoeArray[2] != "")
            ){
                setWinMessage(tictoktoeArray[2])
        }
    }

    const changeIcon =(index) =>{  
          if(winMessage){
            return toast.success("The game has already ended please reload", {
                position: toast.POSITION.BOTTOM_RIGHT
              });
          } 
          else if(tictoktoeArray[index]== ""){
            tictoktoeArray[index] = isCross? "cross" : "circle"
            setIsCross(!isCross)
             
          }
          else{
            return toast("Its already filled", {type: "error"})
          }
          findWinner()
    }


    return(
        <Container className="p-5">
             <ToastContainer position="bottom-center"></ToastContainer>
           <Row>
                <Col md={6} className="offset-md-3">
                    
                    {
                        winMessage ? (
                            <div className="mb-2 mt-2 text-center">
                                <h1 className="text-primary text-uppercase text-center"> Winner is {winMessage}</h1>
                                <Button color="success" onClick={playAgain}>
                                       Reset
                                    </Button>
                            </div>
                        )  : (
                            <h1 className="text-warning  text-center">
                                {isCross ? "Cross" : "Circle"} 's turn
                            </h1>
                        )
                    }

                      <div className="grid">
                      {tictoktoeArray.map((value,index)=>(
                        <Card onClick={()=> changeIcon(index) } >
                           <CardBody className="box">
                              <Icon choice={value}/>   
                           </CardBody>
                        </Card>
                      ))}
                      
                      </div> 
                       
                   
                    
                     
                </Col>

           </Row>


        </Container>


        
    )
    
}

export default App;