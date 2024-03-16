import { FC, useState } from 'react';
import scss from './Header.module.scss';

export const Header: FC<{
  setIsStyleResult: () => void;
}> = ({setIsStyleResult}) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <header>
      <div className="container">
        <div className={scss.content}>
          
        </div>
      </div>
    </header>
  )
}
