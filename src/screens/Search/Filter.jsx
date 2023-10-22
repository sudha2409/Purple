import React, { useEffect, useState } from "react";
import "./filter.css";
import axios from "axios";
import FilterDropdown from "./FilterDropdown";
import { BASE_APP_URL } from "../../api/config";

const Filter = ({onSelectedFiltersChange}) => {

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filterOption = await axios.get(BASE_APP_URL+"/v1/api/advertisements/filters");

        setFilterData([
          { label: "Industry", options: filterOption.data.industry || [] },
          { label: "SubIndustry", options: filterOption.data.subindustry || [] },
          { label: "Type", options: filterOption.data.type || [] },
          { label: "Format", options: filterOption.data.format || [] },
        ]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  const handleFilterChange = (newFilters) => {
    onSelectedFiltersChange(newFilters)
  };

  return (
    <div className="flex items-center justify-center">
      {/* <div className="overlap">
        <div className="frame-10">
          <div className="frame-11">
            <div className="text-wrapper-13">Search Here</div>
          </div>
          <img
            className="vuesax-linear-search"
            alt="Vuesax linear search"
            src="https://generation-sessions.s3.amazonaws.com/14fee2d83e15953598a18f47bcb63aab/img/vuesax-linear-search-normal.svg"
          />
        </div>
        <img
          className="img-2"
          alt="Img"
          src="https://generation-sessions.s3.amazonaws.com/14fee2d83e15953598a18f47bcb63aab/img/64088dfd259d863110d90801-doodle1-1.svg"
        />
      </div> */}
      <FilterDropdown data={filterData} onFilterChange={handleFilterChange} />     
    </div>
  );
};

export default Filter;
