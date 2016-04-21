(function ($) {
	$.fn.loganPages = function (totalPage, nowPage, callback) {
		var nP = nowPage || 1;
		var totalPage = totalPage || 7;
		var callback = callback || function () {};
		return this.each(function () {

			var $this = $(this);

			if ( totalPage < 7.5 ) {
				$this.append('<li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>');
				for (var i = 1; i <= totalPage; i++){
					$this.append("<li><a href='#'>" + i + "</a></li>");
				};
				$this.append('<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>');

				// 初始化第一个被选中
				$this.find('li').eq(1).addClass("active");

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
						callback(nowPage);
					}
				})

				// 点击first或者last
				$this.find('li').eq(0).click(function(){
					var nowPage = $(this).next('li').addClass('active').text();
					callback(nowPage);
				});

				$this.find('li').eq(totalPage + 1).click(function(){
					var nowPage = $(this).prev('li').addClass('active').text();
					callback(nowPage);
				});

			} else if ( totalPage > 7.5 ) {
				$this.append('<li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>');
				for (var i = 1; i <= 7; i++){
					$this.append("<li><a href='#'>" + i + "</a></li>");
				};
				$this.append('<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>');

				// 初始化第一个被选中
				$this.find('li').eq(1).addClass("active");

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
					callback(nowPage);
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
					callback(nowPage);
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
						$this.find('li').each(function(){
							if ($(this).hasClass("active")) {
								$(this).removeClass("active");
								return;
							}
						});
						$(this).addClass('active');
						var nowPage = $(this).text();
						callback(nowPage);
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
						callback(nowPage);
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
						callback(nowPage);
					}
				})
			}
		});
	}
})(jQuery);