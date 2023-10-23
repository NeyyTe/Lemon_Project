import React from "react";
import './footer.css'

export default function Footer() {

  function getCurrentYear() {
    return new Date().getFullYear();
  }
const currentYear = getCurrentYear();
  return (
      <footer className="footer">
        <div>
          <p>Made by Maréchal Maxence</p>
        </div>
        <div>
          <p>Copyright &copy; {currentYear} - All Rights Reserved</p>
        </div>  
      </footer>
    
  );
}
