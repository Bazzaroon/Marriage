// JavaScript Document
var newPage = function(zindex, pageNum){
	var pg = 'pg' + pageNum;
	this.MarkUp = "<div id='" + pg + "' style='z-index:" + zindex + "' class='page'><figure class='pagefront'></figure><figure class='pageback'></figure></div>";
	this.Images = new Array();
}

var photo = function(x, y, width, height, url, side){
	this.X = x;
	this.Y = y;
	this.Width = width;
	this.Height = height;
	this.Url = url;
	this.IsEditing = false;
	this.Side = side;
}

var globals = {
	rotateInterval:0,
	stackLevel:0,
	albumScale:80,
	aspectRatio: (600 / 750) * 100,
	containerWidth: 0
	
}

var markUp = {
	cover: "<div class='cover'></div>",
	page: "<figure id='' style='z-index:stackLevel' class='page'></figure>"	
}




$.widget('album.pages', {
	self:null,
	opts:null,
	options:{
		activepage: 0,
		pages: [],
		totalpages:0,
		zindex: 300
	},
	
	_create: function(){
		self = this;
		opts = this.options;
		
	},
	
	add: function(){
		var NPN = opts.totalpages + 1;
		var NP = new newPage(opts.zindex, NPN);
		opts.pages.push(NP);
		opts.activePage = opts.pages.length - 1;
		$('#backcover figure:eq(1)').append(NP.MarkUp);
		opts.totalpages = opts.totalpages + 1;
		opts.zindex -= 1;
	},
	
	renderPage: function(pagenumber){

			for(var y=0;y<opts.pages[pagenumber-1].Images.length;y++){
				var mkUp = "<div style='position:absolute;left:" + opts.pages[pagenumber-1].Images[y].X + 'px';
				mkUp += ";top:" + opts.pages[pagenumber-1].Images[y].Y + 'px';
				mkUp += ";width:" + opts.pages[pagenumber-1].Images[y].Width + 'px';
				mkUp += ";height:" + opts.pages[pagenumber-1].Images[y].Height + 'px';
				mkUp += ";background-image:url(" + opts.pages[pagenumber-1].Images[y].Url + ")";
				mkUp += ";background-size:" + opts.pages[pagenumber-1].Images[y].Width + "px " + opts.pages[pagenumber-1].Images[y].Height + "px";
				mkUp += "'></div>";
				var page = $('#pg' + pagenumber + ' .page' + opts.pages[pagenumber-1].Images[y].Side);
				page.append(mkUp);
			}
	},
	
	turn: function(){
	
	},
	
	addPictureToPage: function(picture, pagenumber){
		opts.pages[pagenumber-1].Images.push(picture);
	},
	
});

function TestPic(){
	var Pic = new photo(100, 100, 300, 200, 'Images/mom.jpg', 'front');
	return Pic;
}
function TestPic2(){
	var Pic = new photo(100, 100, 80, 90, 'Images/calendar.png', 'back');
	return Pic;
}

function Login(){
	$('#login').dialog({
		width: parseInt($(window).innerWidth() * 0.3),
		height:150,
		dialogClass: "dialogbackground",
		position:{my:'center', at:'top', of: window},
		title: 'Album Manager'
	});
}

