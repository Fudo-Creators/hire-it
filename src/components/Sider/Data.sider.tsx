import { IItemsMenu } from '../../interfaces/interfaces';
import Image from '../UI/Image/Image';

import { AngularSvg, JsSvg, TsSvg, ReactSvg, VueSvg, OtherSvg } from '../../resources/logo/languages';

export const mainKeysMenu = ['javascript', 'typescript', 'react', 'vue', 'angular', 'other'];

export const items: IItemsMenu[] = [
  {
    key: 'javascript',
    label: 'JavaScript',
    icon: <Image preview={false} width={45} height={45} src={JsSvg} />,
    children: [
      {
        key: 'jstask',
        label: 'Задачи',
      },
      { key: 'jsquestion', label: 'Вопросы' },
    ],
  },
  {
    key: 'typescript',
    label: 'TypeScript',
    icon: <Image preview={false} width={45} height={45} src={TsSvg} />,
    children: [
      {
        key: 'tstask',
        label: 'Задачи',
      },
      { key: 'tsquestion', label: 'Вопросы' },
    ],
  },
  {
    key: 'react',
    label: 'React',
    icon: <Image preview={false} width={45} height={45} src={ReactSvg} />,
    children: [
      {
        key: 'reacttask',
        label: 'Задачи',
      },
      { key: 'reactquestion', label: 'Вопросы' },
    ],
  },
  {
    key: 'vue',
    label: 'Vue',
    icon: <Image preview={false} width={45} height={45} src={VueSvg} />,
    children: [
      {
        key: 'vuetask',
        label: 'Задачи',
      },
      { key: 'vuequestion', label: 'Вопросы' },
    ],
  },
  {
    key: 'angular',
    label: 'Angular',
    icon: <Image preview={false} width={45} height={45} src={AngularSvg} />,
    children: [
      {
        key: 'angulartask',
        label: 'Задачи',
      },
      { key: 'angularquestion', label: 'Вопросы' },
    ],
  },
  {
    key: 'other',
    label: 'Общее',
    icon: <Image preview={false} width={45} height={45} src={OtherSvg} />,
    children: [
      {
        key: 'angulartask',
        label: 'Задачи',
      },
      { key: 'angularquestion', label: 'Вопросы' },
    ],
  },
];
