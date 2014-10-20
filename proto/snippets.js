/**
 * Console snippets to run in browsers to get a list of available CSS properties
 */

/**
 * Get all non-vendor-prefixed properties
 */
(function () {
    var style = getComputedStyle($0);
    var props = Array.prototype.filter.call(style, function (prop) {
        return prop.slice(0, 1) !== '-';
    });
    props.sort();
    console.log(JSON.stringify(props));
    console.log('Props (%d)', props.length, props);
})();

/**
 * Merge different browser lists into a single list
 */
(function () {
    var lists = [];
    // Chrome
    lists.push(["align-content","align-items","align-self","alignment-baseline","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left-color","border-left-style","border-left-width","border-right-color","border-right-style","border-right-width","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","bottom","box-shadow","box-sizing","buffered-rendering","caption-side","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","empty-cells","fill","fill-opacity","fill-rule","filter","flex-basis","flex-direction","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","font-family","font-kerning","font-size","font-stretch","font-style","font-variant","font-variant-ligatures","font-weight","glyph-orientation-horizontal","glyph-orientation-vertical","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column-end","grid-column-start","grid-row-end","grid-row-start","grid-template-areas","grid-template-columns","grid-template-rows","height","image-rendering","isolation","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-height","list-style-image","list-style-position","list-style-type","margin-bottom","margin-left","margin-right","margin-top","marker-end","marker-mid","marker-start","mask","mask-source-type","mask-type","max-height","max-width","min-height","min-width","mix-blend-mode","object-fit","object-position","opacity","order","orphans","outline-color","outline-offset","outline-style","outline-width","overflow-wrap","overflow-x","overflow-y","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","paint-order","perspective","perspective-origin","pointer-events","position","resize","right","scroll-behavior","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-last","text-anchor","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-indent","text-justify","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","touch-action","transform","transform-origin","transform-style","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vector-effect","vertical-align","visibility","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","zoom"]);
    // Firefox
    lists.push(["align-content","align-items","align-self","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left-color","border-left-style","border-left-width","border-right-color","border-right-style","border-right-width","border-spacing","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","bottom","box-decoration-break","box-shadow","box-sizing","caption-side","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","content","counter-increment","counter-reset","cursor","direction","display","dominant-baseline","empty-cells","fill","fill-opacity","fill-rule","filter","flex-basis","flex-direction","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","height","image-orientation","image-rendering","ime-mode","justify-content","left","letter-spacing","lighting-color","line-height","list-style-image","list-style-position","list-style-type","margin-bottom","margin-left","margin-right","margin-top","marker-end","marker-mid","marker-offset","marker-start","mask","mask-type","max-height","max-width","min-height","min-width","mix-blend-mode","opacity","order","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-x","overflow-y","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","paint-order","perspective","perspective-origin","pointer-events","position","quotes","resize","right","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","table-layout","text-align","text-anchor","text-decoration","text-indent","text-overflow","text-rendering","text-shadow","text-transform","top","transform","transform-origin","transform-style","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vector-effect","vertical-align","visibility","white-space","width","word-break","word-spacing","word-wrap","z-index"]);
    // Merge
    var merged = [];
    var used = {};
    lists.forEach(function (list) {
        list.forEach(function (prop) {
            if (!used.hasOwnProperty(prop)) {
                merged.push(prop);
                used[prop] = true;
            }
        });
    });
    merged.sort();
    copy(JSON.stringify(merged));
    console.log('Merged (%d)', merged.length, merged);
})();
