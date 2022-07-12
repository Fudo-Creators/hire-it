import { IItemsMenu } from "../../interfaces/interfaces";

import Image from "../UI/Image/Image";

import JS from "../../resources/logo/languages/js.svg";
import TS from "../../resources/logo/languages/ts.svg";
import ReactJS from "../../resources/logo/languages/react.svg";
import VueJS from "../../resources/logo/languages/vue.svg";
import AngularJS from "../../resources/logo/languages/angular.svg";
import Other from "../../resources/logo/languages/other.svg";

export const mainKeysMenu = [
  "javascript",
  "typescript",
  "react",
  "vue",
  "angular",
  "other",
];

export const items: IItemsMenu[] = [
  {
    key: "javascript",
    label: "JavaScript",
    icon: <Image preview={false} width={45} height={45} src={JS} />,
    children: [
      {
        key: "jstask",
        label: "Задачи",
      },
      { key: "jsquestion", label: "Вопросы" },
    ],
  },
  {
    key: "typescript",
    label: "TypeScript",
    icon: <Image preview={false} width={45} height={45} src={TS} />,
    children: [
      {
        key: "tstask",
        label: "Задачи",
      },
      { key: "tsquestion", label: "Вопросы" },
    ],
  },
  {
    key: "react",
    label: "React.JS",
    icon: <Image preview={false} width={45} height={45} src={ReactJS} />,
    children: [
      {
        key: "reacttask",
        label: "Задачи",
      },
      { key: "reactquestion", label: "Вопросы" },
    ],
  },
  {
    key: "vue",
    label: "Vue.JS",
    icon: <Image preview={false} width={45} height={45} src={VueJS} />,
    children: [
      {
        key: "vuetask",
        label: "Задачи",
      },
      { key: "vuequestion", label: "Вопросы" },
    ],
  },
  {
    key: "angular",
    label: "Angular.JS",
    icon: <Image preview={false} width={45} height={45} src={AngularJS} />,
    children: [
      {
        key: "angulartask",
        label: "Задачи",
      },
      { key: "angularquestion", label: "Вопросы" },
    ],
  },
  {
    key: "other",
    label: "Общее",
    icon: <Image preview={false} width={45} height={45} src={Other} />,
  },
];
