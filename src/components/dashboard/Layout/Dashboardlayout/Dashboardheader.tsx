import { useState } from "react"
import menu from "../../../../assets/hamburger.svg"
import MobileSidebar from "./mobilesidebar"

const DashboardHeader =()=>{
const [show, setShow] = useState(false)

    return(
        <div>
            <img src={menu} className="md:hidden block" onClick={()=>setShow(true)}/>

            {show && <MobileSidebar setShow={setShow}/>}
        </div>
    )
}

export default DashboardHeader