<?php
$siteTitle = "디자이너 홍길동!!!!";

// 게시물 1
$article1 = [];
$article1["title"] = "자바스크립트 태그";
$article1["regDate"] = "2020-01-12 12:12:14";
$article1["writerName"] = "홍길동";
$article1["writerAvatar"] = '<svg viewBox="0 0 264 280"><use xlink:href="#avatar-1"></use></svg>';
$article1["body"] = <<<EOT
# 태그
```codepen
https://codepen.io/jangka44/embed/NWROGrL?height=265&theme-id=light&default-tab=html,result&editable=true
```
EOT;

if ( isset($articleId) ) {
    $articleVarName = "article" . $articleId;
    $selectedArticle = $$articleVarName;
}