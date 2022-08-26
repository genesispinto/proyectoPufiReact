import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Galery=()=> {
  return (
    <div>
        <h3 className='h3'>INSTAGRAM</h3>
        <h2 className='h2'>#ESPUFI</h2>
        <Row className="g-1">
            <Col>
            <Card>
                <Card.Img variant="top" src="../../img/producto1.jpeg" style={{height:"200px"}}  />
            </Card>
            <Card>
                <Card.Img variant="top" src="../../img/producto2.jpeg" style={{height:"200px"}}  />
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img variant="top" src="../../img/producto3.jpeg" style={{height:"200px"}} />
            </Card>
            <Card>
                <Card.Img variant="top" src="../../img/producto4.jpeg" style={{height:"200px"}} />
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img variant="top" src="../../img/producto5.jpeg" style={{height:"200px"}} />
            </Card>
            <Card>
                <Card.Img variant="top" src="../../img/producto6.jpeg" style={{height:"200px"}} />
            </Card>
            </Col>
        </Row> 
    </div>
 
  );
}

export default Galery;