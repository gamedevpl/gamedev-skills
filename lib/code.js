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

gamedevSkillsCategory(
		'code',
		[
				{
					id : "net",
					title : ".NET",
					brief : "Znajomość środowiska .NET pod kątem tworzenia gier, programów użytkowych(np. edytorów) i aplikacji serwerowych.",
					description : "Znajomość środowiska .NET pod kątem tworzenia gier, programów użytkowych(np. edytorów) i aplikacji serwerowych."
				},
				{
					id : "javascript--zaawansowany",
					title : "JavaScript - Zaawansowany",
					brief : "Znajomość problemów związanych z wydajnością skryptów pisanych w JS, bezpieczeństwie i kompatybilności z różnymi silnikami JS(Rhino, V8 i inne).",
					description : "Znajomość problemów związanych z wydajnością skryptów pisanych w JS, bezpieczeństwie i kompatybilności z różnymi silnikami JS(Rhino, V8 i inne).",
					required: ['javascript--podstawy']
				},
				{
					id : "unity",
					title : "Unity",
					brief : "Umiejętność obsługi narzędzia do tworzenia gier - Unity",
					description : "Umiejętność obsługi narzędzia do tworzenia gier - Unity"
				},
				{
					id : "android",
					title : "Android",
					brief : "System operacyjny",
					description : "System operacyjny",
					required: ['java--podstawy']
				},
				{
					id : "mysql--podstawy",
					title : "MySQL - Podstawy",
					brief : "Podstawy składni",
					description : "Podstawy składni"
				},
				{
					id : "python",
					title : "Python - Podstawy",
					brief : "python język skryptowy",
					description : "python język skryptowy"
				},
				{
					id : "javascript--podstawy",
					title : "JavaScript",
					brief : "Pytania dla absolutnie początkujących, sprawdzające znajomość składni.",
					description : "Pytania dla absolutnie początkujących, sprawdzające znajomość składni."
				},
				{
					id : "c--podstawy",
					title : "C++",
					brief : "Podstawy składni, pozwalające na pisanie nieskomplikowanego kodu, korzystanie z gotowego API.",
					description : "Podstawy składni, pozwalające na pisanie nieskomplikowanego kodu, korzystanie z gotowego API."
				},
				{
					id : "java--podstawy",
					title : "Java",
					brief : "Podstawowa znajomość języka programowania, bez względu na docelową platformę(SE, EE, mobile). Tworzenie kodu w oparciu o istniejące biblioteki.",
					description : "Podstawowa znajomość języka programowania, bez względu na docelową platformę(SE, EE, mobile). Tworzenie kodu w oparciu o istniejące biblioteki."
				},
				{
					id : "c--zaawansowany",
					title : "C++ - Zaawansowany",
					brief : "Umiejętność pisania złożonego kodu w oparciu o rozwiniętą obiektowość, szablony i użycie preprocesora. Zdolność tworzenia kompletnych rozwiązań.",
					description : "Umiejętność pisania złożonego kodu w oparciu o rozwiniętą obiektowość, szablony i użycie preprocesora. Zdolność tworzenia kompletnych rozwiązań.",
					required: ['c--podstawy']
				},
				{
					id : "jezyk-c--podstawy",
					title : "Język C - Podstawy",
					brief : "Znajomość języka na poziomie pozwalającym stworzyć prosty program. Program nauczania na pierwszym roku studiów.",
					description : "Znajomość języka na poziomie pozwalającym stworzyć prosty program. Program nauczania na pierwszym roku studiów."
				},
				{
					id : "html5",
					title : "HTML5",
					brief : "Piąta edycje standardu HTML, jakie daje możliwości, kiedy warto używać.",
					description : "Piąta edycje standardu HTML, jakie daje możliwości, kiedy warto używać."
				},
				{
					id : "interprocess-communication",
					title : "Inter-process communication",
					brief : "Wymiana danych pomiędzy procesami(IPC), do czego służy, kiedy warto używać, jakie techniki są najbardziej przydatne w kontekście tworzenia gier.",
					description : "Wymiana danych pomiędzy procesami(IPC), do czego służy, kiedy warto używać, jakie techniki są najbardziej przydatne w kontekście tworzenia gier.",
					required: ['c--zaawansowany', 'java--zaawansowany']
				},
				{
					id : "java--zaawansowany",
					title : "Java - Zaawansowany",
					brief : "Dobra znajomość takich zagadnień jak Garbage Collector w kontekście wydajności, ustawienia JVM.",
					description : "Dobra znajomość takich zagadnień jak <b>Garbage Collector</b> w kontekście wydajności, ustawienia JVM. Znajomość popularnych bibliotek stosowanych do tworzenia aplikacji mobilnych, internetowych, appletów i programów desktopowych."
				},
				{
					id : "xsltxpath",
					title : "XSLT/XPath",
					brief : "Przetwarzanie XML, na czym polega, kiedy się przydaje, popularne implementacje.",
					description : "Przetwarzanie XML, na czym polega, kiedy się przydaje, popularne implementacje."
				}, {
					id : "qt-podstawy",
					title : "Qt (podstawy)",
					brief : "Umiejętność pisania prostych aplikacji okienkowych, wykorzystywanie bibliotek Qt oraz narzędź takich jak QtDesigner oraz Qt Linguist",
					description : "Umiejętność pisania prostych aplikacji okienkowych, wykorzystywanie bibliotek Qt oraz narzędź takich jak QtDesigner oraz Qt Linguist"
				}, {
					id : "csharp--podstawy",
					title : "CSharp - podstawy",
					brief : "Znajomość języka na poziomie pozwalającym stworzyć prosty program.",
					description : "Znajomość języka na poziomie pozwalającym stworzyć prosty program."
				}, {
					id : "actionscript--podstawy",
					title : "ActionScript - Podstawy",
					brief : "Obiektowy język programowania, używany w Adobe Flash do sterowania animacjami oraz w Adobe Flex do tworzenia Rich Internet Application.",
					description : "Obiektowy język programowania, używany w Adobe Flash do sterowania animacjami oraz w Adobe Flex do tworzenia Rich Internet Application."
				}, {
					id : "jezyk-autoit--podstawy",
					title : "Język AutoIT - podstawy",
					brief : "Podstawowa znajomość języka AutoIT",
					description : "Podstawowa znajomość języka AutoIT"
				}, {
					id : "jezyk-autoit--srednio-zaawansowany",
					title : "Język AutoIT - średnio zaawansowany",
					brief : "Średnio zaawansowana znajomość języka AutoIT",
					description : "Średnio zaawansowana znajomość języka AutoIT",
					required: ['jezyk-autoit--podstawy']
				}, {
					id : "jezyk-autoit--zaawansowany",
					title : "Język AutoIT - zaawansowany",
					brief : "Zaawansowana znajomość języka AutoIT",
					description : "Zaawansowana znajomość języka AutoIT",
					required: ['jezyk-autoit--srednio-zaawansowany']
				}, {
					id : "jezyk-autoit--ekspert",
					title : "Język AutoIT - ekspert",
					brief : "Perfekcyjna znajomość języka AutoIT",
					description : "Perfekcyjna znajomość języka AutoIT",
					required: ['jezyk-autoit--zaawansowany']
				}, {
					id : "go--podstawy",
					title : "Go - Podstawy",
					brief : "The Google Programming Language",
					description : "The Google Programming Language"
				}, {
					id : "sql",
					title : "SQL",
					brief : "Strukturalny język zapytań",
					description : "Strukturalny język zapytań"
				}]);