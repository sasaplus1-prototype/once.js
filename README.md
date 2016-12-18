# once.js

execute once

## Installation

```sh
$ npm install sasaplus1-prototype/once.js
```

## Usage

via `require()`

```js
var once = require('once');
```

via `<script>`

```html
<script src="once.min.js"></script>
```

### Example

```js
var fn = once(function() {
  return 'once';
});

fn();  // => 'once'
fn();  // => undefined
```

## Functions

### once(fn)

- `fn`
  - `Function`
- `return`
  - `Function`

return converted function. throw TypeError if fn is not a function.

## License

The MIT license.
