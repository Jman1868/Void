
import styles from '@/styles/index.module.css'
import React from 'react'
import Link from "next/link"
import { FaRegQuestionCircle } from "react-icons/fa"
import TextCard from '../../components/TextCard'



export async function GetStaticProps()
{
  const res = await fetch('https://anapioficeandfire.com/api/characters/583')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}




export default function Home({data}) {
 

  console.log(data)
  const [submit, setSubmit]= React.useState(true)
 
  function HandelSubmit()
  {
    
    setSubmit(prev => !prev)
      console.log(submit)
  }



  return (

    
    <div>
      
      <Link href="/faq" className='link'><FaRegQuestionCircle className={styles.bigIcon} /></Link>
      
      {submit && <div className={styles.card}>

        <p className={styles.voidText}>Type into the void</p>
        <textarea width="400"></textarea>
        <button className={styles.greenButton} onClick={HandelSubmit}>Submit</button>
      </div>
      }

      {!submit && <div className={styles.card}>

        <TextCard  />
        
      </div>}
      

      
      {/* <details>
        <summary>Details</summary>
        Something small enough to escape casual notice.
      </details> */}

     

    </div>
  )
}
