function startTyping() {
  const output = document.getElementById('cmd-output');
  const welcomeMessage = 'Welcome to cuk.lol\n';
  
  let index = 0;

  const intervalId = setInterval(() => {
    output.textContent += welcomeMessage[index];
    index++;
    
    if (index === welcomeMessage.length) {
      clearInterval(intervalId);

     
      setTimeout(() => {
        window.location.href = '/homepage.html';  
      }, 1000); 
    }
  }, 100); 
}
