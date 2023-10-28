import Card from './newreact';
import Obj from './display';
import {useState} from 'react';
function Header(){
    const [tit,setTit]=useState("All");
    const [Data,setData]=useState(Obj);
     function Handler(event)
     {
        setTit(event.target.value);
       setData(Obj.filter((t)=>{
        if(tit==="All")
        return(true);
    else
    {
        if(t.tittle===tit)
         return(true);
    }
  }));
 
    }

return(<>
<div id="header">
   <div className="button-list"> <input type={"button"} value={"All"} className={"header-button"} onClick={Handler}  />
    <input type={"button"} value="Math" className={"header-button"} onClick={Handler}/>
    <input type={"button"} value="Physics" className={"header-button"} onClick={Handler}/>
    <input type={"button"} value="Chemistry" className={"header-button"} onClick={Handler}/>
    <input type={"button"} value="Hellow" className={"header-button"} onClick={Handler}/>
</div></div>
<div className={"Course"}>
{Data.map((i)=>(<Card tittle={i.tittle} className={"Cart"} src={i.src} about={i.about}/>))}
</div>
</>)
}
export default Header;