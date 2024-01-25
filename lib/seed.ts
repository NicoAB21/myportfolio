import { sql } from '@vercel/postgres'



export const createTableUser = async () => { await sql`
    CREATE TABLE IF NOT EXISTS me (
      id SERIAL PRIMARY KEY,
      firstname VARCHAR(255) NOT NULL,
      lastname VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      phone VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      country VARCHAR(255) NOT NULL,
      birth_date DATE NOT NULL,
      picture VARCHAR(999),
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`
    console.log("Table 'me' Created")
   }

export const createTableProject = async () => {
    await sql`
    CREATE TABLE IF NOT EXISTS projects (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) UNIQUE NOT NULL,
      description VARCHAR(9999) NOT NULL,
      picture VARCHAR(999) NOT NULL,
      date_created VARCHAR(100) NOT NULL,
      date_update DATE NOT NULL,
      enabled VARCHAR(255) NOT NULL,
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`
    console.log("Table 'projects' created")
   }



  
export const insertUsers = async () => { await Promise.all([
    sql`
          INSERT INTO me (firstname, lastname, email, phone, address, city, country, birth_date, picture)
          VALUES ('Nicolas', 'ARCHAMBAULT--BONNET', 'archam_n@etna-alternance.net','0626026019', '32 rue du javelot', 'Paris', 'France', '2005-12-21', 'https://i.ibb.co/ZXPLL62/nicorb.png')
          ON CONFLICT (email) DO NOTHING;
      `,
    
    
  ])
  console.log(`Seeded elements`)
}

export const insertProjects = async () => { await Promise.all([
  sql`
      INSERT INTO projects (title, description, picture, date_created, date_update, enabled)
      VALUES ('Worldview','Worldview est un site web dynamique et captivant conçu pour offrir une exploration complète de tous les pays du monde. Réalisé à l''aide du framework NextJS et exploitant les données de l''API REST Countries, Worldview offre une interface conviviale permettant aux utilisateurs de découvrir des informations détaillées sur chaque pays, notamment leur population, leur capitale, leur monnaie, leur langue officielle et bien plus encore. Grâce à une combinaison harmonieuse de technologies modernes et d''une conception intuitive, Worldview offre une expérience immersive, tout en offrant un accès facile à des données précieuses sur la diversité mondiale. Que ce soit pour des besoins éducatifs, des projets de recherche ou simplement par curiosité, Worldview est l''outil idéal pour explorer et apprendre sur les pays du monde, le tout dans un cadre web moderne et réactif.', 'https://i.ibb.co/T4whqkP/worldviewdark.png', '2023-12-12', '2023-12-12', 'true')
      ON CONFLICT (title) DO NOTHING;   
    `,
  sql`
      INSERT INTO projects (title, description, picture, date_created, date_update, enabled)
      VALUES ('Empaktor','Empaktor est un outil de compression et de décompression de fichiers réalisé en Python. Conçu pour offrir une solution polyvalente, il prend en charge divers algorithmes de compression tels que Huffman, RLE (Run-Length Encoding) et BWT (Burrows-Wheeler Transform). L''objectif principal de ce projet est de permettre aux utilisateurs de compresser et décompresser des fichiers en utilisant différents algorithmes de compression, tout en offrant une documentation détaillée pour chaque algorithme/fonctionnalité.', 'https://static.wikia.nocookie.net/logopedia/images/4/4f/WinRAR_Logo_2018.png/revision/latest?cb=20180730011613', '2023-11-16', '2023-11-16', 'true')
      ON CONFLICT (title) DO NOTHING;   
    `,
  sql`
      INSERT INTO projects (title, description, picture, date_created, date_update, enabled)
      VALUES ('ProtoRH','Le projet ProtoRH API est une interface de programmation d''application (API) conçue pour la gestion des ressources humaines d''une entreprise. Réalisé en Python, cet outil vise à faciliter la production en permettant une gestion efficace des données liées aux ressources humaines de l''entreprise.', 'https://www.codewithmmak.com/wp-content/uploads/2022/12/API_Img.png', '2023-11-07', '2023-11-07', 'true')
      ON CONFLICT (title) DO NOTHING;   
    `,
  
  ])
  console.log(`Seeded elements`)
}




export const fetchUsers = async () => {
  let data = await sql`SELECT * FROM me;`
  return data
}

export const fetchProjects = async () => {
  let data = await sql`SELECT * FROM projects;`
  return data 
}

export const fetchProject = async (id: number) => {
  let data = await sql`SELECT * FROM projects WHERE id=${id};`
  return data
}
