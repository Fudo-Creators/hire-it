import { IItemsMenu } from "../../interfaces/interfaces";

import Image from "../UI/Image/Image";

import JS from "../../resources/logo/languages/js.svg";
import TS from "../../resources/logo/languages/ts.svg";
import ReactJS from "../../resources/logo/languages/react2.svg";
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
        label: "Tasks",
      },
      { key: "jsquestion", label: "Questions" },
    ],
  },
  {
    key: "typescript",
    label: "TypeScript",
    icon: <Image preview={false} width={45} height={45} src={TS} />,
    children: [
      {
        key: "tstask",
        label: "Tasks",
      },
      { key: "tsquestion", label: "Questions" },
    ],
  },
  {
    key: "react",
    label: "React",
    icon: <Image preview={false} width={45} height={45} src={ReactJS} />,
    children: [
      {
        key: "reacttask",
        label: "Tasks",
      },
      { key: "reactquestion", label: "Questions" },
    ],
  },
  {
    key: "vue",
    label: "Vue",
    icon: <Image preview={false} width={45} height={45} src={VueJS} />,
    children: [
      {
        key: "vuetask",
        label: "Tasks",
      },
      { key: "vuequestion", label: "Questions" },
    ],
  },
  {
    key: "angular",
    label: "Angular",
    icon: <Image preview={false} width={45} height={45} src={AngularJS} />,
    children: [
      {
        key: "angulartask",
        label: "Tasks",
      },
      { key: "angularquestion", label: "Questions" },
    ],
  }
  // ,
  // {
  //   key: "other",
  //   label: "Общее",
  //   icon: <Image preview={false} width={45} height={45} src={Other} />,
  // },
];
