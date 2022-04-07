---
title: 'Mobile First Design'
author: 'Dan McAtee'
date: '2022-03-04'
image: 'img/mobile.jpg'
tags:
  - design
  - css
---

# Mobile First Design

## Why mobile first

- Without CSS we have perfectly fine responsive layout.
- Things like position absolute and set widths make layouts unresponsive
- Use those inside the media queries to build a more complex layout in them, do not build a coplex layout and then override all of that in the media query (unecessary code)
- It's perfectly fine to design desktop first, but in the context of code starting with mobile is simpler

## Tips

- Avoid fixed sizes
  - e.g max-width
  - Avoid fixed heights
    - e.g. min-height
- Use media queries to add complexity
  - Don't overdo media queries
  - Avoid device specific breakpoints
    - See where your layout breaks and add a breakpoint there
- min-width -> Mobile first
- max-width -> Desktop first

## Modern CSS Features

### Min and Max

With `min()` and `max()` the browser determines which of the arguments is the smallest or biggest.

```css
.element {
  width: 50vw;
  max-width: 500px;

  /* can be written as */
  width: min(50vw, 500px);
}
```

Is the viewport less than 1000px, 50vw will be used, otherwise 500px will be used.

### Clamp

`clamp()` gets three arguments (Minimum value, preferred value and maximum value).

```css
.element {
  width: clamp(250px, 50vw, 750px);
}
```

The element grows dynamically with the viewport, but cannot get smaller than 250px or bigger than 750px.

#### Example with font-size

```css
.element {
  font-size: clamp(1rem, 2.5vw, 2rem);
}
```

The element will grow dinamically with the viewport, but stays in its boundaries.

![[media-queries#Syntax]]

## Resources

- [Kevin Powell YouTube Channel](https://www.youtube.com/channel/UCJZv4d5rbIKd4QHMPkcABCw)
- [Conquering Responsive Layouts](https://courses.kevinpowell.co/conquering-responsive-layouts)
