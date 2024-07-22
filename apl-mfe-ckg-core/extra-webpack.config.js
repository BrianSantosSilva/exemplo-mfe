const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

// module.exports = (config, options) => {
//   const defaultConfig = singleSpaAngularWebpack(config, options);
//   defaultConfig.entry.main = [...new Set(defaultConfig.entry.main)];
//   return defaultConfig
// };

module.exports = (config, options) => {
  config.externals = ["@safra/apl-mfe-ckg-cross"];

  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Gambeta pra n dar erro :)
  let removeDup = {};
  singleSpaWebpackConfig.entry.main = singleSpaWebpackConfig.entry.main.filter((item) => {
   if(!removeDup[item]) {
     removeDup[item] = true;
     return true;
   }

   
   return false;
  });

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};

