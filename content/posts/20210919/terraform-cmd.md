---
title: "terraformのコマンド"
date: 2021-09-19T17:03:57Z
categories: [""]
tags: ["terraform"]
author: "yatta47"
description: ""
draft: false
type: post
keywords: ["terraform"]
---

terraformの基本的なコマンド。

## terraform init

terraform を初期化する際のコマンド。コードを実行しようと思った際は必ず実行する。同一ディレクトリに`.terraform`というディレクトリができる。

## terraform plan

コードのdry run。実行したらどうなるかの結果が見える。

## terraform apply

コードを実行する。  
planの結果が表示され、その後確認が表示される。

## terraform destroy

terraformで作成されたリソースを削除する。
