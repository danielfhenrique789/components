const DataSet = (function(){
	const _DataSet = function(params){
		const apResult = new APResult(params);
		this._data = apResult.result;
	}
})();