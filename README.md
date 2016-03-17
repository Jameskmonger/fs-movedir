# fs-movedir

Move a directory into another directory.

## Usage

```javascript
const movedir = require('fs-movedir');

movedir('Spain 2016', 'holiday pics');
// move 'Spain 2016' into 'holiday pics'

movedir('myproject', 'javascript projects');
// move 'myproject' into 'javascript'
```

This will create the target directory if it doesn't exist.
