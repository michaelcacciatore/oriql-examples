/**
 * Will be in @types/react-oriql in the future
 */
declare module 'react-oriql' {
  interface ConnectOptions {
    instance: string
  }
  export function Provider(context: any, children: Element): any
  export function connect(options?: ConnectOptions): (component: any) => any
}