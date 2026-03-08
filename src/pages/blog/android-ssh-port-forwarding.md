---
layout: ../../layouts/blogPostLayout.astro
title: "Androidで学内限定ページを見るときはSSH Dynamic Port-Forwardingを使う【#電通大はAndroidでVPNを使わせろ】"
author: '綿糸てせ (@ctes091x)'
pubDate: 2026-03-15
modDate: 2026-03-15
ogImage: 'https://ctes091x.net/blog/dev-env-2026-02/whole-desktop-features.png'
---

## tl;dr

- Androidでは電通大のVPNに接続できない
- SSH Dynamic Port-Forwardingを使用すると学内ネットワークにアクセスできる
  - Termuxで`ssh -D 1080 x2500000@sol.cc.uec.ac.jp`を実行
  - Firefox BetaでSOCKSプロキシを設定


## はじめに

学外から学内のネットワークにアクセスする際にはVPNを使用します。[電通大のVPN](https://www.cc.uec.ac.jp/ug/ja/remote/vpn/)はL2TP/IPSecというプロトコルを使用していますが、Androidはバージョン12以降このプロトコルのサポートを打ち切っており、VPNを利用することはできません。

そこで本記事では、**SSH Dynamic Port-Forwarding**を用いてAndroid端末から学内限定のページにアクセスする方法を解説します。


## Termuxで学内サーバにSSH接続

まずはスマホにターミナルをインストールします。

突然何を言い出すのかと思われる方も多いとは思いますが、スマホ上で様々なLinuxコマンドが利用できると便利なことが多いです。電通大の1年次必修にはコンピュータリテラシーという科目がありますが、スマホのターミナルがこの課題を片付ける助けになったのも一度や二度ではありません。

**Termux**というアプリを使用すると、特殊な権限設定なしにAndroidスマホ上で各種のLinuxコマンドを実行することができます。Termuxの開発チームはF-DroidまたはGitHubからのインストールを推奨していますが、今回の目的ではGoogle Playストアからのインストールでも問題ありません。

![Termuxの画面](/blog/android-ssh-port-forwarding/termux-display.png)

まずはインストールしたTermux上でSSHコマンドが使用できるようにします。`pkg install openssh`を実行してください。

OpenSSHパッケージをインストールするとSSHコマンドが使えるようになるので、大学の教育用LinuxサーバであるsolにSSH接続します。このとき、コマンドに`-D 1080`というオプションを付加します。

`ssh -D 1080 x2500000@sol.cc.uec.ac.jp`(`x2500000`はあなたのUECアカウント名に置き換えてください)と打ち込みパスワードを入力すると、大学の教育用Linuxサーバsolに接続され、シェルプロンプトが表示されます。

![Termuxでsolに接続した様子](/blog/android-ssh-port-forwarding/connected-to-sol.png)

solにSSH接続するときに`-D 1080`というオプションを追加すると、SSHコマンドが1080番ポートでSOCKSサーバとして動作します。これにより、端末の1080番ポートを経由する通信はSSH接続されたsolを経由するようになります。SSHは通常サーバーへの遠隔ログインに使用されますが、今回はこれをウェブアクセスの中継に使用します。


## Firefox BetaでSOCKSポートを指定

ページアクセス時にSOCKSプロキシが使用されるよう、ブラウザの設定を変更します。必要な設定は単純ですが、生憎Androidデフォルトのブラウザはこれに対応していないので、**Firefox**のベータ版を使用します。

ベータ版のFirefoxもGoogle Playストアからダウンロードできます。安定版のFirefoxとは異なり、`about:config`にアクセスすることでより詳細な設定項目を確認・変更できます。以下の項目を変更すると、ブラウザからの通信がSOCKSプロキシを通るようになり、ページアクセスがsol経由で行われるようになります。

| 項目 | 値 | 説明 |
| --- | --- | --- |
| `network.proxy.type` | `1` | プロキシの種別を指定。今回は手動でのプロキシ設定を行うため`1` |
| `network.proxy.socks` | `localhost` | SOCKSプロキシのアドレスを指定。ここでは端末自身を指す`localhost` |
| `network.proxy.socks_port` | `1080` | SOCKSのポートを指定。SSH接続時に指定した`1080`を設定 |
| `network.proxy.socks_remote_dns` | `true` | ドメインの名前解決を接続先の側、ここでは学内で行うよう指定 |

試しに学内限定のページにアクセスしてみましょう。[電通大施設課のホームページ](https://shisetsu.office.uec.ac.jp)では学内各建物の平面図がPDF形式で公開されており、「学内ONLY」のメニューの「大学建物概要」からそれらを閲覧することができます。学外からのアクセスではForbiddenという表示が出ますが、学内ネットワークに接続できていれば正常に表示することができます！

![表示されたページ](/blog/android-ssh-port-forwarding/shisetu-page.png)

電通大の1年生に多大なるレポート負担を強いる必修の実験科目「基礎科学実験A・B」の実施される憎きD棟の平面図もこの通り、バッチリと閲覧できます。爆破時の火薬量見積りの際などに参考にしてみてはいかがでしょうか？

![D棟の平面図。学内限定のファイルをバラ撒くのはよろしくないのでモザイクをかけた](/blog/android-ssh-port-forwarding/d-bldg.png)


## おわりに
Androidで電通大のVPNが使用できない不便さはしばしば自虐を込めてネタにされますが、学内ネットワークへのアクセスは本記事で紹介した方法を用いることで比較的簡単に行うことができます。ですが普段使用しているブラウザやAndroidシステム自身を学内ネットワークに接続することができないなどの点で不便であるのも事実です。やはり最後に一発だけ叫んでおきましょう。ぜひ皆様もご一緒に、せーのっ。

<span style="font-size:2em;">「「「電通大はAndroidでVPNを使わせろ！！！」」」</span>

ありがとうございました。


## 参考文献

- 電気通信大学 情報基盤センター「[VPN - ITCユーザーズガイド ドキュメント](https://www.cc.uec.ac.jp/ug/ja/remote/vpn/)」
- SoftEther VPN プロジェクト「[2021/11/11 Android 12 で新しい L2TP/IPsec 接続が作成できない問題について](https://ja.softether.org/9-about/news/903_211111)」
- wacky(京大マイコンクラブ)「[ssh -D と tsocks](https://www.kmc.gr.jp/advent-calendar/ssh/2013/12/14/tsocks.html)」
- MozillaZine Knowledge Base「[`network.proxy.type`](https://kb.mozillazine.org/Network.proxy.type)」

