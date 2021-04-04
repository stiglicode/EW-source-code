import React from "react";
import { NavLink } from "react-router-dom";
// style 
import "./css/top-nav.style.css";

const TopNav: React.FC = () => {
	return (
		<div className="top-nav_box primary-100_bckg base-text primary-adapt">
			<NavLink className="top-nav_link click-eff hover-btn-one soft-border" activeClassName="top-nav_link__ON" to="/reset-password-form">
				<span className="bold">Reset&nbsp;</span>	
				<span className="light">password</span>	
			</NavLink>    
			<NavLink className="top-nav_link click-eff hover-btn-one soft-border" activeClassName="top-nav_link__ON" to="/signin">
				<span className="bold">Sign&nbsp;</span>	
				<span className="light">in</span>	
			</NavLink>    
			<NavLink className="top-nav_link click-eff hover-btn-one soft-border" activeClassName="top-nav_link__ON" to="/signup">
				<span className="bold">Sign&nbsp;</span>	
				<span className="light">up</span>	
			</NavLink>    
		</div>
	);
};

export default TopNav;
