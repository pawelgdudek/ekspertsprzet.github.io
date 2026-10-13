/* =========================================================
   EKSPERT SPRZĘT – JEDYNE ŹRÓDŁO DANYCH O PRODUKTACH
   Edytuj tylko ten plik, aby zmienić ceny, opisy, zdjęcia.
   Ceny: brutto, z ulotki "Cennik wynajmu".
   p1 = 1 dzień, p23 = 2–3 dni (za dzień), p4 = powyżej 3 dni (za dzień)
   Wartość "DO_UZUPELNIENIA" = brak danych w materiałach.
   ========================================================= */
var FIRMA = {
  nazwa: "EKSPERT SPRZĘT",
  wlasciciel: "Patrycja Czupryniak",
  telefon: "789 438 322",
  telefonLink: "tel:+48789438322",
  email: "ekspertsprzet.pc@gmail.com",
  www: "ekspertsprzet.pl",
  adres: "Albigowa 762A, 37-122 Albigowa"
};

var KATEGORIE = [
  { id: "myjki", nazwa: "Myjki i odkurzacze" },
  { id: "spawarki", nazwa: "Spawarki" },
  { id: "pily", nazwa: "Piły i ukośnice" },
  { id: "wiertnice", nazwa: "Wiertnice" },
  { id: "agregaty", nazwa: "Agregaty" }
];

var ESD162 = [["Model", "ESD 162 (miękki udar)"], ["Moc", "2200 W"], ["Zasilanie", "230 V"], ["Obroty", "0–1100 /min"], ["Średnica wiercenia", "82–202 mm (optymalnie do 162 mm)"], ["Częstotliwość uderzeń", "maks. 22 000 /min"], ["Wrzeciono", "1 1/4\" męski"], ["Średnica kołnierza", "60 mm"], ["Masa wiertnicy", "6,6 kg"]];

var PRODUKTY = [
  {
    id: "myjka-cisnieniowa", lp: 1, kategoria: "myjki", tag: "Myjki",
    nazwa: "Myjka ciśnieniowa", model: "Lavor Rio-R Pro 1208 Carbon",
    img: "myjka.webp",
    opis: "Myjka ciepłowodna elektryczna z podgrzewaniem wody ropą – woda do 90°C, ciśnienie 160 bar.",
    ceny: { p1: 180, p23: 160, p4: 140 }, kaucja: [["Kaucja zwrotna", 500]],
    parametry: [["Model", "RIO-R PRO 1208"], ["Kod produktu", "8.052.0864"], ["Typ", "Ciepłowodna, elektryczna, podgrzewanie wody ropą"], ["Ciśnienie", "160 bar"], ["Wydatek wody", "450 l/h"], ["Temperatura wody", "90°C"], ["Moc", "2500 W"], ["Waga", "43 kg"]],
    zastosowanie: [],
    akcesoria: [["Detergent do myjki ciśnieniowej", "10 zł / 1 litr"]]
  },
  {
    id: "spawarka-przemyslowa", lp: 2, kategoria: "spawarki", tag: "Spawarki",
    nazwa: "Spawarka przemysłowa", model: "Ideal Expert Multi 230 PFC Pro5 (4w1)",
    img: "spawarka-przemyslowa.webp",
    opis: "Spawarka wieloprocesowa 4w1 (MIG/MAG, TIG DC, MMA, lutospawanie) z synergią i funkcją puls. Maksymalny prąd spawania 230 A.",
    ceny: { p1: 180, p23: 150, p4: 120 }, kaucja: [["Kaucja (bez butli gazowej)", 500], ["Kaucja (z butlą gazową)", 700]],
    parametry: [["Zasilanie", "230 V"], ["Moc", "6,6 kW"], ["Zabezpieczenie sieci", "C25A"], ["Prąd pobierany z sieci", "31 A"], ["Maks. prąd spawania", "230 A"], ["Nominalny prąd spawania", "145 A"], ["Cykl pracy (MIG / TIG / MMA)", "60%"], ["Zakres prądu MIG/MAG", "25–230 A"], ["Zakres prądu TIG DC", "10–200 A"], ["Zakres prądu MMA", "10–200 A"], ["Synergia / puls / lutospawanie", "Tak / Tak / Tak"], ["Tryby 2T/4T, SPOT/S2T/S4T", "Tak"], ["Hot Start, Arc Force, VRD (MMA)", "Tak"], ["Podajnik drutu", "4-rolkowy"], ["Szpula drutu", "2 kg i 5 kg (D200)"], ["Drut stalowy", "0,6–1,0 mm"], ["Drut aluminiowy", "0,8–1,2 mm"], ["Drut samoosłonowy", "0,8–1,2 mm"], ["Drut do lutospawania", "0,8–1,0 mm"], ["Napięcie biegu jałowego", "80 V"], ["Pre-gas / Post-gas", "0,1–2,0 s / 0–10 s"], ["Stopień ochrony", "IP23S"], ["Chłodzenie", "Wentylator"], ["Kabel zasilający", "300 cm"], ["Wymiary", "795 × 215 × 435 mm"], ["Waga", "20 kg"]],
    zastosowanie: [],
    akcesoria: [["Gaz (MB 15) – 1/2 butli", "30 zł"], ["Gaz (MB 15) – pełna butla", "60 zł"], ["Drut spawalniczy", "30 zł / 1 kg"], ["Elektrody", "20 zł / 1 kg"]]
  },
  {
    id: "spawarka-mig-mag", lp: 3, kategoria: "spawarki", tag: "Spawarki",
    nazwa: "Spawarka MIG/MAG", model: "Ideal PMIG200V2 (MIG/MAG, MMA)",
    img: "spawarka-mig-mag.webp",
    opis: "Półautomat spawalniczy MIG/MAG z funkcją MMA, 30–200 A, zasilanie 230 V.",
    ceny: { p1: 80, p23: 70, p4: 60 }, kaucja: [["Kaucja (bez butli gazowej)", 300], ["Kaucja (z butlą gazową)", 500]],
    parametry: [["Zasilanie", "230 V; 50 Hz (1 faza)"], ["Zabezpieczenie sieci", "C20A"], ["Moc", "6,2 kW"], ["Zakres prądu spawania", "30–200 A (MIG) / 30–180 A (MMA)"], ["Prąd przy pracy 60%", "200 A (MIG) / 180 A (MMA)"], ["Prąd przy pracy 100%", "130 A"], ["Napięcie stanu jałowego", "43 V"], ["Drut stalowy / nierdzewny", "0,6–1,0 mm"], ["Drut aluminiowy", "0,8–1,0 mm"], ["Drut samoosłonowy", "0,8–1,2 mm"], ["Elektroda", "1,6–4,0 mm"], ["Szpula drutu", "1–5 kg (D100 / D200)"], ["Stopień ochrony", "IP 21S"], ["Waga", "DO_UZUPELNIENIA"]],
    zastosowanie: [],
    akcesoria: [["Gaz (MB 15) – 1/2 butli", "30 zł"], ["Gaz (MB 15) – pełna butla", "60 zł"], ["Drut spawalniczy", "30 zł / 1 kg"], ["Elektrody", "20 zł / 1 kg"]]
  },
  {
    id: "pila-pierscieniowa", lp: 4, kategoria: "pily", tag: "Piły",
    nazwa: "Piła pierścieniowa do betonu", model: "TrendEco Profi Bud 3000 W",
    img: "pila-pierscieniowa.webp",
    opis: "Piła pierścieniowa nowej generacji do precyzyjnego cięcia betonu, żelbetu i materiałów konstrukcyjnych. Silnik bezszczotkowy, praca niskoobrotowa (ok. 1300 obr./min) z wysokim momentem obrotowym, system GYRO AUTO OFF, waga 10 kg.",
    warianty: [
      { id: "bez-szyny", nazwa: "Bez szyny", etykieta: "BEZ SZYNY", img: "pila-pierscieniowa.webp",
        opis: "Piła pierścieniowa bez szyny.",
        ceny: { p1: 180, p23: 150, p4: 130 }, kaucja: [["Kaucja zwrotna", 500]] },
      { id: "z-szyna", nazwa: "Z szyną", etykieta: "Z SZYNĄ", img: "pila-pierscieniowa-szyna.webp",
        opis: "Piła z zębatą prowadnicą TrendEco Profi Rail – stabilizuje położenie piły i umożliwia kontrolowane prowadzenie wzdłuż wyznaczonej linii. Szczególnie przydatna przy długich, prostych i głębokich cięciach.",
        ceny: { p1: 230, p23: 200, p4: 160 }, kaucja: [["Kaucja zwrotna", 700]] }
    ],
    parametry: [["Zasilanie", "Elektryczne, 230 V"], ["Silnik", "Bezszczotkowy"], ["Moc znamionowa", "3000 W"], ["Moc maks. robocza", "6000 W"], ["Prędkość obrotowa (bez obciążenia)", "ok. 1300 obr./min"], ["Średnica pierścienia tnącego", "410 mm"], ["Maks. głębokość cięcia", "ok. 290 mm"], ["Min. odległość cięcia od ściany", "ok. 1 cm"], ["Cięcie", "Na mokro (z użyciem wody)"], ["Rękojeść", "Uchwyt pomocniczy + obrotowy (cięcie pionowe i poziome)"], ["Prowadzenie pierścienia", "Zębata prowadnica stabilizująca, kółka prowadzące"], ["Bezpieczeństwo", "Niskie obroty + system żyroskopowy GYRO AUTO OFF (automatyczne wyłączenie napędu przy gwałtownym ruchu / odrzucie), start dwuetapowy, osłona przeciwrozbryzgowa"], ["Wyświetlacz", "Licznik czasu pracy"], ["Montaż pierścienia", "Szybki, bez regulacji i śrub nastawczych"], ["Waga", "10 kg"], ["Szyna (wariant Z SZYNĄ)", "Zębata prowadnica TrendEco Profi Rail"]],
    zastosowanie: ["Beton", "Żelbet", "Gazobeton", "Cegła", "Bloczki fundamentowe", "Otwory drzwiowe i okienne", "Dylatacje i kanały techniczne", "Materiały mineralne"],
    akcesoria: [["Zużycie tarczy diamentowej do 230 mm", "20 zł"], ["Zużycie tarczy 231–350 mm", "30 zł"], ["Zużycie tarczy powyżej 350 mm", "40 zł"]]
  },
  {
    id: "pilarka-ukosowa", lp: 5, kategoria: "pily", tag: "Ukośnice",
    nazwa: "Pilarka ukosowa", model: "Metabo KGS 305 M",
    img: "pilarka-ukosowa.webp",
    opis: "Pilarka ukosowa z tarczą 305 mm. Do wyboru solo lub ze stołem (podstawą) Metabo.",
    warianty: [
      { id: "solo", nazwa: "Bez stołu", etykieta: "BEZ STOŁU", img: "pilarka-ukosowa.webp",
        opis: "Sama pilarka Metabo KGS 305 M.",
        ceny: { p1: 100, p23: 85, p4: 70 }, kaucja: [["Kaucja zwrotna", 300]] },
      { id: "ze-stolem", nazwa: "Ze stołem (akcja 500)", etykieta: "ZE STOŁEM", img: "pilarka-ukosowa-stol.webp",
        opis: "Pilarka ze stołem Metabo: lekka podstawa z funkcją wózka, składane regulowane nóżki, wysuwane podpórki na rolkach z ogranicznikiem do cięć seryjnych. Długość 127–250 cm, wysokość podpórek 92–99 cm, maks. obciążenie 250 kg, ciężar stołu 23 kg.",
        ceny: { p1: 130, p23: 110, p4: 90 }, kaucja: [["Kaucja zwrotna", 500]] }
    ],
    parametry: [["Piła tarczowa", "305 × 30 mm"], ["Maks. szerokość cięcia 90° / 45°", "305 / 215 mm"], ["Maks. głębokość cięcia 90° / 45°", "110 / 67 mm"], ["Regulacja stołu obrotowego lewo / prawo", "50° / 60°"], ["Pochylenie piły lewo / prawo", "47° / 47°"], ["Moc znamionowa S1 100% / S6 20%", "1600 W / 2000 W"], ["Prędkość obrotowa jałowa / pod obciążeniem", "3700 / 3000 obr./min"], ["Prędkość cięcia", "59 m/s"], ["Powierzchnia odkładcza", "345 × 770 mm"], ["Wymiary", "780 × 500 × 657 mm"], ["Długość kabla", "2 m"], ["Ciężar (bez stołu)", "18,6 kg"]],
    zastosowanie: [],
    akcesoria: [["Zużycie tarczy do ukośnicy do 216 mm", "20 zł"], ["Zużycie tarczy do ukośnicy do 305 mm", "30 zł"]]
  },
  {
    id: "wiertnica-diamentowa", lp: 6, kategoria: "wiertnice", tag: "Wiertnice",
    nazwa: "Wiertnica diamentowa", model: "Eibenstock ESD 162",
    img: "wiertnica-diamentowa.webp",
    opis: "Wiertnica diamentowa z miękkim udarem, moc 2200 W, wiercenie optymalnie do 162 mm. Do wyboru solo lub ze stojakiem.",
    warianty: [
      { id: "solo", nazwa: "Bez stojaka", etykieta: "BEZ STOJAKA", img: "wiertnica-diamentowa.webp",
        opis: "Sama wiertnica Eibenstock ESD 162.",
        ceny: { p1: 140, p23: 120, p4: 100 }, kaucja: [["Kaucja zwrotna", 500]] },
      { id: "ze-stojakiem", nazwa: "Ze stojakiem", etykieta: "ZE STOJAKIEM", img: "wiertnica-diamentowa-stojak.webp",
        opis: "Wiertnica Eibenstock ESD 162 ze statywem wiertniczym BST 182 V/S. Kolumna regulowana do 45° (wiercenie pod kątem), montaż podstawy kotwami lub próżniowo (wymagany zestaw próżniowy).",
        parametry: ESD162.concat([["Statyw", "BST 182 V/S"], ["Wysokość kolumny", "995 mm"], ["Skok", "700 mm"], ["Pochylenie kolumny", "do 45°"], ["Mocowanie podstawy", "Kotwy lub próżnia (wymagany zestaw próżniowy)"]]),
        ceny: { p1: 180, p23: 150, p4: 120 }, kaucja: [["Kaucja zwrotna", 800]] }
    ],
    parametry: ESD162,
    zastosowanie: ["Na sucho: cegła, silikaty, klinkier, mury wapienno-piaskowe", "Na mokro: beton, beton zbrojony, asfalt, kamień naturalny", "Otwory w technice sanitarnej, grzewczej i wentylacyjnej"],
    akcesoria: [["Korona diamentowa do 52 mm (zużycie)", "30 zł"], ["Korona 53–82 mm", "40 zł"], ["Korona 83–112 mm", "50 zł"], ["Korona 113–132 mm", "60 zł"], ["Korona powyżej 132 mm", "70 zł"]]
  },
  {
    id: "odkurzacz-przemyslowy", lp: 7, kategoria: "myjki", tag: "Odkurzacze",
    nazwa: "Odkurzacz przemysłowy", model: "Starmix iPulse L-1635 Basic",
    img: "odkurzacz.webp",
    opis: "Odkurzacz przemysłowy z elektromagnetycznym oczyszczaniem filtra w czasie pracy, zbiornik 35 l, praca na mokro, gniazdo narzędziowe.",
    ceny: { p1: 90, p23: 75, p4: 60 }, kaucja: [["Kaucja zwrotna", 300]],
    parametry: [["Moc silnika", "1600 W"], ["Pojemność zbiornika", "35 l"], ["Oczyszczanie filtra", "Elektromagnetyczne w czasie pracy"], ["Praca bez worka z gipsem", "Tak"], ["Praca na mokro", "Tak"], ["Gniazdo narzędziowe", "Sieciowe"], ["Regulacja siły ssania", "Płynna"], ["Funkcja wydmuchu", "Tak"], ["Podciśnienie", "280 (jednostka do potwierdzenia)"], ["Długość węża ssącego", "3,20 m"], ["Wąż antystatyczny", "Nie"], ["Wymiary (dł. × szer. × wys.)", "530 × 400 × 560 mm"], ["Waga z opakowaniem", "20,89 kg"]],
    zastosowanie: [],
    akcesoria: [["Worki do odkurzacza", "10 zł / szt."]]
  },
  {
    id: "agregat-malarski", lp: 8, kategoria: "agregaty", tag: "Agregaty",
    nazwa: "Agregat malarski", model: "Wabrotech WT28",
    img: "agregat.webp",
    opis: "Tłokowy (bezpowietrzny) agregat malarski z bezszczotkowym silnikiem 2200 W, ciśnienie do 227 bar, wydajność 2,8 l/min.",
    ceny: { p1: 160, p23: 140, p4: 120 }, kaucja: [["Kaucja zwrotna", 500]],
    parametry: [["Typ", "Tłokowy (bezpowietrzny), malarski"], ["Moc", "2200 W"], ["Silnik", "Bezszczotkowy"], ["Wydajność pompy", "2,80 l/min"], ["Maks. ciśnienie robocze", "227 bar / 3290 PSI"], ["Ciśnienie regulowane elektronicznie", "Tak"], ["Płynny tryb pracy", "Tak"], ["Zasilanie", "230 V / 50 Hz"], ["Zalecane zabezpieczenie", "C20"], ["Maks. rozmiar dyszy", "1 pistolet – 0,025″, 2 pistolety – 0,017″"], ["Wąż", "15 m – 1/4\" (maks. 60 m)"], ["Dysze w zestawie", "517, 519"], ["Optymalna powierzchnia malowania", "50 000 m²/rok"], ["Wymiary (D × Sz × W)", "420 × 350 × 450 mm"], ["Waga", "16 kg"]],
    zastosowanie: [],
    akcesoria: [["Dysza agregatu", "20 zł / szt."], ["Czyszczenie agregatu", "50 zł"]]
  },
  {
    id: "wiertnica-glebowa", lp: 9, kategoria: "wiertnice", tag: "Wiertnice",
    nazwa: "Wiertnica glebowa spalinowa", model: "Majster Pro MP-0405",
    img: "wiertnica-glebowa.webp",
    opis: "Spalinowa wiertnica glebowa (świder) z silnikiem 2-suwowym 6 KM, obsługa 1- lub 2-osobowa. W zestawie wiertła Gryzzly 100/200/300 mm oraz przedłużki 80 cm i 30 cm (sprężynowa).",
    ceny: { p1: 70, p23: 60, p4: 50 }, kaucja: [["Kaucja zwrotna", 300]],
    parametry: [["Moc silnika", "6 KM"], ["Silnik", "2-suwowy, chłodzony powietrzem"], ["Pojemność skokowa", "52 cm³"], ["Obroty silnika maks.", "7000 obr./min"], ["Gaźnik", "Membranowy"], ["Rozruch", "Ręczny"], ["Praca", "Ciągła"], ["Sprzęgło", "Odśrodkowe"], ["Wał", "Hartowany"], ["Mieszanka paliwowa", "1:25"], ["Zbiornik paliwa", "1,0 l"], ["Typ urządzenia", "1-osobowy / 2-osobowy"], ["Maks. średnica wiertła", "300 mm"], ["Gaźnik / rozruch", "EASY SRT"], ["Przekładnia", "Prosta, smarowana smarem"], ["Złącze trzpienia i wierteł", "EURO"], ["Rama", "Stalowa, gumowana rama HEXAGON"], ["Wiertła w zestawie", "Gryzzly 100 mm, 200 mm, 300 mm"], ["Przedłużki w zestawie", "Przedłużka do świdra 80 cm, przedłużka sprężynowa 30 cm"], ["Waga", "DO_UZUPELNIENIA"]],
    zastosowanie: [],
    akcesoria: [["Uszkodzenie wiertła", "60 zł / szt."]]
  }
];

/* Cennik akcesoriów / zużycia (z ulotki) */
var AKCESORIA = [
  { tytul: "Korony diamentowe (zużycie)", img: "korony.webp", opis: "Opłata za zużycie koron diamentowych naliczana według średnicy i stopnia zużycia.",
    pozycje: [["do 52 mm", "30 zł"], ["53–82 mm", "40 zł"], ["83–112 mm", "50 zł"], ["113–132 mm", "60 zł"], ["powyżej 132 mm", "70 zł"]] },
  { tytul: "Tarcze diamentowe (zużycie)", img: "tarcze.webp", opis: "Opłata za zużycie tarczy diamentowej w zależności od średnicy.",
    pozycje: [["do 230 mm", "20 zł"], ["231–350 mm", "30 zł"], ["powyżej 350 mm", "40 zł"]] },
  { tytul: "Gaz i materiały spawalnicze", img: "gaz.webp", opis: "Koszt zużycia gazu oraz materiałów spawalniczych.",
    pozycje: [["Gaz (MB 15) – 1/2 butli", "30 zł"], ["Gaz (MB 15) – pełna butla", "60 zł"], ["Drut spawalniczy", "30 zł / 1 kg"], ["Elektrody", "20 zł / 1 kg"]] },
  { tytul: "Tarcza do ukośnicy (zużycie)", img: "tarcza-ukosnica.webp", opis: "Opłata za zużycie tarczy w pile ukosowej.",
    pozycje: [["do 216 mm", "20 zł"], ["do 305 mm", "30 zł"]] },
  { tytul: "Worki do odkurzacza", img: "worki.webp", opis: "Worki jednorazowe do odkurzacza przemysłowego.",
    pozycje: [["1 szt.", "10 zł"]] },
  { tytul: "Dysze i czyszczenie agregatu malarskiego", img: "dysza.webp", opis: "Koszt zużycia dysz lub czyszczenia torem hydraulicznym.",
    pozycje: [["Dysza", "20 zł / szt."], ["Czyszczenie agregatu", "50 zł"]] },
  { tytul: "Detergent do myjki ciśnieniowej", img: "detergent.webp", opis: "Koszt zużycia środka czyszczącego.",
    pozycje: [["1 litr", "10 zł"]] },
  { tytul: "Uszkodzenie wiertnicy glebowej", img: "wiertlo-glebowe.webp", opis: "Wymiana wiertła w wiertnicy glebowej.",
    pozycje: [["Wiertło", "60 zł / szt."]] },
  { tytul: "Uszkodzenie lub zagubienie sprzętu", img: "uwaga.webp", opis: "Koszt naprawy lub zakupu nowego sprzętu ustalany indywidualnie w zależności od rodzaju uszkodzenia lub zagubienia.",
    pozycje: [] }
];
