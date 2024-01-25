import { sql } from "@vercel/postgres"
import { createTableProject, createTableUser, insertElement, fetchUsers } from '@/lib/seed'


export const AddUser = async (props) => { 
    console.log(props)
    await sql`
    INSERT INTO me (firstname, lastname, email, phone, address, city, country, birth_date, image)
          VALUES (${props.firstname}, ${props.lastname}, ${props.email},${props.phone},${props.address},${props.city},${props.country},${props.birth_date}, ${props.image})
          ON CONFLICT (email) DO NOTHING;`

   }


export const AddProject = async (props) => {
    console.log(props)
    await sql`
    INSERT INTO projects (title, description, picture, date_created, date_update, enabled)
          VALUES (${props.title},${props.desc}, ${props.picture}, ${props.date}, CURRENT_DATE, ${props.enabled});`

}