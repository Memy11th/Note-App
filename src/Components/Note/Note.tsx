import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';  // Solid icon
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';  // Regular icon
import axios from 'axios';
import { userNotes } from '../../Atoms/userAtom';
import { useRecoilState } from 'recoil';

function Note({values}) {

  const [UserNotes,setUserNotes] = useRecoilState(userNotes)

  async function deleteUserNote(Id){
    let Response = await axios.delete(`https://note-sigma-black.vercel.app/api/v1/notes/${Id}`,{
      headers:{
        token : `3b8ny__${localStorage.getItem('UserTokenNotes')}`
      }
    })
    .then((Response)=>Response)
    .catch((Error)=>Error)
    setUserNotes(Response?.data?.notes)
  }


  return <>
    <Card className='p-2 w-100 '>
      <Card.Body>
        <Card.Title>{values.title}</Card.Title>
        <Card.Text>
          {values.content}
        </Card.Text>
        {/* Using FontAwesomeIcon component */}
        <FontAwesomeIcon onClick={()=>deleteUserNote(values._id)}   icon={faTrash} className="fs-4 me-3  " />
        <FontAwesomeIcon  icon={faPenToSquare} className="fs-4" />
      </Card.Body>
    </Card>
    </>

    
}

export default Note;
