import React,{useState, useEffect} from 'react';
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';
import {db} from '../../fire';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import akash1 from '../../assets/images/user/akash-1.jpg';
import akash2 from '../../assets/images/user/akash-2.jpg';
import akash3 from '../../assets/images/user/akash-3.jpg';
import akash4 from '../../assets/images/user/akash-5.jpg';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const Dashboard=()=>{
    const [handleComp, setHandleComp] = useState([])
    const fetchBlogs=async()=>{
      const ateenref =db.collection('Ateen_India');
      const res=await ateenref.get();
      const docs = res.docs 
      let dataArray = docs.map(doc => doc.data())
      setHandleComp(dataArray)
    }
    useEffect(() => {
      fetchBlogs();
 
    }, [])

// class Dashboard extends React.Component {
    // render() {
        const tabContent = (
            <Aux>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Silje Larsen</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>3784</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Julie Vad</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>3544</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Storm Hanse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>2739</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Frida Thomse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>1032</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Silje Larsen</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>8750</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Storm Hanse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>8750</span>
                    </div>
                </div>
            </Aux>
        );

        return (
            <Aux>
                <Row>
                    <Col md={8} xl={5}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>The Brand You Check Data in: Select the Brand 👉 &nbsp;&nbsp;&nbsp;
                                {/* <select onChange={onChange} value={brand} name="brand"> */}
                                <select  name="brand">
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
                                
                                </select></h6>
                                {/* <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> $249.95</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">50%</p>
                                    </div>
                                </div>
                                {/* <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                </div> */}
{/* {
                                handleComp.map((item,mapId)=>{  
                                const {id, dprice2, dprice1, mrp2, mrp1, particulars, screen_size, brand} = item
                                       return<tr key={mapId}>
                                       <td>{brand} </td>
                                         </tr>
                                    }) */}
                                        {/* }      */}
                                    {/* </tbody> */}
                                {/* </Table> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            {/* <Card.Body>
                                <h6 className='mb-4'>Monthly Sales</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-5"/> $2.942.32</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">36%</p>
                                    </div>
                                </div>
                                {/* <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
                                </div> */}
                            {/* </Card.Body>  */}
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            {/* <Card.Body>
                                <h6 className='mb-4'>Yearly Sales</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> $8.638.32</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">70%</p>
                                    </div>
                                </div>
                                {/* <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                </div> */}
                            {/* </Card.Body>  */}
                        </Card>
                        </Col>
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={akash1} className="sliderimg" alt="" width="100%" height="700" />
                <img src={akash2} className="sliderimg" alt="" width="100%" height="700"/>
                <img src={akash3} className="sliderimg" alt="" width="100%" height="700"/>
                <img src={akash4} className="sliderimg" alt=""  width="100%" height="700"/>
            </AliceCarousel>

                </Row>
            </Aux>
        );
    }
// }

export default Dashboard;