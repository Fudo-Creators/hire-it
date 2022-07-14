import style from './Container.module.scss';

function Container({ content }) {
  return <div className={style.container}>{content}</div>;
}

export default Container;
