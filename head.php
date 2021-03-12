<?php
if ( !isset($pageTitle) ) {
  $pageTitle = $siteTitle;
}

if ( !isset($pageDescription) ) {
  $pageDescription = $siteDescription;
}

if ( !isset($pageKeywordsStr) ) {
  $pageKeywordsStr = $siteKeywordsStr;
}

if ( !isset($pageThumbUrl) ) {
  $pageThumbUrl = $siteThumbUrl;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-NN2JV7ZRGN"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-NN2JV7ZRGN');
  </script>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?=$pageTitle?></title>
  <meta name="title" content="<?=$pageTitle?>" />
  <meta name="description" content="<?=$pageDescription?>" />
  <meta name="keywords" content="<?=$pageKeywordsStr?>" />
  <meta name="copyright" content="<?=$siteName?>" />

  <!-- OPENGRAPH -->
  <meta property="og:site_name" content="<?=$siteName?>" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="<?=$pageTitle?>" />
  <meta property="og:description" content="<?=$pageDescription?>" />
  <meta property="og:image" content="<?=$pageThumbUrl?>" />
  <meta property="og:image:alt" content="<?=$siteName?>" />
  <meta property="og:image:width" content="486" />
  <meta property="og:image:height" content="254" />

  <!-- 반응형 필수 -->
  <meta name="viewport" content="width=device-width, user-scalable=no" />

  <!-- 제이쿼리 불러오기 -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

  <!-- 폰트어썸 불러오기 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">

  <!-- 토스트 UI 시작 -->
  <!-- 하이라이트 라이브러리 추가, 토스트 UI 에디터에서 사용됨 -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/highlight.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/styles/default.min.css">

  <!-- 토스트 UI 에디터, 자바스크립트 코어 -->
  <script src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js" defer></script>

  <!-- 코드 미러 라이브러리 추가, 토스트 UI 에디터에서 사용됨 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.58.3/codemirror.min.css" />
  <!-- 토스트 UI 에디터, CSS 코어 -->
  <link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.min.css" />

  <!-- 토스트 UI 에디터, 신택스 하이라이트 플러그인 추가 -->
  <script
    src="https://uicdn.toast.com/editor-plugin-code-syntax-highlight/latest/toastui-editor-plugin-code-syntax-highlight.min.js"
    defer></script>
  <!-- 토스트 UI 끝 -->

  <link rel="stylesheet" href="/css/common.css">
  <script src="/js/common.js" defer></script>

  <link rel="stylesheet" href="/css/index.css">
  <script src="/js/index.js" defer></script>
</head>

<body>

  <div class="body-content">

    <!-- 탑바 시작 -->
    <header class="top-bar con-min-width visible-sm-up">
      <div class="con height-100p flex flex-jc-sb">
        <a href="index.ssghtml.php" class="logo">
          <span><i class="fab fa-codepen"></i></i></span>
          <span>J.Hpen.io</span></a>
        <nav class="top-bar__menu-box-1 height-100p">
          <ul class="flex height-100p">
            <li>
              <a href="index.ssghtml.php" class="flex flex-jc-c flex-ai-c height-100p">
                <span><i class="fas fa-home"></i></span>
                <span>HOME</span>
              </a>
            </li>
            <li>
              <a href="about.ssghtml.php" class="flex flex-jc-c flex-ai-c height-100p">
                <span><i class="far fa-address-card"></i></span>
                <span>ABOUT</span>
              </a>
            </li>
            <li>
              <a href="pf.ssghtml.php" class="flex flex-jc-c flex-ai-c height-100p">
                <span><i class="fas fa-list-alt"></i></span>
                <span>PORTFOLIO</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex flex-jc-c flex-ai-c height-100p">
                <span><i class="fas fa-newspaper"></i></span>
                <span>ARTICLES</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <!-- 탑바 끝 -->

    <!-- 모바일 탑바 시작 -->
    <div class="mobile-top-bar-padding visible-sm-down flex"></div>

    <header class="mobile-top-bar con-min-width visible-sm-down flex">
      <div class="flex-1-0-0 flex">
        <div class="mobile-top-bar__btn-toggle-side-bar flex-as-c">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <a href="index.ssghtml.php" class="logo height-100p">
          <span><i class="fab fa-codepen"></i></i></span>
          <span>J.Hpen.io</span></a>
      </div>
      <div class="flex-1-0-0"></div>
    </header>
    <!-- 모바일 탑바 끝 -->

    <!-- 모바일 사이드 바 시작 -->
    <aside class="mobile-side-bar visible-sm-down">

      <nav class="mobile-side-bar__menu-box-1">
        <ul>
          <li>
            <a href="index.ssghtml.php" class="block">
              <span><i class="fas fa-home"></i></span>
              <span>HOME</span>
            </a>
          </li>
          <li>
            <a href="about.ssghtml.php" class="block">
              <span><i class="far fa-address-card"></i></span>
              <span>ABOUT</span>
            </a>
          </li>
          <li>
            <a href="pf.ssghtml.php" class="block">
              <span><i class="fas fa-list-alt"></i></span>
              <span>PORTFOLIO</span>
            </a>
          </li>
          <li>
            <a href="#" class="block">
              <span><i class="fas fa-newspaper"></i></span>
              <span>ARTICLES</span>
            </a>
          </li>
        </ul>
      </nav>

    </aside>
    <!-- 모바일 사이드 바 끝 -->
    <hr>
    <main>