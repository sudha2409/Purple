import React, { useState, useEffect } from "react";
import SearchPage from "./SearchPage";
import axios from "axios";
import Pagination from "./Pagination";
import { useParams, useNavigate } from "react-router-dom";

const ParentComponent = () => {
  console.log("ParentComponent loaded");
  const { page } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(parseInt(page, 10) || 1);
  const [products, setProducts] = useState([]);
  const itemsPerPage = 30;

  useEffect(() => {
    
    axios
      .get(
        `https://sfb6484cu3.execute-api.ap-south-1.amazonaws.com/v1/api/advertisements?page=${currentPage}&itemsPerPage=${itemsPerPage}`
      )
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    console.log(`Changing to page ${pageNumber}`);
    setCurrentPage(pageNumber);
    navigate(`/SearchPage/${pageNumber}`);
  };

  return (
    <div>
      <SearchPage products={products} currentPage={currentPage} />
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default ParentComponent;
