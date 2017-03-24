const Class = (function(){

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

const _extend = function(father, son){
    var fatherCopy = Object.create(father.prototype);
    son.prototype = fatherCopy;  
    son.prototype.constructor = son;
}

//const _extend = require('./Extend');

const vClass = function(){}

var gExt=null;
vClass.prototype.className;

vClass.prototype.name = function(name){
	vClass.className = name;
	return {
		extends:fextends,
		begin:fbegin
	}
}

var fextends = function(ext){
	gExt = ext;
	var objExt = {
		begin:fbegin
	}
	return objExt;
}

var fbegin = function(begin){
	if(gExt!=null)
		_extend(begin,gExt);
	return begin;
}

var constructor = function(Super){
	var t = fConstructor();
	Super(t);
}

return new vClass;

})();