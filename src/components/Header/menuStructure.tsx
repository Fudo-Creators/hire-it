import { Image } from "antd";

const menuStructure = [
  // JavaScript
  {
    label: "",
    key: "JSMenu",
    icon: (
      <Image
        height={75}
        width={75}
        preview={false}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
      />
    ),
    children: [
      {
        label: "Задачи",
        key: "/JSTasks",
      },
      {
        label: "Вопросы",
        key: "/JSQuestions",
      },
      {
        label: "Рекомендации",
        key: "/JSRecomendations",
      },
    ],
  },
  // TypeScript
  {
    label: "",
    key: "TSMenu",
    icon: (
      <Image
        height={75}
        width={75}
        preview={false}
        src="https://www.svgrepo.com/show/303600/typescript-logo.svg"
      />
    ),
    children: [
      {
        label: "Задачи",
        key: "TSasks",
      },
      {
        label: "Вопросы",
        key: "TSuestions",
      },
      {
        label: "Рекомендации",
        key: "TSecomendations",
      },
    ],
  },
  // React
  {
    label: "",
    key: "RMenu",
    icon: (
      <Image
        height={75}
        width={75}
        preview={false}
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
      />
    ),
    children: [
      {
        label: "Задачи",
        key: "RTasks",
      },
      {
        label: "Вопросы",
        key: "RQuestions",
      },
      {
        label: "Рекомендации",
        key: "RRecomendations",
      },
    ],
  },
  // Vue
  {
    label: "",
    key: "VMenu",
    icon: (
      <Image
        height={75}
        width={75}
        preview={false}
        src="https://img.icons8.com/color/480/vue-js.png"
      />
    ),
    children: [
      {
        label: "Задачи",
        key: "VTasks",
      },
      {
        label: "Вопросы",
        key: "VQuestions",
      },
      {
        label: "Рекомендации",
        key: "VRecomendations",
      },
    ],
  },
  // Angular
  {
    label: "",
    key: "AMenu",
    icon: (
      <Image
        height={75}
        width={75}
        preview={false}
        src="https://angular.io/assets/images/logos/angular/angular.png"
      />
    ),
    children: [
      {
        label: "Задачи",
        key: "ATasks",
      },
      {
        label: "Вопросы",
        key: "AQuestions",
      },
      {
        label: "Рекомендации",
        key: "ARecomendations",
      },
    ],
  },
  // web-tech others info
  {
    label: "",
    key: "WMenu",
    icon: (
      <Image
        height={75}
        width={75}
        preview={false}
        src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Front-end-logo-color%402x.png"
      />
    ),
    children: [
      {
        label: "Паттерны",
        key: "WQuestions",
      },
      {
        label: "Рекомендации",
        key: "WRecomendations",
      },
      {
        label: "Общее",
        key: "WARecomendations",
      },
      {
        label: "Благодарности",
        key: "WCongratulations",
      },
    ],
  },
];
export default menuStructure;
