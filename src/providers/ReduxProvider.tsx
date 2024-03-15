import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
interface ReduxProvdersProps {
	children: ReactNode;
}

const ReduxProviders: FC<ReduxProvdersProps> = ({ children }) => {
	return (
		<>
			<Provider store={store}>{children}</Provider>
		</>
	);
};

export default ReduxProviders;
