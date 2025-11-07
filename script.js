// Language switching functionality
let currentLanguage = 'pl';

// Translations object
const translations = {
    pl: {
        // Navigation
        'nav.home': 'Strona główna',
        'nav.italy': 'Włochy',
        'nav.greece': 'Grecja',
        'nav.spain': 'Hiszpania',
        'nav.about': 'O nas',
        'nav.contact': 'Kontakt',
        'nav.history': 'Moja historia',
        
        // Header
        'header.tag': '🇵🇱 Podróże z Polski',
        'header.phone': '📞 Masz pytania?',
        'header.phone.link': 'Napisz do nas',
        'logo.main': 'Podróże z Polski',
        'logo.sub': 'Sprawdzone kierunki i ceny',
        
        // Footer additional
        'footer.stats.title': 'Ponad 50+ sprawdzonych kierunków',
        'footer.stats.readers': '1000+ zadowolonych czytelników',
        'footer.stats.updated': 'Aktualizowane co tydzień',
        'footer.tools.skyscanner': 'porównywarka lotów z Polski',
        'footer.tools.booking': 'rezerwacja hoteli i apartamentów',
        'footer.tools.tripadvisor': 'opinie i oceny miejsc',
        'footer.tools.kayak': 'wyszukiwarka lotów i hoteli',
        'footer.tools.getyourguide': 'wycieczki i atrakcje',
        'footer.tools.airbnb': 'unikalne miejsca noclegowe',
        'footer.destinations.title': 'Popularne kierunki',
        'footer.destinations.italy': 'Włochy - Rzym, Wenecja, Florencja',
        'footer.destinations.greece': 'Grecja - Santorini, Ateny, Kreta',
        'footer.destinations.spain': 'Hiszpania - Barcelona, Madryt, Sewilla',
        'footer.destinations.all': 'Wszystkie kierunki →',
        'footer.author': 'O autorze bloga',
        'footer.follow': 'Śledź nas:',
        'footer.disclaimer': 'Informacje o cenach lotów i hoteli są orientacyjne i mogą się zmieniać. Zawsze sprawdź aktualne ceny przed rezerwacją',
        
        // History page
        'history.title': 'Moja historia',
        'history.intro': 'Wszystko zaczęło się kilka lat temu, kiedy po raz pierwszy wylądowałem w Rzymie. To był mój pierwszy samodzielny wyjazd za granicę, i choć byłem pełen obaw, szybko okazało się, że podróże to coś więcej niż tylko zwiedzanie - to sposób na życie.',
        'history.timeline.2018.title': 'Pierwsza podróż',
        'history.timeline.2018.text': 'Rzym był początkiem. Pamiętam, jak stałem przed Koloseum i myślałem: "To jest to. Chcę zobaczyć więcej." Wtedy jeszcze nie wiedziałem, że ta jedna podróż zmieni całe moje życie. Spędziłem tam 5 dni, zwiedzając każdy zakątek, próbując lokalnego jedzenia i rozmawiając z miejscowymi. To właśnie wtedy zrozumiałem, że podróże to nie tylko zdjęcia - to doświadczenia, które kształtują nas jako ludzi.',
        'history.timeline.2019.title': 'Rozszerzanie horyzontów',
        'history.timeline.2019.text': 'W następnym roku postanowiłem, że będę podróżować regularnie. Grecja, Hiszpania, Portugalia, Chorwacja - każda podróż była inna, każda uczyła mnie czegoś nowego. Zaczynałem zauważać, że z Polski mamy naprawdę świetne połączenia lotnicze, a ceny nie są tak wysokie, jak myślałem. Wtedy też zacząłem robić notatki - ceny lotów, hotele, które polecam, miejsca, które warto zobaczyć.',
        'history.timeline.2020.title': 'Pandemia i refleksja',
        'history.timeline.2020.text': 'Kiedy nadeszła pandemia, podróże na chwilę się zatrzymały. Ale to właśnie wtedy zrozumiałem, jak bardzo są dla mnie ważne. Zacząłem przeglądać zdjęcia, czytać notatki, planować przyszłe wyjazdy. I wtedy pojawił się pomysł - dlaczego nie podzielić się tym doświadczeniem z innymi? Wiele osób myśli, że podróże z Polski są drogie lub skomplikowane, a ja wiedziałem, że to nieprawda.',
        'history.timeline.2022.title': 'Powrót na szlak',
        'history.timeline.2022.text': 'Gdy podróże znów stały się możliwe, wróciłem z jeszcze większą pasją. Tym razem nie tylko zwiedzałem, ale też dokumentowałem wszystko - sprawdzałem aktualne ceny, testowałem różne hotele, notowałem praktyczne informacje. Zauważyłem, że brakuje miejsca, gdzie znajdę konkretne, sprawdzone informacje o podróżach z Polski. Większość blogów pisze o dalekich podróżach, a mało kto skupia się na kierunkach, które są naprawdę dostępne.',
        'history.timeline.2023.title': 'Narodziny bloga',
        'history.timeline.2023.text': 'Po kilku latach podróży i zbierania doświadczeń, postanowiłem stworzyć ten blog. Nie chcę pisać o miejscach, w których nie byłem, ani polecać hoteli, których nie sprawdziłem. Każdy kraj, który tu opisuję, to miejsce, które odwiedziłem osobiście. Każda cena, którą podaję, to cena, którą rzeczywiście widziałem. Każdy hotel, który polecam, to miejsce, w którym spędziłem noc. Dziś, po odwiedzeniu ponad 30 krajów i niezliczonych miast, wciąż kocham odkrywać nowe miejsca. Ale równie ważne jest dla mnie dzielenie się tym doświadczeniem z Tobą. Bo wierzę, że każdy zasługuje na wspaniałe wakacje, niezależnie od budżetu.',
        'history.stats.title': 'Liczby, które mówią same za siebie',
        'history.stats.countries': 'Odwiedzonych krajów',
        'history.stats.nights': 'Nocy w hotelach',
        'history.stats.flights': 'Przelotów',
        'history.stats.photos': 'Zdjęć i wspomnień',
        'history.mission.title': 'Moja misja',
        'history.mission.text1': 'Chcę pokazać, że podróże z Polski są dostępne dla każdego. Nie musisz wydawać fortuny, żeby zobaczyć piękne miejsca. Nie musisz mieć tygodni urlopu, żeby przeżyć niezapomnianą przygodę. Wystarczy trochę planowania, odrobina odwagi i chęć odkrywania.',
        'history.mission.text2': 'Ten blog to moja historia, ale też Twój przewodnik. Mam nadzieję, że znajdziesz tu inspirację i praktyczne informacje, które pomogą Ci zaplanować idealne wakacje. Bo podróże to nie luksus - to sposób na życie.',
        
        // Home page
        'hero.title': 'Ranking 3 krajów, które warto odwiedzić z Polski',
        'hero.subtitle': 'Sprawdź, gdzie warto spędzić wakacje - od cen lotów po najlepsze hotele i atrakcje',
        'intro.text': 'Często zastanawiasz się, gdzie polecieć na wakacje? Mieszkając w Polsce, mamy naprawdę sporo opcji. Po kilku latach podróży i testowaniu różnych kierunków, przygotowałem ranking trzech krajów, które moim zdaniem są najlepszym wyborem. Nie chodzi tylko o cenę - liczy się też to, co zobaczysz, gdzie się zatrzymasz i jakie wspomnienia przywieziesz.',
        'countries.title': 'Top 3 kierunki podróży',
        'italy.preview': 'Kraj, który nigdy nie przestaje zachwycać. Od starożytnego Rzymu po romantyczną Wenecję - każdy znajdzie coś dla siebie.',
        'greece.preview': 'Białe domki na klifach, niekończące się plaże i historia na każdym kroku. Grecja to coś więcej niż tylko wakacje.',
        'spain.preview': 'Słońce, tapas, architektura Gaudiego i energia, która nie pozwala się nudzić. Barcelona i Madryt czekają.',
        'read.more': 'Czytaj więcej →',
        'why.title': 'Dlaczego warto podróżować?',
        'why.feature1.title': 'Łatwy dostęp',
        'why.feature1.text': 'Z Polski mamy bezpośrednie loty do większości europejskich stolic. Nie musisz się przesiadać ani tracić czasu na długie podróże.',
        'why.feature2.title': 'Przystępne ceny',
        'why.feature2.text': 'Linie lotnicze jak Ryanair, Wizz Air czy LOT oferują regularne promocje. Często znajdziesz loty za mniej niż 500 złotych w obie strony.',
        'why.feature3.title': 'Różnorodność',
        'why.feature3.text': 'W ciągu kilku godzin możesz znaleźć się w zupełnie innym klimacie, kulturze i krajobrazie. To właśnie magia Europy.',
        
        // Footer
        'footer.about': 'O blogu',
        'footer.about.text': 'Praktyczne porady i rankingi najlepszych kierunków podróży z Polski. Sprawdzamy ceny, hotele i atrakcje, żebyś mógł zaplanować idealne wakacje.',
        'footer.links': 'Przydatne linki',
        'footer.contact': 'Kontakt',
        'footer.contact.link': 'Napisz do nas',
        'footer.rights': 'Wszelkie prawa zastrzeżone.',
        
        // Breadcrumb
        'breadcrumb.home': 'Strona główna',
        'breadcrumb.italy': 'Włochy',
        'breadcrumb.greece': 'Grecja',
        'breadcrumb.spain': 'Hiszpania',
        'back.button': '← Powrót do strony głównej',
        
        // Italy page
        'italy.title': 'Włochy - Kraj, który nigdy nie przestaje zachwycać',
        'italy.meta.flight': 'Lot: ~2h 30min',
        'italy.meta.price': 'Cena: od 400 PLN',
        'italy.meta.best': 'Najlepszy czas: kwiecień-czerwiec, wrzesień-październik',
        'italy.intro': 'Włochy to mój absolutny faworyt wśród kierunków z Polski. Nie chodzi tylko o pizzę i makaron - choć przyznaję, że to też ma znaczenie. To kraj, gdzie historia spotyka się z nowoczesnością, gdzie każdy zakątek ma swoją opowieść, a jedzenie to nie tylko posiłek, ale cała kultura.',
        'italy.flights.title': 'Loty z Polski do Włoch',
        'italy.flights.text': 'Z Warszawy, Krakowa czy Gdańska masz bezpośrednie połączenia do Rzymu, Mediolanu, Wenecji i Neapolu. Linie lotnicze jak Ryanair, Wizz Air, LOT i Alitalia oferują regularne loty. Ceny zaczynają się od około 400 złotych w obie strony, ale jeśli złapiesz promocję (a te zdarzają się często), możesz polecieć nawet za 250-300 złotych.',
        'italy.flights.tip': 'Moja rada? Sprawdzaj ceny na Skyscanner i Kayak - czasem różnica między tymi samymi datami może być naprawdę spora. Lot trwa około 2,5 godziny, więc to naprawdę szybka podróż.',
        'italy.places.title': 'Gdzie warto pojechać?',
        'italy.places.rome.title': 'Rzym - Wieczne Miasto',
        'italy.places.rome.text': 'Rzym to miejsce, które trzeba zobaczyć przynajmniej raz w życiu. Koloseum, Forum Romanum, Fontanna di Trevi - to wszystko miejsca, które znasz z filmów, ale zobaczenie ich na żywo to zupełnie inne doświadczenie. Spacer po starożytnych uliczkach, kawa na Piazza Navona, kolacja w małej trattorii gdzieś w Trastevere - to właśnie jest Rzym.',
        'italy.places.rome.tip': 'Jeśli planujesz zwiedzać muzea (a warto!), kup bilety online z wyprzedzeniem. Kolejki do Watykanu czy Koloseum potrafią być naprawdę długie. Sprawdź oferty na GetYourGuide - często mają lepsze ceny niż w kasach.',
        'italy.places.venice.title': 'Wenecja - Miasto na wodzie',
        'italy.places.venice.text': 'Wenecja to jedno z tych miejsc, które albo kochasz, albo... no właśnie, chyba nie ma drugiej opcji. To miasto jest po prostu magiczne. Spacer wąskimi uliczkami, przejażdżka gondolą (tak, to turystyczne, ale warto), kawa na Placu Św. Marka o wschodzie słońca - to są momenty, które zapamiętasz na zawsze.',
        'italy.places.venice.tip': 'Uwaga na ceny - Wenecja potrafi być droga, zwłaszcza w sezonie. Jeśli chcesz zaoszczędzić, rozważ nocleg na Mestre (dzielnica na lądzie) i dojazd pociągiem. To tylko 10 minut, a różnica w cenie może być znacząca.',
        'italy.places.florence.title': 'Florencja - Perła Toskanii',
        'italy.places.florence.text': 'Florencja to miasto sztuki. Galeria Uffizi, katedra Santa Maria del Fiore, most Ponte Vecchio - to wszystko miejsca, które każdy miłośnik kultury powinien zobaczyć. Ale Florencja to też świetne jedzenie, wino i atmosfera, która sprawia, że chcesz zostać dłużej.',
        'italy.hotels.title': 'Gdzie się zatrzymać?',
        'italy.hotels.intro': 'Wybór hotelu we Włoszech zależy od budżetu i tego, czego szukasz. Oto moje rekomendacje:',
        'italy.hotels.budget.title': 'Ekonomiczne opcje (150-300 PLN/noc)',
        'italy.hotels.budget.text': 'W Rzymie polecam sprawdzić hotele w okolicach stacji Termini - są tanie, a do centrum masz tylko kilka przystanków metrem. W Wenecji, jak wspomniałem, Mestre to dobry wybór. Sprawdź oferty na Booking.com - często mają świetne promocje.',
        'italy.hotels.mid.title': 'Średnia półka (300-600 PLN/noc)',
        'italy.hotels.mid.text': 'W tej kategorii znajdziesz hotele z dobrym standardem, często w centrum miasta. W Rzymie warto rozważyć okolice Trastevere - to dzielnica z charakterem, pełna restauracji i barów, a jednocześnie blisko głównych atrakcji.',
        'italy.hotels.luxury.title': 'Luksus (600+ PLN/noc)',
        'italy.hotels.luxury.text': 'Jeśli chcesz się rozpieszczać, Włochy oferują naprawdę wyjątkowe miejsca. Od pałaców zamienionych w hotele po nowoczesne butikowe miejsca z widokiem na zabytki. Sprawdź sekcję luksusową Booking.com lub Airbnb dla apartamentów z charakterem.',
        'italy.food.title': 'Jedzenie - to trzeba spróbować',
        'italy.food.text': 'Nie mogę nie wspomnieć o jedzeniu. We Włoszech nie chodzi tylko o pizzę i makaron - każdy region ma swoje specjalności. W Rzymie spróbuj carbonary (prawdziwej, nie tej z śmietaną!), w Wenecji - risotto nero, a we Florencji - bistecca alla fiorentina. I oczywiście gelato - najlepsze lody na świecie.',
        'italy.food.tip': 'Moja rada: unikaj restauracji tuż przy głównych atrakcjach turystycznych. Zejdź kilka ulic dalej, znajdź miejsce, gdzie jedzą miejscowi - tam dostaniesz najlepsze jedzenie w rozsądnych cenach. Sprawdź opinie na TripAdvisor przed wyborem.',
        'italy.practical.title': 'Praktyczne informacje',
        'italy.practical.currency': 'Waluta: Euro (EUR)',
        'italy.practical.language': 'Język: Włoski (ale w turystycznych miejscach bez problemu porozumiesz się po angielsku)',
        'italy.practical.transport': 'Transport: Włochy mają świetną sieć kolejową. Pociągi są szybkie, wygodne i relatywnie tanie. Sprawdź Trenitalia dla połączeń krajowych.',
        'italy.practical.besttime': 'Najlepszy czas: Kwiecień-czerwiec i wrzesień-październik - pogoda jest idealna, a tłumy mniejsze niż w szczycie sezonu.',
        
        // Greece page
        'greece.title': 'Grecja - Białe domki, błękitne morze i historia na każdym kroku',
        'greece.meta.flight': 'Lot: ~2h 45min',
        'greece.meta.price': 'Cena: od 350 PLN',
        'greece.meta.best': 'Najlepszy czas: maj-czerwiec, wrzesień-październik',
        'greece.intro': 'Grecja to jeden z tych krajów, które widziałeś na zdjęciach setki razy, ale dopiero gdy tam jesteś, rozumiesz, dlaczego wszyscy o niej mówią. Białe domki na klifach, niekończące się plaże, krystalicznie czysta woda i ta niepowtarzalna atmosfera - to wszystko sprawia, że Grecja jest wyjątkowa.',
        'greece.flights.title': 'Loty z Polski do Grecji',
        'greece.flights.text': 'Z Polski masz bezpośrednie loty do Aten, Salonik i na niektóre wyspy (w sezonie). Ryanair, Wizz Air i Aegean Airlines oferują regularne połączenia. Ceny zaczynają się od około 350 złotych w obie strony, a w promocjach (które zdarzają się często, zwłaszcza poza sezonem) możesz znaleźć loty nawet za 250 złotych.',
        'greece.flights.tip': 'Lot trwa około 2 godzin 45 minut. Jeśli lecisz do Aten, możesz stamtąd łatwo dostać się na wyspy - promy i loty krajowe są dobrze zorganizowane. Sprawdź ceny na Skyscanner - często znajdziesz tam najlepsze oferty.',
        'greece.places.title': 'Gdzie warto pojechać?',
        'greece.places.santorini.title': 'Santorini - Wyspa z pocztówki',
        'greece.places.santorini.text': 'Santorini to prawdopodobnie najbardziej rozpoznawalna grecka wyspa. Białe domki z niebieskimi kopułami, zachody słońca, które zapierają dech w piersiach, i wina, które smakują jak nic innego. Oia to miejsce, które widziałeś na Instagramie setki razy - i rzeczywiście jest tak piękne, jak wygląda na zdjęciach.',
        'greece.places.santorini.tip': 'Uwaga: Santorini potrafi być drogie, zwłaszcza w szczycie sezonu (lipiec-sierpień). Jeśli chcesz zaoszczędzić, rozważ wyjazd w maju, czerwcu lub wrześniu - pogoda jest wciąż świetna, a ceny znacznie niższe. Sprawdź oferty na Booking.com z wyprzedzeniem.',
        'greece.places.athens.title': 'Ateny - Miasto bogów',
        'greece.places.athens.text': 'Ateny to miasto, które każdy powinien zobaczyć przynajmniej raz. Akropol, Partenon, Muzeum Akropolu - to miejsca, które znasz z lekcji historii, ale zobaczenie ich na żywo to zupełnie inne doświadczenie. Ale Ateny to nie tylko zabytki - to też świetne jedzenie, tawerny, gdzie możesz spędzić wieczór, i ta niepowtarzalna grecka gościnność.',
        'greece.places.athens.tip': 'Spędź w Atenach przynajmniej 2-3 dni. To wystarczy, żeby zobaczyć główne atrakcje, ale jeśli chcesz poczuć atmosferę miasta, zostań dłużej. Plaka to dzielnica, gdzie znajdziesz najlepsze restauracje i sklepy z pamiątkami.',
        'greece.places.crete.title': 'Kreta - Największa z wysp',
        'greece.places.crete.text': 'Kreta to wyspa, która ma wszystko - piękne plaże, góry, starożytne ruiny i świetne jedzenie. Chania to jedno z najpiękniejszych miast, jakie widziałem - wenecki port, wąskie uliczki, kolorowe domy. A plaże? Elafonisi z różowym piaskiem to coś, co trzeba zobaczyć.',
        'greece.hotels.title': 'Gdzie się zatrzymać?',
        'greece.hotels.intro': 'Grecja oferuje szeroki wybór zakwaterowania - od prostych pokoi w rodzinnych pensjonatach po luksusowe resorty z widokiem na morze.',
        'greece.hotels.budget.title': 'Ekonomiczne opcje (120-250 PLN/noc)',
        'greece.hotels.budget.text': 'Na większości wysp znajdziesz małe pensjonaty i pokoje do wynajęcia, które oferują świetny stosunek jakości do ceny. W Atenach sprawdź okolice Plaki - są tanie opcje, a jesteś w centrum wszystkiego. Booking.com ma duży wybór w tej kategorii.',
        'greece.hotels.mid.title': 'Średnia półka (250-500 PLN/noc)',
        'greece.hotels.mid.text': 'W tej kategorii znajdziesz hotele z basenem, często z widokiem na morze. Na Santorini warto rozważyć Fira lub Imerovigli zamiast Oia - są tańsze, a widoki wciąż spektakularne.',
        'greece.hotels.luxury.title': 'Luksus (500+ PLN/noc)',
        'greece.hotels.luxury.text': 'Grecja ma naprawdę wyjątkowe luksusowe miejsca - od jaskiń zamienionych w hotele na Santorini po resorty z prywatnymi plażami. Jeśli chcesz się rozpieszczać, sprawdź oferty na Booking.com lub Airbnb dla apartamentów z charakterem.',
        'greece.food.title': 'Jedzenie - smaki Grecji',
        'greece.food.text': 'Greckie jedzenie to coś więcej niż tylko gyros i sałatka grecka. Moussaka, pastitsio, souvlaki, świeże owoce morza - lista jest długa. I oczywiście tzatziki, które smakuje zupełnie inaczej niż to, co jesz w Polsce.',
        'greece.food.tip': 'Moja rada: jedz tam, gdzie jedzą miejscowi. Małe tawerny z dala od głównych ulic turystycznych oferują najlepsze jedzenie w najlepszych cenach. Sprawdź opinie na TripAdvisor, ale nie bój się eksperymentować.',
        'greece.practical.title': 'Praktyczne informacje',
        'greece.practical.currency': 'Waluta: Euro (EUR)',
        'greece.practical.language': 'Język: Grecki (ale w turystycznych miejscach bez problemu porozumiesz się po angielsku)',
        'greece.practical.transport': 'Transport: Na wyspach najlepiej wynająć samochód lub skuter. W Atenach metro jest wygodne i tanie. Sprawdź RentalCars dla wynajmu auta.',
        'greece.practical.besttime': 'Najlepszy czas: Maj-czerwiec i wrzesień-październik - pogoda jest idealna, a tłumy mniejsze. Lipiec-sierpień to szczyt sezonu - jest gorąco i drogo.',
        
        // Spain page
        'spain.title': 'Hiszpania - Słońce, tapas i energia, która nie pozwala się nudzić',
        'spain.meta.flight': 'Lot: ~2h 50min',
        'spain.meta.price': 'Cena: od 380 PLN',
        'spain.meta.best': 'Najlepszy czas: kwiecień-czerwiec, wrzesień-październik',
        'spain.intro': 'Hiszpania to kraj, który ma wszystko - od plaż po góry, od starożytnych zabytków po nowoczesną architekturę, od spokojnych wiosek po tętniące życiem miasta. Barcelona i Madryt to dwa zupełnie różne światy, ale oba są warte odwiedzenia. A jeśli dodasz do tego jedzenie, które jest po prostu fenomenalne, i tę niepowtarzalną hiszpańską atmosferę, otrzymujesz przepis na idealne wakacje.',
        'spain.flights.title': 'Loty z Polski do Hiszpanii',
        'spain.flights.text': 'Z Polski masz bezpośrednie loty do Barcelony, Madrytu, Walencji i Malagi. Ryanair, Wizz Air, Vueling i LOT oferują regularne połączenia. Ceny zaczynają się od około 380 złotych w obie strony, ale w promocjach (które zdarzają się często) możesz znaleźć loty nawet za 300 złotych.',
        'spain.flights.tip': 'Lot trwa około 2 godzin 50 minut. Barcelona i Madryt to najpopularniejsze kierunki, ale jeśli szukasz czegoś innego, rozważ Walencję - to piękne miasto z plażą w centrum. Sprawdź ceny na Skyscanner i Kayak.',
        'spain.places.title': 'Gdzie warto pojechać?',
        'spain.places.barcelona.title': 'Barcelona - Miasto Gaudiego',
        'spain.places.barcelona.text': 'Barcelona to miasto, które kocham. Sagrada Familia, Park Güell, Barceloneta - to miejsca, które znasz, ale zobaczenie ich na żywo to zupełnie inne doświadczenie. Architektura Gaudiego jest po prostu niesamowita, a energia miasta sprawia, że chcesz zostać dłużej. Spacer po Las Ramblas, kolacja w małej restauracji w dzielnicy Gotyckiej, wieczór na plaży - to właśnie jest Barcelona.',
        'spain.places.barcelona.tip': 'Uwaga: Barcelona potrafi być droga, zwłaszcza w sezonie. Jeśli chcesz zaoszczędzić, rozważ nocleg poza centrum - metro jest świetne i szybkie. I koniecznie kup bilety do Sagrada Familia i Park Güell online z wyprzedzeniem - kolejki potrafią być naprawdę długie. Sprawdź oferty na GetYourGuide.',
        'spain.places.madrid.title': 'Madryt - Stolica pełna życia',
        'spain.places.madrid.text': 'Madryt to zupełnie inna historia niż Barcelona. To stolica, która tętni życiem 24/7. Muzeum Prado, Pałac Królewski, Plaza Mayor - to miejsca, które musisz zobaczyć. Ale Madryt to też świetne jedzenie (tapas!), życie nocne, które nie ma końca, i ta niepowtarzalna hiszpańska atmosfera.',
        'spain.places.madrid.tip': 'Jeśli jesteś w Madrycie, koniecznie wybierz się na tapas tour. To najlepszy sposób, żeby poznać miasto i jego kuchnię. Sprawdź oferty na GetYourGuide lub po prostu idź do dzielnicy La Latina i eksperymentuj.',
        'spain.places.seville.title': 'Sewilla - Perła Andaluzji',
        'spain.places.seville.text': 'Sewilla to miasto, które często jest pomijane, a szkoda. Alcázar, katedra, dzielnica Santa Cruz - to miejsca, które zapierają dech w piersiach. A jeśli dodasz do tego flamenco, tapas i tę niepowtarzalną andaluzyjską atmosferę, otrzymujesz miasto, które musisz zobaczyć.',
        'spain.hotels.title': 'Gdzie się zatrzymać?',
        'spain.hotels.intro': 'Hiszpania oferuje szeroki wybór zakwaterowania - od prostych hosteli po luksusowe hotele.',
        'spain.hotels.budget.title': 'Ekonomiczne opcje (150-300 PLN/noc)',
        'spain.hotels.budget.text': 'W Barcelonie i Madrycie znajdziesz wiele hosteli i małych hoteli, które oferują świetny stosunek jakości do ceny. W Barcelonie sprawdź okolice Passeig de Gràcia - są tanie opcje, a jesteś blisko głównych atrakcji. W Madrycie okolice Gran Vía to dobry wybór. Sprawdź oferty na Booking.com.',
        'spain.hotels.mid.title': 'Średnia półka (300-600 PLN/noc)',
        'spain.hotels.mid.text': 'W tej kategorii znajdziesz hotele z dobrym standardem, często w centrum miasta. W Barcelonie warto rozważyć dzielnicę Eixample - to świetna lokalizacja, blisko wszystkiego, a jednocześnie spokojniejsza niż centrum.',
        'spain.hotels.luxury.title': 'Luksus (600+ PLN/noc)',
        'spain.hotels.luxury.text': 'Hiszpania ma naprawdę wyjątkowe luksusowe miejsca - od pałaców zamienionych w hotele po nowoczesne butikowe miejsca z widokiem na miasto. Sprawdź oferty na Booking.com lub Airbnb dla apartamentów z charakterem.',
        'spain.food.title': 'Jedzenie - tapas, paella i więcej',
        'spain.food.text': 'Hiszpańskie jedzenie to coś więcej niż tylko paella i tapas - choć oba są fenomenalne. Każdy region ma swoje specjalności. W Barcelonie spróbuj świeżych owoców morza, w Madrycie - cocido madrileño, a w Sewilli - gazpacho i salmorejo. I oczywiście jamón ibérico - to coś, czego nie znajdziesz nigdzie indziej.',
        'spain.food.tip': 'Moja rada: jedz tam, gdzie jedzą miejscowi. Unikaj restauracji tuż przy głównych atrakcjach turystycznych - zejdź kilka ulic dalej, znajdź miejsce, gdzie jest pełno Hiszpanów, i tam zamów. Sprawdź opinie na TripAdvisor, ale nie bój się eksperymentować.',
        'spain.practical.title': 'Praktyczne informacje',
        'spain.practical.currency': 'Waluta: Euro (EUR)',
        'spain.practical.language': 'Język: Hiszpański (ale w turystycznych miejscach bez problemu porozumiesz się po angielsku)',
        'spain.practical.transport': 'Transport: Hiszpania ma świetną sieć kolejową i autobusową. W Barcelonie i Madrycie metro jest wygodne i tanie. Sprawdź Renfe dla połączeń kolejowych.',
        'spain.practical.besttime': 'Najlepszy czas: Kwiecień-czerwiec i wrzesień-październik - pogoda jest idealna, a tłumy mniejsze niż w szczycie sezonu. Lipiec-sierpień to szczyt sezonu - jest gorąco i drogo.',
        
        // About page
        'about.title': 'O nas',
        'about.intro': 'Cześć! Jestem pasjonatem podróży, który od kilku lat mieszka w Polsce i odkrywa najlepsze kierunki wakacyjne dostępne z naszego kraju. Ten blog powstał z myślą o wszystkich, którzy tak jak ja, kochają podróżować, ale nie zawsze wiedzą, gdzie warto polecieć i jak to zrobić w rozsądnej cenie.',
        'about.why.title': 'Dlaczego ten blog?',
        'about.why.text': 'Kiedy zaczynałem planować swoje pierwsze wycieczki z Polski, zauważyłem, że brakuje miejsca, gdzie znajdę praktyczne, sprawdzone informacje. Wiele blogów pisze o dalekich podróżach, ale mało kto skupia się na kierunkach, które są naprawdę dostępne z Polski - zarówno cenowo, jak i czasowo.',
        'about.what.title': 'Co znajdziesz tutaj?',
        'about.what.text': 'Na tym blogu dzielę się swoimi doświadczeniami z podróży do krajów, które odwiedziłem. Sprawdzam ceny lotów, testuję hotele, zwiedzam atrakcje i próbuję lokalnego jedzenia - wszystko po to, żebyś mógł zaplanować idealne wakacje. Nie znajdziesz tu ogólników - tylko konkretne informacje, które rzeczywiście pomogą Ci w planowaniu.',
        'about.how.title': 'Jak to działa?',
        'about.how.text': 'Każdy kraj, który opisuję, to miejsce, które odwiedziłem osobiście. Sprawdzam ceny lotów na różnych stronach (Skyscanner, Kayak), rezerwuję hotele przez Booking.com i Airbnb, zwiedzam atrakcje i jem w lokalnych restauracjach. Potem dzielę się tym wszystkim z Tobą - bez marketingu, bez reklam, po prostu szczerze.',
        'about.future.title': 'Plany na przyszłość',
        'about.future.text': 'Planuję regularnie dodawać nowe kierunki i aktualizować informacje o cenach i dostępności. Jeśli masz pytania lub sugestie, napisz do mnie - chętnie odpowiem i wezmę pod uwagę Twoje pomysły przy planowaniu kolejnych wycieczek.',
        
        // Contact page
        'contact.title': 'Kontakt',
        'contact.intro': 'Masz pytania? Chcesz podzielić się swoimi doświadczeniami z podróży? A może masz sugestię dotyczącą kolejnego kierunku, który powinienem odwiedzić? Napisz do mnie - chętnie odpowiem!',
        'contact.email.title': 'Email',
        'contact.email.text': 'Najlepszy sposób, żeby się ze mną skontaktować, to email. Odpowiadam zwykle w ciągu 24-48 godzin.',
        'contact.social.title': 'Media społecznościowe',
        'contact.social.text': 'Możesz też znaleźć mnie na:',
        'contact.social.instagram': 'zdjęcia z podróży i codzienne aktualizacje',
        'contact.social.facebook': 'najnowsze wpisy i dyskusje',
        'contact.faq.title': 'Często zadawane pytania',
        'contact.faq.q1': 'Czy wszystkie informacje o cenach są aktualne?',
        'contact.faq.a1': 'Staram się regularnie aktualizować informacje o cenach, ale pamiętaj, że ceny lotów i hoteli mogą się zmieniać. Zawsze sprawdź aktualne ceny na stronach, które polecam, przed rezerwacją.',
        'contact.faq.q2': 'Czy otrzymuję prowizję za rekomendacje?',
        'contact.faq.a2': 'Niektóre linki mogą być linkami partnerskimi, co oznacza, że jeśli zarezerwujesz coś przez mój link, mogę otrzymać niewielką prowizję. To nie wpływa na cenę, którą płacisz, a pomaga mi utrzymać blog. Ale zawsze polecam tylko te miejsca i usługi, które rzeczywiście sprawdziłem i które mogę polecić.',
        'contact.faq.q3': 'Czy mogę zaproponować kierunek do odwiedzenia?',
        'contact.faq.a3': 'Oczywiście! Chętnie wysłucham Twoich sugestii. Napisz do mnie, a wezmę pod uwagę Twój pomysł przy planowaniu kolejnych wycieczek.'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.italy': 'Italy',
        'nav.greece': 'Greece',
        'nav.spain': 'Spain',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        
        // Home page
        'hero.title': 'Top 3 Countries to Visit from Poland',
        'hero.subtitle': 'Discover where to spend your vacation - from flight prices to the best hotels and attractions',
        'intro.text': 'Do you often wonder where to go on vacation? Living in Poland, we have plenty of options. After several years of traveling and testing different destinations, I\'ve prepared a ranking of three countries that I think are the best choice. It\'s not just about price - what matters is what you\'ll see, where you\'ll stay, and the memories you\'ll bring back.',
        'countries.title': 'Top 3 Travel Destinations',
        'italy.preview': 'A country that never stops amazing. From ancient Rome to romantic Venice - everyone will find something for themselves.',
        'greece.preview': 'White houses on cliffs, endless beaches, and history at every turn. Greece is more than just a vacation.',
        'spain.preview': 'Sun, tapas, Gaudi\'s architecture, and energy that doesn\'t let you get bored. Barcelona and Madrid are waiting.',
        'read.more': 'Read more →',
        'why.title': 'Why Travel?',
        'why.feature1.title': 'Easy Access',
        'why.feature1.text': 'From Poland, we have direct flights to most European capitals. You don\'t need to transfer or waste time on long journeys.',
        'why.feature2.title': 'Affordable Prices',
        'why.feature2.text': 'Airlines like Ryanair, Wizz Air, and LOT offer regular promotions. You can often find flights for less than 500 zloty round trip.',
        'why.feature3.title': 'Diversity',
        'why.feature3.text': 'In just a few hours, you can find yourself in a completely different climate, culture, and landscape. That\'s the magic of Europe.',
        
        // Footer
        'footer.about': 'About the Blog',
        'footer.about.text': 'Practical advice and rankings of the best travel destinations from Poland. We check prices, hotels, and attractions so you can plan the perfect vacation.',
        'footer.links': 'Useful Links',
        'footer.contact': 'Contact',
        'footer.contact.link': 'Write to us',
        'footer.rights': 'All rights reserved.',
        
        // Breadcrumb
        'breadcrumb.home': 'Home',
        'breadcrumb.italy': 'Italy',
        'breadcrumb.greece': 'Greece',
        'breadcrumb.spain': 'Spain',
        'back.button': '← Back to homepage',
        
        // Italy page
        'italy.title': 'Italy - A Country That Never Stops Amazing',
        'italy.meta.flight': 'Flight: ~2h 30min',
        'italy.meta.price': 'Price: from 400 PLN',
        'italy.meta.best': 'Best time: April-June, September-October',
        'italy.intro': 'Italy is my absolute favorite destination from Poland. It\'s not just about pizza and pasta - though I admit that matters too. It\'s a country where history meets modernity, where every corner has its story, and food is not just a meal but a whole culture.',
        'italy.flights.title': 'Flights from Poland to Italy',
        'italy.flights.text': 'From Warsaw, Krakow, or Gdansk, you have direct connections to Rome, Milan, Venice, and Naples. Airlines like Ryanair, Wizz Air, LOT, and Alitalia offer regular flights. Prices start from around 400 zloty round trip, but if you catch a promotion (which happens often), you can fly for as little as 250-300 zloty.',
        'italy.flights.tip': 'My advice? Check prices on Skyscanner and Kayak - sometimes the difference between the same dates can be really significant. The flight takes about 2.5 hours, so it\'s really a quick trip.',
        'italy.places.title': 'Where to go?',
        'italy.places.rome.title': 'Rome - The Eternal City',
        'italy.places.rome.text': 'Rome is a place you need to see at least once in your life. The Colosseum, the Roman Forum, the Trevi Fountain - these are all places you know from movies, but seeing them in person is a completely different experience. Walking through ancient streets, coffee at Piazza Navona, dinner in a small trattoria somewhere in Trastevere - that\'s Rome.',
        'italy.places.rome.tip': 'If you plan to visit museums (and it\'s worth it!), buy tickets online in advance. Lines to the Vatican or Colosseum can be really long. Check offers on GetYourGuide - they often have better prices than at the ticket office.',
        'italy.places.venice.title': 'Venice - City on Water',
        'italy.places.venice.text': 'Venice is one of those places you either love or... well, there\'s probably no second option. This city is simply magical. Walking through narrow streets, a gondola ride (yes, it\'s touristy, but worth it), coffee at St. Mark\'s Square at sunrise - these are moments you\'ll remember forever.',
        'italy.places.venice.tip': 'Watch out for prices - Venice can be expensive, especially in season. If you want to save, consider staying in Mestre (a district on land) and taking the train. It\'s only 10 minutes, and the price difference can be significant.',
        'italy.places.florence.title': 'Florence - Pearl of Tuscany',
        'italy.places.florence.text': 'Florence is a city of art. The Uffizi Gallery, the Cathedral of Santa Maria del Fiore, the Ponte Vecchio - these are all places every culture lover should see. But Florence is also great food, wine, and an atmosphere that makes you want to stay longer.',
        'italy.hotels.title': 'Where to stay?',
        'italy.hotels.intro': 'The choice of hotel in Italy depends on your budget and what you\'re looking for. Here are my recommendations:',
        'italy.hotels.budget.title': 'Budget options (150-300 PLN/night)',
        'italy.hotels.budget.text': 'In Rome, I recommend checking hotels around Termini station - they\'re cheap, and you\'re just a few metro stops from the center. In Venice, as I mentioned, Mestre is a good choice. Check offers on Booking.com - they often have great promotions.',
        'italy.hotels.mid.title': 'Mid-range (300-600 PLN/night)',
        'italy.hotels.mid.text': 'In this category, you\'ll find hotels with good standards, often in the city center. In Rome, it\'s worth considering the Trastevere area - it\'s a district with character, full of restaurants and bars, and at the same time close to main attractions.',
        'italy.hotels.luxury.title': 'Luxury (600+ PLN/night)',
        'italy.hotels.luxury.text': 'If you want to pamper yourself, Italy offers really unique places. From palaces converted into hotels to modern boutique places with views of monuments. Check the luxury section of Booking.com or Airbnb for apartments with character.',
        'italy.food.title': 'Food - you have to try this',
        'italy.food.text': 'I can\'t help but mention food. In Italy, it\'s not just about pizza and pasta - each region has its specialties. In Rome, try carbonara (the real one, not with cream!), in Venice - risotto nero, and in Florence - bistecca alla fiorentina. And of course gelato - the best ice cream in the world.',
        'italy.food.tip': 'My advice: avoid restaurants right next to main tourist attractions. Go a few streets away, find a place where locals eat - there you\'ll get the best food at reasonable prices. Check reviews on TripAdvisor before choosing.',
        'italy.practical.title': 'Practical information',
        'italy.practical.currency': 'Currency: Euro (EUR)',
        'italy.practical.language': 'Language: Italian (but in tourist places you\'ll have no problem communicating in English)',
        'italy.practical.transport': 'Transport: Italy has an excellent rail network. Trains are fast, comfortable, and relatively cheap. Check Trenitalia for domestic connections.',
        'italy.practical.besttime': 'Best time: April-June and September-October - the weather is perfect, and crowds are smaller than in peak season.',
        
        // Greece page
        'greece.title': 'Greece - White houses, blue sea and history at every turn',
        'greece.meta.flight': 'Flight: ~2h 45min',
        'greece.meta.price': 'Price: from 350 PLN',
        'greece.meta.best': 'Best time: May-June, September-October',
        'greece.intro': 'Greece is one of those countries you\'ve seen in photos hundreds of times, but only when you\'re there do you understand why everyone talks about it. White houses on cliffs, endless beaches, crystal clear water, and that unique atmosphere - all of this makes Greece special.',
        'greece.flights.title': 'Flights from Poland to Greece',
        'greece.flights.text': 'From Poland, you have direct flights to Athens, Thessaloniki, and some islands (in season). Ryanair, Wizz Air, and Aegean Airlines offer regular connections. Prices start from around 350 zloty round trip, and in promotions (which happen often, especially off-season) you can find flights for as little as 250 zloty.',
        'greece.flights.tip': 'The flight takes about 2 hours 45 minutes. If you fly to Athens, you can easily get to the islands from there - ferries and domestic flights are well organized. Check prices on Skyscanner - you\'ll often find the best offers there.',
        'greece.places.title': 'Where to go?',
        'greece.places.santorini.title': 'Santorini - Postcard Island',
        'greece.places.santorini.text': 'Santorini is probably the most recognizable Greek island. White houses with blue domes, sunsets that take your breath away, and wines that taste like nothing else. Oia is a place you\'ve seen on Instagram hundreds of times - and it really is as beautiful as it looks in photos.',
        'greece.places.santorini.tip': 'Note: Santorini can be expensive, especially in peak season (July-August). If you want to save, consider going in May, June, or September - the weather is still great, and prices are much lower. Check offers on Booking.com in advance.',
        'greece.places.athens.title': 'Athens - City of Gods',
        'greece.places.athens.text': 'Athens is a city everyone should see at least once. The Acropolis, the Parthenon, the Acropolis Museum - these are places you know from history lessons, but seeing them in person is a completely different experience. But Athens is not just monuments - it\'s also great food, tavernas where you can spend the evening, and that unique Greek hospitality.',
        'greece.places.athens.tip': 'Spend at least 2-3 days in Athens. That\'s enough to see the main attractions, but if you want to feel the city\'s atmosphere, stay longer. Plaka is the district where you\'ll find the best restaurants and souvenir shops.',
        'greece.places.crete.title': 'Crete - The Largest Island',
        'greece.places.crete.text': 'Crete is an island that has everything - beautiful beaches, mountains, ancient ruins, and great food. Chania is one of the most beautiful cities I\'ve seen - a Venetian port, narrow streets, colorful houses. And the beaches? Elafonisi with pink sand is something you have to see.',
        'greece.hotels.title': 'Where to stay?',
        'greece.hotels.intro': 'Greece offers a wide range of accommodation - from simple rooms in family pensions to luxury resorts with sea views.',
        'greece.hotels.budget.title': 'Budget options (120-250 PLN/night)',
        'greece.hotels.budget.text': 'On most islands, you\'ll find small pensions and rooms for rent that offer great value for money. In Athens, check the Plaka area - there are cheap options, and you\'re in the center of everything. Booking.com has a large selection in this category.',
        'greece.hotels.mid.title': 'Mid-range (250-500 PLN/night)',
        'greece.hotels.mid.text': 'In this category, you\'ll find hotels with pools, often with sea views. On Santorini, it\'s worth considering Fira or Imerovigli instead of Oia - they\'re cheaper, and the views are still spectacular.',
        'greece.hotels.luxury.title': 'Luxury (500+ PLN/night)',
        'greece.hotels.luxury.text': 'Greece has really unique luxury places - from caves converted into hotels on Santorini to resorts with private beaches. If you want to pamper yourself, check offers on Booking.com or Airbnb for apartments with character.',
        'greece.food.title': 'Food - Flavors of Greece',
        'greece.food.text': 'Greek food is more than just gyros and Greek salad. Moussaka, pastitsio, souvlaki, fresh seafood - the list is long. And of course tzatziki, which tastes completely different from what you eat in Poland.',
        'greece.food.tip': 'My advice: eat where locals eat. Small tavernas away from main tourist streets offer the best food at the best prices. Check reviews on TripAdvisor, but don\'t be afraid to experiment.',
        'greece.practical.title': 'Practical information',
        'greece.practical.currency': 'Currency: Euro (EUR)',
        'greece.practical.language': 'Language: Greek (but in tourist places you\'ll have no problem communicating in English)',
        'greece.practical.transport': 'Transport: On the islands, it\'s best to rent a car or scooter. In Athens, the metro is convenient and cheap. Check RentalCars for car rental.',
        'greece.practical.besttime': 'Best time: May-June and September-October - the weather is perfect, and crowds are smaller. July-August is peak season - it\'s hot and expensive.',
        
        // Spain page
        'spain.title': 'Spain - Sun, tapas and energy that doesn\'t let you get bored',
        'spain.meta.flight': 'Flight: ~2h 50min',
        'spain.meta.price': 'Price: from 380 PLN',
        'spain.meta.best': 'Best time: April-June, September-October',
        'spain.intro': 'Spain is a country that has everything - from beaches to mountains, from ancient monuments to modern architecture, from quiet villages to vibrant cities. Barcelona and Madrid are two completely different worlds, but both are worth visiting. And if you add the food, which is simply phenomenal, and that unique Spanish atmosphere, you get a recipe for the perfect vacation.',
        'spain.flights.title': 'Flights from Poland to Spain',
        'spain.flights.text': 'From Poland, you have direct flights to Barcelona, Madrid, Valencia, and Malaga. Ryanair, Wizz Air, Vueling, and LOT offer regular connections. Prices start from around 380 zloty round trip, but in promotions (which happen often) you can find flights for as little as 300 zloty.',
        'spain.flights.tip': 'The flight takes about 2 hours 50 minutes. Barcelona and Madrid are the most popular destinations, but if you\'re looking for something different, consider Valencia - it\'s a beautiful city with a beach in the center. Check prices on Skyscanner and Kayak.',
        'spain.places.title': 'Where to go?',
        'spain.places.barcelona.title': 'Barcelona - City of Gaudi',
        'spain.places.barcelona.text': 'Barcelona is a city I love. Sagrada Familia, Park Güell, Barceloneta - these are places you know, but seeing them in person is a completely different experience. Gaudi\'s architecture is simply amazing, and the city\'s energy makes you want to stay longer. Walking along Las Ramblas, dinner in a small restaurant in the Gothic Quarter, an evening on the beach - that\'s Barcelona.',
        'spain.places.barcelona.tip': 'Note: Barcelona can be expensive, especially in season. If you want to save, consider staying outside the center - the metro is great and fast. And be sure to buy tickets to Sagrada Familia and Park Güell online in advance - lines can be really long. Check offers on GetYourGuide.',
        'spain.places.madrid.title': 'Madrid - Capital Full of Life',
        'spain.places.madrid.text': 'Madrid is a completely different story than Barcelona. It\'s a capital that pulses with life 24/7. The Prado Museum, the Royal Palace, Plaza Mayor - these are places you must see. But Madrid is also great food (tapas!), nightlife that never ends, and that unique Spanish atmosphere.',
        'spain.places.madrid.tip': 'If you\'re in Madrid, be sure to go on a tapas tour. It\'s the best way to get to know the city and its cuisine. Check offers on GetYourGuide or just go to the La Latina district and experiment.',
        'spain.places.seville.title': 'Seville - Pearl of Andalusia',
        'spain.places.seville.text': 'Seville is a city that\'s often overlooked, and that\'s a shame. The Alcázar, the cathedral, the Santa Cruz district - these are places that take your breath away. And if you add flamenco, tapas, and that unique Andalusian atmosphere, you get a city you must see.',
        'spain.hotels.title': 'Where to stay?',
        'spain.hotels.intro': 'Spain offers a wide range of accommodation - from simple hostels to luxury hotels.',
        'spain.hotels.budget.title': 'Budget options (150-300 PLN/night)',
        'spain.hotels.budget.text': 'In Barcelona and Madrid, you\'ll find many hostels and small hotels that offer great value for money. In Barcelona, check the Passeig de Gràcia area - there are cheap options, and you\'re close to main attractions. In Madrid, the Gran Vía area is a good choice. Check offers on Booking.com.',
        'spain.hotels.mid.title': 'Mid-range (300-600 PLN/night)',
        'spain.hotels.mid.text': 'In this category, you\'ll find hotels with good standards, often in the city center. In Barcelona, it\'s worth considering the Eixample district - it\'s a great location, close to everything, and at the same time quieter than the center.',
        'spain.hotels.luxury.title': 'Luxury (600+ PLN/night)',
        'spain.hotels.luxury.text': 'Spain has really unique luxury places - from palaces converted into hotels to modern boutique places with city views. Check offers on Booking.com or Airbnb for apartments with character.',
        'spain.food.title': 'Food - tapas, paella and more',
        'spain.food.text': 'Spanish food is more than just paella and tapas - though both are phenomenal. Each region has its specialties. In Barcelona, try fresh seafood, in Madrid - cocido madrileño, and in Seville - gazpacho and salmorejo. And of course jamón ibérico - something you won\'t find anywhere else.',
        'spain.food.tip': 'My advice: eat where locals eat. Avoid restaurants right next to main tourist attractions - go a few streets away, find a place full of Spaniards, and order there. Check reviews on TripAdvisor, but don\'t be afraid to experiment.',
        'spain.practical.title': 'Practical information',
        'spain.practical.currency': 'Currency: Euro (EUR)',
        'spain.practical.language': 'Language: Spanish (but in tourist places you\'ll have no problem communicating in English)',
        'spain.practical.transport': 'Transport: Spain has an excellent rail and bus network. In Barcelona and Madrid, the metro is convenient and cheap. Check Renfe for rail connections.',
        'spain.practical.besttime': 'Best time: April-June and September-October - the weather is perfect, and crowds are smaller than in peak season. July-August is peak season - it\'s hot and expensive.',
        
        // About page
        'about.title': 'About Us',
        'about.intro': 'Hi! I\'m a travel enthusiast who has been living in Poland for several years and discovering the best vacation destinations available from our country. This blog was created for everyone who, like me, loves to travel but doesn\'t always know where to go and how to do it at a reasonable price.',
        'about.why.title': 'Why this blog?',
        'about.why.text': 'When I started planning my first trips from Poland, I noticed there was no place where I could find practical, verified information. Many blogs write about distant travels, but few focus on destinations that are really accessible from Poland - both price-wise and time-wise.',
        'about.what.title': 'What will you find here?',
        'about.what.text': 'On this blog, I share my experiences from trips to countries I\'ve visited. I check flight prices, test hotels, visit attractions, and try local food - all so you can plan the perfect vacation. You won\'t find generalities here - only specific information that will actually help you in planning.',
        'about.how.title': 'How does it work?',
        'about.how.text': 'Every country I describe is a place I\'ve visited personally. I check flight prices on various sites (Skyscanner, Kayak), book hotels through Booking.com and Airbnb, visit attractions, and eat in local restaurants. Then I share it all with you - without marketing, without ads, just honestly.',
        'about.future.title': 'Future plans',
        'about.future.text': 'I plan to regularly add new destinations and update information about prices and availability. If you have questions or suggestions, write to me - I\'ll be happy to respond and take your ideas into account when planning future trips.',
        
        // Contact page
        'contact.title': 'Contact',
        'contact.intro': 'Have questions? Want to share your travel experiences? Or maybe you have a suggestion for the next destination I should visit? Write to me - I\'ll be happy to respond!',
        'contact.email.title': 'Email',
        'contact.email.text': 'The best way to contact me is by email. I usually respond within 24-48 hours.',
        'contact.social.title': 'Social media',
        'contact.social.text': 'You can also find me on:',
        'contact.social.instagram': 'travel photos and daily updates',
        'contact.social.facebook': 'latest posts and discussions',
        'contact.faq.title': 'Frequently asked questions',
        'contact.faq.q1': 'Are all price information current?',
        'contact.faq.a1': 'I try to regularly update price information, but remember that flight and hotel prices can change. Always check current prices on the sites I recommend before booking.',
        'contact.faq.q2': 'Do you receive commission for recommendations?',
        'contact.faq.a2': 'Some links may be affiliate links, which means if you book something through my link, I may receive a small commission. This doesn\'t affect the price you pay, and it helps me maintain the blog. But I always recommend only places and services I\'ve actually checked and can recommend.',
        'contact.faq.q3': 'Can I suggest a destination to visit?',
        'contact.faq.a3': 'Of course! I\'ll be happy to hear your suggestions. Write to me, and I\'ll take your idea into account when planning future trips.',
        
        // History page
        'history.title': 'My Story',
        'history.intro': 'It all started a few years ago when I first landed in Rome. It was my first solo trip abroad, and although I was full of concerns, it quickly turned out that travel is more than just sightseeing - it\'s a way of life.',
        'history.timeline.2018.title': 'First Journey',
        'history.timeline.2018.text': 'Rome was the beginning. I remember standing in front of the Colosseum and thinking: "This is it. I want to see more." I didn\'t know then that this one trip would change my whole life. I spent 5 days there, exploring every corner, trying local food, and talking to locals. That\'s when I understood that travel is not just photos - it\'s experiences that shape us as people.',
        'history.timeline.2019.title': 'Expanding Horizons',
        'history.timeline.2019.text': 'The next year, I decided I would travel regularly. Greece, Spain, Portugal, Croatia - each trip was different, each taught me something new. I began to notice that from Poland we have really great flight connections, and prices aren\'t as high as I thought. That\'s when I also started taking notes - flight prices, hotels I recommend, places worth seeing.',
        'history.timeline.2020.title': 'Pandemic and Reflection',
        'history.timeline.2020.text': 'When the pandemic came, travel stopped for a while. But that\'s when I understood how important it is to me. I started browsing photos, reading notes, planning future trips. And that\'s when the idea came - why not share this experience with others? Many people think that travel from Poland is expensive or complicated, and I knew that wasn\'t true.',
        'history.timeline.2022.title': 'Back on the Trail',
        'history.timeline.2022.text': 'When travel became possible again, I returned with even greater passion. This time I not only visited but also documented everything - checked current prices, tested different hotels, noted practical information. I noticed there was no place where I could find specific, verified information about travel from Poland. Most blogs write about distant travels, and few focus on destinations that are really accessible.',
        'history.timeline.2023.title': 'Birth of the Blog',
        'history.timeline.2023.text': 'After several years of travel and collecting experiences, I decided to create this blog. I don\'t want to write about places I haven\'t been to, or recommend hotels I haven\'t checked. Every country I describe here is a place I\'ve visited personally. Every price I give is a price I\'ve actually seen. Every hotel I recommend is a place where I\'ve spent the night. Today, after visiting over 30 countries and countless cities, I still love discovering new places. But equally important to me is sharing this experience with you. Because I believe everyone deserves a wonderful vacation, regardless of budget.',
        'history.stats.title': 'Numbers that speak for themselves',
        'history.stats.countries': 'Countries Visited',
        'history.stats.nights': 'Nights in Hotels',
        'history.stats.flights': 'Flights',
        'history.stats.photos': 'Photos and Memories',
        'history.mission.title': 'My Mission',
        'history.mission.text1': 'I want to show that travel from Poland is accessible to everyone. You don\'t have to spend a fortune to see beautiful places. You don\'t need weeks of vacation to have an unforgettable adventure. All it takes is a bit of planning, a little courage, and a willingness to discover.',
        'history.mission.text2': 'This blog is my story, but also your guide. I hope you\'ll find inspiration and practical information here that will help you plan the perfect vacation. Because travel is not a luxury - it\'s a way of life.',
        
        // Header translations
        'header.tag': '🇵🇱 Travels from Poland',
        'header.phone': '📞 Have questions?',
        'header.phone.link': 'Write to us',
        'logo.main': 'Travels from Poland',
        'logo.sub': 'Verified destinations and prices',
        'nav.home': 'Home',
        'nav.history': 'My Story',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        
        // Footer additional translations
        'footer.stats.title': 'Over 50+ verified destinations',
        'footer.stats.readers': '1000+ satisfied readers',
        'footer.stats.updated': 'Updated weekly',
        'footer.tools.skyscanner': 'flight comparison from Poland',
        'footer.tools.booking': 'hotel and apartment reservations',
        'footer.tools.tripadvisor': 'reviews and ratings',
        'footer.tools.kayak': 'flight and hotel search',
        'footer.tools.getyourguide': 'tours and attractions',
        'footer.tools.airbnb': 'unique accommodations',
        'footer.destinations.title': 'Popular Destinations',
        'footer.destinations.italy': 'Italy - Rome, Venice, Florence',
        'footer.destinations.greece': 'Greece - Santorini, Athens, Crete',
        'footer.destinations.spain': 'Spain - Barcelona, Madrid, Seville',
        'footer.destinations.all': 'All destinations →',
        'footer.author': 'About the blog author',
        'footer.follow': 'Follow us:',
        'footer.disclaimer': 'Flight and hotel price information is indicative and may change. Always check current prices before booking.'
    }
};

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('lang-' + lang).classList.add('active');
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // For elements that are links or have other attributes, preserve them
            if (element.tagName === 'A' || element.tagName === 'BUTTON') {
                // Preserve href and other attributes, only update text
                const originalHTML = element.innerHTML;
                element.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'pl';
    switchLanguage(savedLang);
    
    // Initialize page loader
    initPageLoader();
    
    // Initialize scroll features
    initScrollFeatures();
});

// Page Loader functionality
function initPageLoader() {
    // Create loader element
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <div class="loader-text">Ładowanie...</div>
        </div>
    `;
    document.body.appendChild(loader);
    
    // Hide loader after page load
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.classList.remove('active');
        }, 300);
    });
    
    // Intercept all internal link clicks
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        if (!href) return;
        
        // Skip if link has target="_blank" or is external
        if (link.hasAttribute('target') && link.getAttribute('target') === '_blank') return;
        if (href.startsWith('http://') || href.startsWith('https://')) {
            // Check if it's same origin
            try {
                const linkUrl = new URL(href, window.location.origin);
                if (linkUrl.origin !== window.location.origin) return;
            } catch (e) {
                return;
            }
        }
        
        // Skip special links
        if (href.startsWith('mailto:') || 
            href.startsWith('tel:') || 
            href.startsWith('#') ||
            href.startsWith('javascript:')) {
            return;
        }
        
        // Check if it's an internal HTML page link
        const isInternal = href.endsWith('.html') || 
                          href === 'index.html' ||
                          href === '/' ||
                          (!href.includes('://') && 
                           !href.startsWith('//') &&
                           (href.startsWith('/') || href.includes('.html')));
        
        if (isInternal) {
            e.preventDefault();
            
            // Show loader
            loader.classList.add('active');
            
            // Wait 1 second, then navigate
            setTimeout(() => {
                window.location.href = href;
            }, 1000);
        }
    });
}

// Scroll Features functionality
function initScrollFeatures() {
    const features = document.querySelectorAll('.feature');
    if (features.length === 0) return;
    
    // Show first feature initially
    if (features[0]) {
        features[0].classList.add('active');
    }
    
    let currentFeature = 0;
    const featureSection = document.querySelector('.why-travel');
    if (!featureSection) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.3, 0.6, 1]
    };
    
    const handleScroll = () => {
        const rect = featureSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Calculate when section enters viewport
        const sectionStart = windowHeight * 0.3;
        const sectionEnd = sectionStart + sectionHeight;
        const scrollPosition = windowHeight - sectionTop;
        
        // Calculate scroll progress (0 to 1) as we scroll through the section
        let scrollProgress = 0;
        if (scrollPosition >= sectionStart && scrollPosition <= sectionEnd) {
            scrollProgress = (scrollPosition - sectionStart) / (sectionEnd - sectionStart);
        } else if (scrollPosition > sectionEnd) {
            scrollProgress = 1;
        }
        
        // Determine which feature should be active based on scroll position
        let newActiveFeature = 0;
        if (scrollProgress < 0.35) {
            newActiveFeature = 0; // First feature (top left)
        } else if (scrollProgress < 0.7) {
            newActiveFeature = 1; // Second feature (right)
        } else {
            newActiveFeature = 2; // Third feature (bottom left)
        }
        
        // Update active feature with smooth transition
        if (newActiveFeature !== currentFeature) {
            features.forEach((feature, index) => {
                if (index === newActiveFeature) {
                    setTimeout(() => {
                        feature.classList.add('active');
                    }, 50);
                } else {
                    feature.classList.remove('active');
                }
            });
            currentFeature = newActiveFeature;
        }
    };
    
    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                window.addEventListener('scroll', handleScroll);
                handleScroll(); // Initial call
            } else {
                window.removeEventListener('scroll', handleScroll);
            }
        });
    }, {
        threshold: 0.1
    });
    
    observer.observe(featureSection);
    
    // Also handle scroll directly for smoother updates
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

