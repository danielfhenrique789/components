const Component = (function(){
	
	var vComponent = Class.name("Component").begin(function(){
		var self = this;
		
		self.id = function(value){
			self._id = value;
		}

		self.class = function(values){
			if(!self._class){
				self._class = new Array();
			}
			if(typeof values === 'object' || typeof values === 'array'){
				for(key in values){
					self._class.push(values[key]);
				}
			}
			else if(typeof values === 'string'){
				self._class.push(values);
			}
		}

		self.attr = function(param){
			if(!self._attr){
				self._attr = new Object();
			}
			if(typeof param === 'object'){
				for(key in param){
					self._attr[key] = param[key];
				}
			}
		}

		self.events = function(events){
			if(!self._events){
				self._events = new Object();
			}
			if(typeof events === 'object'){
				for(key in events){
					self._events[key] = events[key];
				}
			}
		}

		self.setProperties = function(params){
			self._title = (params.title) ? params.title : null;
			self._style = (params.style) ? params.style : null;
			self._data = params.data ? params.data : null;
		}

		self.setAtributes = function(T){
			if(typeof T === 'object'){
				if(typeof T.id === 'function' && self._id && self._id != null && self._id.trim() != ''){
					T.id(self._id);
				}
				if(typeof T.class === 'function' && self._class && self._class.length > 0){
					T.class(self._class);
				}
				if(typeof T.attr === 'function' && typeof self._attr && typeof self._attr === 'object' && Object.keys(self._attr).length > 0){
					T.attr(self._attr);
				}
			}
		}
	});

	return vComponent;
})();