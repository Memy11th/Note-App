import axios from "axios"
import { useEffect } from "react"
export default function TimeLineNotes() {

   async function allTimeNotes(){
      const Response = await axios.get('https://note-sigma-black.vercel.app/api/v1/notes/allNotes')
      .then((ApiResponse)=>ApiResponse)
      .catch((ApiError)=>ApiError)
      console.log(Response)
   }

   useEffect(()=>{

      allTimeNotes();

   },[])
   return <>
   </>
}
