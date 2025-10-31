好的，这是对 "Full-Height Layouts, Hero Images, and Sticky Footers" (全屏高度布局、英雄图片和粘性页脚) 这一部分的翻译和解释。

全屏高度布局、英雄图片和粘性页脚

或许，视口单位最显而易见的用途，就是让一个元素的高度占满整个屏幕。height: 100vh; 让这件事变得易如反掌。

你再也不需要用那些奇怪的小技巧了，比如同时给 <html> 和 <body> 标签设置 height: 100%;。

这对于像“英雄图片”（Hero Images，通常指网站首屏顶部的大尺寸主图）这样的场景非常棒，或者对于那些主内容区域需要严格等于视口高度（不多不少）的 Web 应用界面也同样适用。

```
/* 创建一个占满整个视口并居中内容的全屏容器 */
.fullscreen {
  display: grid;
  place-items: center;
  height: 100vh;
  background: url(sweet-photo.jpg);
}
```
“粘性页脚”（Sticky Footer）技术则是一个经典的 CSS 难题。实现它的方法有上百万种，但如果在一个 flexbox 容器上使用 ```min-height: 100vh;```，只需要寥寥几行 CSS 就能搞定。

这里的关键是使用 min-height 而不是 height。 min-height: 100vh 意味着“容器的高度至少是视口的高度”，如果内容超出，容器可以随之伸长。而 height: 100vh 则会把高度固定住，可能导致内容溢出。

下面是实现粘性页脚的结构和代码：

HTML 结构:

```
<body class="site">
  <header>…</header>
  <main class="site-content">…</main>
  <footer>…</footer>
</body>
```
CSS 代码:

```
/* 1. 让 body 成为一个纵向的 flex 容器 */
.site {
  display: flex;
  flex-direction: column;
  /* 2. 确保 body 至少和视口一样高 */
  min-height: 100vh;
}

/* 3. 让主内容区占据所有可用的剩余空间 */
.site-content {
  flex: 1;
}
```
工作原理:

我们将 <body> 变成一个纵向排列的 Flexbox 容器。

我们保证 <body> 的高度至少是 100vh（整个视口的高度）。

最关键的一步：我们让主内容区域 .site-content 通过 flex: 1; 来“成长”，占据所有可用的剩余空间。

如果页面内容很少，主内容区会伸展，将 <footer> 推到屏幕的底部。

如果页面内容很多，超过了一屏，主内容区会正常显示，<footer> 会被自然地推到所有内容的下方。

如果我们像这样设置 <header> 的 padding ：
```
header {
  padding: 10vmin 1rem;
}
```
我们在外部获得了一些固定的内边距（`1rem`），因此例如设置在其中的文本实际上永远不会接触边缘。我们还会获得一个头部，它会根据屏幕空间以一种感觉合适的方式调整自身大小。

