import style from './Menu.module.scss';
import { useCallback, useState } from 'react';

import { Layout, MenuProps } from 'antd';

import Menu from '../UI/Menu/Menu';
import Image from '../UI/Image/Image';

import Github from '../../resources/logo/github.svg';
import Vk from '../../resources/logo/vk.svg';
import Tg from '../../resources/logo/tg.svg';

import stylesh from '../../App.module.sass';

import { items, mainKeysMenu } from './Data.sider'; // Структура данных для сайд-бара.

// Компонент бокового меню, благодаря ключам 1 порядка будет происходит редирект внутри приложения.

const Sider: React.FC = () => {
  const { Sider } = Layout;

  const [openKeys, setOpenKeys] = useState(['javascript']);

  const onOpenChange: MenuProps['onOpenChange'] = useCallback(
    (keys: any) => {
      const latestOpenKey = keys.find((key: string) => openKeys.indexOf(key) === -1);
      if (mainKeysMenu.indexOf(latestOpenKey!) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    },
    [openKeys],
  );

  return (
    <Sider className={style.sidebar} width={335}>
      <div className={style.sidebar__top}>
        <h1>HIRE-IT</h1>
        <div className={style.links}>
          <Image className={style.links__img} preview={false} src={Vk} />
          <Image className={style.links__img} preview={false} src={Tg} />
          <Image
            className={style.links__img}
            onClick={() => console.log('hi')}
            preview={false}
            src={Github}
          />
        </div>
      </div>
      <div>
        
        <div>
          <Menu
            // openKeys={openKeys}
            // onOpenChange={onOpenChange}
            onClick={(e) => console.log(e.key)}
            className={style.sidebar__menu}
            mode='inline'
            items={items}
          />
        </div>
      </div>
    </Sider>
  );
};

export default Sider;
