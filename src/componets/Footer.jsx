import React from "react";

let curentDate = new Date();


function Footer(){
    return(
        <footer className="footer">
            <p>Copyright &copy; { curentDate.getFullYear()}</p>
        </footer>
    )
}

export default Footer;