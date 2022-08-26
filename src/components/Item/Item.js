import Img from "../Imagen/Imagen"
import CardInf from "../Card/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Item = ({title,pictureAnime,description,pictureUrl,id}) =>{
 
let index = true
 const mostrar =()=>{
    if(id % 2===0) return index= true
    else return index= false
 }
mostrar()
    return(
    
            <Row xs={1} md={2} className="g-1">
                <Col>
                    
                        {   index
                            ? 
                            <CardInf title={title} pictureAnime={pictureAnime} description={description}/>
                            : 
                            <Img title={title} pictureUrl={pictureUrl} />
                        }
                </Col>

                <Col>
                        {   !index
                            ? 
                            <CardInf title={title} pictureAnime={pictureAnime} description={description} />
                            : 
                            <Img title={title} pictureUrl={pictureUrl}/>
                        }  
                    
                </Col>
            </Row>        
        
    )}

export default Item