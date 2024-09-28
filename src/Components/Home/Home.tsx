import axios from "axios";
import Note from "../Note/Note";
import { useRecoilState } from "recoil";
import { allNotes, userTokenState } from "../../Atoms/userAtom";
import { useEffect } from "react";
import { object } from "yup";

export default function Home() {
const [allUsersNotes,setAllUserNotes]=useRecoilState(allNotes)
const [userToken,setUserToken]=useRecoilState(userTokenState)

setUserToken(`3b8ny__${localStorage.getItem('UserTokenNotes')}`)

async function getAllNotes(){
const Response = await axios.get('https://note-sigma-black.vercel.app/api/v1/notes/allNotes')
.then((ApiResponse)=>ApiResponse)
.catch((ApiError)=>ApiError)
console.log(Response)
setAllUserNotes(Response?.data?.notes)
  }



useEffect(()=>{
  setUserToken(`3b8ny__${localStorage.getItem('UserTokenNotes')}`)

  
    getAllNotes()
  

},[])

  return <>
  
  
    <div className="row">
      {allUsersNotes.map((note, index) => (
        <div key={index} className="col-md-6 mb-3">
          <Note values={note} />
        </div>
      ))}
    </div>
  
    
   </>
  
      
  
}
