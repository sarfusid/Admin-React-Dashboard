import React,{useState, useEffect} from 'react'
import {Row, Col, Card, Table, Form} from 'react-bootstrap';
import {db} from '../../fire';
import Aux from "../../hoc/_Aux";
import Sliding from '../Slide/slidingPane';
import { Button} from 'react-bootstrap';
import "react-sliding-pane/dist/react-sliding-pane.css";
import avatar1 from '../../assets/images/aa.png';
import avatar2 from '../../assets/images/delete.png';
import SonWan from "sonwan-ui";
import "sonwan-ui/build/style.min.css";
import moment from 'moment'
//import car from '../../assets/images/user/car.jpg'
 import '../Tables/table.css';
 const BootstrapTable=()=>{
    const [handleComp, setHandleComp] = useState({})
    const [handleChange, setHandleChange] = useState([])
    // const onChange = (e) => setHandleComp({...handleComp, [e.target.name]: e.target.value})
    const onChange=async(e)=> {
      const brandName = e.target.value;
      // console.log('>>>',e.target.value)
      const lena = await db.collection("Ateen_India").where("brand", "==", brandName).where('cancel', '==', false).get();
      if(lena.docs.length){
        console.log("Change hoga")
        let dataArray = lena.docs.map(doc => doc.data())
        setHandleComp({...handleComp, 'data': dataArray})
      } else {
        setHandleComp([])
      }
    
    }

      const fetchBlogs=async(e)=>{
              const ateenref = await  db.collection('Ateen_India').where('cancel','==',false).get()        
               const docs = ateenref.docs 
               let dataArray = docs.map(doc => doc.data())
              //  console.log("DATA ARRAY >>", dataArray)
             setHandleComp({...handleComp, data: dataArray})
             console.log(data)
            }
    useEffect(() => {
      fetchBlogs();
    }, [])
    const onCheck = async(e)=>{
      const createDate = e.target.name;
      const dena = await db.collection("Ateen_India").where("createAt", "==", createDate)
      .where("cancel","==",false)
      // .startAt(createAt).endAt(createAt).get();
      dena.orderBy(particulars).startAt(createDate).endAt(createDate + "\uf8ff").get();
      // if(dena.docs.length ){  
      //   console.log("Change hoga")
      //   let dataArray = dena.docs.map(doc => doc.data()) 
      //   setHandleComp(dataArray)
      // } else {
      //   setHandleComp([])
      // }
    }
     const deleteValue =async (id) =>{
     const change = await db.collection("Ateen_India").doc(id)
     .update({
       "cancel":true
     });

 console.log(change);
     } 
  
    //  const forSliding = (item)=>{
    //     setHandleComp({...handleComp, 'slidingData': item, "Open":true})
    //  }
  const {dprice2, dprice1, mrp2, mrp1, particulars, quantity, screen_size, brand, createAt} = handleComp
  // handleChange = s{ dprice2, dprice1, mrp2, mrp1, particulars, quantity, screen_size, brand, addDate}      // const {dprice2, dprice1, mrp2, mrp1, particulars,quantity, screen_size, brand, addDate} = setHandleComp
    console.log(">>>>", handleComp)
    const { Input, Switch, ListItem } = SonWan;

    const [isDark, setIsDark] = React.useState(false);

    const { data, Open, slidingData } = handleComp
     return (
            <Aux>
                <Row>
                    <Col>
                        <Card>   

                        <div className={`${isDark ? "dark" : ""} h-screen`}>
      <div className="h-screen bg-light-100 dark:bg-dark-900 ">
          <ListItem
            title="Dark Mode" 
            action={ <Switch name="darkmode" onChange={(value) => {setIsDark(value); }}  />
            }
          />
          <hr color="#2980b9"></hr>
                            <Card.Body>
                            {/* <div style={{marginLeft: "60%"}}> */}
                                      <Form > <Row style={{marginLeft:"725px"}}>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Check-from</Form.Label>
                                            <Form.Control type="date" placeholder="Date" name="createAt" 
                                            value={createAt} onChange={onCheck} required= "" style={{width:"200px"}} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Check-to</Form.Label>
                                            <Form.Control type="date" placeholder="Date" name="createAt"
                                            value={createAt}  onChange={onCheck} required= "" />
                                            </Form.Group>
                                            </Row></Form>
                                            
            <select class="custom-select"  value={brand} onChange={onChange} name="brand"
                   style={{width:"200px" , marginLeft:"-10px" , marginTop:"-95px"}}>
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
            {/* <button onClick={fetchData}>Suzuki</button> */}
          {/* </div> */}
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th rowspan="2">S.No.</th>
                                        <th rowspan="2">Product Id</th>
                                        <th rowspan="2">Date</th>
                                        <th rowspan="2">Brand</th>
                                        <th rowspan="2">SCREEN SIZE</th>
                                        <th rowspan="2">PARTICULAR</th>
                                        <th rowspan="2">QUANTITY</th>
                                        <th colspan="2" ><center>1 + 16 GB</center></th>
                                        <th colspan="2"><center>2 + 16 GB</center></th>
                                        <th rowspan="2">Edit</th>
                                        <th rowspan="2">Delete</th>
                                        </tr>
                                        <tr>
                                            <th>MRP</th>
                                            <th>PRICE</th>
                                            <th>MRP</th>
                                            <th>PRICE</th>
                                     </tr>                     
                                    </thead>
                                    <tbody>
                                        {
        data?.map((item,mapId)=>{  
                                const {id, dprice2,  dprice1, mrp2, quantity, mrp1, particulars, screen_size, brand, createAt} = item
                                       return( id  && 
                                       <tr key={mapId}>
                                       <th>{mapId+1} </th>
                                       <td>{id} </td>
                                       <td>{moment.unix(createAt).format("MM/DD/YYYY")}</td>
                                       <td>{brand} </td>
                                       <td>{screen_size} "</td>
                                       <td>{particulars}</td>
                                       <td>{quantity}</td>
                                       <td>{mrp1}</td>
                                       <td>{dprice1}</td>
                                       <td>{mrp2}</td>
                                       <td>{dprice2}</td>
                                        <Sliding data={item} />
                            
                            {/* <td> */}
                            {/* <Button variant="outline-secondary"  onClick={() => setState({isPaneOpen: true})}>
                              <img  style={{width: '20px'}} src={avatar1} alt="activity-user"/>
                            </Button> */}
                            {/* <Button variant="outline-secondary"  onClick={() => forSliding(item,data,Open ,slidingData)}>
                              <img  style={{width: '20px'}} src={avatar1} alt="activity-user"/>
                            </Button> */}
                              <td><Button variant="outline-secondary"  onClick={() => deleteValue(id)}>
                              <img  style={{width: '20px'}} src={avatar2} alt="activity-user"/>
                            </Button>
                            </td>       
                                         </tr>
                                       )
                                    })
                                        }     
                                    </tbody>
                                </Table>
                            </Card.Body>
                            </div>
      </div>
    {/* </div> */}
                        </Card>
                      
                    </Col>
                </Row>
            </Aux>
        );
    }
//}

export default BootstrapTable;
