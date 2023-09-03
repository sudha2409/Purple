import React from 'react'
import "../Search/styleSearch.css"
const LogInHeader = () =>{

    return (
        <div className="login-header">
        <div className="navbar">
          <div className="text-wrapper-11">Creatives</div>
          <div className="text-wrapper-11">Influencers</div>
          <div className="text-wrapper-11">Favourites</div>
          <div className="text-wrapper-11">Upgrade plan</div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-30">
            <div className="text-wrapper-12">Profile</div>
          </div>
        </div>
        <div className="frame-31">
          <div className="group-2">
            <div className="overlap-group-3">
              <img
                className="img-3"
                alt="Img"
                src="https://generation-sessions.s3.amazonaws.com/14fee2d83e15953598a18f47bcb63aab/img/-.svg"
              />
            </div>
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <div className="ellipse-6" />
          </div>
          <div className="text-wrapper-13">Purple Maze</div>
        </div>
      </div>
    )
}
export default LogInHeader