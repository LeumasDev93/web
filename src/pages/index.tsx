import { Header } from '../../components/ui/Header';
import styles from  '../styles/Home.module.css';
import Image from 'next/image';
import mulherImg from '../assets/mulher1.png'
import ShapeBlue from '../assets/Shape-blue.png'
import Shapeyellow from '../assets/Shape-yellow.png'
import ShapePink from '../assets/Shape-Pink.png'
import ShapeBebe from '../assets/Shape-bebe.png'
import ShapeSmYellow from '../assets/Shape-sm-yellow.png'
import Rectangle from '../assets/Rectangle 3.png'
import Vector from '../assets/Vector 1.png'
import Eclipse from '../assets/Ellipse 2.png'
import {  IoIosSearch }  from 'react-icons/io'
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "../../components/ui/card";
import { ScrollArea } from '../../components/ui/scroll-area'
import { Input } from "../../components/ui/input";

import { Footer } from "../../components/ui/Footer";
import { LiaCalendarWeekSolid } from "react-icons/lia";

export default function Home( {children }) {
  return (
    <div>
     <div className="max-w-[1124] max-h-[2250] "> 
     <div className={styles.container}>
      <main>
        <Header />
       
            <h3 className={styles.boas_vindas}>boas-vindas a kura</h3>
            <div className="grid grid-cols-2" >
              <div>
              <h1 className={styles.text1}>Assistência médica <span className={styles.span}>simplificada</span> para todos</h1>
              <p className={styles.textp}> Os médicos da nossa comunidade vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>
              </div>
             
              <Image src={mulherImg} alt='' />
            </div>
          
            <div className={styles.marcarConsult}>
              <h2 className={styles.consult}>Agende sua consulta</h2>
              <div style={{ position: "absolute"}} >
                <Image style={{ marginTop: -30, marginBottom: 10, marginLeft: 3}} src={ShapeBlue} alt='' />
                <Image style={{ marginTop: -60, marginLeft: 40}} src={ShapeBebe} alt='' />
                <Image style={{ marginTop: 5,  marginBottom: 10, marginLeft: 40}} src={ShapeSmYellow} alt='' />
                <Image style={{ marginLeft: 30}} src={ShapePink} alt='' />
                <Image style={{ marginTop: -70, zIndex: -1}} src={Shapeyellow} alt='' />
              </div>
              <form className="grid grid-cols-4" style={{   marginLeft: 100 }} >
                <div className={styles.divForm}>
                  <label className={styles.label}>Especialidade</label><br />
                  <Input 
                    className={styles.input}
                    type='select'
                    placeholder='especialidade'
                  />
                </div>
                <div>
                  <label className={styles.label}>Local</label><br />
                  <Input 
                     className={styles.input} 
                     type='select'
                     placeholder='local'
                  />
                </div>
                <div>
                  <button className={styles.button} type="submit"><span className={styles.spanButton}><IoIosSearch style={{color:"white", fontSize: 30, marginLeft: 26}}/>
                    <p style={{ marginTop: -28, marginLeft: 15}}>PROCURAR</p></span>
                  </button>
                </div>
               
              </form>
               
            </div>
     
      </main>
      
      <section className={styles.about}>
        <div className="container grid">
          <div >
          </div>
          <div>
            <p style={{ color: "gray", fontFamily: "inherit", marginBottom: 10}}>Encontre o que precisa</p>
            <div className='grid grid-cols-3'>
              <h1 className={styles.h2text2}>Os cuidados de que precisa estão aqui</h1>
              <p style={{}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus deleniti perferendis vel molestiae soluta, quaerat
              beatae dicta ducimus praesentium architecto harum dolorum
              distinctio illo earum assumenda itaque. Omnis, quam repellat.
            </p>
            </div>
            <div className={styles.wrapper}>
              <Card className=" w-[290px] h-[450px] grid grid-rows-[min-content_1fr_min-content] items-cente ">
                   <Image style={{width: 250, marginTop: 20, marginLeft: 20}} src={Rectangle} alt='' />
                   <Image style={{ width: 220, marginTop: -150,  marginLeft: 30}} src={Vector} alt='' />
                <CardHeader>
                  <CardTitle style={{ color: "#E45865", fontWeight: "Bold"}}>Cardiomed</CardTitle>
                  <CardDescription>
                    <p>Consulta aqui</p>
                    <div className='grid grid-cols-2'>
                      <LiaCalendarWeekSolid style={{ fontSize: 25}} />
                     <p style={{ fontWeight: "500", marginLeft: -90}}>Setembro a Novembro</p>
                    </div>
                  
                  </CardDescription>

                </CardHeader>
                <CardContent>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    
                </CardContent>
              </Card>
              
            </div>
            <br />
          </div>
        </div>
      </section>
    
    </div>
      <Footer />
    </div>
    </div>
  )
}

