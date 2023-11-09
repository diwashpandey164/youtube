document.addEventListener("DOMContentLoaded", function() {
  const numberInput = document.querySelector('input[type="number"]');
  const linkInput = document.querySelector('input[type="text"]');
  const resultDiv = document.querySelector('.result');

  numberInput.addEventListener('input', updateResult);

  function updateResult() {
    const count = parseInt(numberInput.value);
    const link = linkInput.value.trim();

    if (count && link) {
      resultDiv.innerHTML = ''; // Clear previous content

      for (let i = 0; i < count; i++) {
        const iframeElement = document.createElement('iframe');
        iframeElement.setAttribute('width', '560');
        iframeElement.setAttribute('height', '315');
        iframeElement.setAttribute('src', getYouTubeEmbedUrl(link)); // Enable autoplay for all videos
        iframeElement.setAttribute('frameborder', '0');
        iframeElement.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
        iframeElement.setAttribute('allowfullscreen', '');

        resultDiv.appendChild(iframeElement);
        resultDiv.appendChild(document.createElement('br')); // Add a line break
      }
    } else {
      resultDiv.innerHTML = 'Please enter a valid number and link.';
    }
  }

  function getYouTubeEmbedUrl(link) {
    const videoId = link.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|y\/|\/yt\/|1\/\w{10,}\/|unconfirmed\-.+\/|.*[\/\?&]vi?=?)([^"&\?\/\s]{11})/i);

    if (videoId && videoId[1]) {
      return `https://www.youtube.com/embed/${videoId[1]}?autoplay=1`;
    } else {
      return '';
    }
  }
  function getYouTubeEmbedUrl(link) {
    const videoId = link.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|y\/|\/yt\/|1\/\w{10,}\/|unconfirmed\-.+\/|.*[\/\?&]vi?=?)([^"&\?\/\s]{11})/i);
  
    if (videoId && videoId[1]) {
      return `https://www.youtube.com/embed/${videoId[1]}?autoplay=1&mute=1`;
    } else {
      return '';
    }
  }
  
});
