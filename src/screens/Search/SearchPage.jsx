import React, { useState, useEffect } from "react";
import { Footer } from "../../components/Footer";
import "../Search/styleSearch.css";
import LogInHeader from "./LogInHeader";
import EcommercePage from "../Search/EcommercePage";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_APP_URL } from "../../api/config";

export const SearchPage = () => {
  let { page } = useParams();
  if (!page) {
    page = 0;
  }
  const [filterCount, setFilterCount] = useState("");
  const [products, setProducts] = useState([]);
  const [showPageNumber, setShowPageNumber] = useState("");
  const [currentPageNumber, setCurrentPageNumber] = useState("");
  const [totalPages, setTotalPages] = useState("");

  const itemsPerPage = 30;
  const [filterparamsString, setfilterparamsString] = useState("");

  useEffect(() => {
    const accessAuth = JSON.parse(localStorage.getItem("accessAuth"));
    axios
      .get(
        `${BASE_APP_URL}/v1/api/advertisements?page=${page}&itemsPerPage=${itemsPerPage}${filterparamsString}`,
        {
          headers: {
            Authorization: accessAuth?.accessToken,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setProducts(response.data);
        setCurrentPageNumber(response.data.page_number);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page, filterCount]);

  const handleSetFiltersChange = (FiltersChange) => {
    let IndustryString = "";
    let TypeString = "";
    let FormatString = "";
    let SubIndustryString = "";
    let filterparams = "";
    if (FiltersChange?.Industry) {
      IndustryString = `&industry=${FiltersChange?.Industry}`;
    }
    if (FiltersChange?.Type) {
      TypeString = `&type=${FiltersChange?.Type}`;
    }
    if (FiltersChange?.Format) {
      FormatString = `&format=${FiltersChange?.Format}`;
    }
    if (FiltersChange?.SubIndustry) {
      SubIndustryString = `&subindustry=${FiltersChange?.SubIndustry}`;
    }
    filterparams =
      IndustryString + TypeString + FormatString + SubIndustryString;
    setFilterCount(FiltersChange);
    setfilterparamsString(`${filterparams}`);
  };
  useEffect(() => {
    const nextPage = String(parseInt(page, 10) + 1);
    setShowPageNumber(nextPage);
  }, [page]);

  return (
    <div className="search">
      <div className="div-2">
        <LogInHeader />
        <div className="cards">
          {/* <Filter /> */}
          <EcommercePage
            products={products}
            setFiltersChange={handleSetFiltersChange}
          />
        </div>
        {/* Pagination */}
        <div className="pagination">
          {currentPageNumber > 0 && (
            <button
              disabled={page === "0"}
              onClick={() =>
                (window.location.href = `/SearchPage/${parseInt(page) - 1}`)
              }
            >
              Previous
            </button>
          )}
          <span>Page {showPageNumber} </span>
          {currentPageNumber < totalPages && (
            <button
              onClick={() =>
                (window.location.href = `/SearchPage/${parseInt(page) + 1}`)
              }
            >
              Next
            </button>
          )}
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
