import { RemoveProject } from "@/lib/remove"
import { fetchProject } from "@/lib/seed"
import "@/app/deleteproject/style.css"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/footer"
import Link from "next/link"

process.env.POSTGRES_URL="postgres://default:uJoCW7njZP0G@ep-falling-moon-66686964-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb"
export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'




export default async function DeleteProjectPage({ params }: { params: { id: string } }) {

    let data = await fetchProject(Number(params.id))
    const {rows: projects} = data
    console.log(projects)

 
    await RemoveProject(params.id)


    return (
        <div>
            <Navbar />
            <h1 className="text">Vous avez bien supprimé le projet {projects[0].title}</h1>
            <Link href="/" className="button">Retourner à la page Home</Link>

        </div>
    )




}