/*eslint-disable */
const fs = require('fs');

fs.readdir('./lib', (err, files) => {
  if (err) return console.log(err);
  const filteredFolder = files.filter(item => new RegExp(/^(?!.*images|styles).*$/g).test(item));
  console.log(`Components Builded: ${filteredFolder.join(', ')}`);
});

/*eslint-enable */
