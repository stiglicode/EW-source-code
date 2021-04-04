import React, { useRef } from "react";
// Iicons
import { PersonOutlined, GroupOutlined } from "@material-ui/icons";
// eslint-disable-next-line
const ExpoSwitcher: React.FC<{userToken: string}> = (props: {userToken: string}) => {
	const nameOfClass = "sw-box__ON";
	const boxType = {
		public: useRef<HTMLDivElement>(null),
		private: useRef<HTMLDivElement>(null),
	};

	const handleSwitcher:React.MouseEventHandler<HTMLDivElement> = () => {
		interface BigObject<T> {
			[index: string]: T
		}
		
		const bigObject: BigObject<any> = boxType;
		Object.keys(bigObject).forEach(key => {
			const currentEle = bigObject[key].current.classList;
			currentEle.forEach((el: any) => {
				if (el === nameOfClass) {
					currentEle.remove(nameOfClass);
				} else if (el !== nameOfClass) {
					currentEle.add(nameOfClass);
				}
			});
		});
	};
	return (
		<div className="flex-row switcher-container line-bottom contrast-20_border">
			<div className="switcher-box soft-border sw-box__ON" ref={boxType.public} onClick={handleSwitcher}>
				<a>
					<GroupOutlined fontSize="large"/>
				</a>
			</div>
			<div className="switcher-box soft-border" ref={boxType.private} onClick={handleSwitcher}>
				{/* <a href={`/${props.userToken}`}>Pri</a> */}
				<a>
					<PersonOutlined fontSize="large"/>
				</a>
			</div>
		</div>
	);
};

export default ExpoSwitcher;