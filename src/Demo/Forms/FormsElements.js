import React ,{useState} from 'react';
import {Row, Col, Card, Form, Button,} from 'react-bootstrap';
import{db, storage} from '../../fire';
import fire from '../../fire';
import Aux from "../../hoc/_Aux";
import moment from 'moment'

// class FormsElements extends React.Component {
    const FormsElements = () => {
        // const [fileUrl, setFileUrl] =useState(null)
        const onFileChange = async(e) =>{
            const file= e.target.files[0]
            const storageRef = fire.storage().ref()
            const fileRef = storageRef.child(file.name)
            // await fileRef.put(file)
            //  setFileUrl ( await fileRef.getDownloadUrl())
            await fileRef.put(file).then(()=>{
                console.log("uploaded file",file.name)
            })
        }
        
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
            var today = new Date();
            var unixTimestamp = moment(today, 'YYYY.MM.DD').unix(); 
            db.collection('Ateen_India').doc(ateenId).set({
                cancel:false,
                brand:brand,
                quantity:quantity,
                id:ateenId,
                createAt:unixTimestamp,
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
                        cancel:false,
                        // image:'',
                        createAt:'unixTimestamp',
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
    //   const lena =  db.collection('Ateen_India').doc('--stats--').get(particulars);
    //   alert(lena);
    };
       
    const {dprice2, dprice1, mrp2, mrp1, particulars,quantity, screen_size, brand, image, addDate} = handleComp
    console.log(">>>>", handleComp)
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                            <Form.Group controlId="exampleForm.ControlInput1">
                            
                                <Card.Title as="h5">The Brand You Put Data in: Select the Brand 👉 &nbsp;&nbsp;&nbsp;
                                <select className="browser-default custom-select" aria-label="Default select example" onChange={onChange} value={brand} name="brand" style={{width:"200px"}}>
                                <option>Brand</option>
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
                                            {/* <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control type="date" placeholder="Date" name ="addDate"
                                            value={addDate} onChange={onChange} required= "" />
                                            </Form.Group> */}
                                        </Form>

                                    </Col>

                                    <Col md={3}>
                                    {/* <Form.Control ref={register} type="file" name ="image"
                                              required onChange={onChange} /><br></br> */}
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
                                    </Col>

                                        <Col md={3}>
                                        <Form.Control type="file"  onChange={onFileChange} />

                                        <br></br>
                                         
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
  