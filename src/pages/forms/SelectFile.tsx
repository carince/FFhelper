import { Container, Button, Row, Col } from "react-bootstrap";

export default function SelectFile(this: any) {
    async function fileDialog() {
        let filePath: any = await window.api.fileDialog();
        if (filePath === null) {
            filePath = `No file was selected!`
        } else {
            filePath = filePath!.toString()
            const element = document.querySelector(`p.filePath`);
            element!.innerHTML = filePath;
            window.settings.update("directory", filePath);
        }
    }

    return (
        <Container className="SelectFile border rounded shadow-sm p-3">
            <Row className="SelectFile-Title">
                <h2> Source </h2>
                <p className="fs-6"> Select video file for editing.</p>
            </Row>
            <Row className="SelectFile-Body">
                <Col className="d-flex align-items-center">
                    <Button onClick={fileDialog} className='me-3'> Select </Button>
                    <p className='filePath col-md-auto m-0'> No file selected yet. </p>
                </Col>
            </Row>
        </Container>
    );
}