import { sql } from "@vercel/postgres";


export const ChangeProject = async (props: {id: any ; title: any; desc: any; picture: any; date: any; enabled: any; }) => {

    await sql`UPDATE projects SET title=${props.title}, description=${props.desc}, picture=${props.picture}, date_created=${props.date}, date_update=CURRENT_DATE, enabled=${props.enabled} WHERE id=${props.id};`
    console.log(`Projet ${props.id} modifié`)
}   