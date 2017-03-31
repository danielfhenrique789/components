var dropDownList = new DropDownList({
		options: {
			key1:"Option 1",
			key2:"Option 2",
			key3:"Option 3",
			key4:"Option 4",
			key5:"Option 5",
			key6:"Option 6"
		},
		default: "key6",
		events: {
			onchange: function() { alert('hey jude'); }
		}
	}
);
dropDownList.attr({my3:'atttr3'});
dropDownList.id('myId');
dropDownList.class('classe1');
dropDownList.class('classe2');
dropDownList.class(['classe3','classe4']);
dropDownList.attr({my:'atttr'});
//document.write(dropDownList.build());

// var dataGrid = new DataGrid({
// 		title: "DataGrid",
// 		style: 'light',
// 		data:{
// 			header: {
// 				columns: [
// 					{value:'Column1',align:'center',attr:{onclick:"console.log('Column1')"}},
// 					{value:'Column2',align:'center',attr:{onclick:"console.log('Column2')"}},
// 					{value:'Column3',align:'center',attr:{onclick:"console.log('Column3')"}},
// 					{value:'Column4',align:'center',attr:{onclick:"console.log('Column4')"}}
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
// );
// dataGrid.class('dg1');
// dataGrid.class('dg2');
// dataGrid.class(['dg3','dg4']);
// dataGrid.attr({hey:'joe'});
// dataGrid.id('NId');
// document.write(dataGrid.build());

var _data = {"status":true,"result":[{"_id":"576b72c761c9b6e106bd7c0f","name":"Daniel","__v":0,"Teste":"Douglas","Endereço":"Rua do Douglas","address":[],"phones":[],"nacionalities":[],"documents":[],"emails":[{"status":"Ativo","email":"danielfhenrique1@gmail.com"}]},{"_id":"576b744403a206ec062bcf95","name":"Daniel","__v":0,"address":[],"phones":[],"nacionalities":[],"documents":[],"emails":[{"status":"Ativo","email":"danielfhenriqued1@gmail.com"}]},{"_id":"576b79231b89730c073a2e66","name":"Daniel","__v":0,"address":[],"phones":[],"nacionalities":[],"documents":[],"emails":[{"email":"danielfhenriqued1dfd4@gmail.com","status":"Ativo","_id":"576b79231b89730c073a2e67"}]},{"_id":"576f54663208110606ab9217","name":"Daniel","__v":1,"address":[],"phones":[],"nacionalities":[],"documents":[],"emails":[{"email":"danielfhenrique@gmail.com","status":"Ativo","_id":"576f54663208110606ab9218"}]},{"_id":"57734e491df5a02e0734c27f","name":"Danielddd","__v":0,"address":[],"phones":[],"nacionalities":[],"documents":[],"emails":[{"status":"Ativo","email":"danielfheaaaaasdfnrique@gmail.com"}]},{"_id":"577350c8af4fe43f07ca9fc7","name":"Daniedl","surname":"Alves Henrique","__v":0,"address":[],"phones":[],"nacionalities":[],"documents":[],"emails":[{"email":"danielfhendrse@gmail.com","status":"Inativo","_id":"577350c8af4fe43f07ca9fc9"},{"email":"danielfhesnrsssa@ig.com.br","status":"Ativo","_id":"577350c8af4fe43f07ca9fc8"}]},{"_id":"577354cdaf4fe43f07ca9fca","name":"Daniedl","surname":"Fernanddes Henrique","__v":0,"address":[],"phones":[],"nacionalities":[],"documents":[],"emails":[{"email":"danielfhendrsdasdfe@gmail.com","status":"Inativo","_id":"577354cdaf4fe43f07ca9fcc"},{"email":"danielfhesnrsssa@ig.com.br","status":"Ativo","_id":"577354cdaf4fe43f07ca9fcb"}]},{"_id":"577354f0af4fe43f07ca9fcd","name":"Daniedl","surname":"Fernanddes Henrique","__v":0,"address":[],"phones":[],"nacionalities":[],"documents":[],"emails":[{"email":"danielfhendrsdasdfe@gmail.com","status":"Inativo","_id":"577354f0af4fe43f07ca9fcf"},{"email":"danielfhesnrsssa@ig.com.br","status":"Ativo","_id":"577354f0af4fe43f07ca9fce"}]},{"_id":"5773551daf4fe43f07ca9fd0","name":"Daniedl","surname":"Fernanddes Henrique","__v":0,"address":[],"phones":[],"nacionalities":[],"documents":[],"emails":[{"email":"danielfhendrsdasdfe@gmail.com","status":"Inativo","_id":"5773551daf4fe43f07ca9fd2"},{"email":"danielfhesnrsssa@ig.com.br","status":"Ativdddo","_id":"5773551daf4fe43f07ca9fd1"}]},{"_id":"577355c4af4fe43f07ca9fd3","name":"Daniedl","surname":"Fernanddes Henrique","__v":0,"address":[],"phones":[],"nacionalities":[{"name":"Brasil","capital":"Brasilia","nationality":"Brasileira","currency":"real","currency_symbol":"R$","_id":"577355c4af4fe43f07ca9fd4"}],"documents":[],"emails":[{"email":"danielfhendrsdasdfe@gmail.com","status":"Inativo","_id":"577355c4af4fe43f07ca9fd6"},{"email":"danielfhesnrsssa@ig.com.br","status":"Ativdddo","_id":"577355c4af4fe43f07ca9fd5"}]},{"_id":"5773572daf4fe43f07ca9fdd","name":"Daniedl","surname":"Fernanddes Henrique","__v":0,"address":[],"phones":[{"number":982281300,"city_code":"11","country_code":"55","is_mobile":true,"_id":"5773572daf4fe43f07ca9fdf"},{"number":29191349,"city_code":"11","country_code":"55","is_mobile":false,"_id":"5773572daf4fe43f07ca9fde"}],"nacionalities":[{"name":"Brasil","capital":"Brasilia","nationality":"Brasileira","currency":"real","currency_symbol":"R$","_id":"5773572daf4fe43f07ca9fe0"}],"documents":[],"emails":[{"email":"danielfhendrsdasdfe@gmail.com","status":"Inativo","_id":"5773572daf4fe43f07ca9fe2"},{"email":"danielfhesnrsssa@ig.com.br","status":"Ativdddo","_id":"5773572daf4fe43f07ca9fe1"}]},{"_id":"577359dfaf4fe43f07ca9fea","name":"Daniedl","surname":"Fernanddes Henrique","__v":0,"address":[{"street":"Rua Benito Silveira","number":"46","neibourhood":"Jd. Sapopemba","postal_code":"03929-280","city":"São Paulo","country":{"name":"Brasil","capital":"Brasilia","nationality":"Brasileira","currency":"real","currency_symbol":"R$"},"_id":"577359dfaf4fe43f07ca9feb"}],"phones":[{"number":982281300,"city_code":"11","country_code":"55","is_mobile":true,"_id":"577359dfaf4fe43f07ca9fed"},{"number":29191349,"city_code":"11","country_code":"55","is_mobile":false,"_id":"577359dfaf4fe43f07ca9fec"}],"nacionalities":[{"name":"Brasil","capital":"Brasilia","nationality":"Brasileira","currency":"real","currency_symbol":"R$","_id":"577359dfaf4fe43f07ca9fee"}],"documents":[],"emails":[{"email":"danielfhendrsdasdfe@gmail.com","status":"Inativo","_id":"577359dfaf4fe43f07ca9ff0"},{"email":"danielfhesnrsssa@ig.com.br","status":"Ativdddo","_id":"577359dfaf4fe43f07ca9fef"}]},{"_id":"578adaac682298c00eaea32c","name":"Nicole","surname":"Bernardes Henrique","__v":0,"address":[{"street":"Rua Benito Silveira","number":"46","neibourhood":"Jd. Sapopemba","postal_code":"03929-280","city":"São Paulo","country":{"name":"Brasil","capital":"Brasilia","nationality":"Brasileira","currency":"real","currency_symbol":"R$"},"_id":"578adaac682298c00eaea32d"}],"phones":[{"number":982281300,"city_code":"11","country_code":"55","is_mobile":true,"_id":"578adaac682298c00eaea32f"},{"number":29191349,"city_code":"11","country_code":"55","is_mobile":false,"_id":"578adaac682298c00eaea32e"}],"nacionalities":[{"name":"Brasil","capital":"Brasilia","nationality":"Brasileira","currency":"real","currency_symbol":"R$","_id":"578adaac682298c00eaea330"}],"documents":[],"emails":[{"email":"nicolefhendrsdasdfe@gmail.com","status":"Inativo","_id":"578adaac682298c00eaea332"},{"email":"nicolefhesnrsssa@ig.com.br","status":"Ativdddo","_id":"578adaac682298c00eaea331"}]}],"statusCode":200}
var data = Object();
//data.title = "Teste Plugin";
data.style = "light";
data.data = _data;
//console.log(data);
var dg = new APDataGrid(data);
dg.class('dg1');
dg.class('dg2');
dg.class(['dg3','dg4']);
dg.attr({hey:'joe'});
dg.id('NId');
//console.log(dg.prototype.constructor instanceof Component);
//console.log(dg);
var element = document.getElementById("grid-teste");
function orderBy(field){
	dg.orderBy(field);
	dg.build(element);
}
dg.build(element);
