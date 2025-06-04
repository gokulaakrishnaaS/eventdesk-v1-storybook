/// <reference types="react" />

declare namespace JSX {
  interface IntrinsicElements {
    'calendar-range': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      months?: string
      // Add more props if needed
    }
    'calendar-month': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      offset?: string
      // Add more props if needed
    }
  }
}
