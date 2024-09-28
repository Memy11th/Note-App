import axios from "axios"
import { useRecoilState } from "recoil"
import {  userNotes, userTokenState } from "../../Atoms/userAtom"
import { useEffect } from "react"
import Note from "../Note/Note"


export default function Profile() {
   const [userToken,setUserToken]=useRecoilState(userTokenState);
   const [UserNotes,setUserNotes] = useRecoilState(userNotes)
setUserToken(`3b8ny__${localStorage.getItem('UserTokenNotes')}`)

   async function getUserNotes(){
      const Response = await axios.get('https://note-sigma-black.vercel.app/api/v1/notes',{
        headers:{
          token : userToken
        }
      }).then((Response)=>Response)
      .catch((Error)=>Error)
    
      console.log(Response)
      setUserNotes(Response?.data?.notes)
    }

   

      useEffect(()=>{
         getUserNotes();
         console.log(userToken)
      },[])
   return <>
     <div className="row">
      {UserNotes?.map((note, index) => (
        <div key={index} className="col-md-6 mb-3">
          <Note values={note}  />
        </div>
      ))}
    </div>
   
   </>
}
