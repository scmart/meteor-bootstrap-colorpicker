Package.describe({
    summary: "Bootstrap Colorpicker packaged for meteor"
});

Package.on_use(function (api) {
    api.add_files('lib/bootstrap-colorpicker/js/bootstrap-colorpicker.js', 'client');
	api.add_files('lib/bootstrap-colorpicker/css/bootstrap-colorpicker.css', 'client');
	api.add_files('path-override.css', 'client');
});
