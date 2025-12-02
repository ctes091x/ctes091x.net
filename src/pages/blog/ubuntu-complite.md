---
title: 'PCにUbuntuを入れて快適にコンリテをやろう'
author: '綿糸てせ (@ctes091x)'
pubDate: 2025-12-02
---

<style>img {max-width: 50%;}</style>

# PCにUbuntuを入れて快適にコンリテをやろう

この記事は[UEC25 Advent Calendar 2025](https://adventar.org/calendars/11349) 2日目の記事です。昨日は[AI](https://x.com/AI_317aaaaaaa)さんの[今日は⚪︎⚪︎⚪︎⚪︎⚪︎⚪︎の誕生日](https://example.com)でした。

## はじめに
みなさんこんにちは。UEC25の綿糸てせ(@ctes091x)です。普段はMMAというサークルでパソカタをしたり、工学研究部というサークルでパソカタをしたり、SF研究会というサークルを設立したりしています。UECアドベントカレンダーにはこれを含めて4本の記事を投稿予定ですが、その1本目から遅刻などという幸先の悪いことになっています。一体どうするのでしょうね。

<!--install
ssh
uecwireless
vpn
vscode-->

## Linuxに生を見いだそう
電通大の必修授業には、レポートの執筆やデータの集計などPCでの作業が必要となるものが多くあります。とりわけ1年次の必修授業である**コンピュータリテラシ**(以下コンリテ)などでは大学の教育用サーバーへの接続やコマンドラインでのファイル操作などの複雑な作業が要求され、それらを実施できる環境の用意にも大きなハードルがあります。

コンリテの授業を実施している情報部会は、[自宅学習環境の構築](https://joho.g-edu.uec.ac.jp/joho/sgd_win/)というページに作業環境セットアップのためのガイドを公開しています。しかしこのページで紹介されている方法は少々回りくどいですし、またあまり快適ともいえません。実際、Visual Studio Codeなどのソフトを用いてより快適にコンリテをやることを目指す大変優れた記事がすでに複数存在しています。

- [トラマト「簡単！VSCodeではじめる快適なSSH接続のやり方【電通大生向け】」](https://note.com/toramutton/n/n6175ca734762)
- [laddge「VSCodeでsshでsolとかcedに繋いで開発する環境を整える」](https://laddge.net/blog/vscode_sol_ced/)

VSCodeのリモート接続機能は非常に強力であり、これがあなたの手元に快適な作業環境を用意してくれるであろうことは言うまでもありません。したがってこの記事の存在意義は極めて薄いでしょう。

それでも、快適なコンリテ環境構築のための選択肢の一つとして「PCにUbuntuを入れる」という道があることを是非知ってほしいと思っています。Linuxの環境からならWindowsからよりも簡単かつ快適に教育用サーバーに接続して作業できますし、なにより演習室と同じ環境を用意してしまえばリモート接続自体をお役御免にしてしまうことだって夢ではありません。



## PCにUbuntuを入れる


<!--
![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2006-29-08.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2006-29-47.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2006-30-08.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2006-30-12.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2006-30-41.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2006-31-37.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2006-31-48.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2006-32-10.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2006-32-22.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2006-32-36.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2006-33-02.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2006-33-26.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2006-33-36.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2015-33-47.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2015-33-59.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2015-34-45.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2015-40-08.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2015-44-05.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2015-44-14.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2015-44-25.png)

![](/blog/ubuntu-complite/install/Screenshot%20from%202025-11-28%2015-44-33.png)
-->

<!--## UECWireless(学内Wi-Fi)に接続する
電気通信大学の学内Wi-Fi、**UECWireless**に接続しましょう。大学の情報基盤センターが出している[公式のレファレンス](https://www.cc.uec.ac.jp/ug/ja/network/uec_wireless/)はWindows、macOS、iOS、Android向けの接続方法を解説しています。Ubuntuでもこれらとおおむね同様の手順で接続できるので、その手順を示します。


まず画面横のドックから「設定」(歯車のアイコン)を開き、「Wi-Fi」の項目 を選択します。

![](/blog/ubuntu-complite/uecwireless/Screenshot%20from%202025-11-28%2015-45-41.png)

表示されたSSIDの一覧からUECWireless を選択し、必要事項を記入します。

- Domain: `shibboleth.cc.uec.ac.jp` を入力
- "No CA Certificate is required" にチェックを入れる
- Inner authentification: "MSCHAPv2" を選択
- Username: UECアカウント名 `x2500000` を入力
- Password: UECアカウントのパスワードを入力

記入した状態を下図に示します。

![](/blog/ubuntu-complite/uecwireless/Screenshot%20from%202025-11-28%2015-51-38.png)

この状態で "Connect" ボタンを押すと、端末がUECWirelessに接続されます。うれしい❗

![](/blog/ubuntu-complite/uecwireless/Screenshot%20from%202025-11-28%2015-52-02.png)-->

## sol(教育用Linuxサーバ)にSSH接続する



![](/blog/ubuntu-complite/ssh/Screenshot%20from%202025-11-28%2016-34-21.png)

## VSCodeをインストール

![](/blog/ubuntu-complite/vscode/Screenshot%20from%202025-11-28%2016-21-13.png)

![](/blog/ubuntu-complite/vscode/Screenshot%20from%202025-11-28%2016-21-34.png)

![](/blog/ubuntu-complite/vscode/Screenshot%20from%202025-11-28%2016-21-45.png)

![](/blog/ubuntu-complite/vscode/Screenshot%20from%202025-11-28%2016-21-54.png)

![](/blog/ubuntu-complite/vscode/Screenshot%20from%202025-11-28%2016-22-01.png)

![](/blog/ubuntu-complite/vscode/Screenshot%20from%202025-11-28%2016-22-47.png)

![](/blog/ubuntu-complite/vscode/Screenshot%20from%202025-11-28%2016-23-19.png)

## VPNに接続する

![](/blog/ubuntu-complite/vpn/Screenshot%20from%202025-11-28%2015-58-37.png)

![](/blog/ubuntu-complite/vpn/Screenshot%20from%202025-11-28%2016-07-59.png)

![](/blog/ubuntu-complite/vpn/Screenshot%20from%202025-11-28%2016-09-08.png)

![](/blog/ubuntu-complite/vpn/Screenshot%20from%202025-11-28%2016-09-22.png)

![](/blog/ubuntu-complite/vpn/Screenshot%20from%202025-11-28%2016-09-58.png)

![](/blog/ubuntu-complite/vpn/Screenshot%20from%202025-11-28%2016-10-48.png)

![](/blog/ubuntu-complite/vpn/Screenshot%20from%202025-11-28%2016-11-22.png)

![](/blog/ubuntu-complite/vpn/Screenshot%20from%202025-11-28%2016-12-01.png)

![](/blog/ubuntu-complite/vpn/Screenshot%20from%202025-11-28%2016-12-13.png)

![](/blog/ubuntu-complite/vpn/Screenshot%20from%202025-11-28%2016-12-38.png)

## おわりに

## 参考文献


