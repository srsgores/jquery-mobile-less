# jQuery Mobile LESS Version

This is a version of the jQuery Mobile project, converted to LESS. From the [official website]
(http://jquerymobile
.com):

> A unified, HTML5-based user interface system for all popular mobile device platforms, built on the rock-solid jQuery and jQuery UI foundation. Its lightweight code is built with progressive enhancement, and has a flexible, easily themeable design.

jQuery Mobile 1.2 (1.2.0) works with versions of jQuery core from 1.7.0 to 1.8.2. You can find more information about how the library works, and what it is capable of, by reading the [documentation](http://jquerymobile.com/demos/).

## Features

* More cross-browser.  Using `mixins.less` file, we get maximum browser compatibility, for IE10,
and rare browsers like Konquerer.
* Better customizability.  If you're like me, you don't want to ever touch CSS again.  The code is organized in a
nice fashion, so that it's as readable as possible.  No comments, just code.  It was better that way.
* Tried and true techniques.  Based off of the most common techniques for styling LESS,
I took from Twitter Bootstrap, and other LESS frameworks to make a nice custom mixin file.
* No images (in progress).  Instead of using images, we rely on the `&:before` and `&:after` pseudo-selectors to
achieve a scalable design.  It looks more crisp, and using Icomoon, you can easily customize, export,
and import icon sets!