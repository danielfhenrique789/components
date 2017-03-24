const DataGrid = (function(){
	const _DataGrid = Class.name("DataGrid").extends(Component).begin(function(params){
		const self = this;
		Component.call(self);

		self._title = (params.title) ? params.title : null;
		self._style = (params.style) ? params.style : null;
		self._data = params.data ? params.data : null;
	});

	_DataGrid.prototype.build = function(){
		const container = new Box;
		const header = new TagBuilder('header');
		const body = new Box;
		const table = new Table(this._data);
		const h1 = new TagBuilder('h1');

		if(this._style)
			container.class(this._style);
		
		if(this._title){
			h1.add(this._title);
			header.add(h1);
		}

		body.add(table);

		container.add(header);
		container.add(body);

		return container.build()		
	}

	return _DataGrid;
})();