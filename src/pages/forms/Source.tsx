import { useState } from 'react'
import { Container, Row, InputGroup, Form, Button } from "react-bootstrap";

export default function Source(this: any) {
    const [filePath, changePath] = useState("No file is selected!")

    async function fileDialog() {
        let filePath: any = await window.api.fileDialog();
        if (filePath === null) {
            filePath = `No file was selected!`
        } else {
            filePath = filePath!.toString()
            changePath(filePath)
            window.settings.update("video", "sourcePath", filePath);
        }
    }

    return (
        <Container className="Source border rounded shadow-sm p-3">
            <Row className="Title">
                <h2> Source </h2>
                <p className="fs-6"> Select video file for editing.</p>
            </Row>
            <InputGroup>
                <Button onClick={fileDialog}> Select </Button>
                <Form.Control disabled readOnly placeholder={filePath}/>
            </InputGroup>
        </Container>
    );
}