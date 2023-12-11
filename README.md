# `live-filter`

A Web Component for filtering items using a text input

**[Demo](https://daviddarnes.github.io/live-filter/demo.html)** | **[Example resource](https://darn.es/)**

## Examples

```html
<script type="module" src="live-filter.js"></script>

<live-filter>
  <label>Filter: <input type="search" aria-controls="list"></label>
  <ul role="region" id="list" aria-live="polite">
    <li>African Violet</li>
    <li>Aloe Tiger Plant</li>
    <li>Aralia Ming</li>
    <li>Autograph Tree</li>
  </ul>
</live-filter>

<live-filter selector="dt">
  <label>Filter: <input type="search" aria-controls="data"></label>
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

## Features

This Web Component allows you to:

- Filter a list using a text input field
- Control how the filtering is presented by using CSS to hook into elements that do or do not match the input value, using `data-live-filter-match="true"` and `data-live-filter-match="false"` respectfully
- Adjust what items are filtered using the `selector` attribute on the `live-filter` element itself (see demo for an example_

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
<script type="module" src="https://www.unpkg.com/@daviddarnes/live-filter@1.0.0/live-filter.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script type="module" src="https://esm.sh/@daviddarnes/live-filter@1.0.0"></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
