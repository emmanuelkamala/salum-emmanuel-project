Important point gained from this project:

1. input field do not inherit the fonts from parent element, so we need to set the fonts for input field explicitly.
2. The background image may be seen when using linear gradient, so we need to set the opacity of the background image to 0.3
3. Important website 
    coolers.co
    tintandshade.com
    cssgradient.io
    css-tricks.com

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