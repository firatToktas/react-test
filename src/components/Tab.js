import { useState } from "react";

function Tab({children,activeTab}){
    const [active , setActive]=useState(activeTab); //setActive çalışıtğı zaman hangi butona tıklnadıysa onun indexini active set ediyor 
    console.log(children);
    console.log(active);
    return(
        <div>
            <nav>
                {children.map((tab,index)=>
                <button
                onClick={()=> setActive(index)}
                className={active ===index ? 'bg-green-200' : 'bg-gray-200'} 
                style={{border:"none", padding:"3px"}} 
                key={index}>{tab.props.title}
                </button>)}
            </nav>
            {children[active]}
        </div>
    )
}

Tab.Panel=function({children, title}){
    return(
        <div>{children} {" "} {title}</div>
    )
}


export default Tab