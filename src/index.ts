import { Middleware } from 'keq'
import * as url from 'url'


/**
 * Modules exported from this file can be used by users
 */

export default function SwaggerPath(): Middleware {
  return async(ctx, next) => {
    if (ctx.url.pathname) {
      const urlObj = url.parse(url.format({
        ...ctx.url,
        pathname: ctx.url.pathname.replace(/{(.*?)}/g, ':$1'),
      }), true)

      ctx.url = {
        ...urlObj,
        params: ctx.url.params,
      }
    }

    await next()
  }
}
