
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

	TagBuilder.prototype.name = function(value){
		this._name = value;
		this.attr({name:value});
	}

	TagBuilder.prototype.class = function(values){
		if(!this._class){
			this._class = new Array();
		}
		if(typeof values === 'object' || typeof values === 'array'){
			for(idx in values){
				this._class.push(values[idx]);
			}
		}
		else if(typeof values === 'string'){
			this._class.push(values);
		}
		this.attr({class:this._class.toString().replace(new RegExp(',', 'g'), ' ')});
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
			this.children = new Array();
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
				//console.error("Error: %s (%i)", "This can't be a tag's child.");
				html += "";
			}
		}
		html += '</'+this.tag+'>';
		return html;
	}
	return TagBuilder;
})();