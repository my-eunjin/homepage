import { Card, Container, Row, Col } from "react-bootstrap";

function Section2(){
    const cardData = [
        {id:1, title:'메리츠화재 리뉴얼 홈페이지', subTitle:'피그마로 디자인 후 HTML로 제작한 반응형 홈페이지', tool:'html, java script, swiper', src:'http://ooaa.dothome.co.kr/', git:'https://www.figma.com/design/Rq3yUI3b0Yw1OGnOXjIB08/%EB%A9%94%EB%A6%AC%EC%B8%A0?node-id=0-1&m=dev&t=JpV8mNm2fEQ6sXkS-1', img:'./images/meritz.png'},
        {id:2, title:'KCC 글라스 리뉴얼 홈페이지', subTitle:'피그마로 디자인 후 HTML로 제작한 반응형 홈페이지', tool:'html, java script, swiper, slick', src:'https://my-eunjin.github.io/kcc/', git:'https://github.com/my-eunjin/kcc', img:'./images/kcc.png'},
        {id:3, title:'메디큐브앱 클론코딩', subTitle:'react 기반으로 제작한 클론코딩', src:'https://my-eunjin.github.io/app/', tool:'react, swiper', git:'https://github.com/my-eunjin/app', img:'./images/medi.png'},
        {id:4, title:'캘린더 투두리스트', subTitle:'react 기반으로 제작한 캘린더+투두리스트', src:'https://my-eunjin.github.io/calendar-Todo/', tool:'react, tailwind', git:'https://github.com/my-eunjin/calendar-Todo', img:'./images/todo.png'},
        {id:5, title:'오늘의 날씨', subTitle:'vue 기반으로 제작한 위치별 날씨정보 안내', src:'https://my-eunjin.github.io/weather/', tool:'vue, openweathermap', git:'https://github.com/my-eunjin/weather', img:'./images/weather.png'},
    ]
    return(
        <Container fluid id="work" className="fontChange p-4 bg-primary">
            <Row className="bg-primary">
            <h2 id="h2" className="text-white py-5">portfolio</h2>
                {cardData.map((card)=>(
                    <Col key={card.id} md={4} className="mb-4">
                        <Card className="card bg-secondary rounded">
                            {/* <Card.Header>{card.title}</Card.Header> */}
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.subTitle}</Card.Text>
                                <Card.Text>사용한툴 : {card.tool}</Card.Text>
                                <Card.Img src={card.img} alt={card.title} />
                                <Card.Link href={card.src} target="_blank" className="mt-3 badge rounded-pill bg-primary">VIEW</Card.Link>
                                <Card.Link href={card.git} target="_blank" className="mt-3 badge rounded-pill bg-primary">Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))};
            </Row>

        </Container>
    )
}

export default Section2;