import React from 'react'
import SelectFile from './forms/SelectFile'
import Trim from './forms/Trim';
import Run from './forms/Run'

import { Badge, Col, Stack } from 'react-bootstrap';

export default function App() {
  return (
    <div className="App p-5 col">
      <Stack gap={4}>
        <Col>
          <h1> FFhelper </h1>
          <Badge> v0.1.0 Beta</Badge>
        </Col>

        <SelectFile />
        <Trim />
        <Run />
      </Stack>
    </div>
  );
}