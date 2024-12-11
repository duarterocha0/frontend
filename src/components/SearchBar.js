import React from 'react';
import { Form, InputGroup, Container, Row, Col, Button } from 'react-bootstrap';

const SearchBar = ({word, setWord, handleSubmit}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="my-4">
                            <Form.Control
                                className='fs-3'
                                placeholder="Search for new image..."
                                aria-label="Search for new image..."
                                onChange={(e) => setWord(e.target.value)}
                                value={word}
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="primary" type='submit' className='fw-bold fs-3' id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchBar;