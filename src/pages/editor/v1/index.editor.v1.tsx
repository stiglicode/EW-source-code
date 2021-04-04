import React from "react";

const gen = 1;

const Editor: React.FC = () => {
	return (
		<div>Editor v1</div>
	);
};
const EditorV1: {
    UI: React.FC<any>,
    gen: number
} = {
	UI: Editor,
	gen: gen
};

export default EditorV1;