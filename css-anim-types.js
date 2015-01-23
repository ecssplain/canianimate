var typeDescriptions = {
    'color': {
        spec: '<p>Interpolated via red, green, blue and alpha components (treating each as a number). The interpolation is done between premultiplied colors (that is, colors for which the red, green, and blue components specified have been multiplied by the alpha).</p>',
        human: [
            'All colours are animated in the same way regardless of how they’re defined.',
            '(To be completed)'
        ]
    },
    'length': {
        spec: '<p>Interpolated as real numbers.</p>',
        human: [
            'Animate from a start number to an end number via any number in between.'
        ]
    },
    'length-percentage-calc': {
        spec: '<p>When both values are lengths, interpolated as lengths; when both values are percentages, interpolated as percentages; otherwise, both values are converted into a <code class="css">calc()</code> function that is the sum of a length and a percentage (each possibly zero), and these <code class="css">calc()</code> functions have each half interpolated as real numbers.</p>',
        human: [
            '(To be completed)'
        ]
    },
    'integer': {
        spec: '<p>Interpolated via discrete steps (whole numbers). The interpolation happens in real number space and is converted to an integer by rounding to the nearest integer, with values halfway between a pair of integers rounded towards positive infinity.</p>',
        human: [
            '(To be completed)'
        ]
    },
    'font-weight': {
        spec: '<p>Interpolated via discrete steps (multiples of 100). The interpolation happens in real number space and is converted to an integer by rounding to the nearest multiple of 100, with values halfway between multiples of 100 rounded towards positive infinity.</p>',
        human: [
            '(To be completed)'
        ]
    },
    'number': {
        spec: '<p>Interpolated as real (floating point) numbers.</p>',
        human: [
            '(To be completed)'
        ]
    },
    'rectangle': {
        spec: '<p>interpolated via the x, y, width and height components (treating each as a number).</p>',
        human: [
            '(To be completed)'
        ]
    },
    'visibility': {
        spec: '<p>If one of the values is <code class="css">visible</code>, interpolated as a discrete step where values of the timing function between 0 and 1 map to <code class="css">visible</code> and other values of the timing function (which occur only at the start/end of the transition or as a result of <code class="css">cubic-bezier()</code> functions with Y values outside of [0, 1]) map to the closer endpoint; if neither value is <code class="css">visible</code> then not interpolable.</p>',
        human: [
            '(To be completed)'
        ]
    },
    'shadow-list': {
        spec: '<p>Each shadow in the list is interpolated via the color (as color) component, and x, y, blur, and (when appropriate) spread (as length) components. For each shadow, if one input shadow is <code class="css">inset</code> and the other is not, then the result for that shadow matches the inputs; otherwise the entire list is not interpolable. If the lists of shadows have different lengths, then the shorter list is padded at the end with shadows whose color is <code class="css">transparent</code>, all lengths are <code class="css">0</code>, and whose <code class="css">inset</code> (or not) matches the longer list.</p>',
        human: [
            '(To be completed)'
        ]
    },
    'font-stretch': {
        spec: '<p>Font stretch is interpolated in discrete steps. The interpolation happens as though the ordered values are equally spaced real numbers. The interpolation result is rounded to the nearest value, with values exactly halfway between two values rounded towards the later value in the list above.</p>',
        human: [
            '(To be completed)'
        ]
    },
    'transform': {
        spec: '<p>When animating or transitioning transforms, the transform function lists must be interpolated. For interpolation between one transform <em>from-transform</em> and a second transforms <em>to-transform</em>, the rules described below are applied.</p><ul><li id="none-none-animation">If both the <em>from-</em> and <em>to-transform</em> are <a class="css" data-link-type="maybe" href="http://www.w3.org/TR/css3-transforms/#none" title="none">none</a>:<ul><li>There is no interpolation necessary. The computed value stays <a class="css" data-link-type="maybe" href="http://www.w3.org/TR/css3-transforms/#none" title="none">none</a>.</li></ul></li><li id="none-transform-animation">If one of the <em>from-</em> or <em>to-transforms</em> is <a class="css" data-link-type="maybe" href="http://www.w3.org/TR/css3-transforms/#none" title="none">none</a>.<ul><li>The value <a class="css" data-link-type="maybe" href="http://www.w3.org/TR/css3-transforms/#none" title="none">none</a> is replaced by an equivalent <a data-link-type="dfn" href="http://www.w3.org/TR/css3-transforms/#identity-transform-function" title="identity transform function">identity transform function</a> list for the corresponding transform function list. Both transform function lists get interpolated following the next rule.</li></ul></li><li id="transform-transform-animation">If <em>from-</em> and <em>to-transform</em> have the same number of transform functions, each transform function pair has either the same name, or is a derivative of the same <a href="http://www.w3.org/TR/css3-transforms/#transform-primitives">primitive</a>.<ul><li>Interpolate each transform function pair as described in <a href="http://www.w3.org/TR/css3-transforms/#interpolation-of-transform-functions">Interpolation of transform functions</a>. The computed value is the resulting transform function list.</li></ul></li><li id="other-animation">In all other cases:<ul><li>The transform functions of each transform function list on the <em>from-</em> and <em>to-transform</em> get post multiplied and converted into 4x4 matrices. Each of the matrices gets interpolated following the instructions in <a href="http://www.w3.org/TR/css3-transforms/#matrix-interpolation">Interpolation of matrices</a>. The computed value is the transform function <span class="css" data-link-type="maybe" title="matrix">matrix</span> if both initial matrices can be represented by a correlating 3x2 matrix and <span class="css" data-link-type="maybe" title="matrix3d">matrix3d</span> otherwise.</li></ul></li></ul><p>In some cases, an animation might cause a transformation matrix to be singular or non-invertible. For example, an animation in which scale moves from 1 to -1. At the time when the matrix is in such a state, the transformed element is not rendered.</p>',
        human: [
            '(To be completed)'
        ]
    },
    'basic-shape': {
        spec: '<p>For interpolating between one basic shape and a second, the rules below are applied. The values in the shape functions interpolate as a <a href="http://www.w3.org/TR/css3-transitions/#animtype-simple-list">simple list</a>. The list values interpolate as <a href="http://www.w3.org/TR/css3-transitions/#animtype-lpcalc">length, percentage, or calc</a> where possible. If list values are not one of those types but are identical (such as finding <span class="css" data-link-type="maybe" title="nonzero">nonzero</span> in the same list position in both lists) those values do interpolate.</p><ul><li>Both shapes must use the same <a data-link-type="dfn" href="http://www.w3.org/TR/css-shapes-1/#reference-box" title="reference box">reference box</a>.</li><li>If both shapes are the same type, that type is <a class="css" data-link-type="maybe" href="http://www.w3.org/TR/css-shapes-1/#funcdef-ellipse" title="ellipse()">ellipse()</a> or <a class="css" data-link-type="maybe" href="http://www.w3.org/TR/css-shapes-1/#funcdef-circle" title="circle()">circle()</a>, and none of the radii use the <a class="css" data-link-type="maybe" href="http://www.w3.org/TR/css-shapes-1/#closest-side" title="closest-side">closest-side</a> or <a class="css" data-link-type="maybe" href="http://www.w3.org/TR/css-shapes-1/#farthest-side" title="farthest-side">farthest-side</a> keywords, interpolate between each value in the shape functions.</li><li>If both shapes are of type <a class="css" data-link-type="maybe" href="http://www.w3.org/TR/css-shapes-1/#funcdef-inset" title="inset()">inset()</a>, interpolate between each value in the shape functions.</li><li>If both shapes are of type <a class="css" data-link-type="maybe" href="http://www.w3.org/TR/css-shapes-1/#funcdef-polygon" title="polygon()">polygon()</a>, both polygons have the same number of vertices, and use the same <a class="production css-code" data-link-type="type" href="http://www.w3.org/TR/css-shapes-1/#typedef-fill-rule" title="<fill-rule>">&lt;fill-rule&gt;</a>, interpolate between each value in the shape functions.</li><li>In all other cases no interpolation is specified.</li></ul>',
        human: [
            '(To be completed)'
        ]
    }
};
