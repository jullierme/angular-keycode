
Magic Numbers Never \o/
===================

A Service for codes of keyboard events


Installation
-------------

```$batch
bower install angular-keycode --save
```

Registrer
-------------
```
angular.module('myApp',['angular-keycode']);
```

Import
-------------
```
<script src="bower_components/angular-keycode/angular-keyboard.min.js"></script>
```

Use
-------------
```
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