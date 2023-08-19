Important point gained from this project:

1. input field do not inherit the fonts from parent element, so we need to set the fonts for input field explicitly.
2. The background image may be seen when using linear gradient, so we need to set the opacity of the background image to 0.3

3. Important website 
    coolers.co (for color)
    tintandshade.com (for color)
    cssgradient.io (for gradient)
    css-tricks.com (for css)
    squoosh.app (for image compression)
    unsplash.com (for images)
    coverr.co (for video)
    https://easings.net/ (for animation)
    https://cubic-bezier.com/#.17,.67,.83,.67 (for animation)
    https://gs.statcounter.com/screen-resolution-stats
    sizzy.co (for responsive design)

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
14. linear-gradient with angle is better than linear-gradient with to bottom
15. Display inline block takes the available position
16. Backround image is very useful for creating shapes
17. Transform origin is very useful for animation and transition where it shows the origin of the transformation I mean the pivot point
18. Column count is very useful for creating columns in a text, it is better than flexbox
        column-count: 2; column-gap: 4rem; column-rule: 1px solid var(--color-grey-light-2);
19. Use column-span: all; to span the text across all columns
20. hyphens: auto; to break the word into two lines
21. There is a tab in browser to show media queries

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



      

