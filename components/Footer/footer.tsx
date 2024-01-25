import Link from "next/link"
import Image from "next/image"
import twitter from "@/app/image/logotwitterwhite.png"
import github from "@/app/image/logogithubwhite.png"
import linkedin from "@/app/image/logolinkedinwhite.png"
import logo from "@/app/image/logonicowhite.png"
import "./style.css"

const Footer = () => {
    return (

            <div className="footer">
                    
                    <div className='linkfoot-pages'> 
                        <Link href="/#aboutme" className='linkfoot aboutme' >About Me</Link>
                        <Link href="/#projects" className='linkfoot myprojects'>My Projects</Link>
                        <Link href="/#contact" className='linkfoot test'>Contact</Link>
                    </div>
                    <div className="linkfoot-medias">
                        <a href="https://twitter.com/NicoCarameL_" target="_blank" className='link media'><Image src={twitter} width={40} height={40} alt="logo" /></a>
                        <a href="https://www.linkedin.com/in/nicolas-archambault-bonnet" target="_blank" className='link media'><Image src={linkedin} width={40} height={40} alt="logo" /></a>
                        <a href="https://github.com/NicoAB21" target="_blank" className='link media'><Image src={github} width={40} height={40}  alt="logo" /></a>
                        
                    </div>
                    <div>
                        <div className="copyright">© 2024 NAB Studios, All Rights reserved.</div>
                    </div>


        </div>
    )
  }
  
  export default Footer