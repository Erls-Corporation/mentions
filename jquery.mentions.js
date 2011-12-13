(function ($){

	//name our plugin after "$.fn.". in this case our plugin name is simpleSpy
	$.fn.mentions = function(){
	
		
		return $(this).each(function(index, object){
			
			function find_atts(content) {
				return content.replace(/(https?:\/\/[^\s]+)/g,"<a href=\"$1\" target='_blank'>$1</a>")
				      .replace(/(@)([a-zA-Z0-9_]+)/g, "<a href=\"http://twitter.com/$2\" target=\"_blank\">$1$2</a>")
				      .replace(/(#)([a-zA-Z0-9_]+)/g, "<a href=\"http://twitter.com/#!/search?q=$2\" target=\"_blank\">$1$2</a>");
			}

			function updater(){
				var $text = $(object).text(),
				element = $(object);

				newText = find_atts($text);

				element.html(newText);  
			}

			updater();


		});

	};

})(jQuery);