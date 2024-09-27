import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';  // Solid icon
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';  // Regular icon

function Note() {
  return (
    <Card className='p-2 w-50 me-4 '>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nemo tempore cum vero sint rem iste nihil beatae quas recusandae?
        </Card.Text>
        {/* Using FontAwesomeIcon component */}
        <FontAwesomeIcon  icon={faTrash} className="fs-4 me-3" />
        <FontAwesomeIcon  icon={faPenToSquare} className="fs-4" />
      </Card.Body>
    </Card>
  );
}

export default Note;
