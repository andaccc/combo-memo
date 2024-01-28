import path from 'path';

export default {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.join(__dirname, '../../'), 'node_modules']
  }
}