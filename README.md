[![Bower](https://img.shields.io/bower/v/angular-keycode.svg)](http://bower.io/search/?q=angular-keycode)
[![Join the chat at https://gitter.im/jullierme/angular-keycode](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jullierme/angular-keycode?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


Magic Numbers Never \o/
===================

A Service for codes of keyboard events.

Less than 2 kb minified

Installation
-------------

### bower

```shell
# To install latest release
bower install angular-keycode


# To install latest release and update bower.json
bower install angular-keycode --save
```

> Please note that Angular KeyCode requires **Angular 1.2.x** or higher.


Registrer
-------------
```js
angular.module('myApp',['angular-keycode']);
```

Import
-------------
```html
<script src="bower_components/angular-keycode/angular-keycode.min.js"></script>
```

Using
-------------
```js
(function(){
	'use strict';

	MyService.$inject = ['KeyCode'];

	function MyService(KeyCode){
		var vm = this;
		vm.onKeydown = onKeydown;

        //wrong
		function onKeydown($event){
			var code = $event.which || $event.keyCode;

			if(code === 13){//magic number detected
				...do
			}
		}

        //correct
		function onKeydown($event){
            var code = $event.which || $event.keyCode;

            if(code === KeyCode.ENTER){
                ...do
            }
        }

	}
})();

```

Examples
------------

```js
KeyCode.BACKSPACE
KeyCode.TAB
KeyCode.ENTER

KeyCode.A
KeyCode.B
KeyCode.C

KeyCode.NUMPAD_8
KeyCode.NUMPAD_9

KeyCode.F1
KeyCode.F2
KeyCode.F3

```

[MORE...](https://github.com/jullierme/angular-keycode/blob/master/angular-keycode.js)


LICENCE
-------------

MIT