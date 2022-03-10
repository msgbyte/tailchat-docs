import { startDevRunner } from 'tailchat-server-sdk/dist/runner/index';

startDevRunner({
  config: require.resolve('tailchat-server-sdk/dist/runner/moleculer.config'),
});
