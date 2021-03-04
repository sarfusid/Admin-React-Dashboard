import React,{useState, useEffect} from 'react';
import NVD3Chart from 'react-nvd3';
import {db} from '../../../fire';

const Ateen_india = [
    {key: "Suzuki", y: 29, color: "#ff8a65"},
    {key: "Honda", y: 0, color: "#f4c22b"},
    {key: "Hyundai", y: 32, color: "#04a9f5"},
    {key: "Mahindra", y: 196, color: "#3ebfea"},
    {key: "Renault", y: 2, color: "#4F5467"},
    {key: "Nissan", y: 98, color: "#1de9b6"},
    {key: "Tata", y: 13, color: "#a389d4"},
];

// class PieBasicChart extends React.Component {
const PieBasicChart=()=>{
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
      console.log('chal ja sale varna pitega');
    }, [])
    // const quantity=()=>{
    //     const count =
    // }
    // render() {
         return<> <NVD3Chart id="chart" height={300} type="pieChart" datum={Ateen_india} x="key" y="y"  />

         {
            handleComp.map((item,mapId)=>{  
                                    const {id, dprice2, dprice1, mrp2, quantity, mrp1, particulars, screen_size, brand} = item
                                           return<tr key={mapId}>
                                           <td>{brand} </td>
                                           
                                             </tr>
                                        })
                                            }
                                            </>
 }
export default PieBasicChart;
