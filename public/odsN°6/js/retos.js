var videoPlayer = document.getElementById("videoPlayer");
        var iframe = document.getElementById("videoIframe");
    
        function stopVideo() {
            videoPlayer.style.display = "none";
            iframe.src = "";  
        }
    
        function playVideo(videoUrl) {
            videoPlayer.style.display = "block";
            iframe.src = videoUrl;  
         }