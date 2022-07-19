import React,{useState,useEffect} from 'react';


function Country() {
  const countries =[
    {id:"1",name:"INDIA"},
    {id:"2",name:"USA"}
  ];
  const states=[
    {id:"1",countryId:"1",name:"HARYANA"},
    {id:"2",countryId:"1",name:"DELHI"},
    {id:"3",countryId:"2",name:"TEXAS"},
    {id:"4",countryId:"2",name:"CALIFORNIA"}
    
  ]
  const cities=[
    {id:"1",stateId:"1",name:"Faridabad"},
    {id:"2",stateId:"1",name:"Palwal"},
    {id:"2",stateId:"2",name:"Mandi House"},
    {id:"3",stateId:"2",name:"Kalka Ji"},
    {id:"1",stateId:"3",name:"Housten"},
    {id:"2",stateId:"3",name:"Austin"},
    {id:"3",stateId:"4",name:"Los Angeles"},
    {id:"4",stateId:"4",name:"San Diago"},

  ]
  const [cntr, setCntr]= useState([]);
  const [state, setState]= useState([]);
  const [city, setCity] = useState([]);

  useEffect(()=>{
  setCntr(countries);
},[])
const TestCountry = (id) =>
{
   const dt = states.filter(x=>x.countryId ===id);
   setState(dt);
}
const TestState = (id) =>
{
   const dt = cities.filter(x =>x.stateId ===id);
   setCity(dt);
}
  return (
    <div>
      <select id="ddlCountry" className='form-control select-class' onChange={(e) =>TestCountry(e.target.value)}>
        <option value="0">Select Country</option>
      {
        cntr &&
        cntr !== undefined ?
        cntr.map((ctr,index)=> {
          return(
           <option key={index} value={ctr.id}>{ctr.name}</option>
          )
        })
        :"No Country"
      }
      </select>
      <br></br>
      <select id="ddlStates" className='form-control select-class' onChange={(e) =>TestState(e.target.value)}>
        <option value="0">Select State</option>
      {
        state &&
        state !== undefined ?
        state.map((ctr,index)=> {
          return(
           <option key={index} value={ctr.id}>{ctr.name}</option>
          )
        })
        :"No State"
      }
      </select>
      <br></br>
      <select id="ddlCity" className='form-control select-class' >
        <option value="0">Select City</option>
      {
        city &&
        city !== undefined ?
        city.map((ctr,index)=> {
          return(
           <option key={index} value={ctr.id}>{ctr.name}</option>
          )
        })
        :"No City"
      }
      </select>
    </div>
  );
}


export default Country;