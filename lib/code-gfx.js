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
	brief : "OpenGL Shading Language",
	description : "OpenGL Shading Language"
}, {
	id : "directx-graphics--podstawy",
	title : "DirectX Graphics - Podstawy",
	brief : "Podstawowa znajomość DX Graphics(dawniej Direct3D i DirectDraw)",
	description : "Podstawowa znajomość DX Graphics(dawniej Direct3D i DirectDraw)"
}, {
	id : "hlsl",
	title : "HLSL",
	brief : "High Level Shader Language",
	description : "High Level Shader Language"
}, {
	id : "opengl--zaawansowany",
	title : "OpenGL - zaawansowany",
	brief : "Zaawansowane sztuczki i algorytmy wykorzystujące OpenGL.",
	description : "Zaawansowane sztuczki i algorytmy wykorzystujące OpenGL.",
	required: ['opengl--podstawy']
}, {
	id : "sdl",
	title : "SDL",
	brief : "biblioteka programistyczna umożliwiająca tworzenie gier oraz programów multimedialnych.",
	description : "biblioteka programistyczna ułatwiająca tworzenie gier oraz programów multimedialnych."
}, {
	id : "html5--canvas",
	title : "HTML5 - Canvas",
	brief : "Renderowanie grafiki w przeglądarce przy użyciu elementu &lt;canvas&gt; i JavaScriptu.",
	description : "Renderowanie grafiki w przeglądarce przy użyciu elementu &lt;canvas&gt; i JavaScriptu.",
	required: ['javascript--podstawy', 'html5']
}, {
	id : "texture-splatting",
	title : "Texture splatting",
	brief : "Do czego służy, kiedy warto stosować tą technikę renderowania, słabe i mocne strony.",
	description : "Do czego służy, kiedy warto stosować tą technikę renderowania, słabe i mocne strony.",
	required: ['renderowanie-terenu']
}, {
	id : "shadow-mapping",
	title : "Shadow mapping",
	brief : "Technika renderowania cieni.",
	description : "Technika renderowania cieni."
}, {
	id : "renderowanie-terenu",
	title : "Renderowanie terenu",
	brief : "Techniki renderowania terenu, heightmapa, texture splatting i inne.",
	description : "Techniki renderowania terenu, heightmapa, texture splatting i inne."
}, {
	id : "usuwanie-niewidocznych-powierzchni",
	title : "Usuwanie niewidocznych powierzchni",
	brief : "Do czego służy, znajomość zasady działania podstawowych technik(zbuffer, frustrum culling, BSP)",
	description : "Do czego służy, znajomość zasady działania podstawowych technik(zbuffer, frustrum culling, BSP)",
	required: ['geometria-klasyczna']
}, {
	id : "webgl",
	title : "WebGL",
	brief : "Renderowanie grafiki przy pomocy GPU z poziomu przeglądarki WWW.",
	description : "Renderowanie grafiki przy pomocy GPU z poziomu przeglądarki WWW.",
	required: ['javascript--zaawansowany', 'html5--canvas']
}, {
	id : "bumpmapping",
	title : "Bumpmapping",
	brief : "Efekt pozwalający wyświetlać nierówności na powierzchniach.",
	description : "Efekt pozwalający wyświetlać nierówności na powierzchniach.",
	required: ['algebra-liniowa']
}, {
	id : "opengl--podstawy",
	title : "OpenGL - Podstawy",
	brief : "Podstawy OpenGL API",
	description : "Podstawy OpenGL API"
}]);
