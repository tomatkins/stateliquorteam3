# NYS Global Navigation

The Global Navigation is an essential part of our digital experience plan. Our goal is to provide visual and interactive consistency across all NYS digital experiences.

The Global Navigation goes hand-in-hand with the NY.Gov content strategy. Simple, intentional navigation to the services important to citizens, businesses, and visitors.

[Download the PDF of the Global Navigation Guidelines](https://github.com/ny/global-navigation/wiki/resources/Agency_Global_Navigation.pdf). The guidelines includes both technical specifications, content strategy, and agency color palette information.

[Download the PDF of the New York State Branding Overview, Guidelines and Architecture](https://nysemail.sharepoint.com/sites/cdo/digitalnys/Style%20Guides/). This includes the statewide branding guidelines.

[If the links or directory structures above have changed, please consider a search for the documents on the Digital NYS Sharepoint site](http://on.ny.gov/Sharepoint).

If you do not have permissions to access these resources, you will instead be presented with a form where you can request access.

## Using this Repository
 * This code base started as a 6-day sprint. It's intended as a starting point for developers so they can get the Global Navigation working on their site.
 * This code is not meant to be "drag-and-drop," it's meant to help people implement the navigation based on the guidelines
 * If you have improvements to this code, or if you've implemented the Global Nav on other platforms and want to contribute code, please submit a pull-request or create an issue.
 * [Ask questions here](https://github.com/ny/global-navigation/issues)
 * We're working to make this as clear as possible for all user levels. Add an issue above if you feel a section needs to be elaborated on.

### Contents
* [Demo Pages](#demo-pages)
* [Considerations](#considerations-when-implementing-this-code-on-your-website)
* [Constraints](#constraints-of-the-global-navigation)
* [Implementation](#how-to-install-the-global-navigation)
* [Browser Support](#browser-support-standards-of-this-code)
* [Architecture](#architectural-decisions)
* [Contributing](#contributing-to-the-global-navigation)
* [Install on a Drupal site](https://www.drupal.org/project/nys_global_nav)
* [View List of FAQs if you are experiencing problems](https://github.com/ny/global-navigation/issues?&q=is%3Aissue+label%3AFAQ)


## Demo Pages

This demo page shows examples of the different versions of the Global Navigation.

* https://ny.github.io/global-navigation/

## Considerations when implementing this code on your website

* This should be paired with the [NYS Universal Navigation](https://github.com/ny/global-navigation)
* There is a stylesheet for each Brand Grouping. Uncomment the stylesheet required for your Brand Grouping and delete the rest
* The Global Navigation uses web fonts from the NYS Brand
  * If you have already implemented NYS Brand fonts, you may need to adjust your CSS
  * [Read more about the implementation of the NYS Brand web fonts](https://github.com/ny/global-navigation/blob/master/IMPLEMENTATION.md#fonts)
* The demo pages show implementations of the Global Navigation in various situations. Check for comments in the demo code for more explanation
  * "Unstacked 5" is the preferred version. But use the header that best fits your content.
  * This code should work for footers that contain 5 or less sections
  * There are 6 social media links given in the example. You can use less.  The icons have be pre-made in the Brand Groupings, default to SVG, and contain a PNG fallback. [See the full list of provided social media icons](https://github.com/ny/global-navigation/tree/master/source/icons/social/black)

## Constraints of the Global Navigation

* Testing is a vital component of implementing the Global Navigation. Test your implementation before release. Variations in your configuration, may alter the intended display of the Navigation. Test the code with your actual content on various web browsers and devices to verify accuracy. Choose one of the three versions of the Global Navigation that fit your design. You may also find that you need to alter your content to better fit the design.
* This code is as versatile as possible, but cannot fit every real-world situation. Use this code as a starting point for implementation. [Create a GitHub issue for any questions you may have](https://github.com/ny/global-navigation/issues).

## How to install the Global Navigation

This repository will help you install the Global Navigation to varying degrees. This code should exist within the context of a larger site. It should also avoid conflicts with your current site's JavaScript and CSS. The following links provide guidance on using this code on your site.

* [Adding the CSS to your site](IMPLEMENTATION.md#css)
* [Adding the fonts to your site](IMPLEMENTATION.md#fonts)
* [Where to add the HTML](IMPLEMENTATION.md#html)
* [Social Media Icons](IMPLEMENTATION.md#social-media-icons)
* [Header and Footer Configuration Options](OPTIONS.md)
* [Install on a Drupal site](https://www.drupal.org/project/nys_global_nav)

## Browser Support Standards of this Code

* Google Chrome (desktop and mobile)
* Internet Explorer (version: 8+)
* Firefox
* Android Browser
* Safari Desktop (OS X latest)
* Safari Mobile (iOS latest)

## Architectural Decisions

Use this information as a reference for cases when your code needs modification.

* **Top level nav items, that have sub nav menus, cannot have a URL associated with them**. In order to hide/show sub navigation items, the decision was made to disallow top level nav items from having a URL associated with them. Top level nav items must be set to blank `<a>` tags:
 1. Use an `a` tag with an href set to `#` EX: `<a href="#">I Have Sub Navigation</a>`
* **Sass is the CSS pre-compiler**. Sass compiles to CSS
* **Raw JavaScript (rather than jQuery)**. This helps to avoid conflicts with existing libraries/versions
* **Global Navigation does not restrict the number of links**. Please consider character count, context, etc. when making your own information architecture decisions

## Contributing to the Global Navigation

The Global Navigation is the result of a cross-cluster collaboration development effort. We'd love for you to be a part of that continued collaboration. Contribute any bug fixes, or optimizations back to the project.

[Submit an issue to ask a question, provide an improvement, or report any bugs](https://github.com/ny/global-navigation/issues).
