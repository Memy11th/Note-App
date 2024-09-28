import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

export default function Sidebar() {
    const sidebarWidth = 250; // Adjust the sidebar width to match your sidebar





    return (
    <>
        <Container fluid>
    <Row>
        {/* Sidebar */}
        <Col
            xs={12}
            md={3}
            lg={2}
            className="bg-black min-vh-100 p-0"
            style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `${sidebarWidth}px`, // Fixed width for the sidebar
            height: '100vh',
    }}
        >
        <Nav className="flex-column text-light p-3">
            <Nav.Item className="mb-4 mt-5">
            <h4 className='text-center '>Notes</h4>
            </Nav.Item>
            <Nav.Item className="mb-3">
            <Nav.Link href='/' className="text-light">Home </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-3">
            <Nav.Link href="/profile" className="text-light">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-3">
                <Nav.Link href="#" className="text-light">Logout</Nav.Link>
            </Nav.Item>
        </Nav>
        </Col>

        {/* Main Content */}
        <Col
        
            xs={9}
            md={9}
            lg={9}
            style={{
            marginLeft: `${sidebarWidth}px`, // Add margin equal to sidebar width
            padding: '15px',
        }}
        >
        <p>{ <Outlet></Outlet> }</p>
        </Col>
    </Row>
    </Container>
    </>
)
}
