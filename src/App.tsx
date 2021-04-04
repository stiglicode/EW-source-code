import React from "react";
// router
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import EditorGenerationRoute from "./bin/routes/editor.route";
// styles
import "./style/bin/main.css";
// components
import ExplorerUI from "./pages/explorer/bin/explorer.index";
// import EditorUI from './pages/editor/';
import {AuthContainer} from "./pages/auth/bin/Auth.index";
// import CoreUI from './pages/core/';
// eslint-disable-next-line
let logIn:boolean = true;

const App: React.FC = (props) => {
	const authTokenChecker = (auth: JSX.Element, base: JSX.Element):JSX.Element => {
		if(!logIn){
			return auth;
		}else {
			return base;
		}
	};
	return (
		<div className="root_wrapper">
			<Router>
				<Switch>
					{authTokenChecker(
						<>
							<Route exact path="/signin">
								<AuthContainer.LoginUI />
							</Route>
							<Route exact path="/signup">
								<AuthContainer.RegisterUI />
							</Route>
							<Route exact path="/reset-password-form">
								<AuthContainer.ResetPasswordUI />
							</Route>
						</>,
						<ExplorerUI />
					)}
					<Route path="/">
						{authTokenChecker(<Redirect to="/signin" />, <ExplorerUI />)}
					</Route>
					{/* <EditorGenerationRoute /> */}
				</Switch>
			</Router>
		</div>
	);
};

export default App;
