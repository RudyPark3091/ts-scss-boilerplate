export interface Component<T> {
  (props: T): HTMLElement;
}
