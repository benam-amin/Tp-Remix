import {
    Links,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
  
  export default function App() {
    return (
      <html>
        <head>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <Meta />
          <Links />
        </head>
        <body>
          <h1>Hello world!</h1>
          <h2>Tu veux quoi ma gueule</h2>
          <h3>Mais ça va pas ou quoi là</h3>
          <Outlet />
  
          <Scripts />
        </body>
      </html>
    );
  }
  