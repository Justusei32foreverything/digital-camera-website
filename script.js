document.getElementById('clickButton').addEventListener('click', function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const video = document.createElement('video');
    video.width = 640;
    video.height = 480;

    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
            video.play();

            video.addEventListener('play', () => {
                setInterval(() => {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                }, 1000 / 30);  // Capture at 30 fps
            });
        });
});
