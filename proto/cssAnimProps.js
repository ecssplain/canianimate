/*!
 * https://github.com/gilmoreorless/css-animated-properties
 * MIT Licensed: http://gilmoreorless.mit-license.org/
 */
(function (exports) {
    /**
     * Data taken from https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties
     * If a property is not in this list, it's not able to be animated.
     * @type {Object}
     */
    var props = exports.animatedProperties = {
        // Transforms
        'transform': {types: ['transform']},
        'transform-origin': {types: ['length', 'percentage', 'calc'], multiple: true},
        'perspective': {types: ['length']},
        'perspective-origin': {types: ['length', 'percentage', 'calc'], multiple: true},

        // Color
        'color': {types: ['color']},
        'opacity': {types: ['number']},

        // Columns
        'columns': {properties: ['column-width', 'column-count']},
        'column-width': {types: ['length']},
        'column-count': {types: ['integer']},
        'column-gap': {types: ['length']},
        'column-rule': {properties: ['column-rule-color', 'column-rule-width']},
        'column-rule-color': {types: ['color']},
        'column-rule-width': {types: ['length']},

        // Text
        'letter-spacing': {types: ['length']},
        'text-indent': {types: ['length', 'percentage', 'calc']},
        'word-spacing': {types: ['length']},

        // Text decorations
        'text-decoration': {properties: ['text-decoration-color']},
        'text-decoration-color': {types: ['color']},
        'text-shadow': {types: ['shadow-list']},

        // Flexible boxes
        'flex': {properties: ['flex-grow', 'flex-shrink', 'flex-basis']},
        'flex-grow': {types: ['number']},
        'flex-shrink': {types: ['number']},
        'flex-basis': {types: ['length', 'percentage', 'calc']},
        'order': {types: ['integer']},

        // Background & Borders
        'background': {properties: ['background-color', 'background-position', 'background-size']},
        'background-color': {types: ['color']},
        'background-position': {types: ['length', 'percentage', 'calc'], multiple: true, repeatable: true},
        'background-size': {types: ['length', 'percentage', 'calc'], multiple: true, repeatable: true},
        // --Border combinations
        'border': {properties: ['border-color', 'border-width']},
        'border-bottom': {properties: ['border-bottom-color', 'border-bottom-width']},
        'border-left': {properties: ['border-left-color', 'border-left-width']},
        'border-right': {properties: ['border-right-color', 'border-right-width']},
        'border-top': {properties: ['border-top-color', 'border-top-width']},
        'border-color': {properties: ['border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color']},
        'border-width': {properties: ['border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width']},
        // --Border details
        'border-bottom-color': {types: ['color']},
        'border-left-color': {types: ['color']},
        'border-right-color': {types: ['color']},
        'border-top-color': {types: ['color']},
        'border-bottom-width': {types: ['length']},
        'border-left-width': {types: ['length']},
        'border-right-width': {types: ['length']},
        'border-top-width': {types: ['length']},
        // --Border radius
        'border-radius': {properties: ['border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius']},
        'border-top-left-radius': {types: ['length', 'percentage', 'calc']},
        'border-top-right-radius': {types: ['length', 'percentage', 'calc']},
        'border-bottom-right-radius': {types: ['length', 'percentage', 'calc']},
        'border-bottom-left-radius': {types: ['length', 'percentage', 'calc']},

        // Box model
        'box-shadow': {types: ['shadow-list']},
        'margin': {properties: ['margin-top', 'margin-right', 'margin-bottom', 'margin-left']},
        'margin-bottom': {types: ['length']},
        'margin-left': {types: ['length']},
        'margin-right': {types: ['length']},
        'margin-top': {types: ['length']},
        'padding': {properties: ['padding-top', 'padding-right', 'padding-bottom', 'padding-left']},
        'padding-bottom': {types: ['length']},
        'padding-left': {types: ['length']},
        'padding-right': {types: ['length']},
        'padding-top': {types: ['length']},
        'height': {types: ['length', 'percentage', 'calc']},
        'max-height': {types: ['length', 'percentage', 'calc']},
        'min-height': {types: ['length', 'percentage', 'calc']},
        'width': {types: ['length', 'percentage', 'calc']},
        'max-width': {types: ['length', 'percentage', 'calc']},
        'min-width': {types: ['length', 'percentage', 'calc']},
        'visibility': {types: ['visibility']},

        // Table
        'vertical-align': {types: ['length']},

        // Positioning
        'bottom': {types: ['length', 'percentage', 'calc']},
        'left': {types: ['length', 'percentage', 'calc']},
        'right': {types: ['length', 'percentage', 'calc']},
        'top': {types: ['length', 'percentage', 'calc']},
        'z-index': {types: ['integer']},

        // Fonts
        'font': {properties: ['font-weight', 'font-stretch', 'font-size', 'line-height']},
        'font-weight': {types: ['font-weight']},
        'font-stretch': {types: ['font-stretch']},
        'font-size': {types: ['length']},
        'line-height': {types: ['number', 'length']},
        'font-size-adjust': {types: ['number']},

        // User interface
        'outline': {properties: ['outline-color', 'outline-width']},
        'outline-color': {types: ['color']},
        'outline-width': {types: ['length']},
        'outline-offset': {types: ['length']},

        // Miscellaneous
        'clip': {types: ['rectangle']},

        // Shapes
        'shape-outside': {types: ['basic-shape']},
        'shape-margin': {types: ['length', 'percentage', 'calc']},
        'shape-image-threshold': {types: ['number']},
    };

    /**
     * Check if a CSS property can be animated
     * @param  {string} property CSS property name
     * @return {boolean}         True if the property can be animated
     */
    exports.canAnimate = function (property) {
        return props.hasOwnProperty(property);
    };

    /**
     * Get a definition of how a CSS property can be animated
     * @param  {string} property CSS property name
     * @param  {boolean} expand  Expand definitions for sub-properties, when available
     * @return {object}          Property definition, or null if it can't be animated
     */
    exports.getProperty = function (property, expand) {
        if (!exports.canAnimate(property)) {
            return null;
        }
        var prop = props[property];
        var ret = {name: property};
        Object.keys(prop).forEach(function (key) {
            var value = prop[key];
            if (Array.isArray(value)) {
                if (key === 'properties' && expand) {
                    value = value.map(function (subProp) {
                        return exports.getProperty(subProp, expand);
                    });
                } else {
                    value = value.slice(); // clone
                }
            }
            ret[key] = value;
        });
        return ret;
    };
})((function (root) {
    // CommonJS
    if (typeof module !== 'undefined' && module.exports !== undefined) return module.exports;
    // Global `cssAnimProps`
    return (root.cssAnimProps = {});
})(this));
