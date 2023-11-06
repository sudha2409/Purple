import React, { useState } from 'react';
import './FilterDropdown.css';

const FilterDropdown = ({ data, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({});

  
  const handleFilterChange = (label, option) => {
    const tempSelectedFilters = {
      ...selectedFilters,
      [label]: option,
    };
    setSelectedFilters(tempSelectedFilters);

    onFilterChange(tempSelectedFilters);
  };

  return (

    <div class="flex py-4 xl:flex-row flex-col space-y-2 xl:space-x-6">
      {data.map((filterGroup) => (
        <div key={filterGroup.label} className="filter-group justify-between">
          <label>{filterGroup.label}</label>
          <select class="min-w-[153px]"
            onChange={(e) => handleFilterChange(filterGroup.label, e.target.value)}
            value={selectedFilters[filterGroup.label] || ''}
          >
            <option value="">All</option>
            {filterGroup.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>   
  );
};

export default FilterDropdown;
