import React from 'react';
import { createRoot } from 'react-dom/client';

const sections = [
  {
    title: 'Explore SpinksWorld',
    text: 'A mobile-first, static React experience inspired by spinksworld.com and focused on simple discovery.'
  },
  {
    title: 'Featured Stories',
    text: 'Curated highlights, creator updates, and links to flagship content, optimized for phones.'
  },
  {
    title: 'Connect Quickly',
    text: 'One-tap access to social channels, latest updates, and the main SpinksWorld website.'
  }
];

const quickLinks = [
  { label: 'Open SpinksWorld.com', href: 'https://www.spinksworld.com/' },
  { label: 'Latest Updates', href: '#' },
  { label: 'Contact', href: '#' }
];

const e = React.createElement;

function App() {
  return e(
    'div',
    { className: 'app-shell' },
    e(
      'header',
      { className: 'hero' },
      e('p', { className: 'eyebrow' }, 'SpinksWorld'),
      e('h1', null, 'SpinksWorld Mobile App'),
      e('p', { className: 'subtitle' }, 'Static React build designed for smooth use on small screens.')
    ),
    e(
      'main',
      null,
      e(
        'section',
        { className: 'card-grid', 'aria-label': 'Highlights' },
        ...sections.map((item) =>
          e(
            'article',
            { key: item.title, className: 'card' },
            e('h2', null, item.title),
            e('p', null, item.text)
          )
        )
      ),
      e(
        'section',
        { className: 'quick-actions', 'aria-label': 'Quick actions' },
        e('h2', null, 'Quick Actions'),
        e(
          'div',
          { className: 'actions-list' },
          ...quickLinks.map((link) =>
            e(
              'a',
              {
                key: link.label,
                href: link.href,
                className: 'action-btn',
                target: link.href.startsWith('http') ? '_blank' : undefined,
                rel: 'noreferrer'
              },
              link.label
            )
          )
        )
      )
    ),
    e(
      'footer',
      null,
      e('small', null, 'Prototype mobile interface. Replace placeholder links/content as needed.')
    )
  );
}

createRoot(document.getElementById('root')).render(e(App));
