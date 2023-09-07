import React, { useState, useEffect } from "react";
import { Footer } from "../../components/Footer";
import "../Search/styleSearch.css";
import LogInHeader from "./LogInHeader";
import EcommercePage from "../Search/EcommercePage";
import Filter from "./Filter";
import axios from "axios";
import { Link } from "react-router-dom"; 
import { useParams, useNavigate } from "react-router-dom";
import useLogout from '../../hooks/useLogout';
import moment from 'moment';

export const SearchPage = () => {
  const { page } = useParams();
  console.log("page:", page);
  const [products, setProducts] = useState([]);
  const itemsPerPage = 30;
      
  useEffect(() => {
    console.log("SearchPage component loaded");
    console.log(`SearchPage useEffect: page=${page}`);
    const accessAuth = JSON.parse(localStorage.getItem('accessAuth'));
    axios
      .get(
        `https://sfb6484cu3.execute-api.ap-south-1.amazonaws.com/v1/api/advertisements?page=${page}&itemsPerPage=${itemsPerPage}`,
        {
          headers: {
            'Authorization': accessAuth?.accessToken,
            'Content-Type': 'application/json'
          },
        }
      )
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page]);

  return (
    <div className="search">
      <div className="div-2">
        <LogInHeader />
        <div className="cards">
          {/* <Filter /> */}
          <EcommercePage products={products} />
        </div>
        {/* Pagination */}
        <div className="pagination">
          <button
            disabled={page === "1"} 
            onClick={() => window.location.href = `/SearchPage?page=${parseInt(page) - 1}`}
          >
            Previous
          </button>
          <span>Page {page}</span>
          <button
            onClick={() => window.location.href = `/SearchPage/${parseInt(page) + 1}`}
          >
            Next
          </button>
        </div>
        <Footer
          className="footer-instance"
          iconInstagramIconInstagram="https://generation-sessions.s3.amazonaws.com/14fee2d83e15953598a18f47bcb63aab/img/icon-instagram.svg"
          iconTwitterIconTwitter="https://generation-sessions.s3.amazonaws.com/14fee2d83e15953598a18f47bcb63aab/img/icon-twitter.svg"
          img="https://generation-sessions.s3.amazonaws.com/14fee2d83e15953598a18f47bcb63aab/img/--1.svg"
        />
      </div>
    </div>
  );
};

export default SearchPage;
