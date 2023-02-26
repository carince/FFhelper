import { Container, Button } from "react-bootstrap"

async function run() {
    window.api.run()
}

export default function Run() {
    return (
        <Container className="Run border rounded shadow-sm p-3">
            <h2> Run </h2>
            <p className='fs-6'> Start FFmpeg </p>
            <Button onClick={run}> Start </Button>
        </Container>
    )
}