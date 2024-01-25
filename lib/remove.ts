import { sql } from "@vercel/postgres"
import { createTableProject, createTableUser, insertElement, fetchUsers } from '@/lib/seed'
import { drop } from "./reset"

export const RemoveUser = async (id) => { 
    await sql`DELETE FROM projects WHERE id=${id};`
    console.log(`User ${id} suprrimé`)

   }


export const RemoveProject = async (id) => {
    
    await sql`DELETE FROM projects WHERE id=${id};`
    console.log(`Projet ${id} suprrimé`)
}