
const TagBuilder = (function(){
	var TagBuilder = function(tag){
		this.tag = tag;
	}

	TagBuilder.prototype.list = function(){
		return this.children;
	}

	TagBuilder.prototype.id = function(value){
		this._id = value;
		this.attr({id:value});
	}

	TagBuilder.prototype.class = function(value){
		this._class = value;
		this.attr({class:value});
	}

	TagBuilder.prototype.attr = function(param){
		if(!this._attr){
			this._attr = new Object();
		}
		if(typeof param === 'object'){
			for(key in param){
				this._attr[key] = param[key];
			}
		}
	}

	TagBuilder.prototype.add = function(child,childName){
		if(!this.children)
			this.children = [];
		this.children.push(child);
	}

	TagBuilder.prototype.addRange = function(children){
		this.children = children;
	}

	TagBuilder.prototype.build = function(){
		var children = this.list();
		var child;	
		var _attr = "";
		for(i in this._attr){
			_attr += i+'="'+this._attr[i]+'" ';
		}	
		var html = '<'+this.tag+' '+_attr+'>';
		for(idx in children){
			child = children[idx];
			if(typeof child === 'object' && typeof child.build === 'function'){ //child instanceof TagBuilder){
				html += child.build();
			}
			else if(typeof child === 'string'){
				html += child;
			}
			else{
				console.error("Error: %s (%i)", "This can't be a tag's child.");
			}
		}
		html += '</'+this.tag+'>';
		return html;
	}
	return TagBuilder;
})();