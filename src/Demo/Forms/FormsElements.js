import React ,{useState} from 'react';
import {Row, Col, Card, Form, Button,} from 'react-bootstrap';
import{db} from '../../fire';
import Aux from "../../hoc/_Aux";
import moment from 'moment'

// class FormsElements extends React.Component {

    const FormsElements = () => {
    const [handleComp, setHandleComp] = useState({})
    const onChange = e => setHandleComp({...handleComp, [e.target.name]: e.target.value})
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log("check handleComp >>>", handleComp)
        console.log(dprice2, dprice1, mrp2, mrp1, particulars, screen_size, brand)
        // if(){
            const statsRef = await db.collection("Ateen_India").doc("--stats--");
            const counterDoc = await statsRef.get()
            let counter = counterDoc.exists ? counterDoc.data().counter : 1
            let zeroStr ="000"
            let counterStr = `${counter}`
            let ateenId = `APD${moment().format("YYMM")}${zeroStr.substring(counterStr.length)+counterStr}`
    
            db.collection('Ateen_India').doc(ateenId).set({
                brand:brand,
                quantity:quantity,
                id:ateenId,
                screen_size:screen_size,
                particulars:particulars,
                mrp1:mrp1,
                mrp2:mrp2,
                dprice1:dprice1,
                dprice2:dprice2
            }).then(()=>{
                    counterDoc.exists ? statsRef.update({counter : counter+1}):statsRef.set({counter:counter+1})
                 }).then(() =>{
                    setHandleComp({
                        brand:'',
                        quantity:'',
                        dprice2: '', 
                        dprice1: '', 
                        mrp2: '', 
                        mrp1: '', 
                        particulars: '', 
                        screen_size: ''
                    })
                    console.log(">>>>>", dprice2, dprice1, mrp2, mrp1, particulars, screen_size)
                alert('data has been submited 👍');
                
            }).catch((error) =>{
                alert(error.message);
                });
                setHandleComp({}) 
        // }
            
    };
    
    const {dprice2, dprice1, mrp2, mrp1, particulars,quantity, screen_size, brand} = handleComp
    console.log(">>>>", handleComp)
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                            <Form.Group controlId="exampleForm.ControlInput1">
                            
                                <Card.Title as="h5">The Brand You Put Data in: Select the Brand 👉 &nbsp;&nbsp;&nbsp;
                                <select onChange={onChange} value={brand} name="brand">
                                <option>Select here</option>
                                <option  value="suzuki" >Suzuki</option>
                                <option  value="honda" >Honda</option>
                                <option  value="hundai">Hyundai</option>
                                <option  value="mahindra" >Mahindra</option>
                                <option  value="renault" >Renaults</option>
                                <option  value="nissan" >Nissan</option>
                                <option  value="tata" >Tata</option>
                                <option  value="suzuki" >Skoda</option>
                                <option  value="honda" >Toyota</option>
                                <option  value="hundai">Volkswagen</option>
                                <option  value="mahindra" >Jeep</option>
                                <option  value="renault" >Chevorolet</option>
                                <option  value="nissan" >Ford</option>
                                <option  value="suzuki" >Mitsudisha</option>
                                <option  value="honda" >Isuzu</option>
                                <option  value="hundai">Mercedes</option>
                                <option  value="mahindra" >Mg</option>
                                <option  value="renault" >Kia</option>
                                <option  value="nissan" >Flat</option>
                                
                                </select></Card.Title>
                                </Form.Group>
                            </Card.Header>
                            <Card.Body>
                                <h5> Add Product Details</h5>
                                <hr/>
                                <Row>
                                    <Col md={6}>
                                        <Form>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Screen_size</Form.Label>
                                                <Form.Control type="number" placeholder="Screen_size" name ="screen_size"
                                                value={screen_size} onChange={onChange} required="" />
                                            </Form.Group>
                                            {/* <Form.Group controlId="formBasicChecbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group> */}
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>particulars</Form.Label>
                                            <Form.Control type="text" placeholder="Particulars" name ="particulars"
                                             value={particulars} onChange={onChange} required="" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control type="number" placeholder="Quantity" name ="quantity"
                                            value={quantity} onChange={onChange} required= "" />
                                            </Form.Group>
                                        </Form>

                                    </Col>

                                    <Col md={6}>

                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>1 + 16 GB</Form.Label>
                                            <Form.Control type="number" placeholder="MRP"  name ="mrp1"
                                                value={mrp1} onChange={onChange} required
                                            /><br></br>
                                            <Form.Control type="number" placeholder="D.Price" name ="dprice1"
                                            value={dprice1} onChange={onChange} required />
                                        </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>2 + 16 GB</Form.Label>
                                            <Form.Control type="number" placeholder="MRP" name ="mrp2"
                                            value={mrp2} onChange={onChange} required/><br></br>
                                            <Form.Control type="number" placeholder="D.Price" name ="dprice2"
                                            value={dprice2} onChange={onChange} required />
                                        </Form.Group>
                                            
                                         
                                         <Button variant="primary" onClick={handleSubmit}>
                                                Submit
                                            </Button>  
                                        
                                    </Col>
                                </Row>
                            </Card.Body>
                </Card>
            </Col>
                 </Row>
            </Aux>
        );
    }

    
    export default FormsElements;
  