<h1>Sticky Sidebar jQuery Plugin</h1>
Tiny, simple jQuery plugin that allows you to target an element and force it to scroll with the page.

Option included to set the margin between the top of the page and the element (forcing the element to scroll only at a certain distance from the top of the page) and to set a parent element for the sticky element to stay within.

Basic usage:<br />
``$('.mySidebar').stickySidebar();``

Options:<br />
````
$('.mySidebar').stickySidebar({
  topMargin: ENTER_NUMBER,
  parent: 'ENTER_SELECTOR',
  bottomMargin: ENTER_NUMBER
});
````

Description of options:<br />
 - topMargin: Distance element should be from top of page when scrolling is begins. This distance will be maintained. Default is 20
 - parent: Parent element you'd like the scrolling element to stay within. Parent itself will not scroll. Default is false
 - bottomMargin: Distance from the bottom of the parent element you'd like the scrolling element to stop at. Useful only if parent element is set. Default is 20

&mdash; Luke Whyte (http://lukeallanwhyte.com), 2014
