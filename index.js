(function(mod) {

    var fs = require('fs');
    var path = require('path');

    mod.exports = function(from, into) {
        var dest = path.join(into, from);

        fs.mkdir(into, () => {

        	fs.rename(from, dest, () => {

                console.log("'" + from + "' renamed to '" + dest + "'");

        	});

        });
    };

})(module);
