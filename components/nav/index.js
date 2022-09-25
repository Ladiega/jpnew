import styles from './nav.module.css'


import Image from 'next/image'
import wSkull from '../../public/img/icons/wSkull.svg'
import wInsta from '../../public/img/icons/wInsta.svg'
import wTwitter from '../../public/img/icons/wTwitter.svg'
import wHam from '../../public/img/icons/wHam.svg'



export default function Nav(){
    return(
        <div className={styles.global_container}>
            <section className={styles.nav_container}>
                <ul>
                    <div className={styles.wSkull}>
                    <Image
                   
                    alt="skull"
                    src={wSkull}
                    />
                    </div>
                    <li className={styles.wInsta}>
                        <Image
                       
                        alt="insta"
                        src={wInsta}
                        />
                    </li>
                    <li className={styles.wTwitter}>
                        <Image
                        
                        alt="twitter"
                        src={wTwitter}
                        />
                    
                    </li>
                    <li className={styles.wHam}>
                        <Image
                       
                        alt="HamMenu"
                        src={wHam}
                        />
                    
                    </li>
                </ul>
            </section>
        </div>
    )
}