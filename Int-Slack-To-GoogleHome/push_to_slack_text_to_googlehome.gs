function doPost(e) {
  // Slackの「Outgoing WebHook」で生成したトークンを指定
  var token = "<Slack Token>"; 
  if (token != e.parameter.token) { 
    return; 
  } 

  // 投稿内容(テキスト)を取得
  var text = e.parameter.text
  text = 'Slackの新着メッセージです' + text;

  return request(text); 
}

function request(text) { 
    // ngrokのURLをスプレッドシートから取得する
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var webhooksheet = spreadsheet.getSheetByName("WebHookUrl");
    var range = webhooksheet.getRange("A1");
    var url = range.getValue();

    // google-home-notifierへPOSTデータを送信
    var urlFetchOption = { 
        'method' : 'post',     
        'contentType' : 'application/x-www-form-urlencoded', 
        'payload' : { 'text' : text}  
    }; 
    var response = UrlFetchApp.fetch(url, urlFetchOption); 
    return response; 
}