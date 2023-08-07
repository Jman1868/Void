
import styles from '@/styles/index.module.css'
import React from 'react'
import Link from "next/link"
import { FaRegQuestionCircle } from "react-icons/fa"
import TextCard from '../../components/TextCard'
import Typewriter from 'typewriter-effect';





export default function Home() {
 
  const [submit, setSubmit]= React.useState(true)
 
  function HandelSubmit()
  {
    
    setSubmit(prev => !prev)
      console.log(submit)
  }

 

  return (

    
    <div>
      
  
      
      {submit && <div className={styles.card}>

      
        <div className={styles.voidText}>
          
          <Typewriter
          onInit={(typewriter) =>
          {
            typewriter.typeString('Type into the void')
              .pauseFor(2500)
              .start();
          }}
          />
        </div>
        <textarea width="400"></textarea>
        <button className={styles.greenButton} onClick={HandelSubmit}>Submit</button>
      </div>
      }

      {!submit && <div className={styles.card}>

        <TextCard  />
        
      </div>}
      

      
  

     

    </div>
  )
}
