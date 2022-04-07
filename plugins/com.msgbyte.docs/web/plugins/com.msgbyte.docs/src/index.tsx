import { regCustomPanel, Loadable } from '@capital/common';
import { Translate } from './translate';

regCustomPanel({
  position: 'personal',
  icon: 'mdi:file-document-edit-outline',
  name: 'com.msgbyte.docs/docsListPanel',
  label: Translate.title,
  render: Loadable(() => import('./ListPanel')),
});

console.log('Plugin Tailchat云文档 is loaded');
