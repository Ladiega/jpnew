import styles from './nav.module.css'
import Link from 'next/link'


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
                    <Link href="/">
                        <a>
                            <Image                   
                            alt="skull"
                             src={wSkull}
                            />
                        </a>
                    </Link>                    
                    </div>


                    <li className={styles.wInsta}>
                        <Link href="https://www.instagram.com/buritica/?hl=esh">
                            <a>
                                <Image                       
                                alt="insta"
                                src={wInsta}
                                />
                            </a>
                        </Link>                        
                    </li>


                    <li className={styles.wTwitter}>
                            <Link href="https://twitter.com/buritica?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                                <a>
                                   <Image                        
                                     alt="twitter"
                                    src={wTwitter}
                                    /> 
                                </a>
                            </Link>               
                    </li>


                    <li className={styles.wHam}>
                        <Link href="/">
                            <a>
                                <Image                       
                                alt="HamMenu"
                                src={wHam}
                                />
                            </a>
                        </Link>
                        
                    
                    </li>
                </ul>
            </section>
        </div>
    )
}