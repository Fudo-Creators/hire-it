export interface IItemsMenu {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: IItemsMenu[];
}