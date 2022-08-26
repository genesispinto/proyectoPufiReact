
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return ( 
        <Navbar   className='d-flex justify-content-between px-4'>
            <Navbar.Brand href="#home" className='p-2'>
                <img
                    alt=""
                    src="../../img/logo-pufi.png"
                    width="80"
                    height="40"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Navbar.Collapse className="p-2 text-white">
                <Nav className="mx-auto  text-white">
                    <Nav.Link href="#home">PUFI PUFF</Nav.Link>
                    <div className="vr" />
                    <Nav.Link href="#features">PUFI RAIN</Nav.Link>
                    <div className="vr" />
                    <Nav.Link href="#pricing">PUFI NAP</Nav.Link>
                </Nav>
            </Navbar.Collapse>

            <Navbar.Collapse className=" p-2 justify-content-end text-white">
                <NavDropdown title="MI CUENTA" id="basic-nav-dropdown" className="mx-3 ">
                    <NavDropdown.Item href="#action/3.3">Configuracion</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Cerrar Session
                    </NavDropdown.Item>
                </NavDropdown>
                <div className="vr" />
                <Nav className="md-auto  text-white">
                    <Nav.Link href="#memes">MI COMPRA</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
    )
}
export default NavBar