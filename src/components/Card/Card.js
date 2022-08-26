import Card from 'react-bootstrap/Card';
import { FaAngleRight } from "react-icons/fa";
const CardInf=({title,pictureAnime,description})=> {
  return (
    <Card style={{ width: '400px', height: '350px' }}>
      <Card.Img variant="top" src={pictureAnime} alt={title} className="imgAnimada" style={{ width: '100px', height: '100px' }}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#"><FaAngleRight/> VER MAS</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardInf;