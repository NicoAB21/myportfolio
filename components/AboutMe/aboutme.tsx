import { sql } from '@vercel/postgres'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import { createTableProject, createTableUser, fetchUsers, fetchProjects, insertUsers } from '@/lib/seed'
import { useState, useEffect } from 'react'
import Button from '../button'
import "@/components/AboutMe/style.css"

export default async function Aboutme() {
  
  

  await createTableUser()
  await insertUsers()
  let data = await fetchUsers()
  const {rows: users} = data
  console.log(users)

  return (
    <>
      <div>
        {users?.map((user: any, index) => (
          <div key={user.id}>
            <div className="photo-container">
              <Image src={user.picture} alt={user.title} width={433} height={576} className="photo"/> 
            </div>
            <div className="textbox">       
              <div className="text firstname">Prénom : <br></br>{user.firstname}</div>
              <div className="text lastname">Nom : <br></br>{user.lastname}</div>
              <div className="text email">Email :<br></br> <a className="linkmail" href={`mailto:${user.email}`}>{user.email}</a></div>
              <div className="text phone">Tel :<br></br> {user.phone}</div>
              <div className="text address">Addresse : <br></br> {user.address}</div>
              <div className="text city">Ville :<br></br> {user.city}</div>
              <div className="text country">Pays :<br></br> {user.country}</div>
              
            </div>
            
            
          </div>
          
        ))}

      </div>
    </>
      

  )
}
