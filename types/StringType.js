const StringType = (function(){
	const _String = function(value){
		if(value && typeof value === 'string'){			
			this.value = value;				
		}
		else{
			throw "It's not a string.";
		}
	}
	return _String;
})();