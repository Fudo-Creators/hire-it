import { useCallback, useState } from 'react';

import { Layout, MenuProps } from 'antd';
import Menu from '../UI/Menu/Menu';
import Image from '../UI/Image/Image';
import { items, mainKeysMenu } from './Data.sider'; // Структура данных для сайд-бара.

import { GithubSvg, VkSvg, TgSvg, HomeSvg } from '../../resources/logo';

import style from './Sider.module.scss';

const Sider: React.FC = () => {
  const { Sider } = Layout;

  const [openKeys, setOpenKeys] = useState(['']);

  const onOpenChange: MenuProps['onOpenChange'] = useCallback(
    (keys: [] | string[]) => {
      if (keys) {
        const latestOpenKey = keys.find((key: string) => openKeys.indexOf(key) === -1);
        if (mainKeysMenu.indexOf(latestOpenKey!) === -1) {
          setOpenKeys(keys);
        } else {
          setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
      }
    },
    [openKeys],
  );

  return (
    <Sider className={style.sidebar} width={335}>
      <div className={style.sidebar__top}>
        <h1>HIRE-IT</h1>
        <div className={style.links}>
          <Image className={style.links__img} preview={false} src={VkSvg} />
          <Image className={style.links__img} preview={false} src={TgSvg} />
          <Image className={style.links__img} preview={false} src={GithubSvg} />
        </div>
      </div>
      <div>
        <nav className={style.navigate}>
          <a href='/'>
            <div className={style.navigate__home}>
              <img src={HomeSvg} alt='home svg' />
              <span className={style.navigate__home_title}>home</span>
            </div>
          </a>

          <div>
            <span className={style.navigate__training_title}>training</span>

            <Menu
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              className={style.sidebar__menu}
              mode='inline'
              items={items}
            />
          </div>
        </nav>
      </div>
    </Sider>
  );
};

export default Sider;
