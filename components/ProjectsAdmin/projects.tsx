import { sql } from '@vercel/postgres'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { createTableProject, createTableUser, insertProjects, fetchUsers, fetchProjects } from '@/lib/seed'
import { useState, useEffect } from 'react'
import Button from '../button'
import "@/components/ProjectsAdmin/style.css"


export default async function ProjAdmin() {
  
  

  createTableProject()
  insertProjects()
  let data = await fetchProjects()
  let {rows: projects} = data
  console.log(projects)

  return (
    <div>
      <div className="basic-grid">
        
        {projects?.map((project: any) => (
              <div key={project.id} className="card">
                <Image src={project.picture} className="picture" alt={project.title} width={1280} height={720}/>        
                <div className="title" >{project.title}</div> 
                <Link href={`/modifyproject/${project.id}`} className="bouton modif">Modifier</Link>
                <Link href={`/deleteproject/${project.id}`} className="bouton supr">Supprimer</Link>        
              </div>
              

        ))}
      </div>
    </div>
      

  )
}
