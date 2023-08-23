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
  href: '/subscriptions',
  chip: 'New',
  chipColor: 'secondary',
 },
 {
  id: uniqueId(),
  title: 'Analytics',
  icon: IconChartAreaLine,
  href: '/analytics',
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
  href: '/buy',
 },

 {
  id: uniqueId(),
  title: 'Sell',
  icon: IconShoppingCart,
  href: '/shell',
 },
 {
  navlabel: true,
  subheader: 'Credit',
 },

 {
  id: uniqueId(),
  title: 'Lend',
  icon: IconTrolley,
  href: '/lend',
 },
 {
  id: uniqueId(),
  title: 'Borrow',
  icon: IconChartDonut3,
  href: '/borrow',
 },
 {
  navlabel: true,
  subheader: 'Subscribers',
 },
 {
  id: uniqueId(),
  title: 'Subscriptions',
  icon: IconUserHeart,
  href: '/subscriptions',
 },
];

export default Menuitems;
