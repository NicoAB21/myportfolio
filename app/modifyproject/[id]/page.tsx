"use client"
import { RemoveProject } from "@/lib/remove"
import { fetchProject } from "@/lib/seed"
import { useState } from "react"
import { ChangeProject } from "@/lib/change"
import "@/app/style/container.css"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/footer"
import { useRouter } from 'next/navigation'

process.env.POSTGRES_URL="postgres://default:uJoCW7njZP0G@ep-falling-moon-66686964-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb"

export default function ModifyProjectPage({ params }: { params: { id: string } }) {

    

    const router = useRouter()
    const [id, setID] = useState(params.id)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [picture, setPicture] = useState('')
    const [date, setDate] = useState('')
    const [enabled, setEnabled] = useState(true)




    const handleChangeSubmit = (event: { preventDefault: () => void }) => {
        console.log('handleChangeSubmit')
        event.preventDefault()

        console.log('id : ', id)
        console.log('title : ', title)
        console.log('desc : ', desc)
        console.log('picture : ', picture)
        console.log('date : ', date)
        console.log('enabled : ', enabled)
        
        const props = {
            id: id,
            title: title,
            desc: desc,
            picture: picture,
            date: date,
            enabled: enabled
        }


        ChangeProject(props)
        router.push('/')
 
    }


    return (
        <div>
            <Navbar />
            <div className="container">
            <h1>Modifier un projet</h1>
            <form onSubmit={handleChangeSubmit}>
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