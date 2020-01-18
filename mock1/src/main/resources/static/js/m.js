.ajax({
				type: GET_TYPE,
				url: URL_LIST_MASTER_POINT,
				dataType: DATA_TYPE,
				success: function (data) {
					console.log(data);            
					main_table.setData(data[KEY_LIST_MASTER_POINT]);
				},
				error: function(data1){
					alert(data1)
				}
			});
		}
Seen by Pham Minh Tien (AA.VN) at 2:57 PM
