Package.describe({
    summary: "Bootstrap Colorpicker packaged for meteor"
});

Package.on_use(function (api) {
    api.add_files('lib/boostrap-colorpicker/js/bootstrap-colorpicker.js', 'client');
	api.add_files('lib/boostrap-colorpicker/css/bootstrap-colorpicker.css', 'client');
	api.add_files('path-override.css', 'client');
});
