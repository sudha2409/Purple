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
import { BASE_APP_URL } from "../../api/config";

export const SearchPage = () => {
  let { page } = useParams();
  if(!page){
    page = 1
  }
  console.log("page:", page);
  const [filterCount, setFilterCount] = useState('');
  const [products, setProducts] = useState([]);
  const itemsPerPage = 30;
  const [filterparamsString, setfilterparamsString] = useState('');

  useEffect(() => {
    console.log("SearchPage component loaded");
    console.log(`SearchPage useEffect: page=${page}`);
    console.log(`SearchPage useEffect: filterCount=${filterparamsString}`);

    const accessAuth = JSON.parse(localStorage.getItem('accessAuth'));
    axios
      .get(
        `${BASE_APP_URL}/v1/api/advertisements?page=${page}&itemsPerPage=${itemsPerPage}${filterparamsString}`,
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
  }, [page, filterCount]);

  const handleSetFiltersChange = (FiltersChange) => {
    console.log('I am in handleSetFiltersChange', FiltersChange)
    let IndustryString = '';
    let TypeString = '';
    let FormatString = '';
    let SubIndustryString = '';
    let filterparams = '';
    if(FiltersChange?.Industry){
      IndustryString = `&industry=${FiltersChange?.Industry}`
    }
    if(FiltersChange?.Type){
      TypeString = `&type=${FiltersChange?.Type}`
    }
    if(FiltersChange?.Format){
      FormatString = `&format=${FiltersChange?.Format}`
    }
    if(FiltersChange?.SubIndustry){
      SubIndustryString = `&subindustry=${FiltersChange?.SubIndustry}`
    }
    filterparams = IndustryString+TypeString+FormatString+SubIndustryString
    setFilterCount(FiltersChange);
    setfilterparamsString(`${filterparams}`);

  }

  return (
    <div className="search">
      <div className="div-2">
        <LogInHeader />
        <div className="cards">
          {/* <Filter /> */}
          <EcommercePage products={products}  setFiltersChange={handleSetFiltersChange}/>
        </div>
        {/* Pagination */}
        <div className="pagination">
          <button
            disabled={page === "1"} 
            onClick={() => window.location.href = `/SearchPage/${parseInt(page) - 1}`}
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
