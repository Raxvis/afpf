## Functions

<dl>
<dt><a href="#constant">constant(func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function without changing the initial parameter</p>
<p>Useful for wrapping loggers, timers and other no-op functions</p>
</dd>
<dt><a href="#insert">insert(index, func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function without changing the initial parameter.</p>
<p>Useful for composing objects or arrays</p>
</dd>
<dt><a href="#lens">lens(func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function on each element in an object or array.</p>
<p>Useful for complex / async mappings of arrays or objects</p>
</dd>
<dt><a href="#log">log(params)</a> ⇒ <code>Any</code></dt>
<dd><p>A simple wrapper that console.logs all parameters sent to it</p>
</dd>
<dt><a href="#pipe">pipe(func)</a> ⇒ <code>Any</code></dt>
<dd><p>A function to execute a list of functions in order, passing the response to each function as the initial parameter</p>
</dd>
</dl>

<a name="constant"></a>

## constant(func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function without changing the initial parameter

Useful for wrapping loggers, timers and other no-op functions

**Kind**: global function  
**Returns**: <code>function</code> - The wrapped function which returns the first parameter  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be wrapped |

**Example**  
```js
const constant = require('afpf/constant');

const log = (message) => console.log(message);
const wrappedLog = constant(log);
const output = wrappedLog('test');
// => 'test'
```
<a name="insert"></a>

## insert(index, func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function without changing the initial parameter.

Useful for composing objects or arrays

**Kind**: global function  
**Returns**: <code>function</code> - A function which accepts an array or object and returns the array or object with the inserted value  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>String</code> \| <code>Int</code> | The index on the array or object that is being inserted |
| func | <code>function</code> | The function to be executed and inserted into the array or object |

**Example**  
```js
const insert = require('afpf/insert');

const addFoo = () => 'bar';
const wrappedFn = insert('foo', addFoo);
const output = wrappedFn({});
// => { foo: 'bar' }
```
<a name="lens"></a>

## lens(func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function on each element in an object or array.

Useful for complex / async mappings of arrays or objects

**Kind**: global function  
**Returns**: <code>function</code> - A function which accepts an array or object and returns the array or object with each key processed by the initial function  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be executed and inserted into the array or object |

**Example**  
```js
const lens = require('afpf/lens');

const addBar = (el) => `${el}Bar`;
const wrappedFn = lens(addBar);
const output = wrappedFn(['foo']);
// => [ 'fooBar' ]
```
<a name="log"></a>

## log(params) ⇒ <code>Any</code>
A simple wrapper that console.logs all parameters sent to it

**Kind**: global function  
**Returns**: <code>Any</code> - First parameter passed to it  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Any</code> | The parameter to be logged and returned |

**Example**  
```js
const log = require('afpf/log');

const output = log(['foo']);
// => console.log(["foo"]);
// => output = ['foo'];
```
<a name="pipe"></a>

## pipe(func) ⇒ <code>Any</code>
A function to execute a list of functions in order, passing the response to each function as the initial parameter

**Kind**: global function  
**Returns**: <code>Any</code> - Response from final function passed  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Functions to be executed syncronously with their results passing to the next function |

**Example**  
```js
const pipe = require('afpf/pipe');

const fn1 = (message) => `New Message: ${message}`;
const fn2 = (message, date) => `${date} | ${message}`;
const fn3 = (message, date, prefix) => `${prefix} === ${message}`;

const output = pipe(fn1, fn2, fn3)('Hello World', '01-01-2018', 'FooBar');
// => 'FooBar === 01-01-2018 | New Message: Hello World'
```
## Functions

<dl>
<dt><a href="#constant">constant(func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function without changing the initial parameter</p>
<p>Useful for wrapping loggers, timers and other no-op functions</p>
</dd>
<dt><a href="#insert">insert(index, func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function without changing the initial parameter.</p>
<p>Useful for composing objects or arrays</p>
</dd>
<dt><a href="#lens">lens(func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function on each element in an object or array.</p>
<p>Useful for complex / async mappings of arrays or objects</p>
</dd>
<dt><a href="#log">log(params)</a> ⇒ <code>Any</code></dt>
<dd><p>A simple wrapper that console.logs all parameters sent to it</p>
</dd>
<dt><a href="#pipe">pipe(func)</a> ⇒ <code>function</code></dt>
<dd><p>A function to execute a list of functions in order, passing the response to each function as the initial parameter</p>
</dd>
</dl>

<a name="constant"></a>

## constant(func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function without changing the initial parameter

Useful for wrapping loggers, timers and other no-op functions

**Kind**: global function  
**Returns**: <code>function</code> - The wrapped function which returns the first parameter  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be wrapped |

**Example**  
```js
const constant = require('afpf/constant');

const log = (message) => console.log(message);
const wrappedLog = constant(log);
const output = wrappedLog('test');
// => 'test'
```
<a name="insert"></a>

## insert(index, func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function without changing the initial parameter.

Useful for composing objects or arrays

**Kind**: global function  
**Returns**: <code>function</code> - A function which accepts an array or object and returns the array or object with the inserted value  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>String</code> \| <code>Int</code> | The index on the array or object that is being inserted |
| func | <code>function</code> | The function to be executed and inserted into the array or object |

**Example**  
```js
const insert = require('afpf/insert');

const addFoo = () => 'bar';
const wrappedFn = insert('foo', addFoo);
const output = wrappedFn({});
// => { foo: 'bar' }
```
<a name="lens"></a>

## lens(func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function on each element in an object or array.

Useful for complex / async mappings of arrays or objects

**Kind**: global function  
**Returns**: <code>function</code> - A function which accepts an array or object and returns the array or object with each key processed by the initial function  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be executed and inserted into the array or object |

**Example**  
```js
const lens = require('afpf/lens');

const addBar = (el) => `${el}Bar`;
const wrappedFn = lens(addBar);
const output = wrappedFn(['foo']);
// => [ 'fooBar' ]
```
<a name="log"></a>

## log(params) ⇒ <code>Any</code>
A simple wrapper that console.logs all parameters sent to it

**Kind**: global function  
**Returns**: <code>Any</code> - First parameter passed to it  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Any</code> | The parameter to be logged and returned |

**Example**  
```js
const log = require('afpf/log');

const output = log(['foo']);
// => console.log(["foo"]);
// => output = ['foo'];
```
<a name="pipe"></a>

## pipe(func) ⇒ <code>function</code>
A function to execute a list of functions in order, passing the response to each function as the initial parameter

**Kind**: global function  
**Returns**: <code>function</code> - Function that will execute each function in order while passing the parameters to each function  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Functions to be executed syncronously with their results passing to the next function |

**Example**  
```js
const pipe = require('afpf/pipe');

const fn1 = (message) => `New Message: ${message}`;
const fn2 = (message, date) => `${date} | ${message}`;
const fn3 = (message, date, prefix) => `${prefix} === ${message}`;

const output = pipe(fn1, fn2, fn3)('Hello World', '01-01-2018', 'FooBar');
// => 'FooBar === 01-01-2018 | New Message: Hello World'
```
## Functions

<dl>
<dt><a href="#constant">constant(func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function without changing the initial parameter</p>
<p>Useful for wrapping loggers, timers and other no-op functions</p>
</dd>
<dt><a href="#insert">insert(index, func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function without changing the initial parameter.</p>
<p>Useful for composing objects or arrays</p>
</dd>
<dt><a href="#lens">lens(func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function on each element in an object or array.</p>
<p>Useful for complex / async mappings of arrays or objects</p>
</dd>
<dt><a href="#log">log(params)</a> ⇒ <code>Any</code></dt>
<dd><p>A simple wrapper that console.logs all parameters sent to it</p>
</dd>
<dt><a href="#pipe">pipe(func)</a> ⇒ <code>function</code></dt>
<dd><p>A function to execute a list of functions in order, passing the response to each function as the initial parameter</p>
</dd>
</dl>

<a name="constant"></a>

## constant(func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function without changing the initial parameter

Useful for wrapping loggers, timers and other no-op functions

**Kind**: global function  
**Returns**: <code>function</code> - The wrapped function which returns the first parameter  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be wrapped |

**Example**  
```js
const constant = require('afpf/constant');

const log = (message) => console.log(message);
const wrappedLog = constant(log);
const output = wrappedLog('test');
// => 'test'
```
<a name="insert"></a>

## insert(index, func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function without changing the initial parameter.

Useful for composing objects or arrays

**Kind**: global function  
**Returns**: <code>function</code> - A function which accepts an array or object and returns the array or object with the inserted value  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>String</code> \| <code>Int</code> | The index on the array or object that is being inserted |
| func | <code>function</code> | The function to be executed and inserted into the array or object |

**Example**  
```js
const insert = require('afpf/insert');

const addFoo = () => 'bar';
const wrappedFn = insert('foo', addFoo);
const output = wrappedFn({});
// => { foo: 'bar' }
```
<a name="lens"></a>

## lens(func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function on each element in an object or array.

Useful for complex / async mappings of arrays or objects

**Kind**: global function  
**Returns**: <code>function</code> - A function which accepts an array or object and returns the array or object with each key processed by the initial function  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be executed and inserted into the array or object |

**Example**  
```js
const lens = require('afpf/lens');

const addBar = (el) => `${el}Bar`;
const wrappedFn = lens(addBar);
const output = wrappedFn(['foo']);
// => [ 'fooBar' ]
```
<a name="log"></a>

## log(params) ⇒ <code>Any</code>
A simple wrapper that console.logs all parameters sent to it

**Kind**: global function  
**Returns**: <code>Any</code> - First parameter passed to it  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Any</code> | The parameter to be logged and returned |

**Example**  
```js
const log = require('afpf/log');

const output = log(['foo']);
// => console.log(["foo"]);
// => output = ['foo'];
```
<a name="pipe"></a>

## pipe(func) ⇒ <code>function</code>
A function to execute a list of functions in order, passing the response to each function as the initial parameter

**Kind**: global function  
**Returns**: <code>function</code> - Function that will execute each function in order while passing the parameters to each function  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Functions to be executed syncronously with their results passing to the next function |

**Example**  
```js
const pipe = require('afpf/pipe');

const fn1 = (message) => `New Message: ${message}`;
const fn2 = (message, date) => `${date} | ${message}`;
const fn3 = (message, date, prefix) => `${prefix} === ${message}`;

const output = pipe(fn1, fn2, fn3)('Hello World', '01-01-2018', 'FooBar');
// => 'FooBar === 01-01-2018 | New Message: Hello World'
```
## Functions

<dl>
<dt><a href="#constant">constant(func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function without changing the initial parameter</p>
<p>Useful for wrapping loggers, timers and other no-op functions</p>
</dd>
<dt><a href="#insert">insert(index, func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function without changing the initial parameter.</p>
<p>Useful for composing objects or arrays</p>
</dd>
<dt><a href="#lens">lens(func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function on each element in an object or array.</p>
<p>Useful for complex / async mappings of arrays or objects</p>
</dd>
<dt><a href="#log">log(params)</a> ⇒ <code>Any</code></dt>
<dd><p>A simple wrapper that console.logs all parameters sent to it</p>
</dd>
<dt><a href="#pipe">pipe(func)</a> ⇒ <code>function</code></dt>
<dd><p>A function to execute a list of functions in order, passing the response to each function as the initial parameter</p>
</dd>
</dl>

<a name="constant"></a>

## constant(func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function without changing the initial parameter

Useful for wrapping loggers, timers and other no-op functions

**Kind**: global function  
**Returns**: <code>function</code> - The wrapped function which returns the first parameter  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be wrapped |

**Example**  
```js
const constant = require('afpf/constant');

const log = (message) => console.log(message);
const wrappedLog = constant(log);
const output = wrappedLog('test');
// => 'test'
```
<a name="insert"></a>

## insert(index, func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function without changing the initial parameter.

Useful for composing objects or arrays

**Kind**: global function  
**Returns**: <code>function</code> - A function which accepts an array or object and returns the array or object with the inserted value  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>String</code> \| <code>Int</code> | The index on the array or object that is being inserted |
| func | <code>function</code> | The function to be executed and inserted into the array or object |

**Example**  
```js
const insert = require('afpf/insert');

const addFoo = () => 'bar';
const wrappedFn = insert('foo', addFoo);
const output = wrappedFn({});
// => { foo: 'bar' }
```
<a name="lens"></a>

## lens(func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function on each element in an object or array.

Useful for complex / async mappings of arrays or objects

**Kind**: global function  
**Returns**: <code>function</code> - A function which accepts an array or object and returns the array or object with each key processed by the initial function  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be executed and inserted into the array or object |

**Example**  
```js
const lens = require('afpf/lens');

const addBar = (el) => `${el}Bar`;
const wrappedFn = lens(addBar);
const output = wrappedFn(['foo']);
// => [ 'fooBar' ]
```
<a name="log"></a>

## log(params) ⇒ <code>Any</code>
A simple wrapper that console.logs all parameters sent to it

**Kind**: global function  
**Returns**: <code>Any</code> - First parameter passed to it  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Any</code> | The parameter to be logged and returned |

**Example**  
```js
const log = require('afpf/log');

const output = log(['foo']);
// => console.log(["foo"]);
// => output = ['foo'];
```
<a name="pipe"></a>

## pipe(func) ⇒ <code>function</code>
A function to execute a list of functions in order, passing the response to each function as the initial parameter

**Kind**: global function  
**Returns**: <code>function</code> - Function that will execute each function in order while passing the parameters to each function  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Functions to be executed syncronously with their results passing to the next function |

**Example**  
```js
const pipe = require('afpf/pipe');

const fn1 = (message) => `New Message: ${message}`;
const fn2 = (message, date) => `${date} | ${message}`;
const fn3 = (message, date, prefix) => `${prefix} === ${message}`;

const output = pipe(fn1, fn2, fn3)('Hello World', '01-01-2018', 'FooBar');
// => 'FooBar === 01-01-2018 | New Message: Hello World'
```
## Functions

<dl>
<dt><a href="#constant">constant(func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function without changing the initial parameter</p>
<p>Useful for wrapping loggers, timers and other no-op functions</p>
</dd>
<dt><a href="#insert">insert(index, func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function without changing the initial parameter.</p>
<p>Useful for composing objects or arrays</p>
</dd>
<dt><a href="#lens">lens(func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function on each element in an object or array.</p>
<p>Useful for complex / async mappings of arrays or objects</p>
</dd>
<dt><a href="#log">log(params)</a> ⇒ <code>Any</code></dt>
<dd><p>A simple wrapper that console.logs all parameters sent to it</p>
</dd>
<dt><a href="#pipe">pipe(func)</a> ⇒ <code>function</code></dt>
<dd><p>A function to execute a list of functions in order, passing the response to each function as the initial parameter</p>
</dd>
</dl>

<a name="constant"></a>

## constant(func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function without changing the initial parameter

Useful for wrapping loggers, timers and other no-op functions

**Kind**: global function  
**Returns**: <code>function</code> - The wrapped function which returns the first parameter  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be wrapped |

**Example**  
```js
const constant = require('afpf/constant');

const log = (message) => console.log(message);
const wrappedLog = constant(log);
const output = wrappedLog('test');
// => 'test'
```
<a name="insert"></a>

## insert(index, func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function without changing the initial parameter.

Useful for composing objects or arrays

**Kind**: global function  
**Returns**: <code>function</code> - A function which accepts an array or object and returns the array or object with the inserted value  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>String</code> \| <code>Int</code> | The index on the array or object that is being inserted |
| func | <code>function</code> | The function to be executed and inserted into the array or object |

**Example**  
```js
const insert = require('afpf/insert');

const addFoo = () => 'bar';
const wrappedFn = insert('foo', addFoo);
const output = wrappedFn({});
// => { foo: 'bar' }
```
<a name="lens"></a>

## lens(func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function on each element in an object or array.

Useful for complex / async mappings of arrays or objects

**Kind**: global function  
**Returns**: <code>function</code> - A function which accepts an array or object and returns the array or object with each key processed by the initial function  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be executed and inserted into the array or object |

**Example**  
```js
const lens = require('afpf/lens');

const addBar = (el) => `${el}Bar`;
const wrappedFn = lens(addBar);
const output = wrappedFn(['foo']);
// => [ 'fooBar' ]
```
<a name="log"></a>

## log(params) ⇒ <code>Any</code>
A simple wrapper that console.logs all parameters sent to it

**Kind**: global function  
**Returns**: <code>Any</code> - First parameter passed to it  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Any</code> | The parameter to be logged and returned |

**Example**  
```js
const log = require('afpf/log');

const output = log(['foo']);
// => console.log(["foo"]);
// => output = ['foo'];
```
<a name="pipe"></a>

## pipe(func) ⇒ <code>function</code>
A function to execute a list of functions in order, passing the response to each function as the initial parameter

**Kind**: global function  
**Returns**: <code>function</code> - Function that will execute each function in order while passing the parameters to each function  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Functions to be executed syncronously with their results passing to the next function |

**Example**  
```js
const pipe = require('afpf/pipe');

const fn1 = (message) => `New Message: ${message}`;
const fn2 = (message, date) => `${date} | ${message}`;
const fn3 = (message, date, prefix) => `${prefix} === ${message}`;

const output = pipe(fn1, fn2, fn3)('Hello World', '01-01-2018', 'FooBar');
// => 'FooBar === 01-01-2018 | New Message: Hello World'
```
## Functions

<dl>
<dt><a href="#constant">constant(func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function without changing the initial parameter</p>
<p>Useful for wrapping loggers, timers and other no-op functions</p>
</dd>
<dt><a href="#insert">insert(index, func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function without changing the initial parameter.</p>
<p>Useful for composing objects or arrays</p>
</dd>
<dt><a href="#lens">lens(func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function on each element in an object or array.</p>
<p>Useful for complex / async mappings of arrays or objects</p>
</dd>
<dt><a href="#log">log(params)</a> ⇒ <code>Any</code></dt>
<dd><p>A simple wrapper that console.logs all parameters sent to it</p>
</dd>
<dt><a href="#pipe">pipe(func)</a> ⇒ <code>function</code></dt>
<dd><p>A function to execute a list of functions in order, passing the response to each function as the initial parameter</p>
</dd>
</dl>

<a name="constant"></a>

## constant(func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function without changing the initial parameter

Useful for wrapping loggers, timers and other no-op functions

**Kind**: global function  
**Returns**: <code>function</code> - The wrapped function which returns the first parameter  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be wrapped |

**Example**  
```js
const constant = require('afpf/constant');

const log = (message) => console.log(message);
const wrappedLog = constant(log);
const output = wrappedLog('test');
// => 'test'
```
<a name="insert"></a>

## insert(index, func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function without changing the initial parameter.

Useful for composing objects or arrays

**Kind**: global function  
**Returns**: <code>function</code> - A function which accepts an array or object and returns the array or object with the inserted value  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>String</code> \| <code>Int</code> | The index on the array or object that is being inserted |
| func | <code>function</code> | The function to be executed and inserted into the array or object |

**Example**  
```js
const insert = require('afpf/insert');

const addFoo = () => 'bar';
const wrappedFn = insert('foo', addFoo);
const output = wrappedFn({});
// => { foo: 'bar' }
```
<a name="lens"></a>

## lens(func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function on each element in an object or array.

Useful for complex / async mappings of arrays or objects

**Kind**: global function  
**Returns**: <code>function</code> - A function which accepts an array or object and returns the array or object with each key processed by the initial function  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be executed and inserted into the array or object |

**Example**  
```js
const lens = require('afpf/lens');

const addBar = (el) => `${el}Bar`;
const wrappedFn = lens(addBar);
const output = wrappedFn(['foo']);
// => [ 'fooBar' ]
```
<a name="log"></a>

## log(params) ⇒ <code>Any</code>
A simple wrapper that console.logs all parameters sent to it

**Kind**: global function  
**Returns**: <code>Any</code> - First parameter passed to it  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Any</code> | The parameter to be logged and returned |

**Example**  
```js
const log = require('afpf/log');

const output = log(['foo']);
// => console.log(["foo"]);
// => output = ['foo'];
```
<a name="pipe"></a>

## pipe(func) ⇒ <code>function</code>
A function to execute a list of functions in order, passing the response to each function as the initial parameter

**Kind**: global function  
**Returns**: <code>function</code> - Function that will execute each function in order while passing the parameters to each function  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Functions to be executed syncronously with their results passing to the next function |

**Example**  
```js
const pipe = require('afpf/pipe');

const fn1 = (message) => `New Message: ${message}`;
const fn2 = (message, date) => `${date} | ${message}`;
const fn3 = (message, date, prefix) => `${prefix} === ${message}`;

const output = pipe(fn1, fn2, fn3)('Hello World', '01-01-2018', 'FooBar');
// => 'FooBar === 01-01-2018 | New Message: Hello World'
```
## Functions

<dl>
<dt><a href="#constant">constant(func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function without changing the initial parameter</p>
<p>Useful for wrapping loggers, timers and other no-op functions</p>
</dd>
<dt><a href="#insert">insert(index, func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function without changing the initial parameter.</p>
<p>Useful for composing objects or arrays</p>
</dd>
<dt><a href="#lens">lens(func)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps a function and allows you to execute said function on each element in an object or array.</p>
<p>Useful for complex / async mappings of arrays or objects</p>
</dd>
<dt><a href="#log">log(params)</a> ⇒ <code>Any</code></dt>
<dd><p>A simple wrapper that console.logs all parameters sent to it</p>
</dd>
<dt><a href="#pipe">pipe(func)</a> ⇒ <code>function</code></dt>
<dd><p>A function to execute a list of functions in order, passing the response to each function as the initial parameter</p>
</dd>
</dl>

<a name="constant"></a>

## constant(func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function without changing the initial parameter

Useful for wrapping loggers, timers and other no-op functions

**Kind**: global function  
**Returns**: <code>function</code> - The wrapped function which returns the first parameter  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be wrapped |

**Example**  
```js
const constant = require('afpf/constant');

const log = (message) => console.log(message);
const wrappedLog = constant(log);
const output = wrappedLog('test');
// => 'test'
```
<a name="insert"></a>

## insert(index, func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function without changing the initial parameter.

Useful for composing objects or arrays

**Kind**: global function  
**Returns**: <code>function</code> - A function which accepts an array or object and returns the array or object with the inserted value  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>String</code> \| <code>Int</code> | The index on the array or object that is being inserted |
| func | <code>function</code> | The function to be executed and inserted into the array or object |

**Example**  
```js
const insert = require('afpf/insert');

const addFoo = () => 'bar';
const wrappedFn = insert('foo', addFoo);
const output = wrappedFn({});
// => { foo: 'bar' }
```
<a name="lens"></a>

## lens(func) ⇒ <code>function</code>
Wraps a function and allows you to execute said function on each element in an object or array.

Useful for complex / async mappings of arrays or objects

**Kind**: global function  
**Returns**: <code>function</code> - A function which accepts an array or object and returns the array or object with each key processed by the initial function  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to be executed and inserted into the array or object |

**Example**  
```js
const lens = require('afpf/lens');

const addBar = (el) => `${el}Bar`;
const wrappedFn = lens(addBar);
const output = wrappedFn(['foo']);
// => [ 'fooBar' ]
```
<a name="log"></a>

## log(params) ⇒ <code>Any</code>
A simple wrapper that console.logs all parameters sent to it

**Kind**: global function  
**Returns**: <code>Any</code> - First parameter passed to it  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Any</code> | The parameter to be logged and returned |

**Example**  
```js
const log = require('afpf/log');

const output = log(['foo']);
// => console.log(["foo"]);
// => output = ['foo'];
```
<a name="pipe"></a>

## pipe(func) ⇒ <code>function</code>
A function to execute a list of functions in order, passing the response to each function as the initial parameter

**Kind**: global function  
**Returns**: <code>function</code> - Function that will execute each function in order while passing the parameters to each function  
**Since**: 0.0.1  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Functions to be executed syncronously with their results passing to the next function |

**Example**  
```js
const pipe = require('afpf/pipe');

const fn1 = (message) => `New Message: ${message}`;
const fn2 = (message, date) => `${date} | ${message}`;
const fn3 = (message, date, prefix) => `${prefix} === ${message}`;

const output = pipe(fn1, fn2, fn3)('Hello World', '01-01-2018', 'FooBar');
// => 'FooBar === 01-01-2018 | New Message: Hello World'
```
