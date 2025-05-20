import { component$, useStyles$ } from '@builder.io/qwik';
import { Toaster as RawToaster } from '../headless/toast-wrapper';
import type { ToasterProps } from '../headless/types';
import styles from './styles.css?inline';

export const Toaster = component$<ToasterProps>((props) => {
  useStyles$(styles);

  return <RawToaster {...props} />;
});
