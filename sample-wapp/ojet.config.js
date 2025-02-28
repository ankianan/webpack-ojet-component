/**
  Copyright (c) 2015, 2024, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
const nodeExternals = require('webpack-node-externals');
module.exports = {
  /**
   *
   * @param {object} options.context - ojet build context which contains useful fields like
   * buildType
   * @param {object} options.config - Default webpack config generated by ojet. You can
   * add to it, remove from it or update it using webpack-merge which was
   * installed alongside webpack. If desired, you can create your own config
   * and return it which will override the default config
   * @returns {object|undefined}
   */
  webpack: ({ context, config }) => {
    if (context.buildType === 'release') {
      // update config with release / production options
      if(context.opts.userOptions?.match(/package=/)){
        package(config, ['hello-world'])
      }
    } else {
      // update config with development options
    }
    // only have to return if new config object was created but
    // since it doesn't matter always returning the config is good
    // practice

    
    
    return { context, webpack: config };
  }
};

function package(config, components = []) {
  //Avoid seperate runtime chunk, vendor bundles
  delete config.optimization;

  //Externalize node_module dependencies
  config.externals = [nodeExternals(), /^ojs\/.*/, /^oj-c\/.*/];

  //Avoid seperate css file
  config.module.rules = config.module.rules.map(rule => {
    let isCSS = rule.test?.test?.('.css');
    if (isCSS) {
      const [MiniCssExtractPluginLoader, ...remainging] = rule.use;
      return {
        ...rule,
        use: remainging
      };
    }
    return rule;
  });

  //Export as amd module
  config.output.library = {
    type: 'amd-require'
  };
  config.entry = {
    ...config.entry,
    ...components.reduce((acc,name)=>{
      console.log(name)
      return {
        ...acc,
        [name]: `./src/components/${name}/loader.ts`
      }
    }, {})
  };
}

