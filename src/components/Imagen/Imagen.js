import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Img=({pictureUrl, title})=> {
  return (
    <Card className=" text-white" style={{ width: '400px', height: '350px' }}>
      <Card.Img src={pictureUrl} alt={title} style={{ width: '400px',height: '100%' }}/>
      <Card.ImgOverlay>
        <Card.Text>
            <Button variant="outline-dark">SHOP</Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Img;