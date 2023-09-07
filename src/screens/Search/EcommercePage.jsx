import React, { useEffect, useState } from "react";
import ProductCard from "../Search/Category";
import Filter from "../Search/Filter";
import "./ecommerce.css"

const EcommercePage = ({products}) => {
  const [ads, setAds] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    industry: "",
    subindustry: "",
    type: "",
    format: "",
  });

  useEffect(() => {
    if(products?.ads){
      setAds(products.ads);
      console.log('products', products)
    }
  }, [products]);
  
  useEffect(() => {
    const accessAuth = JSON.parse(localStorage.getItem('accessAuth'));
    fetch("https://sfb6484cu3.execute-api.ap-south-1.amazonaws.com/v1/api/advertisements?page=0", 
    {
      headers: {
        'Authorization': accessAuth?.accessToken,
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming data.ads is an array of ad objects
        setAds(data.ads);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const filteredAds = ads.filter((ad) => {
    const industryMatch = !selectedFilters.industry || ad.industry === selectedFilters.industry;
    const subindustryMatch = !selectedFilters.subindustry || ad.subindustry === selectedFilters.subindustry;
    const typeMatch = !selectedFilters.type || ad.type === selectedFilters.type;
    const formatMatch = !selectedFilters.format || ad.format === selectedFilters.format;

    return industryMatch && subindustryMatch && typeMatch && formatMatch;
  });

  return (
    <div className="ad-list">
      {/* <Filter
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        // pass filter options from API as props
      /> */}
      <div className="product-grid">
        {filteredAds.map((ad) => (
          <ProductCard key={ad.id} ad={ad} />
        ))}
      </div>
    </div>
  );
};

export default EcommercePage;
