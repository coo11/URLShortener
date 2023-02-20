
import serveAPI, {slugRegex} from './api';
import serveSite from './site';
import redirect from './redirect';

addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (url.hostname === 'api.ehhh.eu.org') {
    return serveAPI(event);
  }

  if (slugRegex.test(url.pathname.slice(1))) {
    return redirect(event);
  }

  serveSite(event);
});