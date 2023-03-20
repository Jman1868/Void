
import React from "react"
import styles from '@/styles/index.module.css'
import { RiGithubLine } from 'react-icons/Ri';

export default function TheFooter()
{
    return (
       
        

        <footer className={styles.footer}>

            <p>Powered by <a href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer"><u>ZEN QUOTES</u></a></p>


            <a href="https://github.com/Jman1868" target="_blank" rel="noopener noreferrer"> <RiGithubLine className={styles.bigIcon} /> </a>
           

        </footer> 
    
    )
}