rTab = {
	
	tabHeads : null,	//tabs' header links in li
	tabContents : null,	//tabs' contents
	tabIndex : 0,	//which tab should be showed on start
	
	init : function(tabIndex){
		rTab.tabIndex = tabIndex || rTab.tabIndex;
		
		rTab.tabHeads = $$('#rTabHead li a');
		rTab.tabContents = $$('#rTabContent > div');

		rTab.addClickHandler();
		rTab.showInitailTabState();
	},

	addClickHandler : function(){
		rTab.tabHeads.each(function(tabHead){
			Event.observe(tabHead, 'click', rTab.tabSwitch);
		});
	},
		
	showInitailTabState : function(){
		rTab.tabContents.each(function(tabDiv, index){
			var h = rTab.tabHeads[index];
			if(index != rTab.tabIndex)
				tabDiv.hide();
			else
				h.parentNode.addClassName('rTabActiveHead');
		});
	},
	
	tabSwitch : function(e){
		rTab.tabContents.each(function(tabDiv, index){
			var h = rTab.tabHeads[index];
			if(h == e.target){
				tabDiv.show();
				h.parentNode.addClassName('rTabActiveHead');
			}
			else{
				tabDiv.hide();
				h.parentNode.removeClassName('rTabActiveHead');
			}
		});
		Event.stop(e);
	}
}

document.observe('dom:loaded', function(){
	rTab.init(2);	//show tab #3 on start
});
