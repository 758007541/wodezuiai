//datagrid扩展（表顶部增加搜索框）
CommonMessage = {
	//combogrid的id
	commcommonMessagejq : "",
	/**
	 * 
	 * @param jq : combogrid的id
	
	 * 					
	 */
	commonMessageDategrid: function(jq,option){
		//combogrid的jq
		CommonMessage.commcommonMessagejq=jq;
		//datagrid的jq
		CommonMessage.commcommonMessageDatagridjq=option.jq;
		$("#"+jq).combogrid({
			url:'url',
			panelWidth:600,
			required:'true',
			validType:['？？'],
			idField:'？？',    
			textField:'？？', 
			columns : [[
				        {field : '？？',title : '？？',width : "200px",align : 'left',halign : 'center'},
				        {field : '？？',title : '？？',width : "150px",align : 'left',halign : 'center'},
				        {field : '？？',title : '？？',width : "150px",align : 'left',halign : 'center'},
				        {field : '？？',title : '？？',width : "80px",align : 'center',halign : 'center',
				        	formatter : function(value,row,index){
				        		return "<a href='javascript:void(0);' >删除</a>";
				        	}}
				        ]],
			
			queryParams :{
				params : JSON.stringify({
					messageType:'3'
					}	
				)
			},
			onHidePanel:function(){
				var jq =$("#"+option.jq).datagrid("getEditor",
						{index:option.index,field:'accNumber'}).target; 
				var spanjq = jq.parent().children();
				jq.combogrid("setValue",spanjq.children().eq(1).val());
			},
			queryKey :['content'],
			toolbar : $("#commonMessage_toolbar").length>0?"#commonMessage_toolbar":"<div id='commonMessage_toolbar' style='height: 32px'><form id='payout_tb2_form'>" +
					"<table><tr>" +
					"<td>收钱</td><td><input id='payout_tb2_accountName'name='accountName'/></td>" +
					"<td align='right'><a id='commonMessage_search'>查询</a></td>"+
					"<td></td><td><a id='payout_tb2_addCommonMessage'>添加常用</a></td>" +
					"</tr></table></form>" +
					"</div>"
		});
		CommonMessage.commonMessageInputAndBt(option);
	}
};