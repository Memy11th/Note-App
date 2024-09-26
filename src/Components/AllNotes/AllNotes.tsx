import axios from "axios"
import { useEffect } from "react"


export default function AllNotes() {
   const  token = localStorage.getItem('UserTokenNotes')

  async function getNotes(){
    const Response = await axios.get('https://note-sigma-black.vercel.app/api/v1/notes',{
      headers:{
         token:`3b8ny__${token}`
      }
    })
    .then((Response)=>Response)
    .catch((Error)=>Error)

    console.log(Response)
   }

   useEffect(()=>{
    getNotes()
   },[])
   return <>
   
   </>
}
