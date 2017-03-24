var Option = (function(){
	var Option = function(key,value,selected){
		var option = new TagBuilder('option');
		option.add(value)
		option.attr({value:key});
		if(selected)
			option.attr({selected:"selected"});
		this.value = option.build();
	}
	return Option;
})();