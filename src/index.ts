import { Middleware } from 'keq'


/**
 * Modules exported from this file can be used by users
 */

export default function SwaggerPath(): Middleware {
  return async(ctx, next) => {
    ctx.url.pathname = ctx.url.pathname.replace(/{(.*?)}/g, ':$1'),

    await next()
  }
}
