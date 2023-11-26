import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";

function BookCard({ imgSrc, title, text, author }) {

    const [noOfRating, setNoOfRating] = useState(0)
    const [totalRating, setTotalRating] = useState(0)
    const [sliderValue, setSliderValue] = useState(0)

    const manageRating = () => {
        setNoOfRating(noOfRating + 1)
        setTotalRating((totalRating + parseInt(sliderValue)))
    }

    return (
        <>
            <Card style={{ width: "80vw", backgroundColor:"#03f4fc", boxShadow: "10px 10px 25px 1px rgba(0,0,0,0.75)" }} className="flex-row my-3">
                <Card.Img variant="top" src={imgSrc} style={{ height: "30vh", width: "fit-content" }} />
                <Card.Body className="flex-column">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="text-start fw-bold mx-3">Author: {author}</Card.Text>
                    <Card.Text className="text-start">{text}</Card.Text>
                    <Container className="d-flex justify-content-start align-items-center">
                        <Form.Label className="mx-3">Rate the Book</Form.Label>
                        <Col xs="2">
                            <Form.Range value={sliderValue} min={0} max={10} onChange={e => setSliderValue(e.target.value)}/>
                        </Col>
                        <Col xs="1">
                            <Form.Control value={sliderValue} style={{width: "50px", marginLeft: "1rem"}} />
                        </Col>
                        <Button variant="dark" style={{marginLeft: "5rem", fontSize: "0.8rem"}} onClick={manageRating}>Submit Review</Button>
                    </Container>
                    <Container className="d-flex justify-content-center align-items-center">
                        <Form.Label className="mx-5 my-2 fw-bold">Total Reviews: {noOfRating}</Form.Label>
                        <Form.Label className="mx-5 my-2 fw-bold">Average Rating: {totalRating?Math.round((totalRating/noOfRating)*100)/100:0}</Form.Label>
                    </Container>
                </Card.Body>
            </Card>
        </>
    );
}

export default BookCard;
