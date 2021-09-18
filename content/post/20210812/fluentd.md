---
title: "Fluentdについて調べ始めた。"
date: 2021-08-12T14:22:31Z
author: "yatta47"
categories: ["fluentd"]
tags: [""]
draft: false
image: "/img/fluentd.png"
description: "メモです。"
---

Fluentdについて調べる必要があったので調べています。

## 参考にしているサイト


> KafkaブローカのWrite Ahead Log格納先はデフォルトで/tmp/kafka-logsとなる。この配下に、recovery-point-offset-checkpoint, replication-offset-checkpoint ファイルが生成される。また今回の場合はtest-0という名でディレクトリが生成され、さらにその配下にバイナリログが生成されていた。詳しい仕組みはよく分かってないが、これらのリソースがブローカの耐障害性をサポートする、はず。

[https://atomitech.jp/study/entry-550/ 【Hinemos】アプリケーションログをfluentdで転送する｜技術研究・研究日誌｜株式会社アトミテック]
