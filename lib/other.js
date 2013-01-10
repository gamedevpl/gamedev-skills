//encoding=utf-8

/**
 * @license Copyright Grzegorz Tańczyk, Gamedev.pl 2013 The code included in
 *          this repository is licensed under a
 *          Attribution-NonCommercial-ShareAlike 3.0 license, meaning that you
 *          are free to copy, distribute, transmit and adapt this work for
 *          non-commercial use, but that you must credit "Grzegorz Tańczyk" and
 *          "Gamedev.pl" as the original authors of the piece, and provide a
 *          link to the original source code.
 * 
 */

gamedevSkillsCategory('other', [{
	id : "jezyk-angielski--podstawy",
	title : "Język angielski - Podstawy",
	brief : "Podstawowa znajomość języka angielskiego, potrzebna do zrozumienia np. dokumentacji.",
	description : "Podstawowa znajomość języka angielskiego, potrzebna do zrozumienia np. dokumentacji."
}, {
	id : "jezyk-angielski--sredniozaawansowany",
	title : "Język angielski - Średniozaawansowany",
	brief : "Znajomość języka pozwalająca na dokładne zrozumienie tekstu.",
	description : "Znajomość języka pozwalająca na dokładne zrozumienie tekstu.",
	required: ['jezyk-angielski--podstawy']
}, {
	id : "jezyk-angielski--zaawansowany",
	title : "Język angielski - Zaawansowany",
	brief : "Znajomość języka umożliwiająca swobodną komunikację w mowie i piśmie.",
	description : "Znajomość języka umożliwiająca swobodną komunikację w mowie i piśmie.",
	required: ['jezyk-angielski--sredniozaawansowany']
}, {
	id : "mercurial",
	title : "Mercurial",
	brief : "Postługiwanie się rozproszonym systemem wersji Mercurial (Hg).",
	description : "Postługiwanie się rozproszonym systemem wersji Mercurial (Hg)."
}, {
	id : "story-designer",
	title : "Story Designer",
	brief : "Osoba zajmująca się projektowaniem założeń gry, tworzeniem świata, oraz scenariusza",
	description : "Osoba zajmująca się projektowaniem założeń gry, tworzeniem świata, oraz scenariusza"
}, {
	id : "subversion",
	title : "Subversion",
	brief : "Znajomość podstawowych komend, ogólnie przyjęte praktyki korzystania z SVN",
	description : "Znajomość podstawowych komend, ogólnie przyjęte praktyki korzystania z SVN"
}, {
	id : "git",
	title : "Git",
	brief : "Postługiwanie się rozproszonym systemem wersji Git.",
	description : "Postługiwanie się rozproszonym systemem wersji Git."
}, {
	id : "testowanie-oprogramowania",
	title : "Testowanie Oprogramowania",
	brief : "Wykonywanie testów manualnych, pisanie scenariuszy testowych, przeprowadzanie testów funkcjonalnych.",
	description : "Wykonywanie testów manualnych, pisanie scenariuszy testowych, przeprowadzanie testów funkcjonalnych."
}]);