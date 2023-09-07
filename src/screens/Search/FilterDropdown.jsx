import React, { useState } from 'react';

const FilterDropdown = ({ data, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({});

  // Handle filter selection and update state
  const handleFilterChange = (label, option) => {
    setSelectedFilters({
      ...selectedFilters,
      [label]: option,
    });

    // Pass the selected filters to the parent component
    onFilterChange(selectedFilters);
  };

  return (
    <div className="filter-dropdown">
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
  );
};

export default FilterDropdown;
