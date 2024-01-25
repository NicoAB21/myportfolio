import { sql } from "@vercel/postgres";


export const ChangeProject = async ({id, title, desc, picture, date, enabled}) => {

    await sql`UPDATE projects SET title=${title}, description=${desc}, picture=${picture}, date_created=${date}, date_update=CURRENT_DATE, enabled=${enabled} WHERE id=${id};`
    console.log(`Projet ${id} modifié`)
}   