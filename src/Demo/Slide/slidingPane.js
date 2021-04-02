import React,{useState, useEffect} from 'react';
import {Row, Col, Card, Table, Form} from 'react-bootstrap';
import SlidingPane from "react-sliding-pane"
import {db} from '../../fire';
import Aux from "../../hoc/_Aux";
import avatar1 from '../../assets/images/aa.png'; 
import { Button} from 'react-bootstrap';    

const Sliding = (props)=> {
    const [handleComp, setHandleComp] = useState(props.data)

const onChange = e => setHandleComp({...handleComp, [e.target.name]: e.target.value})
const updateValue =async () =>{
    const change = await db.collection("Ateen_India").doc(props.data.id)
    .update({
    //   "cancel":true
    // cancel:false,
    brand:brand,
    quantity:quantity,
    createAt:createAt,
    screen_size:screen_size,
    particulars:particulars,
    mrp1:mrp1,
    mrp2:mrp2,  
    dprice1:dprice1,
    dprice2:dprice2
}).then(()=>{
    setHandleComp({
        // cancel:false,
        createAt:'',
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
alert('data has been updated 👍');

}).catch((error) =>{
alert(error.message);
});

console.log(change);
    }
const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  })
 
  const {dprice2, dprice1, mrp2, mrp1, particulars, quantity, screen_size, brand, createAt }= handleComp
console.log(dprice2, brand)
 
return (
    <Aux>
        <Row>
            <Col>
                <Card>
                <SlidingPane
className="some-custom-class"
overlayClassName="some-custom-overlay-class"
isOpen={state.isPaneOpen}
title="Up to date"
// subtitle="Optional subtitle."
onRequestClose={() => {
  // triggered on "<" on left top click or on outside click
  setState({ isPaneOpen: false });
}}
> 
         <Card.Header>
         
              <Form.Group controlId="exampleForm.ControlInput1">
                  <Card.Title as="h5">Update Brand 👉 &nbsp;&nbsp;&nbsp;
                  <select class="custom-select"  value={brand} onChange={onChange} name="brand"
                   style={{width:"200px" , marginLeft:"-10px" , marginTop:"-5px"}}>
                  <option>{brand || 'BRAND'}</option>
                  <option  value="suzuki" >Suzuki</option>
                  <option  value="honda" >Honda</option>
                  <option  value="hundai">Hyundai</option>
                  <option  value="mahindra" >Mahindra</option>
                  <option  value="renault" >Renaults</option>
                  <option  value="nissan" >Nissan</option>
                  <option  value="tata" >Tata</option>
                  <option  value="Skoda" >Skoda</option>
                  <option  value="Toyota" >Toyota</option>
                  <option  value="Volkswagen">Volkswagen</option>
                  <option  value="Jeep" >Jeep</option>
                  <option  value="Chevorolet" >Chevorolet</option>
                  <option  value="Ford" >Ford</option>
                  <option  value="Mitsudisha" >Mitsudisha</option>
                  <option  value="Isuzu" >Isuzu</option>
                  <option  value="Mercedes">Mercedes</option>
                  <option  value="Mg" >Mg</option>
                  <option  value="Kia" >Kia</option>
                  <option  value="Flat" >Flat</option>    
                  </select>
                  </Card.Title>
                  </Form.Group>
      </Card.Header><br></br>
                  <h5> Update Product Details</h5><br></br>
                  <Row>
                      <Col md={3}>
                         
                              <Form.Group controlId="exampleForm.ControlInput1">
                                  <Form.Label>Screen_size</Form.Label>
                                  <Form.Control type="number" placeholder="Screen_size" name="screen_size" 
                                value={screen_size} onChange={onChange} required="" />
                              </Form.Group>
                             
                               <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Label>particulars</Form.Label>s
                              <Form.Control type="text" placeholder="Particulars" name ="particulars"
                               value={particulars} onChange={onChange} required="" />
                          </Form.Group>
                          <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Label>Quantity</Form.Label>
                              <Form.Control type="number" placeholder="Quantity" name ="quantity"
                              value={quantity} onChange={onChange} required= "" />
                              </Form.Group>
                             {/* <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Label>Date</Form.Label>
                              <Form.Control type="date" placeholder="Date" name ="addDate"
                              value={createAt} onChange={onChange} required= "" />
                              </Form.Group> */}
                              
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
                           <Button variant="primary"  onClick={() => updateValue({isPaneOpen: true})}>
                                  Update
                              </Button>
                    </Col>
             </Row>
</SlidingPane>
 <Button variant="outline-secondary"  onClick={() => setState({isPaneOpen: true})}>
                              <img  style={{width: '20px'}} src={avatar1} alt="activity-user"/>
                            </Button>
                </Card>
            </Col>
        </Row>
    </Aux>
)       
}
export default Sliding;