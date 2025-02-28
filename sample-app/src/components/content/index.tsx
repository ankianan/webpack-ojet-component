/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { HelloWorld } from "hello-world/hello-world";
import { h } from "preact";

export function Content() {
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <HelloWorld></HelloWorld>
    </div>
  );
};
