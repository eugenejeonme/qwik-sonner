import {
  $,
  type Signal,
  component$,
  useComputed$,
  useSignal,
} from '@builder.io/qwik';
import { toast } from 'qwik-sonner';
import { CodeBlock } from './CodeBlock';

export const ProgressBar = component$(
  ({
    richColors,
    progressBar,
  }: {
    richColors: Signal<boolean>;
    progressBar: Signal<boolean>;
  }) => {
    const allTypes = useComputed$(() => [
      {
        name: 'Success with ProgressBar',
        snippet: `toast.success('Event has been created', {
  progressBar: true,
})`,
        action: $(() => {
          toast.success('Event has been created');
          if (richColors.value === true) richColors.value = false;
          if (progressBar.value !== true) progressBar.value = true;
        }),
      },
      {
        name: 'Error with ProgressBar',
        snippet: `toast.error('Event has not been created')`,
        action: $(() => {
          toast.error('Event has not been created');
          if (richColors.value === true) richColors.value = false;
          if (progressBar.value !== true) progressBar.value = true;
        }),
      },
      {
        name: 'Info with ProgressBar',
        snippet: `toast.info('Be at the area 10 minutes before the event time')`,
        action: $(() => {
          toast.info('Be at the area 10 minutes before the event time');
          if (richColors.value === true) richColors.value = false;
          if (progressBar.value !== true) progressBar.value = true;
        }),
      },
      {
        name: 'Warning with ProgressBar',
        snippet: `toast.warning('Event start time cannot be earlier than 8am')`,
        action: $(() => {
          toast.warning('Event start time cannot be earlier than 8am');
          if (richColors.value === true) richColors.value = false;
          if (progressBar.value !== true) progressBar.value = true;
        }),
      },
      {
        name: 'Rich Colors Success with ProgressBar',
        snippet: `toast.success('Event has been created', {
  progressBar: true,
})`,
        action: $(() => {
          toast.success('Event has been created');
          if (richColors.value !== true) richColors.value = true;
          if (progressBar.value !== true) progressBar.value = true;
        }),
      },
      {
        name: 'Rich Colors Error with ProgressBar',
        snippet: `toast.error('Event has not been created')`,
        action: $(() => {
          toast.error('Event has not been created');
          if (richColors.value !== true) richColors.value = true;
          if (progressBar.value !== true) progressBar.value = true;
        }),
      },
      {
        name: 'Rich Colors Info with ProgressBar',
        snippet: `toast.info('Be at the area 10 minutes before the event time')`,
        action: $(() => {
          toast.info('Be at the area 10 minutes before the event time');
          if (richColors.value !== true) richColors.value = true;
          if (progressBar.value !== true) progressBar.value = true;
        }),
      },
      {
        name: 'Rich Colors Warning with ProgressBar',
        snippet: `toast.warning('Event start time cannot be earlier than 8am')`,
        action: $(() => {
          toast.warning('Event start time cannot be earlier than 8am');
          if (richColors.value !== true) richColors.value = true;
          if (progressBar.value !== true) progressBar.value = true;
        }),
      },
    ]);

    const activeType = useSignal(allTypes.value[0]);

    const richColorsActive = activeType.value.name.includes('Rich');
    const progressBarActive = activeType.value.name.includes('ProgressBar');

    return (
      <div>
        <h2>ProgressBar</h2>
        <div class='buttons'>
          {allTypes.value.map((type) => (
            <button
              class='button'
              onClick$={() => {
                type.action();
                activeType.value = type;
              }}
              key={type.name}
            >
              {type.name}
            </button>
          ))}
        </div>
        <CodeBlock
          code={`${activeType.value.snippet}
// ...
<Toaster ${richColorsActive ? 'richColors ' : ''}${
            progressBarActive
              ? `toastOptions={{
  progressBar: toastProgressBar.value,
}}`
              : ''
          }/>`}
        />
      </div>
    );
  },
);
