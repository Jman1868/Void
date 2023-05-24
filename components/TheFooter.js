
import React from "react"
import styles from '@/styles/index.module.css'
import { RiGithubLine } from 'react-icons/Ri';

export default function TheFooter()
{
    return (
       
        

        <footer className={styles.footer}>

            <p>Quotes from <a href="https://github.com/lukePeavey/quotable" target="_blank" rel="noopener noreferrer"><u>Quotable</u></a></p>


            <a href="https://github.com/Jman1868" target="_blank" rel="noopener noreferrer"> <RiGithubLine className={styles.bigIcon} /> </a>
           

        </footer> 
    
    )
}