import React from "react";
import '../App.css';
import { FaLinkedin,FaGithub } from "react-icons/fa";


const Header=()=>{
    return(
        <>
        <header>
            <div  className="container head_container">
                <h5>Hello I am</h5>
                <h1>Shubham Kumar Ojha</h1>
                <h5>An Aspiring Software Developer</h5>
                <div className="cnnt_btn">
                    <a href="" className="btn btn-connect">Let's Connect</a>
                    {/* <a href=""></a> */}
                </div>
                <div className="headersocial">
                    <a href=""><FaLinkedin/></a>
                    <a href=""><FaGithub/></a>
                </div>

            </div>
            
        </header>
        </>
    )
}


export default Header