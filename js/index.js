var quots = ['“Be yourself; everyone else is already taken.”','“Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.”' ,'“So many books, so little time.”' ,'“A room without books is like a body without a soul.”','“You only live once, but if you do it right, once is enough.”','“Be the change that you wish to see in the world.”','“A friend is someone who knows all about you and still loves you.”','“Always forgive your enemies; nothing annoys them so much.”'];
var writers = ["― Oscar Wilde","― Marilyn Monroe","― Frank Zappa","― Marcus Tullius Cicero","― Mae West","― Mahatma Gandhi"]
function getQuot(){
   
        var quotNumber = Math.floor(Math.random() * quots.length);
        
   var quot = quots[quotNumber];

   var writerNumber = Math.floor(Math.random() * writers.length);
        
   var writerr = writers[writerNumber];
   
   
   document.getElementById('quotName').innerHTML=quot;
       
   
   document.getElementById('writerName').innerHTML=writerr;
   
   
    
    
}
getQuot();
