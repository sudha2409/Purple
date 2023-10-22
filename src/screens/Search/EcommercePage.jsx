import React, { useEffect, useState } from "react";
import ProductCard from "../Search/Category";
import Filter from "../Search/Filter";
import "./ecommerce.css"
import { BASE_APP_URL, ROLES_LIST } from "../../api/config";
import FreeTrialInfo from "./UpgradeNow";
import { useNavigate } from "react-router-dom";

const EcommercePage = ({products, setFiltersChange}) => {
  const [ads, setAds] = useState([]);
  const accessAuth = JSON.parse(localStorage.getItem('accessAuth'));
  const [freeRole, setFreeRole] = useState(true);
  const navigate = useNavigate();

  const [selectedFilters, setSelectedFilters] = useState({
    industry: "",
    subindustry: "",
    type: "",
    format: "",
  });

  useEffect(() => {
    if(products?.ads){
      setAds(products.ads);
    }
  }, [products]);
  
  // useEffect(() => {
  //   fetch(BASE_APP_URL+"/v1/api/advertisements?page=0", 
  //   {
  //     headers: {
  //       'Authorization': accessAuth?.accessToken,
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAds(data.ads);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  const handleUpgradeClick = () => {
    navigate('/checkout-payment');
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
    if((accessAuth?.roles === ROLES_LIST.Admin || accessAuth?.roles === ROLES_LIST.PaidUser)){
      setFreeRole(false);
    }
  }, [])
  

  return (

    <div class="flex justify-center flex-col	" >
        <Filter
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        onSelectedFiltersChange={handleSetSelectedFiltersChange}
      />
         {freeRole ? (<FreeTrialInfo onUpgradeClick={handleUpgradeClick} />) : <></>}          
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        {filteredAds.map((ad) => (
          <ProductCard key={ad.id} ad={ad} />
        ))}
      </div>

    </div>
    // <div className="ad-list">
    //   <Filter
    //     selectedFilters={selectedFilters}
    //     setSelectedFilters={setSelectedFilters}
    //     onSelectedFiltersChange={handleSetSelectedFiltersChange}
    //   />
    //      {freeRole ? (<FreeTrialInfo onUpgradeClick={handleUpgradeClick} />) : <></>}          
    //   <div className="product-grid">
    //     {filteredAds.map((ad) => (
    //       <ProductCard key={ad.id} ad={ad} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default EcommercePage;
