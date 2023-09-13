import React, { useEffect, useState } from "react";
import ProductCard from "../Search/Category";
import Filter from "../Search/Filter";
import "./ecommerce.css"
import { BASE_APP_URL, ROLES_LIST } from "../../api/config";
import FreeTrialInfo from "./UpgradeNow";

const EcommercePage = ({products, setFiltersChange}) => {
  const [ads, setAds] = useState([]);
  const accessAuth = JSON.parse(localStorage.getItem('accessAuth'));
  const [freeRole, setFreeRole] = useState(true);

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
    fetch(BASE_APP_URL+"/v1/api/advertisements?page=0", 
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
  const handleUpgradeClick = () => {
    // Implement the logic to handle the upgrade action here
    // This can include showing a modal or redirecting the user to an upgrade page.
    // You can also manage state to control the visibility of this component.
    // For example, you might set a state variable to hide it after upgrading.
    alert('Upgrade functionality to be implemented.');
  };
  const filteredAds = ads.filter((ad) => {
    const industryMatch = !selectedFilters.industry || ad.industry === selectedFilters.industry;
    const subindustryMatch = !selectedFilters.subindustry || ad.subindustry === selectedFilters.subindustry;
    const typeMatch = !selectedFilters.type || ad.type === selectedFilters.type;
    const formatMatch = !selectedFilters.format || ad.format === selectedFilters.format;

    return industryMatch && subindustryMatch && typeMatch && formatMatch;
  });
  const handleSetSelectedFiltersChange = (setFilters) => {
    setFiltersChange(setFilters);
  };

  useEffect(() => {
    if((accessAuth?.roles == ROLES_LIST.Admin || accessAuth?.roles == ROLES_LIST.PaidUser)){
      setFreeRole(false);
    }
  }, [])
  

  return (
    <div className="ad-list">
      <Filter
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        onSelectedFiltersChange={handleSetSelectedFiltersChange}
      />
         {freeRole ? (<FreeTrialInfo onUpgradeClick={handleUpgradeClick} />) : <></>}          
      <div className="product-grid">
        {filteredAds.map((ad) => (
          <ProductCard key={ad.id} ad={ad} />
        ))}
      </div>
    </div>
  );
};

export default EcommercePage;
