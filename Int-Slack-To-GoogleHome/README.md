# ScriptTitle：Int-Slack-To-GoogleHome

## 説明
SlackからのPOSTデータをngrokで生成したURLへPushする。

なお、ngrokのURLはスプレッドシートのシート「WebHookUrl」のセルA1に記載されているものとする。

## 処理
1. SlackからのPOSTデータを受け取る
2. シート「WebHookUrl」のセルA1に記載されているngrokのURLへPOSTデータをPushする

## 使用方法
下記ブログを参照

- [Slack の通知を検知して 投稿内容をGoogle Home に喋らせる](https://chibinfra-techblog.com/slack-to-google-home-mini-integration-1/)