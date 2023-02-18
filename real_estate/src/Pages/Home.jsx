import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from '../components/Card';
import style from "../Styles/home.module.css";

const Home = () => {
    const [state,setState] = useState([]);
    useEffect(()=>{  
        axios.get('http://localhost:8080/Properties')
        .then((res)=>
        {
            setState(res.data);
        })
        .catch((err)=>console.log(err))
    },[])
  return (
    <div className={style.home}>
      
        <div className={style.overviewBox}>
            {
                state.map((ele)=>{
                    return <Card element={ele}/>
                })
            }
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Home