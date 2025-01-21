import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom"

export function LandingPage(){

    const[serverCheck,setServerCheck]=useState(null);


    const navigate = useNavigate();

    const userName=localStorage.getItem("userName");

    async function fetchData() {
        const response= await fetch("https://emailbuilder-backend-rm7d.onrender.com/checkserverstatus");
        const result = await response.json();

        setServerCheck(result);


        if(userName && result){navigate("/mainpage")}

    }

    useEffect( ()=>{
        
        const a=fetchData();
        
        if(!serverCheck){
            const clear=setInterval(() => {
                fetchData();
                if(serverCheck){
                    clearInterval(clear);
                }
            }, 5000);

            return ()=>{clearInterval(clear)}
        }
    },[])

    if(!serverCheck){
        return (<>

        <div className="w-[100%] flex justify-center items-center" >
        <div className="w-[60%] flex flex-col justify-center items-center text-2xl backdrop-blur-xl m-10 p-10 rounded-2xl">
            <p className="text-red-600">The Backend of this website is hosted on "RENDER".</p>
            <p className="text-red-600">It takes a while for the server instance to start.</p>
            <p className="text-red-600">   Please Wait</p>
            
            <img src="images/loading.png" className="loading" alt="" />
        </div>
        </div>
        </>)
    }

    return (<>
    <main className=" flex flex-col justify-center items-center w-[100%] h-[80vh] gap-10">
        <div className=" backdrop-blur-md rounded-xl flex flex-col justify-center items-center h-[80%] w-[80%] gap-10 duration-200 hover:backdrop-blur-2xl " >
            <div>
                <h1 className="text-5xl duration-300 hover:text-blue-600">Welcome to Email Builder</h1>
            </div>
            <div className="border border-white w-[70%]">

            </div>
            <div className=" flex flex-col justify-center items-center gap-10 text-2xl">
                <div onClick={()=>{navigate("/login")}} className="cursor-pointer border border-gray-600 p-2 rounded-lg bg-gray-600 text-cyan-600 duration-300 hover:scale-150 hover:text-yellow-400 hover:border-red-600">
                    Login
                </div>
                <div onClick={()=>{navigate("/register")}} className="cursor-pointer border border-gray-600 p-2 rounded-lg bg-gray-600 text-red-600 duration-300 hover:scale-150 hover:text-yellow-400 hover:border-red-600">
                    Register
                </div>
            </div>
        </div>
    </main>
    </>)
}