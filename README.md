# yatta47.github.io

hugoを使ってサイト更新をする際に必要な情報

## サイト

<https://yatta47.github.io>

## コマンドライン

必要なコマンドライン

### 記事を作成する

```command
hugo new posts/[dir-name]/[article-name].md
hugo new posts/first_post.md
```

| Name         | Description    |
| ------------ | -------------- |
| dir-name     | ディレクトリ名 |
| article-name | 記事名         |

アイキャッチ画像は`static/images`の下に置く。

### ローカルで起動

```
hugo server -D
```

### テーブルを整形するショートカットキー

Alt + Shift + F

### レベルを上げる

Ctrl + Shift + [ or ]

## 便利サイト

- アイキャッチ作成  
<https://pablo.buffer.com>

## ショートコード

記事を書く際に役に立つショートコード

### YouTube Privacy Enhanced Shortcode

```shortcode
{{< youtube ZJthWmvUzzc >}}
```

### Twitter Simple Shortcode

```shortcode
{{< twitter 1424766833802977280 >}}
```

もしくは

```shortcode
{{< twitter_simple 1424766833802977280 >}}
```

### Vimeo Simple Shortcode

```shortcode
{{< vimeo_simple 48912912 >}}
```
