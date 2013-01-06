//encoding=utf-8

/**
 * @license Copyright Grzegorz Tańczyk, Gamedev.pl 2013 The code included in this
 * repository is licensed under a Attribution-NonCommercial-ShareAlike 3.0
 * license, meaning that you are free to copy, distribute, transmit and adapt
 * this work for non-commercial use, but that you must credit "Grzegorz Tańczyk"
 * and "Gamedev.pl" as the original authors of the piece, and provide a link to
 * the original source code.
 * 
 */

gamedevSkillsCategory('code-gfx', [{
	id : "glsl",
	title : "GLSL",
	description : "OpenGL Shading Language"
}, {
	id : "directx-graphics--podstawy",
	title : "DirectX Graphics - Podstawy",
	description : "Podstawowa znajomość DX Graphics(dawniej Direct3D i DirectDraw)"
}, {
	id : "hlsl",
	title : "HLSL",
	description : "High Level Shader Language"
}, {
	id : "opengl--zaawansowany",
	title : "OpenGL - zaawansowany",
	description : "Zaawansowane sztuczki i algorytmy wykorzystujące OpenGL.",
	required: ['opengl--podstawy']
}, {
	id : "sdl",
	title : "SDL",
	description : "biblioteka graficzna umożliwiająca między innymi tworzenie gier 2D",
	required: ['jezyk-c--podstawy']
}, {
	id : "html5--canvas",
	title : "HTML5 - Canvas",
	description : "Renderowanie grafiki w przeglądarce przy użyciu elementu &lt;canvas&gt; i JavaScriptu",
	required: ['javascript--podstawy', 'html5']
}, {
	id : "texture-splatting",
	title : "Texture splatting",
	description : "Do czego służy, kiedy warto stosować tą technikę renderowania, słabe i mocne strony.",
	required: ['renderowanie-terenu']
}, {
	id : "shadow-mapping",
	title : "Shadow mapping",
	description : "Technika renderowania cieni."
}, {
	id : "renderowanie-terenu",
	title : "Renderowanie terenu",
	description : "Techniki renderowania terenu, heightmapa, texture splatting i inne."
}, {
	id : "usuwanie-niewidocznych-powierzchni",
	title : "Usuwanie niewidocznych powierzchni",
	description : "Do czego służy, znajomośćzasady działania podstawowych technik(zbuffer, frustrum culling, BSP)",
	required: ['geometria-klasyczna']
}, {
	id : "webgl",
	title : "WebGL",
	description : "Renderowanie grafiki przy pomocy GPU z poziomu przeglądarki WWW.",
	required: ['javascript--zaawansowany', 'html5--canvas']
}, {
	id : "bumpmapping",
	title : "Bumpmapping",
	description : "Efekt pozwalający wyświetlać nierówności na powierzchniach.",
	required: ['algebra-liniowa']
}, {
	id : "opengl--podstawy",
	title : "OpenGL - Podstawy",
	description : "Podstawy OpenGL API"
}]);