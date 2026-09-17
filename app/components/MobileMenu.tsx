'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Connect the shared server-rendered navigation to its mobile toggle.
export default function MobileMenu() {
  const pathname = usePathname();

  useEffect(() => {
    const button = document.querySelector<HTMLButtonElement>('.mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    if (!button || !menu) return;

    const setOpen = (open: boolean) => {
      menu.classList.toggle('hidden', !open);
      button.setAttribute('aria-expanded', String(open));
      const label = button.querySelector('.sr-only');
      if (label) label.textContent = open ? 'Close main menu' : 'Open main menu';
    };
    const toggle = () => setOpen(button.getAttribute('aria-expanded') !== 'true');
    const close = () => setOpen(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        close();
        button.focus();
      }
    };
    const onMenuClick = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest('a')) close();
    };
    const desktop = window.matchMedia('(min-width: 640px)');
    close();
    button.addEventListener('click', toggle);
    menu.addEventListener('click', onMenuClick);
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', close);
    return () => {
      button.removeEventListener('click', toggle);
      menu.removeEventListener('click', onMenuClick);
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', close);
    };
  }, [pathname]);

  return null;
}
