
import styles from '@/styles/index.module.css'
import React from 'react'
import Link from "next/link"
import { FaRegQuestionCircle } from "react-icons/fa"

export default function Home() {
 
  const [test, setTest]= React.useState(true)
 
  function boho()
  {
    
    setTest(test => !test)
    console.log(test)
  }


  return (

    
    <div>
      
      <Link href="/faq" className='link'><FaRegQuestionCircle className={styles.bigIcon} /></Link>
      
      <div className={styles.card}>

        <p className={styles.voidText}>Type into the void</p>
        <textarea width="400"></textarea>
        <button className={ styles.greenButton} onClick={boho}>Submit</button>
      </div>
      

      
      {/* <details>
        <summary>Details</summary>
        Something small enough to escape casual notice.
      </details> */}

     

    </div>
  )
}
