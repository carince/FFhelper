import { Container, Row, Col } from 'react-bootstrap'

export default function Trim() {
    return (
        <Container className="Trim border rounded shadow-sm p-3">
            <h2> Trim </h2>
            <p className='fs-6'> Trim the video to your specified time. </p>
            <Row>
                <Col>
                    <p className='fs-5'> Start </p>
                    <input type="text" name="" id="trim-start" />
                </Col>
                <Col>
                    <p className='fs-5'> End </p>
                    <input type="text" name="" id="trim-end" />
                </Col>
            </Row>
        </Container>
    )
}