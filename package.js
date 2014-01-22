Package.describe({
    summary: "Bootstrap Colorpicker packaged for meteor"
});

Package.on_use(function (api) {
    api.add_files([
        "lib/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js",
        "lib/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js",
        "lib/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css",
        "lib/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css",
        "lib/bootstrap-colorpicker/dist/img/bootstrap-colorpicker/alpha.png",
        "lib/bootstrap-colorpicker/dist/img/bootstrap-colorpicker/alpha-horizontal.png",
        "lib/bootstrap-colorpicker/dist/img/bootstrap-colorpicker/hue.png",
        "lib/bootstrap-colorpicker/dist/img/bootstrap-colorpicker/hue-horizontal.png",
        "lib/bootstrap-colorpicker/dist/img/bootstrap-colorpicker/saturation.png"
    ], "client");

    //api.add_files('path-override.css', 'client');
});
