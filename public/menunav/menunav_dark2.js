//引入该js,即可引入一级顶部菜单
$(function(){
    var url = window.location.href;
    $("#menunav_dark2").load("/public/menunav/menunav_dark2.html",function(){
    });

});

$(window).load(function(){
});

function loadJsCss(filename, filetype) {
	if (filetype == "js") {
		var fileref = document.createElement('script');
		fileref.setAttribute("type", "text/javascript");
		fileref.setAttribute("src", filename);
	} else if (filetype == "css") {
		var fileref = document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
	}
	if (typeof fileref != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}
