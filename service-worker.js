/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b6faca7c5144acfa56d0efccedd19033"
  },
  {
    "url": "assets/css/0.styles.f0586a5e.css",
    "revision": "b89b9104068d7bc48ea9ffad4d0bc67b"
  },
  {
    "url": "assets/img/models-authorization-example.51678521.png",
    "revision": "51678521dc07fe5d08a62437d50f19f7"
  },
  {
    "url": "assets/img/models-authorization-rbac.888a3441.png",
    "revision": "888a34418ec392f5a6f45703b0676348"
  },
  {
    "url": "assets/img/models-request-drawer.589da6a8.png",
    "revision": "589da6a8d056f1e9e3504aa018776aad"
  },
  {
    "url": "assets/img/models-request-flow.f2eb358d.png",
    "revision": "f2eb358d1a0165b26c3d26ded1d0f6ae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dccf4510.js",
    "revision": "ba89dcde1a4fecce2256535d0290f965"
  },
  {
    "url": "assets/js/11.0a10a79b.js",
    "revision": "17153afed2aacc42774f9c4f3ae378bc"
  },
  {
    "url": "assets/js/12.aadb6ebe.js",
    "revision": "a8295e3d093bc1ca5f555f07464361e8"
  },
  {
    "url": "assets/js/13.ed9f0830.js",
    "revision": "df6fe72574f8923616f0d05bbdf63ec9"
  },
  {
    "url": "assets/js/14.e1fad49b.js",
    "revision": "f3a6eeadb9f7cf3155c8a17067ad8f1d"
  },
  {
    "url": "assets/js/15.8e54fdc5.js",
    "revision": "ed3908ad1e627bfd72a84232eb0a93fa"
  },
  {
    "url": "assets/js/16.0e967ed2.js",
    "revision": "8479e265e964481bbf9b0ad1f9b8efa9"
  },
  {
    "url": "assets/js/17.5612c4ae.js",
    "revision": "6f8877747fb7c5d061384c18d7fe061f"
  },
  {
    "url": "assets/js/18.140dca17.js",
    "revision": "5337be0b8f1f0967c2f7d7d742800d95"
  },
  {
    "url": "assets/js/2.0dd58d28.js",
    "revision": "2b1a69e2c4d0e3ee43feede905393096"
  },
  {
    "url": "assets/js/3.41cd40d7.js",
    "revision": "4ca5afa6c319be131d90105de24d4737"
  },
  {
    "url": "assets/js/4.a6fe8922.js",
    "revision": "1e37ef568914e5f2a6f33e9f9a1377fa"
  },
  {
    "url": "assets/js/5.09621231.js",
    "revision": "e919b06ac65593a3bacc420a0cfcf0c5"
  },
  {
    "url": "assets/js/6.b8ceee3a.js",
    "revision": "d9d31f3931cc52761302646abbee4222"
  },
  {
    "url": "assets/js/7.462463df.js",
    "revision": "cac879d185fda16c22ef889060303b00"
  },
  {
    "url": "assets/js/8.e3e73f0a.js",
    "revision": "477d60fda271de03c8cf5f8321d13810"
  },
  {
    "url": "assets/js/9.903c794c.js",
    "revision": "96304727a7a970bb703f1c61601d233c"
  },
  {
    "url": "assets/js/app.615a9105.js",
    "revision": "8f793eec67aa6217e9bda159140e7025"
  },
  {
    "url": "blog/build_webpack-tree-shaking.html",
    "revision": "39f7813d217da1bf7a4909bfe095d0ad"
  },
  {
    "url": "blog/framework_react-hooks-principle.html",
    "revision": "f30e98b4fda78d50058db9a3ecb58e16"
  },
  {
    "url": "blog/framework_react-hooks-use.html",
    "revision": "5eca53cbfbfa94b182dde17972c4be72"
  },
  {
    "url": "blog/index.html",
    "revision": "494475e986571160e9ab6eeddf8d9c31"
  },
  {
    "url": "blog/models_authorization.html",
    "revision": "d6535ae82a147b322e8756be063dddb0"
  },
  {
    "url": "blog/models_request.html",
    "revision": "122c3cfbef04dc443740a913e297faad"
  },
  {
    "url": "blog/rxjs_reactive-programming.html",
    "revision": "33a848bf2107c9ac397aca0ee2dc7a2c"
  },
  {
    "url": "blog/svg_deep-learning-svg-1.html",
    "revision": "78d7d158002f95ca5c9d8c1e9f962fef"
  },
  {
    "url": "blog/svg_deep-learning-svg-2.html",
    "revision": "e21310f70efcfb274c1dd3900dace469"
  },
  {
    "url": "blog/tools_swagger-to-mocks.html",
    "revision": "36522ea4dd8d68b04cdbd8988d22169f"
  },
  {
    "url": "blog/tools_ts-codegen.html",
    "revision": "7764c7940646809ab6fa97fcaa70bc92"
  },
  {
    "url": "index.html",
    "revision": "c9037464afacbe1cc4e855acb1e4df81"
  },
  {
    "url": "logo.png",
    "revision": "b99f4febd25b4eeb9893a659e843083f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
