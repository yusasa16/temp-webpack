<?php
// アイキャッチ画像を有効にする。
add_theme_support('post-thumbnails');

/* 投稿アーカイブページの作成 */
function post_has_archive( $args, $post_type ) {

	if ( 'post' == $post_type ) {
		$args['rewrite'] = true;
		$args['has_archive'] = 'blog'; //任意のスラッグ名
	}
	return $args;

}
add_filter( 'register_post_type_args', 'post_has_archive', 10, 2 );

// 固定ページのみ自動整形機能を無効化
function disable_page_wpautop() {
    if ( is_page() ) remove_filter( 'the_content', 'wpautop' );
}
add_action( 'wp', 'disable_page_wpautop' );

// 親テーマのテーマフォルダのパスを取得するショートコード
function gettmplurl($atts, $content = null) {
return get_template_directory_uri();
}
add_shortcode('tmplurl', 'gettmplurl');

// JS・CSSファイルを読み込む
function add_files() {
	// WordPress提供のjquery.jsを読み込まない
	wp_deregister_script('jquery');
}
add_action('wp_enqueue_scripts', 'add_files');
