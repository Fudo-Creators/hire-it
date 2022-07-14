import style from './Container.module.scss';
import { ReactNode } from 'react';

interface ContainerProps {
  content: ReactNode;
}

function Container({ content }: ContainerProps) {
  return <div className={style.container}>{content}</div>;
}

export default Container;
