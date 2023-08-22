import { uniqueId } from 'lodash';

interface MenuitemsType {
 [x: string]: any;
 id?: string;
 navlabel?: boolean;
 subheader?: string;
 title?: string;
 icon?: any;
 href?: string;
 children?: MenuitemsType[];
 chip?: string;
 chipColor?: string;
 variant?: string;
 external?: boolean;
}
import {
 IconCurrencyDollar,
 IconApps,
 IconChartDonut3,
 IconShoppingCart,
 IconChartAreaLine,
 IconTrolley,
 IconUserHeart,
} from '@tabler/icons-react';

const Menuitems: MenuitemsType[] = [
 {
  navlabel: true,
  subheader: 'Creators',
 },

 {
  id: uniqueId(),
  title: 'Subscriptions',
  icon: IconApps,
  href: '/',
  chip: 'New',
  chipColor: 'secondary',
 },
 {
  id: uniqueId(),
  title: 'Analytics',
  icon: IconChartAreaLine,
  href: '/dashboards/ecommerce',
 },
 {
  navlabel: true,
  subheader: 'Marketplace',
 },
 {
  id: uniqueId(),
  title: 'Buy',
  icon: IconCurrencyDollar,
  chip: '2',
  chipColor: 'secondary',
  href: '/apps/contacts',
 },

 {
  id: uniqueId(),
  title: 'Sell',
  icon: IconShoppingCart,
  href: '/apps/blog/',
 },
 {
  navlabel: true,
  subheader: 'Credit',
 },

 {
  id: uniqueId(),
  title: 'Lend',
  icon: IconTrolley,
  href: '/theme-pages/treeview',
 },
 {
  id: uniqueId(),
  title: 'Borrow',
  icon: IconChartDonut3,
  href: '/theme-pages/pricing',
 },
 {
  navlabel: true,
  subheader: 'Subscribers',
 },
 {
  id: uniqueId(),
  title: 'Subscriptions',
  icon: IconUserHeart,
  href: '/forms/form-elements/autocomplete',
 },
];

export default Menuitems;
