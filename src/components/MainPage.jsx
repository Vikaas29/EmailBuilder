import { useNavigate } from "react-router-dom";
import { Header } from "./Header";

export function MainPage(){

    const navigate=useNavigate();

    return (<>
    <Header></Header>

    <br /><br />

    <div className="flex flex-col justify-center items-center ">
    <div className="flex flex-col justify-center items-center w-[70%] p-[50px] rounded-3xl  backdrop-blur-lg gap-10">
        <div className="text-6xl">New Project</div>
        <br />
        <div className="flex justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center border bg-gradient-to-b from-cyan-500 to-purple-400 rounded-xl w-[300px] h-[400px] p-1 text-center duration-500 hover:scale-110 hover:bg-gradient-to-r hover:border-purple-600 hover:border-[5px]">
                <div className="text-yellow-300 font-bold text-4xl">Template 1</div>
                <br /><br />
                <div className="duration-300 cursor-pointer border bg-blue-600 rounded-xl p-[10px] hover:text-yellow-600 text-2xl hover:scale-105 hover:border-red-600"><a href="https://emailbuilder-backend-rm7d.onrender.com/getEmailLayout/1" target="blank">Preview</a></div>
                <br />
                <div onClick={()=>{navigate("/template1")}} className="duration-300 cursor-pointer border bg-blue-600 rounded-xl p-[10px] hover:text-green-600  w-[100px] text-2xl hover:scale-105 hover:border-red-600">New</div>
            </div>
            <div className="flex flex-col justify-center items-center border bg-gradient-to-b from-cyan-500 to-purple-400 rounded-xl w-[300px] h-[400px] p-1 text-center duration-500 hover:scale-110 hover:bg-gradient-to-r hover:border-purple-600 hover:border-[5px]">
                <div className="text-yellow-300 font-bold text-4xl">Template 2</div>
                <br /><br />
                <div className="duration-300 cursor-pointer border bg-blue-600 rounded-xl p-[10px] hover:text-yellow-600 text-2xl hover:scale-105 hover:border-red-600"><a href="https://emailbuilder-backend-rm7d.onrender.com/getEmailLayout/2" target="blank">Preview</a></div>
                <br />
                <div onClick={()=>{navigate("/template2")}} className="duration-300 cursor-pointer border bg-blue-600 rounded-xl p-[10px] hover:text-green-600  w-[100px] text-2xl hover:scale-105 hover:border-red-600">New</div>
            </div>
            <div className="flex flex-col justify-center items-center border bg-gradient-to-b from-cyan-500 to-purple-400 rounded-xl w-[300px] h-[400px] p-1 text-center duration-500 hover:scale-110 hover:bg-gradient-to-r hover:border-purple-600 hover:border-[5px]">
                <div className="text-yellow-300 font-bold text-4xl">Coming soon</div>
                <br /><br />
                <div className="duration-300 cursor-pointer border bg-blue-600 rounded-xl p-[10px] hover:text-yellow-600 text-2xl hover:scale-105 hover:border-red-600">Preview</div>
                <br />
                <div className="duration-300 cursor-pointer border bg-blue-600 rounded-xl p-[10px] hover:text-green-600  w-[100px] text-2xl hover:scale-105 hover:border-red-600">New</div>
            </div>
            
        </div>
        {/* <br /><br /><br />
        <div className="border w-[60vw]"></div>
        <br /><br /><br />
        <div>
            <div>Saved Templates</div>
            <br /><br />
            

        </div> */}
    </div>
    </div>
    
    </>)
}