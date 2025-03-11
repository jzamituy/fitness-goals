// Import commented out to fix build error
import * as Sentry from '@sentry/nestjs';
// Initialize Sentry
// https://docs.sentry.io/platforms/node/
// eslint-disable-next-line
Sentry.init({
  dsn: process.env.SENTRY_DSN || '',
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of transactions
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
  // Enable debug mode in development
  debug: process.env.NODE_ENV !== 'production',
  // Disable Sentry if DSN is not provided
  enabled: !!process.env.SENTRY_DSN,
});

export default Sentry;
