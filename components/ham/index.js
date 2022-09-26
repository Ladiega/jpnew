import styles from './ham.module.css'
import Script from 'next/script'

import Image from 'next/image'
import wHam from '../../public/img/icons/wHam.svg'

export default function Ham (){
    return(
        <div className={styles.ham_container}>
            
            <button id="button" className={styles.button}>
                <Image
                alt="hamImage"
                src={wHam}
                />
            </button>
            <Script id="show-banner" strategy="lazyOnload">
  {`
  const button = document.getElementById('button');
  console.log(button);
  
  `}
</Script>

        </div>
    )
}