const Table = (function(){
	const _Table = Class.name("Table").extends(Component).begin(function(params){
		try{
			const self = this;
			Component.call(self);
			
			if(!params){
				throw "Table Error: There's no parameters.";
			}
			self._title = (params.title) ? params.title : null;
			self._header = (params && params.header) ? params.header : null;
			self._rows = (params && params.rows) ? params.rows : null;
		}
		catch(error){
			console.error(error);
		}
	});

	_Table.prototype.addParams = function(params){
		self._title = (params.title) ? params.title : null;
		self._header = (params.header) ? params.header : null;
		self._rows = (params.rows) ? params.rows : null;
	}

	_Table.prototype.addRow = function(param){
		if(!self._columns){
			self._columns = new Object();
		}
		if(typeof param === 'object'){
			for(key in param){
				self._columns[key] = param[key];
			}
		}
	}

	_Table.prototype.build = function(){
		var table = new TagBuilder('table');
		var body = new TagBuilder('tbody');
		var row;
		var column;
		var align=null;
		var attr=null;
		var icon=null;
		var span=null;
		for(idx in this._header){
			row = new TagBuilder('tr');
			for(i in this._header[idx]){
				column = new TagBuilder('th');

				if(this._header[idx][i].align){
					align = this._header[idx][i].align;
					if(align && (align =='left' || align == 'right')){
						column.class(align);
					}
				}

				if(this._header[idx][i].attr){
					column.attr(this._header[idx][i].attr);
				}
				if(this._header[idx][i].icon){
					icon = new TagBuilder('i');
					icon.class(this._header[idx][i].icon);
					column.add(icon);
				}
				span = new TagBuilder('span');
				span.add(this._header[idx][i].value);
				column.add(span);
				row.add(column);
				
			}
			body.add(row);
		}
		for(idx in this._rows){
			row = new TagBuilder('tr');
			for(i in this._rows[idx]){
				column = new TagBuilder('td');
				align = this._rows[idx][i].align;
				if(align && (align =='left' || align == 'right' || align == 'center')){
					column.class(align);
				}
				column.add(this._rows[idx][i].value);
				row.add(column);
				
			}
			body.add(row);
		}
		table.add(body);
		this.setAtributes(table);
		return table.build();
	}
	
	return _Table;
})();