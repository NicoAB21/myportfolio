import { useState } from "react"

import { AddProject } from "@/lib/add"
import { RemoveProject } from "@/lib/remove"
import { ChangeProject } from "@/lib/change"

import { createTableProject, createTableUser} from "@/lib/seed"

import ProjAdmin from "@/components/ProjectsAdmin/projects"
import Navbar from "@/components/Navbar/Navbar"
import Link from "next/link"
import "@/app/admin/style.css"
import Projects from "@/components/Projects/projects"
import Footer from "@/components/Footer/footer"


export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'
 
export default async function AdminPage() {

    await createTableUser()
    await createTableProject()



    return (
        <div>
            <Navbar />
            <Link href="/addproject" className="button">Ajouter</Link>
            <ProjAdmin />

        </div>
    )
}