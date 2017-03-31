//Parameters:
// {
// 	status:'ativo',
// 	result:{}
// }


const APDataGrid = (function(){
	const _APDataGrid = Class.name("APDataGrid").extends(Component).begin(function(params){
		const self = this;
		Component.call(self);

		try{
			if(!params){
				throw "Data Grid Error: There's no parameter.";
			}
			self.setProperties(params);
			this.refresh();

			var scriptElem = document.createElement('link');
			scriptElem.setAttribute('rel','stylesheet');
			scriptElem.setAttribute('href','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
			var s = document.getElementsByTagName('link')[0];
			document.head.insertBefore(scriptElem,s);
		}
		catch(error){
			console.error(data);
		}
	});

	_APDataGrid.prototype.refresh = function(){
		if(this._data.status){
			if(this._data.result){
				var results = this._data.result;
				var result;
				var header = new Array();
				for(var idx in results){
					result = results[idx];
					for(var key in result){		
						if(typeof result[key] != 'object' && typeof result[key] != 'array'){
							if(!this._header){
								this._header = new Object();
							}
							if(!this._header.columns){
								this._header.columns = Array();
							}											

							if(header.indexOf(key) == -1){
								if(key!="_id" && key!="__v"){
									header.push(key);
									this._header.columns.push({value:key,icon:'fa fa-filter',align:"center",attr:{onclick:"orderBy('"+key+"')"}});
								}
							}
						}
					}
				}
			}
		}
	}

	_APDataGrid.prototype.orderBy = function(field){
		var num = this.asc ? 1 : -1;
		this.asc = !this.asc;

		this._data.result.sort(function(a,b){
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

	

	_APDataGrid.prototype.build = function(element){
		try{
			var data = this._data;
			if(data.status){
				if(data.result){
					var results = data.result;
					var rows = new Array();
					var row;
					var column;
					var result;
					for(var idx in results){
						result = results[idx];
						row = new Array()
						if(this._header && this._header.columns){
							for(var i in this._header.columns){
								var key = this._header.columns[i].value;
								if(result[key]){
									column = result[key];
								}
								else{
									column = "";
								}
								row.push({value:column,align:"center"});
							}
							rows.push(row);
						}
					}					
					var params = {data:{header:this._header,rows:rows}};
					if(this._title)
						params.title = this._title;
					if(this._style)
						params.style = this._style;
					var dg = new DataGrid(params);
					this.setAtributes(dg);
					if(!element)
						return utf8Decode(dg.build());
					else
						element.innerHTML = utf8Decode(dg.build());
				}
				throw "Invalid response.";
			}
			throw "Invalid response.";
		}
		catch(error){

		}
	}
	return _APDataGrid;
})();