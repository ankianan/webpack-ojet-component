
### Reason
Ojet webpack currently doesn't support `npx ojet package <component-name>`;

### Solution

https://excalidraw.com/#json=QkMOv6IvRCHsy4sAhruMp,ygqoo5QvUrVIV4Dvzg5lRw

* Generate webpack build output as AMD
* Publish the  `web/` as npm package
* Import component from a webpack app as `import '<package>/components/<component-name>/loader`

### tldr;
1. `npm run package`

### Steps to package components in --webpack app

1. Run `npx ojet build --release --user-options="package=hello-world"`
1. Copy package.json to web
1. Go to web
1. Run `npm pack`
1. Install package in non-webpack app
1. Import component as `import '<package>/components/<component-name>/loader`



 