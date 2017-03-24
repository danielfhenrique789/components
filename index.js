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
//document.write(dropDownList.build());

var dataGrid = new DataGrid({
		title: "DataGrid",
		style: 'light',
		data:{
			header: {
				columns: [
					{value:'Column1',align:'left'},
					{value:'Column2',align:'center'},
					{value:'Column3',align:'left'},
					{value:'Column4',align:'left'}
				]
			},
			rows:[
				[
					{value:dropDownList,align:'left'},
					{value:'Texto 12',align:'left'},
					{value:'Texto 13',align:'left'},
					{value:dropDownList,align:'left'}
				],
				[
					{value:'Texto 21',align:'left'},
					{value:'Texto 22',align:'right'},
					{value:'Texto 23',align:'left'},
					{value:dropDownList,align:'left'}
				],
				[
					{value:'Texto 31',align:'left'},
					{value:'Texto 32',align:'left'},
					{value:'Texto 33',align:'left'},
					{value:dropDownList,align:'left'}
				],
			]
		}
	}	
);

document.write(dataGrid.build());