import React from "react";
//  style
import "./css/explorer.style.css";

// componets 
import SideMenu from "./../side-menu/sideMenu";
// eslint-disable-next-line
const ExplorerUI: React.FC = (props) => {
	return (
		<>
			<SideMenu config={{
				width: 250,
				maxWidth: 400,
				minWidth: 150,
				padding: 32
			}}/>
		</>
	);
};

export default ExplorerUI; 