import { useState } from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Section1(){
    const [activeKey, setActiveKey] = useState('main');
    const handleActive = (selectedKey) => {
        setActiveKey(selectedKey);
    };
    
    return(
        <>
        <Navbar bg="primary" variant="dark" expand="lg" fixed='top'>
            <Container fluid>
                <Navbar.Brand href="#">PROFILE SITE</Navbar.Brand>
                <Navbar.Toggle aria-controls="toggle" />
                <Navbar.Collapse id="toggle">
                    <Nav activeKey={activeKey} onSelect={handleActive}>
                        <Nav.Item>
                            <Nav.Link eventKey="main" href="#main">main</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="work" href="#work">work</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="about" href="#about">about me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="content" href="#content">content</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Carousel fade id='main'>
            <Carousel.Item>
                <img src='./images/6492443.jpg' alt='1' className='mainBg' />
                <Carousel.Caption>
                    <h3>배너1</h3>
                    <p>설명글</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='./images/6492499.jpg' alt='1' className='mainBg' />
                <Carousel.Caption>
                    <h3>배너2</h3>
                    <p>설명글</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='./images/6869461.jpg' alt='1' className='mainBg' />
                <Carousel.Caption>
                    <h3>배너3</h3>
                    <p>설명글</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default Section1;