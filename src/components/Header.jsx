import { useNavigate } from "react-router-dom";

export function Header(){
    const navigate=useNavigate();

    const userName=localStorage.getItem("userName");

    return (<>
    <header className="flex justify-center items-center pl-5 pr-5 p-2 backdrop-blur-md ">

    <div onClick={()=>{navigate("/")}} className="mr-[20px] cursor-pointer border border-gray-600  rounded-lg bg-green-600 text-green-800 w-fit duration-300 hover:scale-110"><img src="/images/home.png" alt="" /></div>
        <div className="cursor-pointer text-3xl w-[80%] text-start duration-300 hover:text-red-600 ">
            Email Builder
        </div> 
        <div className="flex justify-end items-center w-[100%] gap-2">
    
            <div className="font-bold text-blue-500 text-xl">{userName}</div>
            
            <div onClick={()=>{localStorage.clear();navigate("/")}} className="p-2 text-xl cursor-pointer border-[2px] border-red-600 rounded-lg bg-gray-600 text-red-600 w-fit duration-300 hover:text-yellow-400 hover:scale-110 ">Logout</div>
    </div>
    </header>
    
    
    </>)
}