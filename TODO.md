Ideas / things to do
====================

* Auto-complete for property names (#2)
* More details about _how_ a property is animated (#3)
    * Details of how values are interpolated
    * Visual timeline of change in value over time (taken from [The Sneetches and other DevTools](https://shoehornwithteeth.com/ramblings/2014/08/the-sneetches-and-other-devtools/) prototype)
    * Example element animation
* Allow expansion of sub-properties, e.g. `border` expands to `border-width` and `border-color`, which can also expand (#7)
* Support "simple lists" and "repeatable lists" (#4)
* URL permalinks (#5)
* Use Open Search protocol for searching from the address bar (requires URL permalinks) (#6)
* A compatibility matrix for browser support of animating certain properties, like @kangax's ES5 support matrix.
* Easter eggs (re-animate corpses)
* Add caveats, gotchas, etc. for certain properties (e.g. trying to transition to/from `height: auto`) (#8)



Revamp
------

[/] Update all property definitions
    1. Add automation
        1. Create a parser for CSS specs — use HTML output or Bikeshed source?
        2. Update all specs to latest
        3. Run through all specs, but make sure to only include CR or better
        4. Grab list of all known properties for the full list
            (<https://www.w3.org/Style/CSS/all-properties.en.json>)
    2. Update `css-animated-properties`
    3. Update `css-shorthand-properties`
        1. Some manual processing will be needed to define the expanded
            properties correctly
[] Work out how to include SVG properties as well
[] Come up with new design
    * See issues for more info
    * Use a phased approach — start with new display of what currently exists, then add things later
[] Implement new design for existing content
[] Start adding new feature suggestions
