import { sql } from "@vercel/postgres"
import { createTableProject, createTableUser, fetchUsers } from '@/lib/seed'


export const RemoveUser = async (id: any) => { 
    await sql`DELETE FROM projects WHERE id=${id};`
    console.log(`User ${id} suprrimé`)

   }


export const RemoveProject = async (id: any) => {
    
    await sql`DELETE FROM projects WHERE id=${id};`
    console.log(`Projet ${id} suprrimé`)
}