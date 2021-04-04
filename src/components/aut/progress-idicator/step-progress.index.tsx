import React, { useState, useEffect } from "react";
// interface
import { StepProgressType } from "../../../bin/interface/step-progress.interface";
// style
import "./css/progress-indicator.style.css";
const StepProgress: React.FC<StepProgressType> = (props: StepProgressType):JSX.Element => {
	// state
	const [phase, setPhase]: [number[], React.Dispatch<React.SetStateAction<number[]>>] = useState(props.progress);
	// life-cycle
	useEffect(() => {
		return setPhase(props.progress);
	});
	// functions
	const phaseDetector = (array: number[], index: number): any => {
		const classSetter = (id: number): string | void => {
			if(id === 0) {
				return "";
			}else if (id === 1) {
				return "step-box_ON";
			}else if(id === 2) {
				return "step-box_SUCCESS";
			} else {
				return "";
			}
		};
		let finalClassName: string | void = "";
		array.map((value, i) => {
			if(i === index){
				finalClassName = classSetter(value);
			}
		});
		return finalClassName;
	};
	// render
	return (
		<div className="step-progress_container">
			{
				props.title.map((t, i) => {
					return (
						<div className={`step-box ${phaseDetector(phase,i)} `} key={i}>
							<span className="step-progress-title bold">Step&nbsp;{i + 1}</span>
							<span className="step-progress-bar"></span>
							<span className="step-progress-subtitle regular">{t}</span>
						</div>
					);
				})
			}
		</div>
	);
};

export default StepProgress;
