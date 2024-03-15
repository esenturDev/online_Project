import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ProviderRoutes } from "./providers/ProvidersRouters.tsx";
import ReduxProviders from "./providers/ReduxProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ReduxProviders>
			<BrowserRouter>
				<ProviderRoutes>
					<App />
				</ProviderRoutes>
			</BrowserRouter>
		</ReduxProviders>
	</React.StrictMode>
);
