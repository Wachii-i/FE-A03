import styles from './card.module.css'
import Image from 'next/image'

export default function Card(){
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/card.jpg'}
                alt='Card Picture' fill={true}
                style={{ objectFit: "cover" }}>
                </Image>
            </div> 
            <div className = {styles.cardtext}>Celebrate Your Special Moments</div>
        </div>
    )
}