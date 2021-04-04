import React, { useRef } from "react";

const FileTree: React.FC = () => {
	const nameOfClass = "fldr-type__ON";
	const __TYPE_FOLDER__ = {
		__TYPE_personal: useRef<HTMLAnchorElement>(null),
		__TYPE_public: useRef<HTMLAnchorElement>(null),
		__TYPE_shared: useRef<HTMLAnchorElement>(null),
		__TYPE_all: useRef<HTMLAnchorElement>(null)
	};

	const handleTypeSwitch:React.MouseEventHandler<HTMLAnchorElement> = (e) => {
		interface BigObject<T> {
			[index: string]: T
		}
		const bigObject: BigObject<any> = __TYPE_FOLDER__;
		Object.keys(bigObject).forEach(key => {
			const currentEle = bigObject[key].current.classList;
			currentEle.forEach((el:any):void => {
				if (el === nameOfClass) {
					return currentEle.remove(nameOfClass);
				}
			});
			if(!e.currentTarget.classList.contains(nameOfClass)){
				return e.currentTarget.classList.add(nameOfClass);
			}
		});
	};
	return (
		<div className="folder_type-container flex-column semi_large-text">
			<a ref={__TYPE_FOLDER__.__TYPE_personal} onClick={handleTypeSwitch} className="folder_type-link fldr-type__ON">Personal</a>
			<a ref={__TYPE_FOLDER__.__TYPE_public} onClick={handleTypeSwitch} className="folder_type-link">Public</a>
			<a ref={__TYPE_FOLDER__.__TYPE_shared} onClick={handleTypeSwitch} className="folder_type-link">Shared</a>
			<a ref={__TYPE_FOLDER__.__TYPE_all} onClick={handleTypeSwitch} className="folder_type-link">All</a>
		</div>
	);
};

export default FileTree;