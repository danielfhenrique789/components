(function(){
	var integer = function(int){
		if(int){
			this.value = null;
			if(!isNaN(int))
				this.value = int;
			else
				throw "It's not a number.";
		}
	}
	module.exports = integer;
})();