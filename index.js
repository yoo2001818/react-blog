import config from './blog.config.js';
import generate from './src/generate';

generate(config)
.catch(e => {
  console.log(e.stack);
  throw e;
});
