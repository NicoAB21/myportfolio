import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/footer'
import Image from 'next/image'
import Link from 'next/link'
import Aboutme from '@/components/AboutMe/aboutme'
import { sql } from '@vercel/postgres'
import Projects from '@/components/Projects/projects'
import { createTableProject, createTableUser } from '@/lib/seed'
import "@/app/style/home.css"
import Head from 'next/head'
import diplome from "@/app/image/diplome.png"
import logoetna from "@/app/image/logoetna.png"


export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

 

 
export default async function Home() {
  await createTableUser()
  await createTableProject()
  
  return (  
    
    
    <div> 
      <Navbar />
      <div className="content-container">
        <div className="nico-container">
          <Image src={'/nicopro.png'} alt='nico' width={432} height={432} className="nico" />
        </div>
        <div className="printhw" ><h3>&gt;&gt;&gt; print(“Hello World !”)</h3>
        <div className="button-container">
          <Link href="/#projects" className="button">Mes projets</Link>
          <Link href="/#contact" className="button">Contactez-Moi</Link>
        </div>
      </div>

      </div>
   
      <div id="aboutme">
          <div className="titre aboutme">AboutMe</div>
          <Aboutme />
          <div className="cvbutton-container"><a href="/CV.pdf" download="CV.pdf" className='button cvbutton'>Téléchargez mon CV</a></div>
          <div>
            <div className="titre formation">Formation</div>
            <div className="bac">
              <div className="iconbac"><Image src={diplome} alt='icon diplome' width={250} height={250} /></div>
              <div className="text">2020-2023</div>
              <div className="text">Obtention de mon Baccalauréat Général Mention Bien Spécialité NSI - Maths</div>
            </div>
            <div className="etna">
              <div className="etna"><Image src={logoetna} alt='logo etna' width={250} height={250}/></div>
              <div className="text">Septembre 2023</div>
              <div className="text">Début de mon cursus à l'ETNA vers un Master of Science</div>
            </div>
          </div>

      </div>
      <div id="projects" className="projects">
          <div className="titre">Mes Projets</div>
          <Projects />
      </div>
      <div id="contact" className="contact">
        <div className="titre">Contacts</div> 
        <div className="textcontact email">Email : <a className="linkmail" href="mailto: archam_n@etna-alternance.net">archam_n@etna-alternance.net</a></div>
        <div className="textcontact phone">Tel : 0626026019</div>

      </div>

      <Footer />

      
    </div>

  )
}
 