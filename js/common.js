/**
* @project SLM360
* @version 1.0
* @author Thiago Aguiar - Photon Group
* @copyright 2015
*/

// funcao que exibe o box de post de acordo com a area do menu principal
var _openBoxPostsArea = {
	init: function() {
		var _item = $('header .menu nav ul li');
		var _boxItem = $('.container .news');
		_item.on({
			click: function() {
				var _id = $(this).attr('id');
				_boxItem.css('display', 'none');
				if(!$(this).hasClass('actived')) {
					_item.removeClass('actived');
					$(this).addClass('actived');
					$(this).parents().find('.news#'+_id+"x").css('display', 'block');
				} else {
					$(this).removeClass('actived');
					$(this).parents().find('.news#'+_id+"x").css('display', 'none');
				}
			}
		});
		_boxItem.on({
			mouseleave: function() {
				_item.removeClass('actived');
				$(this).css('display', 'none');
			}
		});
	}
}

// chamando a função do plugin que realiza o blur na imagem de background da página
var _backgroundPage = $('#bgPostBlur');
_backgroundPage.foggy({blurRadius: 9, opacity: 0.9, cssFilterSupport: true});