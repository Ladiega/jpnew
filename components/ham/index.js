import styles from './ham.module.css'
import Script from 'next/script'

import Image from 'next/image'
import wHam from '../../public/img/icons/wHam.svg'

export default function Ham (){
    return(
        <div className={styles.ham_container}>
            
            <button id="buttonMenu" className='buttonMenu'>
                <Image
                alt="hamImage"
                src={wHam}
                />
            </button>

            <div className="nav-menu_toggle nav-menu_visible navToggle">
                <section className="section_one">
                    <p>section one</p>

                </section>

            </div>


            <style jsx>{`
            .buttonMenu{
                background-color:transparent;
                border:none; 
                cursor:pointer;           
            }


            .nav-menu_toggle{
                margin-left:-84vw;
                width:377px;
                height:724px;
                background-color:salmon;
                ovrerflow:hidden;
                
            }
            `}

            </style>
            <Script id="show-banner" strategy="lazyOnload">
  {`
  
   



  
  
  `}
</Script>

        </div>
    )
}