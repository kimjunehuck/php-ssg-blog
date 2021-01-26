<?php
require_once "util.php";
require_once "app.php";
$siteTitle = "디자이너 김준혁";

// 게시물 3
$article3 = [];
$article3["id"] = 3;
$article3["title"] = "display 매우 중요!!";
$article3["regDate"] = "2020-01-18 21:28";
$article3["writerName"] = "김준혁";
$article3["writerAvatar"] = '<svg viewBox="0 0 264 280"><use xlink:href="#avatar-1"></use></svg>';
$article3["tags"] = ["js", "html"];
$article3["body"] = <<<'EOT'
# display 
```codepen
https://codepen.io/as652993/embed/eYdxGRv?height=265&theme-id=light&default-tab=css,result&editable=true
```
```codepen
https://codepen.io/as652993/embed/OJRdxOK?height=265&theme-id=light&default-tab=css,result&editable=true
```
EOT;

// 게시물 2
$article2 = [];
$article2["id"] = 2;
$article2["title"] = "자바스크립트 태그 2";
$article2["regDate"] = "2020-01-12 12:12:14";
$article2["writerName"] = "김준혁";
$article2["writerAvatar"] = '<svg viewBox="0 0 264 280"><use xlink:href="#avatar-1"></use></svg>';
$article2["tags"] = ["js"];
$article2["body"] = <<<'EOT'
# 개요
- script 태그를 사용해야 한다.
- src 속성으로 외부 스크립트를 불러올 수 있다.
- defer 속성으로 html 엘리먼트 로딩까지 실행을 유보시킬 수 있다.
- 자식 컨텐츠로 자바스크립트를 넣어서 사용할 수 있다.
  
# 예시 - 자식 컨텐츠로 자바스크립트를 넣어서 사용
```html
<t-script>
var a = 10;
</t-script>
<div class="a"></div>
```
EOT;

// 게시물 1
$article1 = [];
$article1["id"] = 1;
$article1["title"] = "css 배경색 색깔";
$article1["regDate"] = "2020-01-12 12:12:14";
$article1["writerName"] = "김준혁";
$article1["writerAvatar"] = '<svg viewBox="0 0 264 280"><use xlink:href="#avatar-1"></use></svg>';
$article1["tags"] = ["js"];
$article1["body"] = <<<'EOT'
# HTML h1 사용법
```codepen
https://codepen.io/jangka44/embed/RwGewxQ?height=500&theme-id=light&default-tab=html,result
```
# 1. CSS 색 넣는법
```codepen
https://codepen.io/as652993/embed/XWjxJLq?height=265&theme-id=light&default-tab=css,result&editable=true
```
# 2. CSS 배경색 넣는법
```codepen
https://codepen.io/as652993/embed/RwGePaP?height=265&theme-id=light&default-tab=css,result&editable=true
```
EOT;


// 데이터 정리
$maxArticleId = getMaxArticleId();

$_allArticles = [];
$_tags = [];

for ( $i = $maxArticleId; $i > 0; $i-- ) {
    $varName = 'article' . $i;

    if ( isset($$varName) ) {
        $_allArticles[${$varName}['id']] = &$$varName;

        foreach ( $_allArticles[${$varName}['id']]['tags'] as $tag ) {
            $_tags[] = $tag;
        }
    }
}

$_tags = array_unique($_tags);
sort($_tags);

$_allArticlesByTag = [];

foreach ( $_tags as $tag ) {
    $_allArticlesByTag[$tag] = [];

    foreach ( $_allArticles as $article ) {
        if ( in_array($tag, $article['tags']) ) {
            $_allArticlesByTag[$tag][$article['id']] = $article;
        }
    }
}