import React from "react";
import Script from "next/script";
function HeaderComponent({ title }) {
  return (
    <head>
      {/* Add Google Analytics script to the head */}
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/mind16.png" />

      <meta
        name="description"
        content="Explore the world of mindfulness with Mindfulness Manifester. Discover tips, practices, and resources for cultivating mindfulness in your daily life."
      />
      <meta property="og:title" content="Mindful Manifesters" />
      <meta
        property="og:description"
        content="Explore the world of mindfulness with Mindfulness Manifester. Discover tips, practices, and resources for cultivating mindfulness in your daily life."
      />

      <script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
      <link
        type="text/css"
        rel="stylesheet"
        href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css"
      />
      {/* <meta property="og:image" content="/path/to/your/og-image.jpg" /> */}
      {/* <meta content="width=device-width, initial-scale=1" name="viewport" /> */}
      {/* <link rel="icon" href="/favicon.ico" /> */}

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-YE94Z3VF7X" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-YE94Z3VF7X');
        `}
      </Script>
      <script src="bower_components/firebaseui/dist/firebaseui.js"></script>
      <link
        type="text/css"
        rel="stylesheet"
        href="bower_components/firebaseui/dist/firebaseui.css"
      />
    </head>
  );
}

export default HeaderComponent;
