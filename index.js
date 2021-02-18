module.exports = require('./dist/server')
# Using yarn
yarn add @sentry/react @sentry/tracing

# Using npm
npm install --save @sentry/react @sentry/tracing

import * as Sentry from '@Sentry/browser';

# Initialize with Data Source Name (dsn)
Sentry.init({ dsn: 'dsn-string' });