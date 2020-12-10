<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

  <title>ML chatbot</title>
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>
   <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.min.css'>
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
      <link rel="stylesheet" href="css/style.css">

  
</head>

<body>



<div class="chat">
  <div class="chat-title">
    <h1>Smart BOt</h1>
    <h2>i am customer support chat bot</h2>
    <figure class="avatar">
      <img src="css/bot.png"/></figure>
  </div>
  <div class="messages">
    <div class="messages-content"></div>
    <div class="suggession">
     
    </div>
  </div>
  <form class="message-box" id="mymsg" method="POST">
    <input type="text" id="MSG" name="MSG" class="message-input" placeholder="Type message..." >
   
    <i class="fas fa-microphone" id="start-record-btn"></i>
    <button type="submit" class="message-submit">Send</button>
  </form>
  <h3 class="no-browser-support" hidden>Sorry, Your Browser Doesn't Support the Web Speech API. Try Opening This Demo In Google Chrome.</h3>
</div>
<div class="bg"></div>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.concat.min.js'></script>
  <script  src="js/index.js"></script>
  
    
</body>

</html>