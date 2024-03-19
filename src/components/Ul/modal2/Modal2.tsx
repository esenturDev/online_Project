import { FC, ReactNode } from "react";
import scss from "./Modal2.module.scss";

type ModalProps = {
  children: ReactNode;
}

export const Modal2: FC<ModalProps> = ({children}) => {
	return (
		<div className={scss.modalOverlay}>
			<div className={scss.modal}>
        {children}
      </div>
		</div>
	);
};
