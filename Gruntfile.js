module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		component: {
			build: {
				options: {
					args: {
						out: 'dist',
						name: '<%= pkg.name %>',
						//"no-require":true,
						standalone: 'shp'
					}
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-component');
	grunt.registerTask('default', ['component']);
};
