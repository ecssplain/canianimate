(function () {
    var id = document.getElementById.bind(document);
    var domProperty = id('search-property');
    var domResults = id('results');

    var knownProps = ["align-content","align-items","align-self","alignment-baseline","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left-color","border-left-style","border-left-width","border-right-color","border-right-style","border-right-width","border-spacing","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","bottom","box-decoration-break","box-shadow","box-sizing","buffered-rendering","caption-side","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","content","counter-increment","counter-reset","cursor","direction","display","dominant-baseline","empty-cells","fill","fill-opacity","fill-rule","filter","flex-basis","flex-direction","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","glyph-orientation-horizontal","glyph-orientation-vertical","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column-end","grid-column-start","grid-row-end","grid-row-start","grid-template-areas","grid-template-columns","grid-template-rows","height","image-orientation","image-rendering","ime-mode","isolation","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-height","list-style-image","list-style-position","list-style-type","margin-bottom","margin-left","margin-right","margin-top","marker-end","marker-mid","marker-offset","marker-start","mask","mask-source-type","mask-type","max-height","max-width","min-height","min-width","mix-blend-mode","object-fit","object-position","opacity","order","orphans","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","paint-order","perspective","perspective-origin","pointer-events","position","quotes","resize","right","scroll-behavior","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-last","text-anchor","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-indent","text-justify","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","touch-action","transform","transform-origin","transform-style","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vector-effect","vertical-align","visibility","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","zoom"];
    var shorthands = {animation:["-name","-duration","-timing-function","-delay","-direction","-iteration-count","-fill-mode","-play-state"],transition:["-property","-duration","-timing-function","-delay"],background:["-image","-position","-size","-repeat","-origin","-attachment","-style","-clip","-color"],border:["-width","-style","-color"],"border-color":["border-top-color","border-right-color","border-bottom-color","border-left-color"],"border-style":["border-top-style","border-right-style","border-bottom-style","border-left-style"],"border-width":["border-top-width","border-right-width","border-bottom-width","border-left-width"],"border-top":["-width","-style","-color"],"border-right":["-width","-style","-color"],"border-bottom":["-width","-style","-color"],"border-left":["-width","-style","-color"],"border-image":["-source","-slice","-width","-outset","-repeat"],"border-radius":["border-top-left-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius"],columns:["column-width","column-count"],"column-rule":["-width","-style","-color"],flex:["-grow","-shrink","-basis"],font:["-style","-variant","-weight","-stretch","-size","line-height","-family"],"font-variant":["-ligatures","-alternates","-caps","-numeric","-east-asian"],"list-style":["-type","-position","-image"],margin:["-top","-right","-bottom","-left"],padding:["-top","-right","-bottom","-left"],outline:["-width","-style","-color"],"text-decoration":["-line","-style","-color"]};

    function joinWords(list, lastJoiner) {
        if (list.length < 2) {
            return list.join();
        }
        lastJoiner || (lastJoiner = ' or ');
        var last = list.slice(-1);
        return list.slice(0, -1).join(', ') + lastJoiner + last;
    }

    id('search-form').addEventListener('submit', function (e) {
        e.preventDefault();
    }, false);

    domProperty.addEventListener('input', function () {
        var prop = domProperty.value.trim();
        domResults.classList[prop.length ? 'add' : 'remove']('has-results');
        if (prop.length) {
            showResult(prop);
        }
    }, false);

    function showResult(prop) {
        var resultText, resultClass, resultSub;
        var canAnimate = cssAnimProps.canAnimate(prop);
        var isShorthand = (prop in shorthands);
        var html = [];
        var canAnimatePartial, details;
        if (canAnimate) {
            details = cssAnimProps.getProperty(prop);
            if (isShorthand) {
                shorthands[prop].forEach(function (p) {
                    var longhand = p.substr(0, 1) === '-' ? prop + p : p;
                    if (details.properties.indexOf(longhand) === -1) {
                        canAnimatePartial = true;
                    }
                });
            }
            if (canAnimatePartial) {
                resultText = 'A bit';
                resultClass = 'sortof';
                resultSub = 'Although it’s probably better to animate the individual properties, to avoid clobbering other values'
            } else {
                resultText = 'Yep';
                resultClass = 'yes';
            }
        } else {
            if (knownProps.indexOf(prop) === -1 && !isShorthand) {
                resultText = 'I don’t know that property';
                resultClass = 'unknown';
            } else {
                resultText = 'Nope';
                resultClass = 'no';
            }
        }
        html.push('<div class="result result-', resultClass, '">',
            '<p><strong>', resultText, '</strong></p>');
        if (canAnimate) {
            if (details.properties) {
                html.push(
                    '<p>As a combination of individual properties: ',
                    details.properties.map(function (p) { return '<em>' + p + '</em>'; }).join(', '),
                    '</p>'
                );
            } else {
                html.push(
                    '<p>As type ',
                    joinWords(details.types.map(function (t) { return '<em>' + t + '</em>'; })),
                    '.</p>'
                );
            }
        }
        if (resultSub) {
            html.push('<p><small>(', resultSub, ')</small></p>');
        }
        html.push('</div>');
        domResults.innerHTML = html.join('');
    }
})();

// Analytics
if (location.hostname.indexOf('canianimate.com') > -1) {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-8341018-6', 'auto');
    ga('send', 'pageview');
}
