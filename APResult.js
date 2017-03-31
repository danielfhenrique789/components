const APResult = (function(){
	const _APResult = function(response){
		this.status = response.status;
		this.statusCode = response.statusCode;
		this.result = response.result;
	}
	return _APResult;
})();