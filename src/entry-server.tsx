// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server"

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" class="h-full bg-gray-100">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          {assets}
        </head>
        <body class="h-full">
          <div id="app">{children}</div>
          <div id="modal" />
          <div />
          {scripts}
        </body>
      </html>
    )}
  />
))
