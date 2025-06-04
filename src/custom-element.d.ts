// src/globals.d.ts or src/cally.d.ts
import type {
  CalendarRangeProps,
  CalendarMonthProps,
  CalendarDateProps,
  CalendarMultiProps,
} from "cally";



// Helper type to map Cally's 'on' events to React's camelCase events
// This is crucial for React to correctly pick up the events.
type MapEvents<T> = {
  [K in keyof T as K extends `on${infer E}` ? `on${Capitalize<E>}` : K]: T[K];
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      'calendar-range': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        ref?: React.Ref<HTMLElement>;
        value?: string;
        months?: number;
        firstDayOfWeek?: number;
        [key: string]: any; // for any other attributes
      };
      'calendar-month': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        [key: string]: any;
      };
    }
  }
}

// You might also need to extend the Window interface if you plan to access
// customElements directly for some reason, though generally not needed for basic usage.
// declare global {
//   interface Window {
//     customElements: CustomElementRegistry;
//   }
// }