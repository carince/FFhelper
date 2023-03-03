import { Container, Row, Col, Form } from 'react-bootstrap'

export default function Trim() {
    return (
        <Container className="Trim border rounded shadow-sm p-3">
            <Row className="Trim-Title">
                <Form className="d-flex justify-content-between align-items-center">
                    <h2> Trim </h2>
                    <Form.Check type="switch"
                        id="custom-switch"
                        className="float-right"
                        onChange={(elm) => {
                            window.settings.update("trimConfirm", elm.target.checked);
                        }}
                    />
                </Form>
                <p className='fs-6'> Trim the video to your specified time. </p>
            </Row>
            <Row className="Trim-Settings">
                <Col>
                    <p className='fs-5'> Start </p>
                    <input type="text" name="" id="trim-start" onChange={(elm) => {
                        window.settings.update("trimStart", elm.target.value);
                    }}/>
                </Col>
                <Col>
                    <p className='fs-5'> End </p>
                    <input type="text" name="" id="trim-end" onChange={(elm) => {
                        window.settings.update("trimEnd", elm.target.value);
                    }}/>
                </Col>
            </Row>
        </Container>
    )
}