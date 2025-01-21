import { useState } from "react";
import { Header } from "./Header";

export function Template1(){

    const emailId=localStorage.getItem("email")

    const logoUrl="https://i.pinimg.com/736x/49/c8/8c/49c88cdfd0c378163bd6d45f2efaab46.jpg";
    
    const[uplaoding,setUploading]=useState(false);
    const [file,setFile]=useState(null);
    const [title,setTitle]=useState("");
    const [opening,setopening]=useState("");
    const [middle,setMiddle]=useState("");
    const [footer,setFooter]=useState("");

    const [data,setData]=useState({
        logo:logoUrl,
        title:{text:null,color:"white"},
        opening:{text:null,color:"white"},
        middle:{text:null,color:"white"},
        footer:{text:null,color:"white"},
    });

    async function handleImageUplaod() {

        try{
        if(!file){return;}
        setUploading(true)
        const imageData=new FormData();
        imageData.append("file",file);
        imageData.append("upload_preset","Email_Builder_Preset");
        imageData.append("cloud_name","djllmrckt");

        const res=await fetch("https://api.cloudinary.com/v1_1/djllmrckt/image/upload",{
            method:"POST",
            body:imageData
        });

        const imageUrlData= await res.json();

        setData({...data,logo:imageUrlData.url});

        setFile(null);
        }
        catch(err){
            alert(err);
        }
        finally{setUploading(false)} 
    }
    function handleReset(){
        setData({
            logo:logoUrl,
            title:{text:null,color:"white"},
            opening:{text:null,color:"white"},
            middle:{text:null,color:"white"},
            footer:{text:null,color:"white"},
        });
    }

    async function handleSaveData() {

        try {
            setUploading(true);
            const res=await fetch("https://emailbuilder-backend-rm7d.onrender.com/uploadEmailConfig",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    emailId,
                    data,
                    templateName:"Template1"
                })
            });
    
            const result=await res.json();

            alert("Data Saved");

            // console.log(result)
            
        } catch (error) {
            alert(error)
        }
        finally{setUploading(false);}
    }
    async function handleRender() {


        window.open(`https://emailbuilder-backend-rm7d.onrender.com/renderAndDownloadTemplate/${emailId}/1`, '_blank', 'noopener,noreferrer');

        // try {
        //     setUploading(true);
        //     const res=await fetch("http://localhost:4000/renderAndDownloadTemplate",{
        //         method:"POST",
        //         headers:{
        //             "Content-Type":"application/json"
        //         },
        //         body: JSON.stringify({
        //             emailId,
        //             data,
        //             templateName:"Template1"
        //         })
        //     });
    
        //     // const result=await res.json();

        //     console.log(res)
            
        // } catch (error) {
        //     // alert(error)
        //     console.log(error)
        // }
        // finally{setUploading(false)}
    }

    async function handleLastEdit() {

        const response=await fetch(`https://emailbuilder-backend-rm7d.onrender.com/recentdata/${emailId}/1`);

        const result=await response.json();

        if(result){
            setData({...result});
        }
        else{
            alert("no History found on the database");
        }
        
    }

    return(<>
    <Header></Header>

    <br />

    <div className="flex justify-center items-start ml-2 mr-2 ">
        <div className="w-[60%] border border-white  rounded-xl backdrop-blur-md">
            <div className=" rounded-xl  backdrop-blur-md text-white flex flex-col justify-center items-center p-[50px] font-mono ">

            <div className="flex flex-col justify-center items-center w-[700px] border border-white p-[20px] bg-black rounded-xl" >


            <img className="w-[100px] h-[100px] rounded-[500px]" src={data.logo} alt=""/>
            <h1 className={`text-3xl text-${data.title.color}-600`}>{!data.title.text&&"Title"}{data.title.text&&`${data.title.text}`}</h1>
            <br/>
            <div >{!data.opening.text && <p className={`text-${data.opening.color}-600 text-wrap`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis natus aperiam commodi, officia odit autem deleniti quo! Distinctio, dolore. In ducimus eveniet quo autem voluptas porro? Sit, tempora doloribus.
            Qui facere, consectetur non sint, deleniti voluptatem dolore, amet eveniet odit dolorum eligendi velit est quod ipsa eum impedit autem quos alias. Blanditiis veniam tempora dolores doloremque laborum rem consectetur.
            Ut recusandae porro voluptatibus sapiente doloribus, exercitationem quasi soluta itaque nobis repudiandae sint, pariatur veniam architecto ducimus a amet repellendus sunt eius explicabo delectus enim. Esse, eos? Amet, laboriosam commodi.</p> }
            {data.opening.text && <p className={`text-${data.opening.color}-600 `}>{`${data.opening.text}`}</p>}
            </div>

            <br/><br/>

            <div >{!data.middle.text && <p className={`text-${data.middle.color}-600`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto praesentium quas ipsam quam ipsum, excepturi dignissimos culpa. Qui tempora blanditiis ducimus maxime, atque fugiat veritatis tenetur dolore, ea et explicabo.
            Inventore porro voluptas, reiciendis sequi vel accusamus impedit ea tenetur, quae vero aspernatur odio, dicta eum? Provident rem, eligendi numquam, commodi eum et, deleniti enim delectus velit ipsum quisquam officiis?
            Illo non facilis labore accusantium ea aliquam quaerat veniam. Asperiores et, recusandae, id ut maxime porro nihil minima ducimus neque, accusamus sint molestiae numquam nemo sunt animi? Consectetur, voluptatibus hic.
            Dignissimos error hic odit harum, expedita, sint fugiat vitae repellendus fuga repudiandae nam consectetur. Eius, error, debitis adipisci nihil cum repellat dolorum, accusantium fugit deleniti explicabo tempora doloremque distinctio provident?
            Harum dolores nobis fugit consequatur temporibus sit, dolore ducimus dicta fugiat atque magnam eius, unde repudiandae ut at corrupti tempore! Ex ipsa modi, sunt possimus laborum eum incidunt asperiores necessitatibus.</p>}
            {data.middle.text && <p className={`text-${data.middle.color}-600`}>{`${data.middle.text}`}</p>}
            </div>

            <br/><br/>

            <div >{!data.footer.text && <p className={`text-${data.footer.color}-600`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, dolorum modi. Provident quis, tempora laboriosam doloremque ut error saepe, qui, officia excepturi expedita quisquam impedit quos ullam fugiat amet in.</p>}
            {data.footer.text && <p className={`text-${data.footer.color}-600`}>{`${data.footer.text}`}</p>}
            </div>
            </div>    
            </div>
        </div>

        <div className="w-[10%]">
            <div onClick={handleLastEdit} className="border bg-blue-600 rounded-lg p-1 text-center m-2 cursor-pointer font-bold duration-300 hover:scale-110">Last Upload</div>
            <div onClick={handleReset} className="border bg-red-600 rounded-lg p-1 text-center m-2 cursor-pointer font-bold duration-300 hover:scale-110">Reset</div>
        </div>

        <div className="w-[30%] border border-white flex flex-col justify-start items-center p-2 rounded-xl backdrop-blur-md">

            <div className="LOGO w-[100%] m-[10px] border rounded-md p-2  ">
            <div className="font-extrabold text-red-600">Change Logo</div>
                
            <input onChange={(e)=>{setFile(e.target.files[0])}} className="text-blue-600 p-[2px] rounded-xl" type="file" accept="image/png, image/jpeg" />
            <button disabled={uplaoding} onClick={handleImageUplaod} className="border border-red-600 bg-red-600 rounded-md p-1">{uplaoding?"Uploading":"Submit"}</button>
                

            </div>
            <div className="TITLE w-[100%] m-[10px] border rounded-md p-2">

                <div>
                    <div className="font-extrabold text-red-600">Change Title</div>
                    <div className="">
                    <input onChange={(e)=>{setTitle(e.target.value)}} className="rounded-md text-black p-[2px] w-[100%] m-[2px]" type="text" />
                    <button onClick={()=>{if(title==""){setData({...data,title:{...data.title,text:null}});return}setData({...data,title:{...data.title,text:title}})}} className="border border-red-600 bg-red-600 rounded-md p-1">Preview</button>
                    </div>
                </div>
                <div>
                    <div>Choose Color</div>
                    <div className="flex gap-5">
                    <div onClick={()=>{setData({...data,title:{...data.title,color:"red"}})}} className="cursor-pointer text-red-600">RED</div>
                    <div onClick={()=>{setData({...data,title:{...data.title,color:"green"}})}} className="cursor-pointer text-green-600">Green</div>
                    <div onClick={()=>{setData({...data,title:{...data.title,color:"white"}})}} className="cursor-pointer text-white-600">White</div>
                    <div onClick={()=>{setData({...data,title:{...data.title,color:"blue"}})}} className="cursor-pointer text-blue-600">Blue</div>
                    </div>
                </div>

            </div>
            <div className="OPENING w-[100%] m-[10px] border rounded-md p-2">
                <div>
                        <div className="font-extrabold text-red-600">Change Opening Paragraph</div>
                        <div>
                        <textarea onChange={(e)=>{setopening(e.target.value)}} className="text-black p-[2px] w-[100%] rounded-md border" name="opening" id=""></textarea>
                        <button 
                        onClick={()=>{if(opening==""){setData({...data,opening:{...data.opening,text:null}});return}setData({...data,opening:{...data.opening,text:opening}})}} 
                        className="border border-red-600 bg-red-600 rounded-md p-1">Preview</button>
                        </div>
                    </div>
                    <div>
                        <div>Choose Color</div>
                        <div className="flex gap-5">
                        <div onClick={()=>{setData({...data,opening:{...data.opening,color:"red"}})}} className="cursor-pointer text-red-600">RED</div>
                        <div onClick={()=>{setData({...data,opening:{...data.opening,color:"green"}})}} className="cursor-pointer text-green-600">Green</div>
                        <div onClick={()=>{setData({...data,opening:{...data.opening,color:"white"}})}} className="cursor-pointer text-White-600">White</div>
                        <div onClick={()=>{setData({...data,opening:{...data.opening,color:"blue"}})}} className="cursor-pointer text-blue-600">Blue</div>
                        </div>
                    </div>

            </div>
            <div className="BODY w-[100%] m-[10px] border rounded-md p-2">
            <div>
                        <div className="font-extrabold text-red-600">Change Body Paragraph</div>
                        <div>
                        <textarea 
                        onChange={(e)=>{setMiddle(e.target.value)}}
                        className="text-black p-[2px] w-[100%] rounded-md border" name="opening" id=""></textarea>
                        <button
                        onClick={()=>{if(middle==""){setData({...data,middle:{...data.middle,text:null}});return}setData({...data,middle:{...data.middle,text:middle}})}}
                         className="border border-red-600 bg-red-600 rounded-md p-1">Preview</button>
                        </div>
                    </div>
                    <div>
                        <div>Choose Color</div>
                        <div className="flex gap-5">
                        <div  onClick={()=>{setData({...data,middle:{...data.middle,color:"red"}})}} className="cursor-pointer text-red-600">RED</div>
                        <div  onClick={()=>{setData({...data,middle:{...data.middle,color:"green"}})}} className="cursor-pointer text-green-600">Green</div>
                        <div  onClick={()=>{setData({...data,middle:{...data.middle,color:"white"}})}} className="cursor-pointer text-white-600">White</div>
                        <div  onClick={()=>{setData({...data,middle:{...data.middle,color:"blue"}})}} className="cursor-pointer text-blue-600">Blue</div>
                        </div>
                    </div>

            </div>
            <div className="FOOTER w-[100%] m-[10px] border rounded-md p-2">
                    <div>
                        <div className="font-extrabold text-red-600">Change Footer</div>
                        <div>
                        <textarea
                        onChange={(e)=>{setFooter(e.target.value)}}
                         className="text-black p-[2px] w-[100%] rounded-md border" name="opening" id=""></textarea>
                        <button
                        onClick={()=>{if(footer==""){setData({...data,footer:{...data.footer,text:null}});return}setData({...data,footer:{...data.footer,text:footer}})}}
                         className="border border-red-600 bg-red-600 rounded-md p-1">Preview</button>
                        </div>
                    </div>
                    <div>
                        <div>Choose Color</div>
                        <div className="flex gap-5">
                        <div onClick={()=>{setData({...data,footer:{...data.footer,color:"red"}})}} className="cursor-pointer text-red-600">RED</div>
                        <div onClick={()=>{setData({...data,footer:{...data.footer,color:"green"}})}} className="cursor-pointer text-green-600">Green</div>
                        <div onClick={()=>{setData({...data,footer:{...data.footer,color:"white"}})}} className="cursor-pointer text-white-600">White</div>
                        <div onClick={()=>{setData({...data,footer:{...data.footer,color:"blue"}})}} className="cursor-pointer text-blue-600">Blue</div>
                        </div>
                    </div>

            </div>

            <div>
                <div disabled={uplaoding} onClick={handleSaveData} className="cursor-pointer border border-red-600 bg-blue-600 p-3 rounded-md font-bold m-2 text-center duration-300 hover:scale-110">Save Data on DataBase</div>
                <div disabled={uplaoding} onClick={handleRender}   className="cursor-pointer border border-red-600 bg-red-600 p-3 rounded-md font-bold m-2 text-center duration-300 hover:scale-110">Render template</div>
            </div>

        </div>
    </div>
    </>)
}