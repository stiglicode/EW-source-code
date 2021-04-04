import React from "react";
// routes
import EditorV1 from "../../pages/editor/v1/index.editor.v1";
// eslint-disable-next-line
import EditorV2 from "../../pages/editor/v2/index.editor.v2";
// router
import {
	Route,
	Redirect
} from "react-router-dom";
import { editorVersionPath } from "./router-prePath";

const EditorGenerationRoute: React.FC = () => {
	return (
		<>
			{/* First generation of editor alias Editor version 1 */}
			<Route path={editorVersionPath(EditorV1.gen)}>
				<EditorV1.UI />
			</Route>
			{/* Second generation of editor alias Editor version 2 | future version |  doesn't exist, yet*/}
			{/* <Route path="/editor/v2">
				<EditorV2 />
			</Route> */}
			<Redirect from="/editor" to={editorVersionPath(EditorV1.gen)} />
		</>
	);
};

export default EditorGenerationRoute;

