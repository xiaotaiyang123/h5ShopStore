$(function() {
			var k = $(window).height();
			 // 点击next 往下播放一屏幕
    $(".next").click(function(event) {
       $.fn.fullpage.moveSectionDown();
    });
			$('#fullpage').fullpage({
					navigation: true,
					afterLoad: function(anchorLink, index) {
						if(index == 2 ) {
							$(".next").fadeOut();
							$(".search").show().animate({"right": 370}, 1000, function() {
								$(".search-wrods").animate({"opacity": 1}, 1000, function() {
									$(".search").hide();
									$(".search-02-1").show().animate({"right": 240,"height": 30,"bottom": 449}, 1000);
									$(".goods-02").show().animate({"height": 218}, 1000);
									$(".words-02").animate({"opacity": 1}, 1500,function(){
										$(".next").fadeIn();
									});
								})
							})
						}
						if(index == 5) {
							$(".next").fadeOut();
							$(".hand-05").show().animate({
								"bottom": -20
							}, 1000, function() {
								$(".mouse-05-a").animate({
									"opacity": 1
								}, 500, function() {
									$(".t1f-05").show().animate({
										"bottom": 75
									}, 500);
									$(".order-05").animate({
										"bottom": 360
									}, 500, function() {
										$(".words-05").addClass("words-05-a");
										$(".next").fadeIn();
									})
								})
							})
						}
						
						if(index == 7){
							$(".next").fadeOut();
							$(".star ").animate({"width":120},1000);
							$(".good-07").fadeIn();
							$(".next").fadeIn();
						}
						if(index == 8){
			$(".next").fadeOut(); 
							$(".beginShoping").hover(function(){
								$(".btn-08-a").toggle()
							});
							$(document).mousemove(function(e){
								var x = e.pageX- $(".hand-08").width() / 2;
								var y = e.pageY + 10;
								var mainY = k - 449;
								if(y < mainY){
									$(".hand-08").css({"left": x, "top": mainY});
								}else{
									$(".hand-08").css({"left": x, "top": y});
								}
								
							});
							 $(".again").click(function(event) {
				                 // 1. 返回第1屏幕 
				                   $.fn.fullpage.moveTo(1);
				                    // 2. 所有的动画都复原 就是原来没有看过的样子 
				                    // 核心原理就是  让我们的图片（做动画的元素 清除 行内样式就可以）
				                    // 所有带有动画的div 盒子 添加 move 类名
				                   $("img, .move").attr("style", "");
				                   $(".words-05").removeClass("words-05-a");
				               });
						}
					},
					onLeave: function(index, nextIndex, direction) {
						if(index == 2 && nextIndex == 3) {

							$(".shirt-02").show().animate({"bottom": -(k - 250),"width": 207,"left": 260
							}, 1500, function() {
								$(".img-01-a").animate({"opacity": 1}, 1500);
								$(".btn-01-a").animate({"opacity": 1}, 1500,function(){
									$(".next").fadeIn(); 
								});
							});
							$(".cover").show();
							
						};

						if(index == 3 && nextIndex == 4) {
							$(".next").fadeOut(); 
							$(".shirt-02").hide();
							$(".t1f").show().animate({
								"bottom": -(k - 200),
								"left": 249
							}, 1500, function() {
								$(".t1f").hide();
								$(".car-img").show();
								$(".car").animate({
									"left": "150%"
								}, 4000, "easeInElastic", function() {
									$(".note").show();
									$(".note-img ,.words-04-a").animate({
										"opacity": 1
									}, 500,function(){
										$(".next").fadeIn(); 
									})
								});
							})
						}
						if(index == 5 && nextIndex == 6) {
							$(".next").fadeOut(); 
							$(".t1f-05").animate({
									"bottom": -(k - 500),
									"width": 65,
									"left": "40%"
								}, 1500, function() {
									$(".t1f-05").hide();
									$(".box-06").animate({
											"bottom": 10
										}, 1000, function() {
											$(".box-06").hide();
											$(".section6").animate({
													"backgroundPositionX": "100%"
												}, 4000, function() {
													$(".boy").animate({
															"height": 305,
															"bottom": 122
														}, 500, function() {
															$(this).animate({
																	"right": 500
																}, 500, function() {
																	$(".door").animate({
																			"opacity": 1
																		}, 500, function() {
																			$(".girl").show().animate({
																					"height": 294
																				}, 500, function() {
																					$(".pop-07").fadeIn();
																					$(".next").fadeIn(); 
																				});
																			});

																	})
															});

													}); $(".pop-06").show(); $(".words-06-a").show().animate({
													"left": "30%"
												}, 2000, "easeOutElastic");
											})
									}); $(".box-06").animate({
									"left": "38%"
								}, 1500)
							};
						
						
					},
					
					
		});
});