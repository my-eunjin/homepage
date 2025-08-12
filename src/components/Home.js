import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function Home({onHide}){
    const [hide, setHide] = useState(false);
    const clickBtn = () => {
        if(!hide) setHide(true)
    };
    useEffect(() => {
        if(hide) {
            const timer = setTimeout(() => {
                onHide();
            }, 700);
            return () => clearTimeout(timer);
        }
    }, [hide, onHide]);

    return(
        <Container fluid id="mainSect" className="bg-primary">
            <button id="mainBtn" onClick={clickBtn} disabled={hide}>
                <img src="./images/Ellipse1.png" alt="btn"/>
                {hide && <div className="bgEffect"></div>}
            </button>
        </Container>
    )
}

export default Home;