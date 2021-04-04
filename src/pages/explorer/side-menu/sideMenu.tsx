import React, { useState, useEffect } from "react";
// componets 
import { ExpoSwitcher, FolderType} from "../../../components/exp/nav-tree/";
// style
import "./css/sideMenu.style.css";
// interface
import { WidthFromConfig } from "../../../bin/interface/side-menu.interface";

const SideMenu: React.FC<WidthFromConfig> = (props: WidthFromConfig) => {
	const [mousePos, setMousePos]: [number | undefined, React.Dispatch<React.SetStateAction<number>>] = useState(0);
	const [isResizeable, setResizeability]:[boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);
	const enableResizeHandler:React.MouseEventHandler<HTMLDivElement> = () => {
		if(isResizeable === false){
			setResizeability(true);
		}
	};
	const resize = (e: MouseEvent):React.SetStateAction<number> | void => {
		if(e.pageX >= props.config.maxWidth + props.config.padding || e.pageX <= props.config.minWidth + props.config.padding) {
			return;
		}else {
			return setMousePos(e.pageX);
		}
	};

	useEffect(() => {
		if(isResizeable === true){
			return window.addEventListener("mousemove", resize); 
		}
	},[isResizeable]);
	
	window.addEventListener("mouseup", () => {
		if(isResizeable === true){
			setResizeability(false);
		}
		return window.removeEventListener("mousemove", resize);
	});
	return (
		<div className="primary-adapt __exp__side-menu flex-column init-border" style={{width: mousePos === 0 ? props.config.width : mousePos - props.config.padding * 1.9, minWidth: props.config.minWidth, maxWidth: props.config.maxWidth}}>
			<div className="resizer" onMouseDown={enableResizeHandler}></div>
			<ExpoSwitcher userToken={"stiglicode"}/>
			<FolderType/>
			{/* <FileTree/> */}
		</div>
	);
};

export default SideMenu;

