### Implement the Global Navigation

* [Adding the CSS](#css)
* [Adding the fonts](#fonts)
* [Where to add the HTML](#html)
* [Social Media Icons](#social-media-icons)
* [Server Configurations](#server-configuration)
* [List of Header and Footer Configuration Options](OPTIONS.md)
* [Install on a Drupal site](https://www.drupal.org/project/nys_global_nav)
* [View List of FAQs if you are experiencing problems](https://github.com/ny/global-navigation/issues?&q=is%3Aissue+label%3AFAQ)


# CSS
In the `<head>` of your document, you need to include 3 stylesheets

##### Base Global Nav
 - `source/css/nys-global-nav-fonts.css`
 - `source/css/nys-global-nav.css`

##### Agency Grouping Colors
 - `source/css/nys-brand/{{INSERT-GROUP-NAME-HERE}}.css">`

Choose the appropriate stylesheet for your agency grouping to replace **{{INSERT-GROUP-NAME-HERE}}**
 - administration
 - business
 - education
 - health-and-human-services
 - local-and-regional-authorities
 - public-safety
 - recreation-and-environment
 - statewide-elected-officials
 - transportation-and-utilities


# Fonts
Adding the fonts to your site
 * You *may* need to adjust your CSS `font-family` and `font-weight` if you have already implemented the NYS Brand web fonts.

##### Font Weight Table for Proxima Nova (```font-family: "Proxima Nova";```)

Font Weight | CSS Value
:----- | :-----
Light | font-weight: 200;
Normal | font-weight: 400;
Semi-bold | font-weight: 600;
Bold | font-weight: 700;
Extra-Bold | font-weight: 800;

***D Sari Bold is only used for the Agency / Website Name. It is not to be used anywhere else except for the Global Navigation header and footer.***

# HTML
For a list of all the configuration options available for the NYS Global Navigation, please see the [Configuration Options Page](OPTIONS.md)

## Header
![image](https://cloud.githubusercontent.com/assets/308007/12305524/403c2c1c-ba03-11e5-96a3-95099e0e4f5a.png)

**IMPORTANT** - *The NYS Global Navigation Header must be placed directly **BELOW** the NYS Universal Navigation Header.*

### Header Architecture
 - Top level bar of navigation. Displays site name and a list of links. Site name can be on one or two lines. Amount of navigation items depends on length of link text and screen width:
![image](https://cloud.githubusercontent.com/assets/308007/12305222/90b06a66-ba01-11e5-8fc5-0ec629b0f3ab.png)
 - Each top level link can have its own set of sub links.
![image](https://cloud.githubusercontent.com/assets/308007/12305294/ffb77238-ba01-11e5-8efc-4f46602def74.png)
 - If a top level link has sub-links under it, the top level link cannot be a valid URL. It must instead be set to: `<a href="#">`

### Code
```html
<div class="nys-global-header horizontal stacked">
  <div class="nav-toggle">
    <a href="#" role="button" id="nys-menu-control">Navigation menu</a>
  </div>
  <h1><a href="#"><span>Office of</span> <span>XYZ</span></a></h1>
  <ul id="nys-global-nav">
    <li><a href="#">Top Level Category</a>
      <ul>
        <li><a href="">Link 1</a></li>
        <li><a href="">Link 2</a></li>
      </ul>
    </li>
    <li><a href="">Link 3</a></li>
  </ul>
</div>
```

## Footer
![image](https://cloud.githubusercontent.com/assets/308007/12305505/29e94562-ba03-11e5-856c-4d700a479ab4.png)

**IMPORTANT** - *The NYS Global Navigation Footer must be placed directly **ABOVE** the Universal Navigation Footer.*

### Footer Architecture
 - Top level header with site name / Agency Name:
![image](https://cloud.githubusercontent.com/assets/308007/12305369/6b0d37f2-ba02-11e5-89c0-bd971f61e360.png)
 - Columns of categories and links. Currently supports 1-7 columns
![image](https://cloud.githubusercontent.com/assets/308007/12305387/8a0d7090-ba02-11e5-843c-3678e1d2fed3.png)
 - A list of Social Media Links. [List of social media icons provided by NYS Global Navigation](#social-media-icons) if you need to add more, feel free.
![image](https://cloud.githubusercontent.com/assets/308007/12305614/b19fd43a-ba03-11e5-8ebf-84296dcef638.png)


### Code
```html
<div class="nys-global-footer">
  <div class="footer-container nys-global-footer-cols-2">
    <h3>New York State Global Navigation Demo</h3>
    <div class="footer-col">
      <h4>Implementation</h4>
      <ul>
        <li><a href="">Considerations</a></li>
        <li><a href="">Constraints</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Documentation</h4>
      <ul>
        <li><a href="">Browser Support</a></li>
        <li><a href="">Architecture</a></li>
      </ul>
    </div>
    <div class="social-media">
      <div class="social-media-title">
        <h4>CONNECT WITH US</h4>
      </div>
      <div class="social-media-links">
        <ul>
          <li>
            <a href="https://github.com/ny">
              <span class="icon-social-github"></span>
              <span>NYS GITHUB</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/ny/global-navigation">
              <span class="icon-social-github"></span>
              <span>GLOBAL NAV</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

# Social Media Icons
Use the class ```.icon-social-{SITE}``` to reference one of the pre-processed social media icons.

*Example of using the twitter icon to link to the NY.Gov Twitter feed:*
```
<li>
  <a href="https://twitter.com/NYGov">
    <span class="icon-social-twitter"></span>
    <span>TWITTER</span>
  </a>
</li>
```
#### List of Pre-processed Social Media Icons and CSS class

Platform: | Class
:--------------- | :----------------
Blogger | .icon-social-blogger
Delicious | .icon-social-delicious
Facebook | .icon-social-facebook
RSS Feed | .icon-social-feed
Flickr | .icon-social-flickr
foursqaure | .icon-social-foursqaure
Github | .icon-social-github
Google+ | .icon-social-google-plus
Instagram | .icon-social-instagram
Linkedin | .icon-social-linkedin
Email | .icon-social-mail
Pinterest | .icon-social-pinterest
Reddit | .icon-social-reddit
Tumblr | .icon-social-tumblr
Twitter | .icon-social-twitter
Vimeo | .icon-social-vimeo
Yelp | .icon-social-yelp
Youtube | .icon-social-youtube
Generic Share | .icon-social-share


# Server Configuration
Note that You may need to add a couple of lines to your .htaccess file in order for the .svg files to render properly:
```
AddType image/svg+xml svg
AddType image/svg+xml svgz
```
