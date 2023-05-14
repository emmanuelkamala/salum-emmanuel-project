 ` header p:first-child {
    color: red;
 }` it will work if p is the first child of header
  

  ## extra knowledge gained
`a:link` pseudo class is used to style the unvisited links
`a:visited` pseudo class is used to style the visited links
`a:active` pseudo class is used to style the active links (when you click on it)

## inline elements
inline elements like strong, em, span, a box model applies differently than block elements
inline elements can't have width and height properties and margin top and bottom properties but they can have padding top and bottom properties and line height property and text align property and vertical align property 

## inline-block elements
inline-block elements can have width and height properties and margin top and bottom properties and padding top and bottom properties and line height property and text align property and vertical align property. Example of inline-block elements are img, input, button, textarea, select, label, iframe, video, audio, canvas, details, embed, object, picture, source, summary, track, video, wbr

## html debugging tools

1. [html validator](https://validator.w3.org/)
2. [css validator](https://jigsaw.w3.org/css-validator/)
3. [html and css validator](https://validator.w3.org/nu/)
4. diff checker

/*
   flex box properties
   - it takes the width and height of the content when you don't specify the width and height
   FLEX CONTAINER
   f - flex direction
   a - align items
   j - justify content
   a - align content
   g -flex gap
   f - flex wrap

    FLEX ITEM
    b - flex basis
    o - order
    g - flex grow
    a - align self
    s - flex shrink
    
 */

 ## Grid properties

   ### grid container
   1. grid-template-columns
   2. grid-template-rows
   3. grid-template-areas
   4. grid-template
   5. grid-column-gap
   6. grid-row-gap
   7. grid-gap
   8. justify-items
   9. align-items
   10. place-items
   11. justify-content
   12. align-content
   13. place-content
   14. grid-auto-columns
   15. grid-auto-rows
   16. grid-auto-flow
   17. grid

   ### grid item
   1. grid-column-start
   2. grid-column-end
   3. grid-row-start
   4. grid-row-end
   5. grid-column
   6. grid-row
   7. grid-area
   8. justify-self
   9. align-self
   10. place-self

   ## Summary of grid properties
   ### grid container
      1. grid-template 
           rows / columns
      2. gap 
             row-gap column-gap
      3.  justify - item/ content
      4. align - item/ content

   ### grid item
   