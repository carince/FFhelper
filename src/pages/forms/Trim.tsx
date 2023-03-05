import { useState } from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'

export default function Trim() {
    const [isDisabled, disableForm] = useState(true)

    return (
        <Container className="Trim border rounded shadow-sm p-3">
            <Row className="Title">
                <Col className="d-flex justify-content-between align-items-center">
                    <h2> Trim </h2>
                    <Form.Check type="switch"
                        className="float-right"
                        onChange={(elm) => {
                            window.settings.update("trim", "confirm", elm.target.checked)
                            if (elm.target.checked === true) {
                                disableForm(false)
                            } else {
                                disableForm(true)
                            }
                        }}
                    />
                </Col>
                <p className='fs-6'> Trim the video to your specified time. </p>
            </Row>

            <Form className="Body">
                <fieldset disabled={isDisabled}>
                    <Row >
                        <Col>
                            <Form.Group>
                                <Form.Label> Start Timestamp </Form.Label>
                                <Form.Control type="input" placeholder="HH:MM:SS" onChange={(elm) => {
                                    window.settings.update("trim", "start", elm.target.value);
                                }} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label> End Timestamp </Form.Label>
                                <Form.Control type="input" placeholder="HH:MM:SS" onChange={(elm) => {
                                    window.settings.update("trim", "end", elm.target.value);
                                }} />
                            </Form.Group>
                        </Col>
                    </Row>
                </fieldset>
            </Form>
        </Container >
    )
}