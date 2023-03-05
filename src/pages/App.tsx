import SelectFile from './forms/SelectFile'
import Trim from './forms/Trim';
import Export from './forms/Export'

import { Badge, Col, Stack } from 'react-bootstrap';

export default function App() {
  return (
    <div className="App p-5 col">
      <Stack gap={3}>
        <Col className="d-flex">
          <h1 className="m-0"> FFhelper </h1>
          <Badge className="align-self-end ms-2 mb-1">0.1.0 Beta</Badge>
        </Col>

        <SelectFile />
        <Trim />
        <Export />
      </Stack>
    </div>
  );
}