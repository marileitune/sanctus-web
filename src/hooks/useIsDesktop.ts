'use client';

import { useSyncExternalStore } from 'react';

const DESKTOP_QUERY = '(min-width: 1024px)';

const subscribe = (callback: () => void) => {
  const mql = window.matchMedia(DESKTOP_QUERY);
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
};

const getSnapshot = () => window.matchMedia(DESKTOP_QUERY).matches;

const getServerSnapshot = () => false;

export const useIsDesktop = (): boolean =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
