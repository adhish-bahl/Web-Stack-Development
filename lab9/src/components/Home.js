import { React, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import axios from "axios";
import BookCard from "./BookCard";
import Loader from "./Loader";

function Home() {
  const [searchField, setSearchField] = useState("");
  const [booksData, setBooksData] = useState([]);
  const [filteredBooksData, setFilteredBooksData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoader(true);
    setError("")
    await axios
      .get("https://www.googleapis.com/books/v1/volumes?q=fiction")
      .then((res) => {
        setBooksData(res.data.items);
		    setFilteredBooksData(res.data.items);
      })
      .catch(err => setError(err.response.data.error.message));
      setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setLoader(true);
	  setFilteredBooksData(booksData.filter((book) => book.volumeInfo.title.toLowerCase().includes(searchField) || book.volumeInfo.description.toLowerCase().includes(searchField)))
    setLoader(false);
  }, [searchField])

  return (
    <>
      <Form inline="true" className="d-flex justify-content-end m-5">
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search for Books Here"
              className=" mr-sm-2"
              onChange={(e) => {
                setSearchField(e.target.value);
              }}
            />
          </Col>
          <Col xs="auto"></Col>
        </Row>
      </Form>
	  <Container className="w-100 d-flex flex-wrap justify-content-around">
      {
        loader?<Loader />:error!==""?<h2>{error}</h2>:
	  	  filteredBooksData.map((res) => (
			  <BookCard key={res.id} imgSrc={res.volumeInfo.imageLinks.smallThumbnail} title={res.volumeInfo.title} text={res.volumeInfo.description} author={res.volumeInfo.authors.toString()} /> 
			  ))	
	  }
	  </Container>
    </>
  );
}

export default Home;
