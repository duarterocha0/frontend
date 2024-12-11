import React from 'react';
import {Card, Button} from 'react-bootstrap';

function ImageCard({image, deleteImage}) {
    return (
        <Card className='my-1 mx-1'>
            <Card.Img variant="top" src={image.urls.small} />
            <Card.Body>
                <Card.Title>{image.title.toUpperCase()}</Card.Title>
                <Card.Text>
                    {image.description || image.alt_description}
                </Card.Text>
                <Button variant="danger" onClick={() => deleteImage(image.id)}>Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default ImageCard;