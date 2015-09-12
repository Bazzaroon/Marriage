// JavaScript Document

//Menu.js


$.widget('album.menu', {
	self:null,
	opts:null,
	options:{
	menuItems:[],
	menuUrls:[],
	menuWidth: 200,
	border: true		
	},
	_create: function(){
		self = this;
		opts = this.options;
		var border = opts.border ? ";border:1px solid #CCC" : "";
		var mkUp = "<ul style='height:200px;bottom:5px;position:relative;width:" + opts.menuWidth + "px" + border + ";display:none'></ul>";
		$(self.element).append(mkUp);
		
		for(var x=0;x<opts.menuItems.length;x++){
			mkUp = "<ul>";
			mkUp += "<li style='display:inline-block'>" + opts.menuItems[x] + "</li>";
			$(self.element).append(mkUp);	
		}
			mkUp += "</ul>";
			$(self.element).append(mkUp);	
		
		//Events
		$(self.element).click(function(){
			$(this).children('ul').show();
		});
		
		$(self.element).mouseleave(function(){
			$(this).children('ul').hide();
		});		
	}

});

var menuResponse = {

}

