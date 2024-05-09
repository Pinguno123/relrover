var swiperContainers = document.querySelectorAll(".swiper-slide");

swiperContainers.forEach(function(container) {
    var img = container.querySelector("img");
    var video = container.querySelector("video");

    img.addEventListener("mouseover", function() {
        container.style.transform = "scale(1.1)";
        container.style.transition = "transform 0.3s ease";
        img.style.opacity = "0";
        video.style.opacity = "1";
    });

    img.addEventListener("mouseout", function() {
        container.style.transform = "scale(1)";
        container.style.transition = "transform 0.3s ease";
        img.style.opacity = "1";
        video.style.opacity = "0";
    });

    img.addEventListener("mouseover", function() {
        video.style.opacity = "1";
    });
});