import React from 'react';
import Card from "react-bootstrap/Card";

function Movie({title, year, imgSrc, type}) {
  return (
      <div>
          <Card style={{ width: "20vw", backgroundColor:"#8ae6c8", boxShadow: "10px 10px 25px 1px rgba(0,0,0,0.75)" }} className="m-3">
                <Card.Img variant="top" src={imgSrc==="N/A"?"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg":imgSrc} style={{ height: "30vh",  margin: "0px auto" }} />
                <Card.Body className="flex-column justify-content-center">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="text-start">Year: {year}</Card.Text>
                    <Card.Text className="text-start">Type: {type}</Card.Text>
                </Card.Body>
            </Card>
      </div>
  )
}

export default Movie
