//Parameters:
//{
// 		title: "DataGrid",
// 		style: 'light',
// 		data:{
// 			header: {
// 				columns: [
// 					{value:'Column1',align:'center'},
// 					{value:'Column2',align:'center'},
// 					{value:'Column3',align:'center'},
// 					{value:'Column4',align:'center'}
// 				]
// 			},
// 			rows:[
// 				[
// 					{value:dropDownList,align:'left'},
// 					{value:'Texto 12',align:'right'},
// 					{value:'Texto 13',align:'left'},
// 					{value:dropDownList,align:'left'}
// 				],
// 				[
// 					{value:'Texto 21',align:'left'},
// 					{value:'Texto 22',align:'right'},
// 					{value:'Texto 23',align:'left'},
// 					{value:dropDownList,align:'left'}
// 				],
// 				[
// 					{value:'Texto 31',align:'left'},
// 					{value:'Texto 32',align:'right'},
// 					{value:'Texto 33',align:'left'},
// 					{value:dropDownList,align:'left'}
// 				],
// 			]
// 		}
// 	}	

const DataGrid = (function(){
	const _DataGrid = Class.name("DataGrid").extends(Component).begin(function(params){
		const self = this;
		Component.call(self);
		try{
			if(!params){
				throw "Data Grid Error: There's no parameter.";
			}
			self.setProperties(params);
		}
		catch(error){
			console.error(data);
		}
	});

	_DataGrid.prototype.orderBy = function(field){
		var num = this.asc ? 1 : -1;
		this.asc = !this.asc;

		this._data.result.sort(function(a,b){
			console.log(a);
			var va = (a[field]) ? a[field].toUpperCase() : "";
			var vb = (b[field]) ? b[field].toUpperCase() : "";
				if (va > vb) {
				    return 1*num;
				}
				if (va < vb) {
				    return -1*num ;
				}
				
				return 0;
		});
	}

	_DataGrid.prototype.build = function(){
		const container = new Box;
		const header = new TagBuilder('header');
		const body = new Box;
		const table = new Table(this._data);
		const h1 = new TagBuilder('h1');

		table.attr({cellspacing:"0"});

		if(this._title){
			h1.add(this._title);
			header.add(h1);
			container.add(header);
		}
		if(this._style)
			container.class(this._style);
		

		body.add(table);

		container.add(body);

		this.setAtributes(container);

		return container.build()		
	}

	return _DataGrid;
})();