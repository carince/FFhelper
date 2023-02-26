import { Button } from "react-bootstrap";

export default function SelectFile() {
    async function SelectFileDialog() {
      window.api.fileDialog()
    }

    return (
      <div className="SelectFile mt-4">
        <h3> Select video file to edit </h3>
        <p className="filePath"></p>
        <Button onClick={SelectFileDialog}> Select File </Button>
      </div>
    );
}