import { Container, Form, Row, Col } from 'react-bootstrap'

export default function Trim() {
    return (
        <Container className="Trim border rounded shadow-sm p-3">
            <Row className="Trim-Title">
                <Col className="d-flex justify-content-between align-items-center">
                    <h2> Trim </h2>
                    <Form.Check type="switch"
                        id="custom-switch"
                        className="float-right"
                        onChange={(elm) => {
                            window.settings.update("trimConfirm", elm.target.checked);
                        }}
                    />
                </Col>
                <p className='fs-6'> Trim the video to your specified time. </p>
            </Row>
            <Form className="Trim-Body">
                <Form.Group>
                    <Form.Label> Start Timestamp </Form.Label>
                    <Form.Control type="input" placeholder="HH:MM:SS" onChange={(elm) => {
                        window.settings.update("trimStart", elm.target.value);
                    }} />
                </Form.Group>

                <Form.Group>
                    <Form.Label> End Timestamp </Form.Label>
                    <Form.Control type="input" placeholder="HH:MM:SS" onChange={(elm) => {
                        window.settings.update("trimEnd", elm.target.value);
                    }} />
                </Form.Group>
            </Form>
        </Container>
    )
}