import React,{useState, useEffect} from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import {db} from '../../fire';
import Aux from "../../hoc/_Aux";
require('isomorphic-fetch');
 const BootstrapTable=()=>{
    const [handleComp, setHandleComp] = useState([])
    // const {lena, setLena} = usestate('')
    const fetchBlogs=async()=>{
      const ateenref =db.collection('Ateen_India');
      const res=await ateenref.get();
      const docs = res.docs 

      let dataArray = docs.map(doc => doc.data())
      setHandleComp(dataArray)
    }
    useEffect(() => {
      fetchBlogs();
    // fetch('https://console.firebase.google.com/project/dashboard-n/firestore/data~2FAteen_India?hl=pt-br')
    // .then(response => response.json())
    // .then(json = setHandleComp(json)); 
    }, [])

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>   
                            <Card.Body>
                            <Card.Title as="h5">The Brand You Check Details in: Select the Brand 👉 &nbsp;&nbsp;&nbsp;
                                {/* <select onChange={onChange} value={brand} name="brand"> */}
                                <select name="brand">
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
                                <Table responsive hover>
                                    <thead>
                                    {/* <Card.Title as="h5">Select the brand of data you want to find <select>
                                        <option>Suzuki</option>
                                        <option>Honda</option>
                                        <option>Hundai</option>
                                        <option>Mahindra</option>
                                        <option>Renault</option>
                                        <option>Nissan</option>
                                        <option>TaTa</option>
                                      </select></Card.Title> */}
                                    <tr>
                                        <th rowspan="2">S.No.</th>
                                        <th rowspan="2">Product Id</th>
                                        <th rowspan="2">Brand</th>
                                        <th rowspan="2">SCREEN SIZE/INCH</th>
                                        <th rowspan="2">PARTICULAR</th>
                                        <th rowspan="2">QUANTITY</th>
                                        <th colspan="2" ><center>1 + 16 GB</center></th>
                                        <th colspan="2"><center>2 + 16 GB</center></th>
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
        handleComp.map((item,mapId)=>{  
                                const {id, dprice2, dprice1, mrp2, quantity, mrp1, particulars, screen_size, brand} = item
                                       return<tr key={mapId}>
                                       <th>{mapId+1} </th>
                                       <td>{id} </td>
                                       <td>{brand} </td>
                                       <td>{screen_size} "</td>
                                       <td>{particulars}</td>
                                       <td>{quantity}</td>
                                       <td>{mrp1}</td>
                                       <td>{dprice1}</td>
                                       <td>{mrp2}</td>
                                       <td>{dprice2}</td>
                                      
                                         </tr>
                                    })
                                        }     
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                      
                    </Col>
                </Row>
            </Aux>
        );
    }
//}

export default BootstrapTable;