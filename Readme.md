Important point gained from this project:

1. input field do not inherit the fonts from parent element, so we need to set the fonts for input field explicitly.
2. The background image may be seen when using linear gradient, so we need to set the opacity of the background image to 0.3
3. Important website 
    coolers.co
    tintandshade.com
    cssgradient.io
    css-tricks.com
    squoosh.app (for image compression)
    unsplash.com
    coverr.co

4. Remember always when styling a link class make sure you add pseudo class link or visited
      item:link, item:visited
5. It is better to use gap in flexbox
6.  /* Don't use display: none because of the following problems */
        /* Allows no transition at all */

        /* The correct way to hide a navigation without using display: none */
        /* 1. Hide it visually */
        opacity: 0;

        /* 2. Make it unaccessible to mouce and keyboard */
        pointer-events: none;

        /* 3. Hide it from screen readers */
        visibility: hidden;

7. Whenever you position an element absolutely, you must set the position of the parent element to relative

8. Transform is very useful for animation

9. background-clip: text; color: transparent;
10. use overflow hidden when the border radius is not seen due to image overflow
11. shape-outside: circle(50%); float: left;
12. use height of image to make image visible
13. use figure tag for image and figcaption for caption

### Responsive design principles
  1. Fluid layouts
       - to allow webpages to adopt the current viewport width/height
       - use % or vw/vh units instead of px
       - use max-width instead of width

  2. Responsive units
      - use rem instead of px
    
  3. Flexible images
      - by default images do not scale automatically as we change the viewport size
         so we need to fix this
      - always use % for image dimensions, together with max-width property

  4. Media queries



      

