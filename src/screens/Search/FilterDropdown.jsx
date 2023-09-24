import React, { useState } from 'react';
import './FilterDropdown.css';

const FilterDropdown = ({ data, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({});

  // Handle filter selection and update state
  const handleFilterChange = (label, option) => {
    const tempSelectedFilters = {
      ...selectedFilters,
      [label]: option,
    };
    setSelectedFilters(tempSelectedFilters);

    onFilterChange(tempSelectedFilters);
  };

  return (
    <div className="filter-dropdown">
         <div className="filter-group-container">
      {data.map((filterGroup) => (
        <div key={filterGroup.label} className="filter-group">
          <label>{filterGroup.label}</label>
          <select
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
    </div>
  );
};

export default FilterDropdown;
