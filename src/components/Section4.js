import { Container, Form, Row, Col } from "react-bootstrap";
import { SiKakaotalk } from "react-icons/si";

function Section4() {
    return (
        <Container fluid id="content" className="fontChange p-4 bg-primary">
            <Form className="bg-primary pb-5 text-center">
                <fieldset>
                    <legend id="h2" className="h2 text-white py-5">content</legend>
                    <Form.Group controlId="formname" className="mb-4 row">
                        <Row className="align-items-center">
                            <Col lg={1} className="text-center text-white">
                                <Form.Label className="col-form-label">name</Form.Label>
                            </Col>
                            <Col lg={4}>
                                <Form.Control type="text" value="이 은 진" readOnly />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="gender" className="mb-4 row gender">
                        <Row className="align-items-center">
                            <Col lg={1} className="text-center text-white">
                                <Form.Label className="col-form-label">gender</Form.Label>
                            </Col>
                            <Col lg={4} className="d-flex justify-content-center">
                            <Form.Check type="radio" id="radio1" name="gender" label="여자" value="여자" className="me-3 text-white" defaultChecked readOnly />
                            <Form.Check type="radio" id="radio2" name="gender" label="남자" value="남자" className="me-3 text-white"  />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="formage" className="mb-4 row">
                        <Row className="align-items-center">
                            <Col lg={1} className="text-center text-white">
                                <Form.Label className="col-form-label">age</Form.Label>
                            </Col>
                            <Col lg={4}>
                                <Form.Control type="text" value="만 33세 (92년생)" readOnly />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="formEmail" className="mb-4 row">
                        <Row className="align-items-center">
                            <Col lg={1} className="text-center text-white">
                                <Form.Label className="col-form-label">e-mail</Form.Label>
                            </Col>
                            <Col lg={4}>
                                <Form.Control type="email" value="ej3133@naver.com" readOnly />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="formPhone" className="mb-4 row">
                        <Row className="align-items-center">
                            <Col lg={1} className="text-center text-white">
                                <Form.Label className="col-form-label">phone</Form.Label>
                            </Col>
                            <Col lg={4}>
                                <Form.Control type="email" value="010.2882.3713" readOnly />
                            </Col>
                        </Row>
                    </Form.Group>
                </fieldset>
            </Form>
        </Container>
    );
}

export default Section4;
