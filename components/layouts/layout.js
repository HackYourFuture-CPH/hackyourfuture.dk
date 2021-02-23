import Head from 'next/head'
import Footer from '../footer/footer'
import Header from '../header/header'
import React from 'react'

export default ({ children }) => {
  return (
    <div>
      {/*language=CSS*/}
      <style jsx global>{`
        /*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */
        html {
          line-height: 1.15;
          -webkit-text-size-adjust: 100%;
        }
        body {
          margin: 0;
        }
        h1 {
          font-size: 2em;
          margin: 0.67em 0;
        }
        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }
        pre {
          font-family: monospace, monospace;
          font-size: 1em;
        }
        a {
          background-color: transparent;
        }
        abbr[title] {
          border-bottom: none;
          text-decoration: underline;
          text-decoration: underline dotted;
        }
        b,
        strong {
          font-weight: bolder;
        }
        code,
        kbd,
        samp {
          font-family: monospace, monospace;
          font-size: 1em;
        }
        small {
          font-size: 80%;
        }
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }
        sub {
          bottom: -0.25em;
        }
        sup {
          top: -0.5em;
        }
        img {
          border-style: none;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit;
          font-size: 100%;
          line-height: 1.15;
          margin: 0;
        }
        button,
        input {
          overflow: visible;
        }
        button,
        select {
          text-transform: none;
        }
        [type='button'],
        [type='reset'],
        [type='submit'],
        button {
          -webkit-appearance: button;
        }
        [type='button']::-moz-focus-inner,
        [type='reset']::-moz-focus-inner,
        [type='submit']::-moz-focus-inner,
        button::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }
        [type='button']:-moz-focusring,
        [type='reset']:-moz-focusring,
        [type='submit']:-moz-focusring,
        button:-moz-focusring {
          outline: 1px dotted ButtonText;
        }
        fieldset {
          padding: 0.35em 0.75em 0.625em;
        }
        legend {
          box-sizing: border-box;
          color: inherit;
          display: table;
          max-width: 100%;
          padding: 0;
          white-space: normal;
        }
        progress {
          vertical-align: baseline;
        }
        textarea {
          overflow: auto;
        }
        [type='checkbox'],
        [type='radio'] {
          box-sizing: border-box;
          padding: 0;
        }
        [type='number']::-webkit-inner-spin-button,
        [type='number']::-webkit-outer-spin-button {
          height: auto;
        }
        [type='search'] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }
        [type='search']::-webkit-search-decoration {
          -webkit-appearance: none;
        }
        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }
        details {
          display: block;
        }
        summary {
          display: list-item;
        }
        template {
          display: none;
        }
        [hidden] {
          display: none;
        }
        /*# sourceMappingURL=normalize.min.css.map */
        @import url('https://fonts.googleapis.com/css?family=Space+Mono|Work+Sans');

        body {
          font-size: 1.2rem;
          line-height: 1.6rem;
          // font-family: 'Source Sans Pro', sans-serif;
          font-family: 'Work Sans', sans-serif;
          margin: 0;
          color: #111;
          background-color: #fff !important;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        img {
          max-width: 100%;
        }

        a {
          color: #111;
          word-break: break-all;
        }

        * {
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #293a7d;
          font-family: 'Space Mono', monospace;
          letter-spacing: 0.2px;
          margin: 0;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        h1 {
          font-size: 40px;
          line-height: 50px;
          margin-bottom: 2rem;
        }

        h2 {
          letter-spacing: 0.2px;
          margin: 2rem 0;
          line-height: 3rem;
        }

        @media (max-width: 768px) {
          h1,
          h2 {
            font-size: 24px;
          }
        }

        p {
          font-family: 'Work Sans', sans-serif;
          font-size: 18px;
          line-height: 1.8rem;
          margin: 0;
        }

        .hyf-title {
          border-bottom: 2px solid #293a7d;
        }

        .hyf-title > a {
          text-decoration: none;
        }

        .confirmation-page-img {
          text-align: center;
        }
      `}</style>
      <Head>
        <title>
          HackYourFuture Copenhagen - A non-profit coding school for
          disadvantaged groups
        </title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta
          name='keywords'
          content='HackYourFuture, copenhagen, denmark, coding, school, dk, programming'
        />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@hyf' />

        <meta
          name='description'
          content='HackYourFuture Copenhagen - A non-profit coding school for disadvantaged groups'
        />
        <meta
          name='image'
          content='https://hackyourfuture.dk/static/hero.jpg'
        />

        <meta
          itemProp='name'
          content='HackYourFuture Copenhagen - A non-profit coding school for disadvantaged groups'
        />
        <meta
          itemProp='description'
          content='HackYourFuture Copenhagen - A non-profit coding school for disadvantaged groups'
        />
        <meta
          itemProp='image'
          content='https://hackyourfuture.dk/static/hero.jpg'
        />

        <meta
          name='og:title'
          content='HackYourFuture Copenhagen - A non-profit coding school for disadvantaged groups'
        />
        <meta
          name='og:description'
          content='HackYourFuture Copenhagen - A non-profit coding school for disadvantaged groups'
        />
        <meta
          name='og:image'
          content='https://hackyourfuture.dk/static/hero.jpg'
        />
        <meta name='og:url' content='https://hackyourfuture.dk/' />
        <meta
          name='og:site_name'
          content='HackYourFuture Copenhagen - A non-profit coding school for disadvantaged groups'
        />
        <meta name='og:locale' content='en' />
        <meta name='og:type' content='website' />

        <link
          rel='shortcut icon'
          type='image/x-icon'
          href='/static/favicon.ico'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Source+Sans+Pro'
          rel='stylesheet'
        />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=UA-159689438-1'
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-159689438-1');
          `
        }}
      />
    </div>
  )
}
