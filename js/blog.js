var $container = $(".masonry-container");
$container.imagesLoaded(function () {
    $container.masonry({
        columnWidth: ".item",
        itemSelector: ".item"
    });
});