import { IItemsMenu } from '../../interfaces/interfaces';
import Image from '../UI/Image/Image';

import { AngularSvg, JsSvg, TsSvg, ReactSvg, VueSvg, OtherSvg } from '../../resources/logo/languages';
import { AntDesignOutlined } from '@ant-design/icons';

export const mainKeysMenu = ['javascript', 'typescript', 'react', 'vue', 'angular', 'other'];

export const items: IItemsMenu[] = [
  {
    key: "/javascript",
    label: "JavaScript",
    icon: <Image preview={false} width={35} height={35} src={JsSvg} />,
    children: [
      {
        key: "/jstask",
        label: "Задачи",
        icon: <AntDesignOutlined />,
      },
      {
        key: "/jsquestion",
        label: "Вопросы",
        icon: <AntDesignOutlined />,
      },
    ],
  },
  {
    key: "typescript",
    label: "TypeScript",
    icon: <Image preview={false} width={35} height={35} src={TsSvg} />,
    children: [
      {
        key: "tstask",
        label: "Задачи",
        icon: <AntDesignOutlined />,
      },
      {
        key: "tsquestion",
        label: "Вопросы",
        icon: <AntDesignOutlined />,
      },
    ],
  },
  {
    key: "react",
    label: "React",
    icon: <Image preview={false} width={35} height={35} src={ReactSvg} />,
    children: [
      {
        key: "reacttask",
        label: "Задачи",

        icon: <AntDesignOutlined />,
      },
      {
        key: "reactquestion",
        label: "Вопросы",
        icon: <AntDesignOutlined />,
      },
    ],
  },
  {
    key: "vue",
    label: "Vue",
    icon: <Image preview={false} width={35} height={35} src={VueSvg} />,
    children: [
      {
        key: "vuetask",
        label: "Задачи",

        icon: <AntDesignOutlined />,
      },
      {
        key: "vuequestion",
        label: "Вопросы",
        icon: <AntDesignOutlined />,
      },
    ],
  },
  {
    key: "angular",
    label: "Angular",
    icon: <Image preview={false} width={35} height={35} src={AngularSvg} />,
    children: [
      {
        key: "angulartask",
        label: "Задачи",

        icon: <AntDesignOutlined />,
      },
      {
        key: "angularquestion",
        label: "Вопросы",
        icon: <AntDesignOutlined />,
      },
    ],
  },
  {
    key: "other",
    label: "Общее",
    icon: <Image preview={false} width={35} height={35} src={OtherSvg} />,
    children: [
      {
        key: "angulartask",
        label: "Задачи",

        icon: <AntDesignOutlined />,
      },
      {
        key: "angularquestion",
        label: "Вопросы",
        icon: <AntDesignOutlined />,
      },
    ],
  },
];
