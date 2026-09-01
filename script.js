const chatButtons = document.querySelectorAll(
  '#start-chat, .nav-button, .card-button, .large-button'
);

chatButtons.forEach((button) => {

  button.addEventListener('click', (event) => {

    // Allow normal anchor scrolling for links that are not chat buttons.
    if (
      button.tagName === 'A' &&
      !button.classList.contains('nav-button')
    ) {
      return;
    }

    event.preventDefault();

    const chatButton = document.querySelector('.chat-window-toggle');

    if (chatButton) {
      chatButton.click();
    } else {
      console.log('Chat widget is not ready yet.');
    }

  });

});
