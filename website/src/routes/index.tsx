import { component$, useSignal } from '@builder.io/qwik';
import { Toaster, type ToasterProps } from 'qwik-sonner';
import { ProgressBar } from '~/components/ProgressBar';
import { ExpandModes } from '../components/ExpandModes';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Installation } from '../components/Installation';
import { Other } from '../components/Other';
import { Position } from '../components/Position';
import { Types } from '../components/Types';
import { Usage } from '../components/Usage';

export default component$(() => {
  const expand = useSignal<boolean>(false);
  const position =
    useSignal<Required<Pick<ToasterProps, 'position'>>['position']>(
      'bottom-left',
    );
  const richColors = useSignal<boolean>(false);
  const closeButton = useSignal<boolean>(false);
  const toastProgressBar = useSignal<boolean>(false);

  return (
    <div class='wrapper light'>
      <Toaster
        theme='system'
        richColors={richColors.value}
        closeButton={closeButton.value}
        expand={expand.value}
        position={position.value}
        toastOptions={{
          progressBar: toastProgressBar.value,
        }}
      />
      <main class='container'>
        <Hero />
        <p class='!mt-12 rounded-md bg-amber-100 p-2 !text-sm'>
          Due to the resumability, the{' '}
          <span class='rounded-lg border border-amber-200 bg-amber-200/65 p-1 font-mono text-xs font-semibold'>{`<Toaster />`}</span>{' '}
          component should be positioned at the beginning of where you want to
          use it. This way, you won't encounter{' '}
          <a
            href='https://github.com/diecodev/qwik-sonner/issues/13'
            target='_blank'
            rel='noopener noreferrer'
            class='font-bold underline'
          >
            rendering issues.
          </a>
        </p>
        <div class='content'>
          <Installation />
          <Usage />
          <Types />
          <Position position={position} />
          <ExpandModes expand={expand} />
          <ProgressBar richColors={richColors} progressBar={toastProgressBar} />
          <Other closeButton={closeButton} richColors={richColors} />
        </div>
      </main>
      <Footer />
    </div>
  );
});
