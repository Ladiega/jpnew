

import Script from 'next/script'

export default function Nav2 (){
 

    return(
        <div>
           
            <header className="main-header">
  
  <nav id="nav" className="main-nav">
    <div className="nav-links">
      <a className="link-item" href="#">Link1</a>
      <a className="link-item" href="#">Link2</a>
      <a className="link-item" href="#">Link3</a>
      <a className="link-item" href="#">Link4</a>
    </div>
  </nav>
  <button id="button-menu" className="button-menu">
    <span></span>
    <span></span>
    <span></span>
  </button>
</header>



            <style jsx>{`
           

           * {
           margin: 0;
           padding: 0;
         }
         
         .main-header {
           height: 50px;
           display: flex;
           justify-content: space-between;
           align-items: center;
           background-color: transparent;
           padding: 0 0.4rem;
         }
         
         
         
         .main-nav {
           position: fixed;
           top: 0;
           left: 0;
           height: 100vh;
           width: 100%;
           margin-left: -100%;
           transition: all 0.2s linear;
           background-color: rgba(0, 0, 0, 0.7);
           z-index: 100;
         }
         
         .main-nav.show {
           margin-left: 0;
         }
         
         .nav-links {
           background-color: rgb(250, 250, 250);
           display: flex;
           flex-direction: column;
           width: 70%;
           height: 100%;
           align-items: center;
           justify-content: flex-start;
         }
         
         .link-item {
           margin-top: 2rem;
           color: #444444;
           text-decoration: none;
           font-weight: bold;
           position: relative;
         }
         
         .link-item::after {
           position: absolute;
           content: "";
           background-color: black;
           bottom: -5px;
           left: 0;
           width: 0%;
           height: 3px;
           transition: 0.3s ease all;
         }
         
         .link-item:hover::after {
           width: 100%;
         }
         
         .button-menu {
           z-index: 200;
           width: 17px;
           height: 23px;
           border: none;
           display: flex;
           background: none;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           cursor: pointer;
         }
         
         .button-menu span {
           width: 37px;
           height: 4px;
           margin-bottom: 5px;
           position: relative;
           background: white;
           border-radius: 3px;
           transform-origin: 4px 0px;
           transition: all 0.2s linear;
         }
         
         .button-menu.close span {
           opacity: 1;
           transform: rotate(45deg) translate(0px, 0px);
           background: #ffffff;
         }
         
         .button-menu.close span:nth-child(2) {
           transform: rotate(-45deg) translate(-8px, 5px);
         }
         
         .button-menu.close span:nth-child(3) {
           display: none;
         }
         
         @media screen and (min-width: 768px) {
          
         }
        
        `}

        </style>
        <Script id="nav2" strategy='lazyOnload' >
        {`



const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");


toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});



navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});
        
        `}

        </Script>


        </div>
    )
}