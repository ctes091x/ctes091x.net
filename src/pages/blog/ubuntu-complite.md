---
layout: ../../layouts/blogPostLayout.astro
title: 'PCにUbuntuを入れて快適にコンリテをやろう'
author: '綿糸てせ (@ctes091x)'
pubDate: 2025-12-02
modDate: 2025-12-03
ogImage: 'https://ctes091x.net/blog/ubuntu-complite/complite_window.png'
---

この記事は[UEC25 Advent Calendar 2025 その1](https://adventar.org/calendars/11349) 2日目の記事です。昨日は[AI](https://x.com/AI_317aaaaaaa)さんの[今日は⚪︎⚪︎⚪︎⚪︎⚪︎⚪︎の誕生日](https://note.com/ai_317aaaaaaa/n/n79c63005c02a)でした。

## はじめに
みなさんこんにちは。UEC25の綿糸てせ([@ctes091x](https://x.com/ctes091x))です。普段はMMAというサークルでパソカタをしたり、工学研究部というサークルでパソカタをしたり、SF研究会というサークルを設立したりしています。UECアドベントカレンダーにはこれを含めて4本の記事を投稿予定ですが、その1本目から遅刻などという幸先の悪いことになっています。一体どうするのでしょうね。

### この記事の対象読者
少なくとも、

- たまには変なことをしてみたい人
- 現状のコンリテの作業環境に不満がある人

はこの記事の対象読者でしょう。これを

- Windowsでコンリテをやっている全ての人

にまで拡張できる自身はありません。どうかお手柔らかにお願いします。

## Linuxに生を見いだそう
電通大の必修授業には、レポートの執筆やデータの集計などPCでの作業が必要となるものが多くあります。とりわけ1年次前学期の必修授業である**コンピュータリテラシー**(以下コンリテ)などでは大学の教育用サーバーへの接続やコマンドラインでのファイル操作などの複雑な作業が要求され、それらを実施できる環境の用意にも大きなハードルがあります。

コンリテなどの授業を実施している電気通信大学情報部会は、[自宅学習環境の構築](https://joho.g-edu.uec.ac.jp/joho/sgd_win/)というページに作業環境セットアップのためのガイドを公開しています。しかしこのページで紹介されている方法は少々回りくどいですし、またあまり快適ともいえません。実際、[Visual Studio Code](https://code.visualstudio.com/)などのソフトを用いてより快適にコンリテをやることを目指す大変優れた記事がすでに複数存在しています。

- [トラマト「簡単！VSCodeではじめる快適なSSH接続のやり方【電通大生向け】」](https://note.com/toramutton/n/n6175ca734762)
- [Laddge「VSCodeでsshでsolとかcedに繋いで開発する環境を整える」](https://laddge.net/blog/vscode_sol_ced/)

VSCodeのリモート接続機能は非常に強力であり、これがあなたの手元に快適な作業環境を用意してくれるであろうことは言うまでもありません。したがってこの記事の存在意義は極めて薄いでしょう。

それでも、快適なコンリテ環境構築のための選択肢の一つとして「**PCにUbuntuを入れる**」という道があることを是非知ってほしいと思っています。Linuxの環境からならWindowsからよりも簡単かつ快適に教育用サーバーに接続して作業できますし、なにより演習室と同じ環境を自分の端末に用意してしまえばリモート接続自体をお役御免にしてしまうことだって夢ではありません。

近年なんだか肥大化傾向にあるWindowsと比較するとUbuntuの動作は軽快ですし、システムの自由度が高いので自分好みにカスタマイズすることでより快適な環境をつくることもできます。PCにLinuxを入れてQOLを上げましょう！

## PCにUbuntuを入れる
まずはPCにUbuntuをインストールしましょう。ここでは手順の一部分のみを紹介します。ネット上にはより詳細な手順を解説した記事が複数存在するので、それらも参照することをおすすめします。

### 用意するもの
- PC
- USBメモリ(8GB以上を推奨)

### インストールディスクを作成
それでは、自分のPCにUbuntuを入れましょう。まずは[Ubuntuの公式HP](https://jp.ubuntu.com/download/)から長期サポート版(LTS)のUbuntu Desktopをダウンロードします。このファイルを[Rufus](https://rufus.ie/ja)というソフトを使ってUSBメモリに書き込みます。書き込みが完了したらPCをシャットダウンします。

### インストール
作成したインストール用USBを刺したまま、PCを起動します。起動ディスクとしてこのUSBが選択されている場合は普段と異なるメニュー画面が表示されるので、「Try or Install Ubuntu」を選択します。メニュー画面が表示されない場合はPCの電源を入れ直し、BIOSメニューを開いて起動ディスクを変更した上で、再び電源を投入してみてください。

Ubuntuのインストール画面が開いたら、あとは指示に従って必要事項を入力し、順番にボタンを押していくだけでインストールが進行します。

インストールの途中、「どうやってUbuntuをインストールしますか？」という項目で、すでにPCに入っているWindowsを消去するかどうか問われます。ここでは「Ubuntuを他のパーティションと並べてインストールする」を選択することをおすすめします。トラブルがあったときに対処しやすいよう、既存のWindowsも残しておきましょう。

![Ubuntuのインストール時に出てくる「どうやってUbuntuをインストールしますか？」の画面](/blog/ubuntu-complite/how_do_you_install.png)

インストーラの最後の項目で、そこまでの選択を確認できます。入力・選択した内容をよく確認した上で、「インストール」ボタンを押します。

![Ubuntuのインストール準備が完了した様子](/blog/ubuntu-complite/check_before_install.png)

しばらく待つと、Ubuntuのインストールが完了します。

![Ubuntuのインストール完了画面](/blog/ubuntu-complite/install_completed.png)

## Ubuntuでコンリテをやる
Ubuntuにはコンリテの実習で使用する多くのツールがあらかじめインストールされているので、すぐに作業を始められます。画面右下のアイコンを押すとアプリ一覧が開くので、ここから「**端末**(Terminal)」を開きます。

![「端末」のアイコン](/blog/ubuntu-complite/terminal_icon.png)

開くのは無機質なあずき色の画面ですが、ここにコマンドを入力することでPCを自由自在に操作できます。実際に、コンリテの前半の講義で扱うコマンドをいくつか実行してみましょう。

![「端末」を開いたときの初期画面](/blog/ubuntu-complite/terminal_window.png)

ネット上のコンピュータがリクエストに応答するまでに要する時間を計測する`ping`コマンドを実行します。`ping uec.ac.jp -c 4`と入力してエンターを押すと、以下のように測定結果が表示されます。

```bash
$ ping uec.ac.jp -c 4
PING uec.ac.jp (130.153.8.43) 56(84) bytes of data.
64 bytes from post-8.cc.uec.ac.jp (130.153.8.43): icmp_seq=1 ttl=62 time=4.02 ms
64 bytes from post-8.cc.uec.ac.jp (130.153.8.43): icmp_seq=2 ttl=62 time=6.48 ms
64 bytes from post-8.cc.uec.ac.jp (130.153.8.43): icmp_seq=3 ttl=62 time=4.62 ms
64 bytes from post-8.cc.uec.ac.jp (130.153.8.43): icmp_seq=4 ttl=62 time=6.01 ms

--- uec.ac.jp ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 4.024/5.283/6.481/0.997 ms
```

基本的なUNIXコマンドの使い勝手も大変良いです。例として、辞書ファイルから`science`という文字列を含む単語のみを抽出し、末尾3項目のみを表示するというコマンドの実行結果を示します。

```bash
$ grep science /usr/share/dict/words | tail -n 3
science
science's
sciences
```

コンリテで紹介されるUNIXコマンドをWindowsで使おうとすると、WSLやHyper-Vなどの仮想環境をセットアップするか、Cygwinなどのソフトを新たにインストールするなどいった準備が必要となり、少々面倒です。Linux環境であればコンリテで使用する基本的なツールがあらかじめ揃っているので、簡単に演習を始められます！

## sol(教育用Linuxサーバ)にSSH接続する
もちろん教育用Linuxサーバーへの接続も、追加でソフトウェアを導入することなく行うことができます。ターミナルで`ssh -Y x2500000@sol.cc.uec.ac.jp`(UECアカウント名は自分のものに置換)を実行し、パスワードを入力するだけで簡単に教育用サーバーにログインできます。

サーバー側のウィンドウを自分の端末で開くときには、X Windowというプロトコルに従ってウィンドウの内容が転送されます。Windowsでこれを行うにはMobaXtermなどのソフトを導入する必要がありますが、Ubuntuにはこの通信を行う機能が内蔵されているため、特殊なセットアップなしでウィンドウを開くことができます。

![コンリテで使用するウィンドウをいくつか開いた様子](/blog/ubuntu-complite/complite_window.png)

## おわりに
アドカレの割当日に大々遅刻した挙句、対象読者のよくわからない記事が錬成されてしまいました……え？これを今月もう3回やるんですか？勘弁してください

明日は[えぬぴー](https://x.com/Np27182)さんの「[M.U.G.E.Nの魅力、そして高グラフィックゲームが跋扈する時代にこのゲームでキャラ制作を始めた話、あとりさじゅう](https://note.com/np7096/n/nf40c5fab0ce8)」です。

## 参考文献

- [トラマト「簡単！VSCodeではじめる快適なSSH接続のやり方【電通大生向け】」](https://note.com/toramutton/n/n6175ca734762)
- [Laddge「VSCodeでsshでsolとかcedに繋いで開発する環境を整える」](https://laddge.net/blog/vscode_sol_ced/)

本文中で紹介した記事です。VSCodeを使用することで、OSに関わらず快適な作業環境を構築できます。当記事よりもこれらを参照した方が多分幸せになれます。

- kat0h「これで完璧！パソコンの選び方 #UEC25」(現在は非公開。[Internet Archive](https://web.archive.org/web/20241210005358/https://zenn.dev/kato_k/articles/59edee2a2e6219))

当記事はこの記事にインスパイアされています。

- [hydrogen「OSの良し悪しの話」](https://www.hydrogen1.dev/blog/2025/mma-advent-calender-day1/)

MMA Advent Calendar 2025 1日目の記事です。世界の正常性はこのようにして保たれています。

