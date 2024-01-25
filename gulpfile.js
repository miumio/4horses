import gulp from "gulp";
import webp from "gulp-webp";
import del from "del";
import imagemin from "gulp-imagemin";
import pngQuant from "imagemin-pngquant";
import mozJpeg from "imagemin-mozjpeg";

const root = "";

const createWebp = () => {
	return gulp
		.src("assets/images/**/*.{png,jpg}")
		.pipe(webp({ quality: 90 }))
		.pipe(gulp.dest(`assets/images/${root}`));
};

const cleanImages = () => del("dist/images/");
const copyImages = () =>
	gulp
		.src("public/images/**/*.{png,jpg,jpeg,webp}", { base: "public" })
		.pipe(gulp.dest("dist/"));

const optimizeJpg = () =>
	gulp
		.src("assets/images/**/*.{jpg,jpeg}")
		.pipe(imagemin([mozJpeg({ quality: 55, progressive: true })]))
		.pipe(gulp.dest(`assets/images/${root}`));

const optimizePng = () =>
	gulp
		.src("assets/images/**/*.png")
		.pipe(
			imagemin([
				pngQuant({
					speed: 1,
					strip: true,
					dithering: 1,
					quality: [0.5, 0.6],
				}),
			])
		)
		.pipe(gulp.dest(`assets/images/${root}`));

const optimizeImages = gulp.series(
	cleanImages,
	copyImages,
	optimizePng,
	optimizeJpg,
);

export { createWebp, optimizeImages };
