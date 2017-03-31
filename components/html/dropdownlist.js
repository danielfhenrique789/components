//Parameters:
// {
// 	options: {
// 		key1:"Option 1",
// 		key2:"Option 2",
// 		key3:"Option 3",
// 		key4:"Option 4",
// 		key5:"Option 5",
// 		key6:"Option 6"
// 	},
// 	default: "key6",
// 	events: {
// 		onchange: function() { alert('hey jude'); }
// 	}
// }

const DropDownList = (function(){
	function setOptions(json,def,done){
		var options = new Array();
		var selected;
		for(idx in json){
			if(idx === def)
				selected = true;
			else
				selected = false;
			options.push(new Option(idx,json[idx],selected).value);
		}
		done(options);
	}

	var DropDownList = Class.name("DropDownList").extends(Component).begin(function(params){
		var self = this;
		Component.call(self);

		var options = (params.options) ? params.options : null;
		this.default = (params.default) ? params.default : null;
		var prop = (params.properties) ? params.properties : null;
		var events = (params.events) ? params.events : null;

		this.attr(prop);
		//this.events(events);

		if(options){
			setOptions(options,this.default,function(result){
				self.list = result;
			});
		}
	});

	DropDownList.prototype.getOptions = function(){
		return this.list;
	}
	
	DropDownList.prototype.build = function(){
		var select = new TagBuilder('select');
		this.setAtributes(select);

		var options = this.getOptions();
		select.addRange(options);
		return select.build();
	}

	return DropDownList;
})();
