// https://github.com/eturino/underscore_namespace.git
// based on namespace function from projs course (https://github.com/redradix/material-projs/)
(function (_) {
    _.mixin({
        namespace: function (string, rootObj, sandboxFn) {
            var spaces = string.split('.'),
                root = rootObj || window,
                f = sandboxFn || function (x) { return x },
                space;
            
            while (space = spaces.shift()) {
                root = root[space] || (root[space] = {});
            }
            return f(root);
        }
    });
})(_);

