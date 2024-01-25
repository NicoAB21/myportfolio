import Navbar from "@/components/Navbar/Navbar"
import { fetchProject } from "@/lib/seed"
import Image from "next/image"
import "../style.css"
import Footer from "@/components/Footer/footer"
  
export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default async function ProjectPage({ params }: { params: { id: string } }) {

    let data = await fetchProject(Number(params.id))
    const {rows: project} = data
    console.log(project)


    return (
        <div>
            <Navbar />
            {project?.map((info: any) => (
                <div key={info.id}>
                    <div className="projpic-container"><Image src={info.picture} alt={info.title} width={720} height={560} className="projectpicture"/></div>        
                    <div className="categories">Titre :</div> <div className="text"> <br></br>{info.title}</div>
                    <div className="categories">Description :</div> <div className="text"> <br></br>{info.description}</div>
                    <div className="categories">Date de création :</div> <div className="text"><br></br>{String(info.date_created)}</div>
                    <div className="categories">Date de mise à jour :</div> <div className="text"><br></br>{String(info.date_update)}</div>           
                </div> 
            ))}
            <Footer />
        </div>
        

    ) 

}