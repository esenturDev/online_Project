import { FC, ReactNode } from "react";
import scss from "./Modal.module.scss";

interface ModalProps {
	children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
	return (
		<div className={scss.modalOverlay}>
			<div className={scss.modal}>{children}</div>
		</div>
	);
};

export default Modal;
