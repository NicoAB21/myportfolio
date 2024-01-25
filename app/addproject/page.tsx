'use client'
import { useState } from "react"
import { AddProject } from "@/lib/add"
import "@/app/style/container.css"
import Navbar from "@/components/Navbar/Navbar"
import { useRouter } from 'next/navigation'
import Footer from "@/components/Footer/footer"


process.env.POSTGRES_URL="postgres://default:uJoCW7njZP0G@ep-falling-moon-66686964-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb"

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'



export default function PageAddProject() {
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [picture, setPicture] = useState('')
    const [date, setDate] = useState('')
    const [enabled, setEnabled] = useState(true)


    const handleAddSubmit = event => {
        console.log('handleSubmit')
        event.preventDefault()


        const projectData = {
            title: title,
            desc: desc,
            picture: picture,
            date: date,
            enabled: enabled
        };
        

        AddProject(projectData)
        
        router.push('/')
    }


    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Ajouter un projet</h1>
                <form onSubmit={handleAddSubmit}>
                <div>
                <label>Titre:</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />
                </div>
                <div>
                <label>Description:</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={desc}
                    onChange={event => setDesc(event.target.value)}
                />
                </div>
                <div>
                <label>Lien de l'image:</label>
                <input
                    id="picture"
                    name="picture"
                    type="url"
                    value={picture}
                    onChange={event => setPicture(event.target.value)}
                />
                </div>
                <div>
                <label>Date de création :</label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    value={date}
                    onChange={event => setDate(event.target.value)}
                />
                </div>
                <div>
                <label>Activé :</label>
                <input
                    id="enabled"
                    name="enabled"
                    type="checkbox"
                    checked={enabled} 
                    onChange={(event) => setEnabled(event.target.checked)}
                />
                </div>

                <button type="submit">Submit form</button>
            </form>
            </div>


        </div>

    )

}