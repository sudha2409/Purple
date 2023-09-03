import React from "react";
import "./ecommerce.css";

const Category = ({ ad }) => {
  const {
    name,
    primary_text,
    headline,
    description,
    display_link,
    call_to_action,
    media_resource_url,
    logo_resource_url,
    format,
    video_type,
  } = ad;

  return (
    <div className="product-card">
      <div className="card-header"></div>
      <div className="card-body">
        <div className="logo-name-container">
          <img className="logo-image" src={logo_resource_url} alt={name} />
          <h2 className="name">{name}</h2>
        </div>
        {format === "Video" ? (
          <div className="video-container">
            <video controls>
              <source src={media_resource_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <img className="media-image" src={media_resource_url} alt={name} />
        )}
        <div className="content-details">
          <h2 className="headline">{headline}</h2>
          <a
            className="display-link"
            href={display_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {display_link}
          </a>
        </div>
        <div className="cta-container">
          <button className="cta-button">{call_to_action}</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
