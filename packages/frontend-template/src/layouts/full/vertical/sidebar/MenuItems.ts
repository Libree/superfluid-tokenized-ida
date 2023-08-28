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
 IconFileText,
 IconShoppingCart,
 IconChartAreaLine,
 IconEyeglass2,
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
  href: '/creators/subscriptions',
  chip: 'New',
  chipColor: 'secondary',
 },
 {
  id: uniqueId(),
  title: 'Analytics',
  icon: IconChartAreaLine,
  href: '/creators/analytics',
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
  href: '/marketplace/buy',
 },

 {
  id: uniqueId(),
  title: 'Sell',
  icon: IconShoppingCart,
  href: '/marketplace/sell',
 },
 {
  navlabel: true,
  subheader: 'Integrations',
 },

 {
  id: uniqueId(),
  title: 'Lens',
  icon: IconEyeglass2,
  href: '/integrations/lens',
 },
 {
  id: uniqueId(),
  title: 'Paragraph',
  icon: IconFileText,
  href: '/integrations/paragraph',
 },
 {
  navlabel: true,
  subheader: 'Subscribers',
 },
 {
  id: uniqueId(),
  title: 'Subscriptions',
  icon: IconUserHeart,
  href: '/subscribers/subscriptions',
 },
];

export default Menuitems;
