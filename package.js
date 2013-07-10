Package.describe({
    summary: "Bootstrap Colorpicker packaged for meteor"
});

Package.on_use(function (api) {
    api.add_files([
        "lib/boostrap-colorpicker/js/bootstrap-colorpicker.js",
        "lib/boostrap-colorpicker/css/bootstrap-colorpicker.css",
        "lib/boostrap-colorpicker/img/bootstrap-colorpicker/alpha.png",
        "lib/boostrap-colorpicker/img/bootstrap-colorpicker/hue.png",
        "lib/boostrap-colorpicker/img/bootstrap-colorpicker/saturation.png"
    ], "client");

    api.add_files('path-override.css', 'client');
});
