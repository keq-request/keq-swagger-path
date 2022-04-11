import { Middleware } from 'keq'


function format(pathname: string): string {
  return decodeURIComponent(pathname).replace(/{(.*?)}/g, ':$1')
}

export default function urlTemplate(): Middleware {
  return async(ctx, next) => {
    ctx.url.pathname = format(ctx.url.pathname)

    if (ctx.options.module && ctx.options.module.pathname) {
      ctx.options.module.pathname = format(ctx.options.module.pathname)
    }

    await next()
  }
}
