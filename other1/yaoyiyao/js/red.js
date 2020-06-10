$(document).ready(function() {
    if (window.DeviceMotionEvent) {
        var speed = 25;
        var audio = document.getElementById("shakemusic");
        var openAudio = document.getElementById("openmusic");
        var x = t = z = lastX = lastY = lastZ = 0;
        window.addEventListener('devicemotion',
            function() {
                var acceleration = event.accelerationIncludingGravity;
                x = acceleration.x;
                y = acceleration.y;
                if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
                    // 音乐
                    audio.play();
                    $('.red-ss').addClass('wobble')
                    setTimeout(function() {
                        openAudio.play();
                        audio.pause();
                        $('.red-tc').css('display', 'block');
                    }, 1000);
                };
                lastX = x;
                lastY = y;
            }, false);
    };
    $()
});