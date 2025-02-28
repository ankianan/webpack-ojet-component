import { ExtendGlobalProps, registerCustomElement } from "ojs/ojvcomponent";
import { ComponentProps, ComponentType } from "preact";
import componentStrings = require("ojL10n!./resources/nls/hello-world-strings");
import "css!./hello-world-styles.css";

type Props = Readonly<{
  message?: string;
}>;

/**
 * 
 * @ojmetadata version "1.0.0"
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
 * 
 */
function HelloWorldImpl(
  { message = "Hello from  hello-world wapp" }: Props
) {
  return <p>{message}</p>
}

export const HelloWorld: ComponentType <
  ExtendGlobalProps < ComponentProps < typeof HelloWorldImpl>>
> = registerCustomElement(
    "hello-world",
  HelloWorldImpl
);