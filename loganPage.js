// * version 0.0.1  2016-4-23
// * author logan
(function ($) {
	$.fn.loganPages = function (options, clickCallback) {
		var defaults = {
			'nowPage'  : 1,
			'totalPage': 7,
		}
		var settings = $.extend({}, defaults, options);

		return this.each(function () {

			var nP = settings.nowPage,
				totalPage = settings.totalPage,
				callback = clickCallback || function (np, tp) {
					console.log(np, tp);
				}

			var $this = $(this);
			$this.html("");
			if ( totalPage < 7.5 ) {
				$this.append('<li><a href="javascript:void(0)" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>');
				for (var i = 1; i <= totalPage; i++){
					$this.append("<li><a href='javascript:void(0)'>" + i + "</a></li>");
				};
				$this.append('<li><a href="javascript:void(0)" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>');

				// 初始化第一个被选中
				console.log(nP);
				if (nP != 1){
					$this.find('li').eq(nP).addClass("active");
				} else {
					$this.find('li').eq(1).addClass("active");
				}

				// 点击数字时
				$this.find('li').click(function(){
					$this.find('li').each(function(){
						if ($(this).hasClass("active")) {
							$(this).removeClass("active");
							return;
						}
					});
					if (parseInt($(this).text())) {
						$(this).addClass('active');
						var nowPage = $(this).text();
						callback(nowPage, totalPage);
					}
				})

				// 点击first或者last
				$this.find('li').eq(0).click(function(){
					var nowPage = $(this).next('li').addClass('active').text();
					callback(nowPage, totalPage);
				});

				$this.find('li').eq(totalPage + 1).click(function(){
					var nowPage = $(this).prev('li').addClass('active').text();
					callback(nowPage, totalPage);
				});

			} else if ( totalPage > 7.5 ) {
				$this.append('<li><a href="javascript:void(0)" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>');
				for (var i = 1; i <= 7; i++){
					$this.append("<li><a href='javascript:void(0)'>" + i + "</a></li>");
				};
				$this.append('<li><a href="javascript:void(0)" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>');

				// 初始化第一个被选中
				// $this.find('li').eq(1).addClass("active");
				console.log(totalPage,nP);
				if (nP < 4.5){
					$this.find('li').eq(nP).addClass("active");
					for (var i = 1; i <= 7; i++){
						$this.find('li').eq(i).find("a").text(i);
					};
				} else if ( totalPage - nP < 4) {
					for (var i = 1; i <= 7; i++){
						$this.find('li').eq(i).find("a").text(totalPage - 7 + i);
					};
					$this.find('li').eq(7 - (totalPage - nP)).addClass("active");
				} else {
					for (var i = 1; i <= 7; i++){
						$this.find('li').eq(i).find("a").text(nP - 4 + i);
					};
					$this.find('li').eq(4).addClass("active");
				}

				// 点击first
				$this.find('li').first().click(function(){
					// 取消选中效果
					$this.find('li').each(function(){
						if($(this).hasClass("active")) {
							$(this).removeClass("active");
							return;
						};
					});
					var nowPage = 1;
					for (var i = 1; i <= 7; i++){
						$this.find('li').eq(i).find("a").text(i);
					};

					$this.find('li').first().next().addClass('active');
					// $this.find('li').eq(nowPage).addClass("active");
					callback(nowPage, totalPage);
				});

				// 点击last
				$this.find('li').last().click(function(){
					// 取消选中效果
					$this.find('li').each(function(){
						if($(this).hasClass("active")) {
							$(this).removeClass("active");
							return;
						};
					});
					var nowPage = totalPage;
					for (var i = 1; i <= 7; i++){
						$this.find('li').eq(i).find("a").text(totalPage - 7 + i);
					};

					$this.find('li').last().prev().addClass('active');
					callback(nowPage, totalPage);
				});

				// 点击中间的数字
				$this.find('li').click(function(){
					if (!parseInt($(this).text())) {
						return;
					}
					var nowPage = $(this).text();
					if (nowPage < 4.5) {
						for (var i = 1; i <= 7; i++){
							$this.find('li').eq(i).find("a").text(i);
						};
						// 取消选中
						$this.find('li').each(function(){
							if ($(this).hasClass("active")) {
								$(this).removeClass("active");
								return;
							}
						});
						$(this).addClass('active');
						var nowPage = $(this).text();
						callback(nowPage, totalPage);
					} else if (totalPage - nowPage < 3.5) {
						for (var i = 1; i <= 7; i++){
							$this.find('li').eq(i).find("a").text(totalPage - 7 + i);
						};
						$this.find('li').each(function(){
							if ($(this).hasClass("active")) {
								$(this).removeClass("active");
								return;
							}
						});
						$(this).addClass('active');
						var nowPage = $(this).text();
						callback(nowPage, totalPage);
					} else {
						for (var i = 1; i <= 7; i++){
							$this.find('li').eq(i).find("a").text(nowPage - 4 + i);
						};
						$this.find('li').each(function(){
							if ($(this).hasClass("active")) {
								$(this).removeClass("active");
								return;
							}
						});
						$this.find('li').eq(4).addClass('active');
						callback(nowPage, totalPage);
					}
				})
			}
		});
	}
})(jQuery);