const Component = (function(){
	
	var vComponent = Class.name("Component").begin(function(){
		var self = this;
		
		self.id = function(value){
			self._id = value;
		}

		self.class = function(value){
			self._class = value;
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
	});

	return vComponent;
})();