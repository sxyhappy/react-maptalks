import { Coordinate } from '../Coordinate';

export type MenuableItem = {
  item: string;
  click?: () => void | boolean;
} | string;

export interface MenuableOptions {
  width?: number;
  custom?: boolean;
  items?: MenuableItem[]
}

export declare class Menuable {
  setMenu(options: MenuableOptions): this;
  openMenu(coordinate?: Coordinate): this
  setMenuItems(items: MenuableItem[]): this
  getMenuItems(): MenuableItem[]
  closeMenu(): this
  removeMenu(): this
}
