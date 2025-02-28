// Do not change this file.
export { HelloWorld } from "./hello-world";
declare global {
namespace preact.JSX {
      interface IntrinsicElements {
      'hello-world': any;
      }
    }
  }