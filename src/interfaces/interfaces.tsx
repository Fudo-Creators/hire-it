export interface IItemsMenu {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: IItemsMenu[];
}

export interface IQuestion {
  id?: number;
  answers?: string[];
  code?: string;
  key?: string;
  spoiler?: string;
  title: string;
  type?: string[];
};