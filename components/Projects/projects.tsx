import { sql } from '@vercel/postgres'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { createTableProject, createTableUser, insertProjects, fetchUsers, fetchProjects } from '@/lib/seed'
import { useState, useEffect } from 'react'
import Button from '../button'
import "@/components/Projects/style.css"


export default async function Projects() {
  
  

  createTableProject()
  insertProjects()
  let data = await fetchProjects()
  const {rows: projects} = data
  console.log(projects)

  return (
    <div>
      <div className="basic-grid">
        
        {projects?.map((project: any) => (
            project.enabled ? (
              <Link key={project.id} href={`/project/${project.id}`} className="card">
                <Image src={project.picture} className="picture" alt={project.title} width={1280} height={920}/>        
                <div className="title" >{project.title}</div>          
              </Link>
            ) : null
        ))}
      </div>
    </div>
       

  )
}
