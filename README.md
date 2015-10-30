
Magic Numbers Never \o/
===================

[![Join the chat at https://gitter.im/jullierme/angular-keycode](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jullierme/angular-keycode?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A Service for codes of keyboard events

[![Bower](https://img.shields.io/bower/v/bootstrap.svg?style=plastic)](https://github.com/jullierme/angular-keycode)

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
<script src="bower_components/angular-keycode/angular-keyboard.min.js"></script>
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

		function onKeydown($event){
			var code = $event.which || $event.keyCode;

			if(code === KeyCode.ENTER){
				...do
			}
		}

	}
})();

```

LICENCE
-------------

MIT