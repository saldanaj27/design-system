# Base CSS changelog


## 1.0.18
* Updated color scheme to use new variables and color names.
* Updated buttons styles and variables.
* Added more font weight variations to Public Sans font.
## 1.0.17
* Added more utility classes (flex for medium and larger devises, height and width classes, more text clasees). 
* Added grid container classes.
* Added system status color variables and utility classes.
* Added line-height property to the headings.

## 1.0.16
* Removed default button style.

## 1.0.15
* Added new design tokens. Added new utility classes. Added buttons styles.

## 1.0.14
* Reduce top margin on h2

## 1.0.13
* Added reponsive font size functionality. (added font increase ratio variable based based on the dimensions of the browser viewport)

## 1.0.12
* Updated CA.gov font with new icons.

## 1.0.10
* Added _grid.scss file with grid classes (.card-grid-2, .card-grid-3,.card-grid-4). Also, added linting testing to the component.

## 1.0.9
* Added underline to main body links on hover have another visual cue indicating that they are links fro accessibility. Added some display and positioning utility classes.

## 1.0.8
* Updated content-footer container right and left padding to 16px to make it consistent with other components. Also, removed right and left margin from the page container, instead added left and right padding to it.

## 1.0.7
* Fixed font-weight for 'ul.list-highlight span.has-black-color'.

## 1.0.6
* Removed time selector from code.scss that was creating boxes in search results, also removed main container's margin right in mobile.

## 1.0.5
* Changes to default wordpress button and ordered-list styles.

## 1.0.4
* Added missing gray colors to the variables.scss

## 1.0.3
* Added CA<span>.</span>gov main colors that are used in CA<span>.</span>gov logo in statewide header and footer to the root variables

## 1.0.2
* Updated typography.scss with new updated font sizes, added new figcaption styles, updated color scheme files with latest color values

## 1.0.1
* Removed .header-container selector from page.scss that was giving 15px padding on each side because header container doesn't need paddings since those paddings are applied individually in branding, menu and statewide-header components.
