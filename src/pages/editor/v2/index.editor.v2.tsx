import React from "react";

const gen = 2;

const Editor: React.FC = () => {
	return (
		<div>Editor v2</div>
	);
};

const EditorV2: {
    UI: React.FC<any>,
    gen: number
} = {
	UI: Editor,
	gen: gen
};

export default EditorV2;