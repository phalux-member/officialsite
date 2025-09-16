# 記事用ページ

記事用のページをつくりたいときはここにファイルを追加する
作り方はarticle_template.htmlを複製して名前を変える

フォーマットはarticle_{番号}.html

ファイルを作成したら下記を参考にして文章をはりつける

```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHALUX Official</title>
  
  <!-- favicon -->
  <link rel="icon" href="favicon.ico?v=2" type="image/x-icon">
  <!-- CSS -->
  <link rel="stylesheet" href="/css/style.css">
  <!-- jQuery CDN -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

  <!-- Header -->
  <header>
    <!-- ハンバーガーアイコン -->
    <button class="hamburger-menu" id="js-hamburger-menu">
      <span class="hamburger-menu__bar"></span>
      <span class="hamburger-menu__bar"></span>
      <span class="hamburger-menu__bar"></span>
      <span class="hamburger-menu__bar"></span>
      <span class="hamburger-menu__bar"></span>
    </button>
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__list-item"><a href="/html/index.html" class="navigation__link">HOME</a></li>
        <li class="navigation__list-item"><a href="/html/profile.html" class="navigation__link">PROFILE</a></li>
        <li class="navigation__list-item"><a href="/html/info.html" class="navigation__link">INFO</a></li>
        <li class="navigation__list-item"><a href="/html/gallery.html" class="navigation__link">GALLERY</a></li>
        <li class="navigation__list-item"><a href="/html/goods.html" class="navigation__link">GOODS</a></li>
        <li class="navigation__list-item"><a href="/html/contact.html" class="navigation__link">CONTACT</a></li>
      </ul>
    </nav>
    <div class="logo"><a href="/html/index.html">PHALUX Official</a></div>
  </header>

  <main>
    <p>ここに文章を書きこむ</p>
  </main>

  <!-- Footer -->
  <footer>
    <ul class="footer-links">
      <li><a href="privacy.html">プライバシーポリシー</a></li>
      <li><a href="#">免責事項</a></li>
      <li><a href="#">外部サイト</a></li>
    </ul>
  
    <p>© 2025 PHALUX   Icons by <a href="https://icons8.com" target="_blank">Icons8</a></p>
  </footer>

  <script src="/js/common/menu.js"></script>
</body>
</html>
```

記事トップにリンクを作成する

例：

```
<a href="/html/articles/article_0.html">
```

メタタグつけないとSEO的によくない可能性があるが、Wordpress入れるのも面倒なので今回はなし