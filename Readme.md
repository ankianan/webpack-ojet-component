### Steps to package components in --webpack app

1. Run `npx ojet build --release`
1. Copy package.json to web
1. Go to web
1. Run `npm pack`
1. Install package in non-webpack app
1. Import component as `import '<package>/components/<component-name>/loader`
