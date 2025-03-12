// Import commented out to fix build error
import * as Sentry from '@sentry/nestjs';
// Initialize Sentry
// https://docs.sentry.io/platforms/node/
//TODO: Fix env variable not working
const SENTRY_DSN =
  'https://09d58764d5dc171fb962f489e84f4bac@o4508961232584704.ingest.us.sentry.io/4508961235271680';
Sentry.init({
  dsn: process.env.SENTRY_DSN ?? SENTRY_DSN,
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of transactions
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
  // Enable debug mode in development
  debug: process.env.NODE_ENV !== 'production',
  // Disable Sentry if DSN is not provided
  //enabled: !!process.env.SENTRY_DSN,
  enabled: true,
});

export default Sentry;
