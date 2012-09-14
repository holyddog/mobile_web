$(document).ready(function() {
	var list = $('#feed_list');	
	
	$.ajax({
		type: 'GET',
		url: 'data/news_feed.json',
		dataType: 'json',
		success: function(data) {	
			$.each(data, function(index, rec) {			
				var tmp = 
					'<div class="item">' +
					'	<div class="feed_icon">' +
					'		<img src="' + rec.icon + '" />' +
					'	</div>' +
					'	<div class="post_item">' +
					'		<div class="feed_title">' + rec.name + '</div>' +
					'		<div class="feed_desc">' + rec.desc + '</div>' +
					'	<div>' +
					'</div>';
				list.append(tmp);
			});
		}
	});
});