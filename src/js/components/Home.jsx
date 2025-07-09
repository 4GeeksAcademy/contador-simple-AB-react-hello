import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Digitos } from "./Digitos.jsx";
//create your first component
const Home = () => {

	const [timer, SetTimer] = useState(0)
	
	useEffect(()=>{},[])
	
	setTimeout(()=>{
		SetTimer(value=> value+1)	

	}, 1000)
	return (
		<div className="text-center">
			<Digitos number={<span className="fa fa-clock"></span>}/>
			<Digitos number={timer}/>
			<Digitos number={timer}/>
			<Digitos number={timer}/>
			<Digitos number={timer}/>
			<Digitos number={Math.floor((timer/10)%10)}/>
			<Digitos number={Math.floor(timer%10)}/>			
		</div>
	);
};


 

export default Home;