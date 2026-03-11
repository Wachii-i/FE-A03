import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src = {'/img/banner.jpg'} alt='cover'
            fill = {true} priority quality={100} style={{ objectFit: "cover" }}></Image>
            <div className={styles.bannerText}>
                <h1>where every event finds its venue</h1>
                <h3>we connect people with the perfect place to create unforgettable experiences.</h3>
            </div>
        </div>
        

    )
}