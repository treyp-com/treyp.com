(function() {
    function debounce(func, wait) {
        var timeout;
        return function executedFunction() {
            var context = this;
            var args = arguments;
            var later = function () {
                timeout = null;
                func.apply(context, args);
            };
            window.clearTimeout(timeout);
            timeout = window.setTimeout(later, wait);
        };
    }
    
    function hexToLightness(H) {
        var r = ("0x" + H[1] + H[2]) / 255;
        var g = ("0x" + H[3] + H[4]) / 255;
        var b = ("0x" + H[5] + H[6]) / 255;
        var cmin = Math.min(r, g, b);
        var cmax = Math.max(r, g, b);
        return +(((cmax + cmin) / 2) * 100).toFixed(1);
    }
    
    function lightnessAverage(colors) {
        return (
            colors
                .map((hexColor) => hexToLightness(hexColor))
                .reduce((a, b) => a + b, 0) / colors.length
        );
    }
    
    function replaceNode(oldChild, newChild, parentNode) {
        if (oldChild && oldChild.parentNode.replaceChild) {
            oldChild.parentNode.replaceChild(newChild, oldChild);
        } else {
            if (oldChild) {
                oldChild.parentNode.removeChild(oldChild);
            }
            parentNode.insertBefore(
                newChild,
                oldChild && oldChild.nextSibling
                    ? oldChild.nextSibling
                    : parentNode.firstChild
            );
        }
    }
    
    function renderBackground(generateNewPattern) {
        var backgroundID = "background";
        var resizedOptions = {};
        if (generateNewPattern) {
            resizedOptions = {
                variance: Math.random(),
                seed: Math.random()
            };
        } else if (backgroundPattern) {
            for (var k in backgroundPattern.opts) {
                resizedOptions[k] = backgroundPattern.opts[k];
            }
        }
        resizedOptions.cell_size = window.innerWidth / 50 + Math.random() * 100;
        resizedOptions.width = window.innerWidth;
        resizedOptions.height = window.innerHeight;
        backgroundPattern = Trianglify(resizedOptions);
        var backgroundNode = backgroundPattern.svg();
        backgroundNode.id = backgroundID;
        replaceNode(
            document.getElementById(backgroundID),
            backgroundNode,
            document.body
        );
        // darken the name if its background colors are light
        var lightness = lightnessAverage(
            backgroundPattern.opts.x_colors.slice(
                1,
                window.innerWidth > window.innerHeight ? 3 : 2
            )
        );
        document.querySelector("header").className =
            lightness >= 50 ? "inverted" : "";
    }
    
    var backgroundPattern;
    renderBackground();
    window.addEventListener("resize", debounce(function () {
        renderBackground();
    }, 100));
    
    // regenerate background when name is clicked
    document.querySelector(".name").addEventListener("click", function (e) {
        e.preventDefault();
        renderBackground(true);
    });
})();