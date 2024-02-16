import * as React from "react"
import styles from "../../src/styles/Footer.module.css"
import Image from 'next/image';

import ShapeBebe2 from '../../src/assets/bebe2.png'
import ShapeBebe from '../../src/assets/Shape-bebe.png'
import ShapeSmYellow from '../../src/assets/Shape-sm-yellow.png'
import ShapePink from '../../src/assets/Shape-pink.png'
import Shapeyellow from '../../src/assets/Shape-yellow.png'

import { FaFacebook }  from 'react-icons/fa'
import { FaInstagram }  from 'react-icons/fa'
import { FaLinkedinIn }  from 'react-icons/fa'

export function Footer()  {
    return(
      <div className={styles.footer}>
        <div style={{ marginLeft: 250, marginTop: 130}} >
             <div style={{ position: "absolute"}}>
                <Image style={{ marginTop: -50, marginLeft: 3, width: 25}} src={ShapeBebe2} alt='' />
                <Image style={{ marginTop: -50, marginLeft: 30, width: 15}} src={ShapeBebe} alt='' />
                <Image style={{ marginTop: 10,  marginBottom: 10, marginLeft: 30, width: 15}} src={ShapeSmYellow} alt='' />
                <Image style={{ marginLeft: 25, width: 25}} src={ShapePink} alt='' />
                <Image style={{ marginTop: -52, zIndex: -1, width: 25}} src={Shapeyellow} alt='' />
              </div>
              
        </div>
        <div className="grid grid-cols-2" style={{ marginTop: 80, marginLeft: 200}}>
            <div style={{ color: "white"}}>
             <a href=""> <h1 style={{ fontSize: 27}}>Kura</h1></a>
             <p style={{ marginTop: 20}}>©2024 - Kura.</p>
             <p style={{ marginTop: 10}}>Todos os direitos reservados.</p>
            </div>
           <div style={{ color: "white", marginLeft: 70}}>
            <h2 style={{ marginLeft: 20, marginBottom: 20}}>Siga-nos!</h2>
            <div className="grid grid-cols-3" >
              <a href="https://www.facebook.com/samuel.andrade.1238/" target="_blank" rel="noopener noreferrer"><FaFacebook style={{color:"white", fontSize: 30, marginLeft: 26}}/></a> 
              <a href="https://www.instagram.com/leumas_dev_93/" target="_blank" rel="noopener noreferrer"> <FaInstagram style={{color:"white", fontSize: 30, marginLeft: 26}}/></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn style={{color:"white", fontSize: 30, marginLeft: 26}}/></a>
            </div>
           </div>
        </div>
      </div>
    )
}
