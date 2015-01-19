var typeDescriptions = {
    'color': {
        spec: 'Interpolated via red, green, blue and alpha components (treating each as a number). The interpolation is done between premultiplied colors (that is, colors for which the red, green, and blue components specified have been multiplied by the alpha).',
        human: [
            'All colours are animated in the same way regardless of how they’re defined.',
            '(To be completed)'
        ]
    },
    'length': {
        spec: 'Interpolated as real numbers.',
        human: [
            'Animate from a start number to an end number via any number in between.'
        ]
    },
    'percentage': {
        spec: 'Interpolated as real numbers.',
        human: [
            'Animate from a start number to an end number via any number in between.'
        ]
    },
    'length-percentage-calc': {
        spec: 'When both values are lengths, interpolated as lengths; when both values are percentages, interpolated as percentages; otherwise, both values are converted into a ‘calc()’ function that is the sum of a length and a percentage (each possibly zero), and these ‘calc()’ functions have each half interpolated as real numbers.',
        human: [
            '(To be completed)'
        ]
    },
    'integer': {
        spec: 'Interpolated via discrete steps (whole numbers). The interpolation happens in real number space and is converted to an integer by rounding to the nearest integer, with values halfway between a pair of integers rounded towards positive infinity.',
        human: [
            '(To be completed)'
        ]
    },
    'font-weight': {
        spec: 'Interpolated via discrete steps (multiples of 100). The interpolation happens in real number space and is converted to an integer by rounding to the nearest multiple of 100, with values halfway between multiples of 100 rounded towards positive infinity.',
        human: [
            '(To be completed)'
        ]
    },
    'number': {
        spec: 'Interpolated as real (floating point) numbers.',
        human: [
            '(To be completed)'
        ]
    },
    'rectangle': {
        spec: 'interpolated via the x, y, width and height components (treating each as a number).',
        human: [
            '(To be completed)'
        ]
    },
    'visibility': {
        spec: 'If one of the values is ‘visible’, interpolated as a discrete step where values of the timing function between 0 and 1 map to ‘visible’ and other values of the timing function (which occur only at the start/end of the transition or as a result of ‘cubic-bezier()’ functions with Y values outside of [0, 1]) map to the closer endpoint; if neither value is ‘visible’ then not interpolable.',
        human: [
            '(To be completed)'
        ]
    },
    'shadow-list': {
        spec: 'Each shadow in the list is interpolated via the color (as color) component, and x, y, blur, and (when appropriate) spread (as length) components. For each shadow, if one input shadow is ‘inset’ and the other is not, then the result for that shadow matches the inputs; otherwise the entire list is not interpolable. If the lists of shadows have different lengths, then the shorter list is padded at the end with shadows whose color is ‘transparent’, all lengths are ‘0’, and whose ‘inset’ (or not) matches the longer list.',
        human: [
            '(To be completed)'
        ]
    },
    'transform': {
        spec: 'If both the from- and to-transform are ‘none’:\n\tThere is no interpolation necessary. The computed value stays ‘none’.\nIf one of the from- or to-transforms is ‘none’:\n\tThe value ‘none’ is replaced by an equivalent identity transform function list for the corresponding transform function list. Both transform function lists get interpolated following the next rule.\nIf from- and to-transform have the same number of transform functions, each transform function pair has either the same name, or is a derivative of the same primitive:\n\tInterpolate each transform function pair as described in ‘Interpolation of transform functions’. The computed value is the resulting transform function list.\nIn all other cases:\n\tThe transform functions of each transform function list on the from- and to-transform get post multiplied and converted into 4x4 matrices. Each of the matrices gets interpolated following the instructions in ‘Interpolation of matrices’. The computed value is the transform function matrix if both initial matrices can be represented by a correlating 3x2 matrix and matrix3d otherwise.\nIn some cases, an animation might cause a transformation matrix to be singular or non-invertible. For example, an animation in which scale moves from 1 to -1. At the time when the matrix is in such a state, the transformed element is not rendered.',
        human: [
            '(To be completed)'
        ]
    },
    'font-stretch': {
        spec: 'Font stretch is interpolated in discrete steps. The interpolation happens as though the ordered values are equally spaced real numbers. The interpolation result is rounded to the nearest value, with values exactly halfway between two values rounded towards the later value in the list above.',
        human: [
            '(To be completed)'
        ]
    },
    'basic-shape': {
        spec: 'The values in the shape functions interpolate as a simple list. The list values interpolate as length, percentage, or calc where possible. If list values are not one of those types but are identical (such as finding nonzero in the same list position in both lists) those values do interpolate.\tBoth shapes must use the same reference box.\tIf both shapes are the same type, that type is ellipse() or circle(), and none of the radii use the closest-side or farthest-side keywords, interpolate between each value in the shape functions.\tIf both shapes are of type inset(), interpolate between each value in the shape functions.\tIf both shapes are of type polygon(), both polygons have the same number of vertices, and use the same <fill-rule>, interpolate between each value in the shape functions.\tIn all other cases no interpolation is specified.',
        human: [
            '(To be completed)'
        ]
    }
};
