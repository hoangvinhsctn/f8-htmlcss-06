document.addEventListener("DOMContentLoaded", function () {
    // Lắng nghe sự kiện click vào hình ảnh play
    document
        .getElementById("playButton")
        .addEventListener("click", function () {
            // Lấy đối tượng video
            var video = document.getElementById("myVideo");

            // Ẩn hình ảnh play
            this.style.display = "none";

            // Bật video
            video.play();

            video.addEventListener("pause", function () {
                // Hiển thị lại hình ảnh play khi video dừng
                playButton.style.display = "flex";
            });

            video.addEventListener("play", function () {
                playButton.style.display = "none";
            });
        });
});
