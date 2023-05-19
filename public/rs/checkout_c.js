
var a = $(".step-footer-continue-btn.btn .btn-content");
var ab = $(".section-title");
var abc = $(".breadcrumb-item.breadcrumb-item-current");

console.log(a);
$.each( a, function( key, value ) {
	if($(this).html() == 'Phương thức thanh toán'){
		$(this).html("Tiếp tục");
	}
});
$.each( ab, function( key, value ) {
	if($(this).html() == 'Thông tin thanh toán'){
		$(this).html("Thông tin khách hàng");
	}
});
$.each( abc, function( key, value ) {
	if($(this).html().trim() == 'Thông tin vận chuyển'){
		$(this).html("Thông tin khách hàng");
	}
});
