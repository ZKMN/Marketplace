import { Links } from '@/shared/types';

export const getMenuItems = [{
  label: 'home',
  link: '/',
}, {
  label: 'catalogue',
  link: Links.CATALOGUE,
  path: '/1',
}, {
  label: 'contacts',
  link: Links.CONTACTS,
}, {
  label: 'blog',
  link: Links.BLOG,
}, {
  label: 'faq',
  link: Links.FAQ,
}];
