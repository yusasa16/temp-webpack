<?php
// アイキャッチ画像を有効にする。
add_theme_support('post-thumbnails');

/* 投稿アーカイブページの作成 */
function post_has_archive( $args, $post_type ) {

	if ( 'post' == $post_type ) {
		$args['rewrite'] = true;
		$args['has_archive'] = 'news'; //任意のスラッグ名
	}
	return $args;

}
add_filter( 'register_post_type_args', 'post_has_archive', 10, 2 );

// 固定ページのみ自動整形機能を無効化
function disable_page_wpautop() {
    if ( is_page() ) remove_filter( 'the_content', 'wpautop' );
}
add_action( 'wp', 'disable_page_wpautop' );

// カスタムHTMLでのショートコード有効化
add_filter( 'widget_text', 'do_shortcode' );

// 親テーマのテーマフォルダのパスを取得するショートコード
function gettmpluri($atts, $content = null) {
return get_template_directory_uri();
}
add_shortcode('tmpluri', 'gettmpluri');

// Vueコンポーネント用ショートコード
function vueComponent($atts, $content = null) {
	extract( shortcode_atts( array(
		'name' => '',
	), $atts ) );
	return '<' . $name . ' root-path="' . get_template_directory_uri() . '">' . $content . '</' . $name . '>';
}
add_shortcode('vue', 'vueComponent');
