import { Container, Button } from "react-bootstrap";

export default function SelectFile() {
  async function fileDialog() {
    window.api.fileDialog()
  }

  return (
    <Container className="SelectFile border rounded shadow-sm p-3">
      <h2> Source </h2>
      <p className="fs-6"> Select video file for editing.</p>
      <Button onClick={fileDialog} className='col-md-auto'> Select </Button>
      <p className='filePath col-md-auto'></p>
    </Container>
  );
}