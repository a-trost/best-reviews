import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
