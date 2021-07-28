# https-securify.js

## About
https-securify.js is a small JavaScript program that when added to the top of a site's `<head>`  tag, will modify all subsequent tags that reference insecure (http://) resources so that they utilize HTTPS.

 **Why use this?**
*Because you're updating your legacy website to use HTTPS and browsers block insecure references (embedded images, style sheets, scripts, etc) on secure pages.*

**Why not just update the site's code using [protocol-relative URLs](https://en.wikipedia.org/wiki/URL#Protocol-relative_URLs) or just straight-up HTTPS?**
*You **should**. But maybe you missed something, or just want a stopgap to prevent things from breaking.*

## Features

* Only activates on HTTPS pages.
* Updates all `a`, `link`, `img`, and `script` tags with HTTP `src` or `href` values with HTTPS equivalents as they are added to the DOM (after the script is loaded).

## Usage

 1. Upload https-securify.js or https-securify.min.js to your site.
 2.  Add `<script src="your/path/to/https-securify.js"></script>` to the top of your site's `<head>` tag.

## Dependencies
* None, apart from a JavaScript-enabled browser with [support for MutationObserver()](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver#browser_compatibility).

## Disclaimer
This software is provided to you "as is" and without warranty of any kind.
The developer of this software recommends proper updates to your codebase over the usage of this software and will under no circumstances have any liability from the usage of this software.

## To Do
* Some form of configuration options so that specific DOM elements can be enabled or disabled for processing.
* A post request option so that insecure resources can be reported to an endpoint on the server for proper developer correction.
