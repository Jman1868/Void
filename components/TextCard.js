import styles from '@/styles/index.module.css'
import React from 'react'
import { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect';




export default function TextCard(props)
{

   const  [quote, setQuote] = useState("")
    useEffect(() =>
    {
        fetch('https://api.quotable.io/random')
            .then((res) => res.json())
            .then((data) =>
            {
                setQuote(data.content)
                
            })
            .catch((error) =>
            {
                console.error('Error fetching data:', error);
            });
        console.log('i fire once');
    }, [])
    
  

    
    return (

        
        <div className={styles.card}>
            <div className={styles.voidText}>

                <Typewriter
                    onInit={(typewriter) =>
                    {
                        typewriter.typeString('The void types back')
                            .pauseFor(2500)
                            .start();
                    }}
                />
            </div>
            <div className={`${styles.textCard} ${styles.typewriter}`}>
               {quote}
            </div>
            
        </div>
    )
}