# `live-filter`

A Web Component for filtering items using a text input.

**[Demo](https://daviddarnes.github.io/live-filter/demo.html)** | **[Further reading](https://darn.es/live-filter-web-component/)**

## Examples

General usage example:

```html
<script type="module" src="live-filter.js"></script>

<live-filter>
  <label>Filter: <input type="search" aria-controls="list" /></label>
  <ul role="region" id="list" aria-live="polite">
    <li>African Violet</li>
    <li>Aloe Tiger Plant</li>
    <li>Aralia Ming</li>
    <li>Autograph Tree</li>
  </ul>
</live-filter>
```

Example setting the `selector` option to select `dt` elements:

```html
<script type="module" src="live-filter.js"></script>

<live-filter selector="dt">
  <label>Filter: <input type="search" aria-controls="data" /></label>
  <dl role="region" id="data" aria-live="polite">
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>
    <dt>Morgawr</dt>
    <dd>A sea serpent.</dd>
    <dt>Owlman</dt>
    <dd>A giant owl-like creature.</dd>
  </dl>
</live-filter>
```

Example setting the `case` option to change the search to be case insensitive:

```html
<script type="module" src="live-filter.js"></script>

<live-filter case="insensitive">
  <label>Filter: <input type="search" aria-controls="list" /></label>
  <ul role="region" id="list" aria-live="polite">
    <li>African Violet</li>
    <li>Aloe Tiger Plant</li>
    <li>Aralia Ming</li>
    <li>Autograph Tree</li>
  </ul>
</live-filter>
```

## Features

This Web Component allows you to:

- Filter a list using a text input field
- Control how the filtering is presented by using CSS to hook into element attributes `data-live-filter-match="true"` and `data-live-filter-match="false"`
- Adjust what items are filtered using the `selector` attribute on the `live-filter` element itself
- Adjust the case sensitivity of searching using the `case` attribute on the `live-filter` element itself

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@daviddarnes/live-filter): `npm install @daviddarnes/live-filter`
1. [Download the source manually from GitHub](https://github.com/daviddarnes/live-filter/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="live-filter.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://www.unpkg.com/@daviddarnes/live-filter@1.1.0/live-filter.js"
></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://esm.sh/@daviddarnes/live-filter@1.1.0"
></script>
```

### Using `selector` and `case`

By default `live-filter` will select all the `li` elements within it to search through. However with the `selector` attribute you can pass in a different selector string to search through:

```html
<live-filter selector="dt">
  <!-- ... -->
</live-filter>
```

By default `live-filter` will be case sensitive, which can be restrictive when searching through proper nouns and titles. This can be adjusted using the `case` attribute and setting the value to `insensitive`:

```html
<live-filter case="insensitive">
  <!-- ... -->
</live-filter>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
