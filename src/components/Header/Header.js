import Container from 'react-bootstrap/Container';
import Carrousel from '../Carrousel/Carrousel';
import NavBar from '../NavBar/NavBar';

const Header=()=> {
  return (
    <Container fluid className='p-0'>
        <NavBar/>
        <Carrousel  />
    </Container>
  );
}

export default Header;