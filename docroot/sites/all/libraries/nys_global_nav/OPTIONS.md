### Configuration Options

##### Header
* [Site Name](#site-name-display)
* [Choosing a Layout](#layout)
* [Configuring Drop Down Links](#drop-down-links)
##### Footer
* [Column Count](#column-count)


# Header Options

## Site Name Display
The site name can be displayed on one or two lines:

To put a line of text on the second line, wrap each line in a `<span>` tag:

```html
  <h1><a href="#">
  <span>New York State</span> <span>Global Navigation Demo</span>
  </a></h1>
```

## Layout
On the div: `<div class="nys-global-header">` you need a set of classes for different layouts:

Layout: | Classes
:--------------- | :----------------
Horizontal Unstacked | class="nys-global-header horizontal unstacked"
Horizontal Stacked | class="nys-global-header horizontal stacked"
Vertical | class="nys-global-header vertical stacked"

### Layout Examples

#### Horizontal Unstacked *(Preferred Layout)*
```html
<div class="nys-global-header horizontal unstacked">
```

![image](https://cloud.githubusercontent.com/assets/308007/12306110/2f1a0136-ba06-11e5-9a96-efe5d678b359.png)

#### Horizontal Stacked
```html
<div class="nys-global-header horizontal stacked">
```

![image](https://cloud.githubusercontent.com/assets/308007/12306133/508c9d74-ba06-11e5-846b-dfc40eaa03a2.png)

#### Vertical
```html
<div class="nys-global-header vertical stacked">
```

![image](https://cloud.githubusercontent.com/assets/308007/12306195/888897be-ba06-11e5-881d-ef4def93471c.png)

## Drop Down Links
When utilizing the sub link capability of the NYS Global Navigation, you need to be sure to set your top level navigation item to `<a href="#">`. In the following image, the link titled "Unstacked" would need to be set to `<a href="#">`.
![image](https://cloud.githubusercontent.com/assets/308007/12305294/ffb77238-ba01-11e5-8efc-4f46602def74.png)


# Footer Options

## Column Count
When adding the Global Navigation Footer to your website, you will need to indicate how many columns your footer has. **Currently NYS Global Navigation Footer is configured to support 1-7 columns**.

On the div: `<div class="footer-container">` you need to set a class for different column counts:

Columns: | Classes
:--------------- | :----------------
1 | class="footer-container nys-global-footer-cols-1"
2 | class="footer-container nys-global-footer-cols-2"
3 | class="footer-container nys-global-footer-cols-3"
4 | class="footer-container nys-global-footer-cols-4"
5 | class="footer-container nys-global-footer-cols-5"
6 | class="footer-container nys-global-footer-cols-6"
7 | class="footer-container nys-global-footer-cols-7"

