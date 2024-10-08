let suggestions = [
  "AGUA ACQUISSIMA C-GAS 1,5L",
  "AGUA ACQUISSIMA C-GAS 310ML",
  "AGUA ACQUISSIMA C-GAS 350ML",
  "AGUA ACQUISSIMA S-GAS 310ML",
  "AGUA ACQUISSIMA S-GAS 350ML",
  "AGUA CRYSTAL C-GAS 350ML",
  "AGUA CRYSTAL S-GAS COPO 310ML",
  "AGUA CRYSTAL S-GAS 350ML",
  "AGUA MINALBA S-GAS 510ML",
  "AGUA PASSA QUATRO S-GAS 510ML",
  "AGUA MAMBA S-GAS 350ml",
  "AGUA MAMBA C-GAS 350ml",
  "AGUA TONICA ANTAR 1L",
  "AGUA TONICA ANTAR 350ML",
  "AGUA TONICA ANTAR DIET 350ML",
  "AGUA TONICA ANTAR GENGIBRE 269ML",
  "AGUA TONICA ANTAR LIMOES 269ML",
  "AGUA TONICA ANTAR ZERO 1L",
  "AGUA TONICA ANTAR ZERO 350ML",
  "AGUA TONICA FYS 350ML",
  "AGUA TONICA FYS ZERO 350ML",
  "AGUA TONICA SCHW 250ML",
  "AGUA TONICA SCHW 350ML",
  "AGUA TONICA SCHW S AÇUCAR 350ML",
  "AGUA TONICA VERMONT 1L",
  "AGUA TONICA VERMONT 310ML",
  "CLASH'D FRUTAS VERMELHAS 269ML",
  "CLASH'D LIMAO 269ML",
  "CLASH'D MAÇÃ 269ML",
  "COCA COLA 250ML",
  "COCA COLA 350ML",
  "COCA COLA 600ML",
  "COCA COLA ZERO 250ML",
  "COCA COLA ZERO 350ML",
  "DOLLY 2L",
  "FANTA GUARANA 350ML",
  "FYS GUARANA 350ML",
  "FYS LARANJA 350ML",
  "FYS LIMAO 350ML",
  "GUARANA ANTAR 350ML",
  "GUARANA ANTAR DIET 350ML",
  "GUARANA ANTAR ZERO 350ML",
  "GUARAVITA 290ML",
  "H2OH CITRUS 500ML",
  "H2OH LIMAO 500ML",
  "H2OH LIMONETO 500ML",
  "PEPSI BLACK 200ML",
  "PEPSI COLA 2L",
  "SUKITA 2L",
  "SCHWEPPES CITRUS 350ML",
  "SCHWEPPES CITRUS LEVE EM AÇÚCARES 350ML",
  "ITUBAINA 355ML",
  "ITUBAINA ORIGINAL LATA 350ML",
  "ITUBAINA ZERO 350ML",
  "SPRITE 310ML",
  "SPRITE 350ML",
  "SPRITE 510ML",
  "SPRITE LEMOM FRESH 355",
  "SUKITA 2L",
  "AMSTEL 350ML",
  "AMSTEL ULTRA 350ML",
  "AMSTEL LAGER 355ML",
  "AMSTEL LARGE ULTRA 275ML",
  "AMSTEL VIBES FRUIT PUNCH 269ML",
  "Austria DUNKEL PURO MALTE 600ML",
  "AUSTRIA LAGER PURO MALTE 355ML",
  "BADEN AMERIC 600ML",
  "BADEN CRISTAL 350ML",
  "BADEN CRISTAL 600ML",
  "BADEN GOLDEN 350ML",
  "BADEN GOLDEN 600ML",
  "BADEN IPA MARACUJA 350ML",
  "BADEN IPA MARACUJA 600ML",
  "BADEN PEACH 600ML",
  "BADEN PILCRIST 600ML",
  "BADEN WITBIER 600ML",
  "BLUE MOON 355ML",
  "BRAHMA MALZBIER 350ML",
  "CAMPARI 998ML",
  "DUNKEL 600ML",
  "DRY STOUT 473ML",
  "DARK LAGER CUMARU 1L",
  "EISENBAHN IPA 355ML",
  "EISENBAHN PILSEN 355ML",
  "EISENBAHN UNFILTERED 355ML",
  "EISENBAHN WEIZEMBIER 355ML",
  "ESTRELLA GALICIA PILSEN 355ML",
  "GERMAN PILSEN 355ML",
  "GERMAN PILSEN 600ML",
  "HEFE WEIZEN 600ML",
  "HEINEKEN 0,0% 330ML",
  "HEINEKEN 350ML",
  "HEINEKEN LONGNECK 330ML",
  "HEINEKEN PIL 330ML",
  "HEINEKEN PIL 600ML",
  "IMPERIO GOLD 330ML",
  "KRUG 20 600ML",
  "KRUG CALUNIA 500ML",
  "KRUG IGNORANCIA 500ML",
  "KRUG INOCENCIA 500ML",
  "KRUG LAGER 355ML",
  "KRUG RANCOR 500ML",
  "KRUG REMORSO 500ML",
  "KRUG SUBMISSAO 500ML",
  "LAGUNITAS IPA 335ML",
  "STRAAT IPA 600ML",
  "STRAAT PALE 600ML",
  "STRAAT PEROLA NEGRA 600ML",
  "STRAAT PILSEN 600ML",
  "STRAAT RED ALE 600ML",
  "STRAAT WEISS 600ML",
  "STRAAT WITBIER 600ML",
  "THEREZÓPOLIS LN 355ML",
  "WIENBIER 56 BLACK 473ML",
  "YELLOW HOPS 335ML",
  "YELLOW HOPS 355ML",
  "51 DESCARTAVEL 965ML",
  "51 RETORNAVEL 965ml",
  "51 ICE 275ML",
  "51 ICE MARACUJA 275ML",
  "ABSOLUT EXTRAKT 750ML",
  "APERITIVO AMARO RAMAZZOTTI 700ML",
  "APERITIVO APEROL 750ML",
  "APERITIVO BITTER CAMPARY 900ML",
  "APERITIVO BITTER CAMPARY MILANO 998ML",
  "APERITIVO FERNET FENETTI 900ML DUBAR",
  "APERITIVO JAGERMEISTER 700ML",
  "APERITIVO ROSATO RAMAZZOTTI 700ML",
  "BARRIL HEINEKEN 30L",
  "BARRIL HEINEKEN 50L",
  "BEB LACTEA ZERO 3560G",
  "BITTER ANGOSTURA AROMATIC 100ML",
  "BITTER ANGOSTURA ORANGE 100ML",
  "CACHAÇA ASA BRANCA 980ML",
  "CACHAÇA BATISTA AMBURANA 700ML",
  "CACHAÇA BATISTA CARVALHO 700ML",
  "CACHAÇA BATISTA PRATA 700ML",
  "CACHAÇA BOAZINHA 700ML",
  "CACHAÇA CANINHA RESERVA 51 700ML",
  "CACHAÇA CANINHA RESERVA 51 RARA 700ML",
  "CACHAÇA CANINHA RESERVA 51 SINGULAR 700ML",
  "CACHAÇA CANINHA RESERVA 51 UNICA 700ML",
  "CACHAÇA CASTANHEIRA 700ML",
  "CACHAÇA ESPIRITO DE MINAS 700ML",
  "CACHAÇA JANEIRO 700ML",
  "CACHAÇA PIRASSUNUNGA 965ML",
  "CACHAÇA SALINAS TRAD 600ML",
  "CACHAÇA SALINAS UMBURANA LUXO 700ML",
  "CACHAÇA SELETA OURO 1000ML",
  "CACHAÇA SELETA PRATA 1000ML",
  "CACHAÇA SEPULTURA 700ML",
  "CACHAÇA VELHO BARREIRO 910ML",
  "CHOPP AMSTEL LAGER",
  "CHOPP BADEN IPA",
  "CHOPP BLUE MOON",
  "CHOPP HEINEKEN PILSEN",
  "CHOPP LAGUNITAS IPA",
  "CHOPP STRAAT RUBI",
  "CONHAQUE FUNDADOR IMPORTADO 750ML",
  "CONHAQUE HINE 700ML",
  "CONHAQUE MARTELL 700ML",
  "COQUETEL COMPOSTO DOMECQ 12X1L",
  "ENERGETICO APPLE DREAM",
  "ENERGETICO MAGO LOCO 473ML",
  "ENERGETICO MONSTER 269ML",
  "ENERGETICO RED BULL 250ML",
  "ENERGETICO RED BULL TROPICAL 250ML",
  "ENERGETICO ULT PARADISE 269ML",
  "ENERGETICO ULTRA WATERMELON 473ML",
  "ENERGETICO VIBE ENERGY 250ML",
  "ESPUMANTE CAMPO LARGO BRUT 750ML",
  "ESPUMANTE CAMPO LARGO MOSCATEL ROSE 750ML",
  "ESPUMANTE CASA PERINI BRUT 750ML",
  "ESPUMANTE CASA PERINI ICE ROSE 750ML",
  "ESPUMANTE CASA PERINI ROSE 750ML",
  "ESPUMANTE CASA PERINI BRUT CHARMAT",
  "ESPUMANTE CASA PERINI BRUT ROSE",
  "ESPUMANTE MIOLO BRUT 750ML",
  "ESPUMANTE LUNAR MOSCATEL ROSE 750ML",
  "ESPUMANTE PROSECCO SALTON BRUT 750ML",
  "ESPUMANTE SALTON SERIES BRUT 750ML",
  "ESPUMANTE TERRANOVA BRUT BCO 750ML",
  "ESPUMANTE TERRANOVA BRUT ROSE 750ML",
  "ESPUMANTE VEUVE DEVIENNE BRUT 750ML",
  "GIN BEEFEATER 24 750ML",
  "GIN BEEFEATER LONDON 750ML",
  "GIN BEEFEATER PINK 750ML",
  "GIN BOMBAY SAPPHIRE 750ML",
  "GIN BULLDOG 750ML",
  "GIN TANQUERAY 750ML",
  "ISOTONICO POWERADE LARANJA 500ML",
  "ISOTONICO POWERADE LIMAO 500ML",
  "ISOTONICO POWERADE MOUNTAIN 500ML",
  "ISOTONICO POWERADE UVA S CAP 500ML",
  "KIT GIN TONICA ESPEC",
  "KIT KRUG - AMERICAN DOUBLE IPA 600ML",
  "KIT KRUG TAÇA 500ML",
  "LICOR 43 DIEGO ZAMORA 700ML",
  "LICOR AMARETTO 700ML",
  "LICOR AMARULA 750ML",
  "LICOR BAILEYS 750ML",
  "LICOR CACAU 900ML",
  "LICOR COINTREAU 700ML",
  "LICOR CREME CAFÉ KAHLUA 1L",
  "LICOR CREME CAFÉ KAHLUA 750ML",
  "LICOR GRAND MARNIER ROUGE 700ML",
  "LICOR LIMONCELLO 750ML",
  "LICOR MARIE BLIZARD PESSEGO 700ML",
  "LICOR MARIE BRIZARD CACAU 700ML",
  "LICOR MARIE BRIZARD CURACAU 700ML",
  "LICOR MARIE BRIZARD MENTA 700ML",
  "LICOR MARIE BRIZARD TRIPLE SEC 700ML",
  "LICOR PESSEGO STOCK 720ML",
  "LICOR RICHARD 1L",
  "MARTINI VERMOUTH BIANCO 750ML",
  "MARTINI VERMOUTH DRY 750ML",
  "MARTINI VERMOUTH ROSSO 750ML",
  "MOSCOW MULE 750ML",
  "MOSCOW MULE CONCENTRADO 270G",
  "NECTAR DELVALE UVA 290ML",
  "NEGRONI 750ML",
  "RUM HAVANA CLUB 7 ANOS 700ML",
  "RUM HAVANA CLUB 3 ANOS 700ML",
  "RUM MONTILLA CARTA BRANCA 1L",
  "RUM MONTILLA CARTA OURO 36 1L",
  "RUM MONTILLA CRISTAL 1L",
  "SAKE AZUMA KIRIN 600ML",
  "SAKE AZUMA SOF 740ML",
  "SAKE SAKAI 750ML",
  "SMIRNOFF ICE 275ML",
  "STEINHAEGER BECOSA 980ML",
  "SUCO DE TOMATE",
  "SUCO DEL VALLE LARANJA 1L",
  "SUCO DEL VALLE MANGA 1L",
  "SUCO GRAVIOLA 1L",
  "SUCO LARANJA PRATS 1,7L",
  "TEQUILA ALTOS PRATA 750ML",
  "TEQUILA DON JULIO BLANCO 750ML",
  "TEQUILA GILA 750ML",
  "TEQUILA JOSE CUERVO OURO 750ML",
  "TEQUILA JOSE CUERVO PRATA 750ML",
  "TEQUILA JOSE CUERVO REPOSADO 750ML",
  "TEQUILA MILAGRO 750ML",
  "VERMUT CINZANO 1L",
  "VERMUT PUNTA MES CARPANO 1L",
  "VODKA ABSOLUT 1L",
  "VODKA ABSOLUT 750ML",
  "VODKA ABSOLUT ELYX 4,5L",
  "VODKA ABSOLUT EXTRAKT 750ML",
  "VODKA ABSOLUT RASPBERRY 1L",
  "VODKA ABSOLUT VANILLA 750ML",
  "VODKA CIROC 750ML",
  "VODKA ED HARDY 1L",
  "VODKA GREY GOOSE 750ML",
  "VODKA KETEL ONE 1L",
  "VODKA ORLOFF 1L",
  "VODKA SMIRNOFF ICE LONG NECK 275ML",
  "WHISKY BALLANTINES 1L",
  "WHISKY BALLANTINES AMERICAN BARREL 750ML",
  "WHISKY BALLANTINES FINEST 750ML",
  "WHISKY BLACK LABEL 1L",
  "WHISKY RED LABEL 1L",
  "WHISKY BUCHANANS 1L",
  "WHISKY BUCHANANS DELUX",
  "WHISKY CHIVAS 12 750L",
  "WHISKY CHIVAS 12 1L",
  "WHISKY CHIVAS 13 750ML",
  "WHISKY CHIVAS 13 1L",
  "WHISKY CHIVAS 15 750ML",
  "WHISKY CHIVAS 15 1L",
  "WHISKY GLENLIVET 750ML",
  "WHISKY JACK DANIELS 1L",
  "WHISKY JACK DANIELS HONEY 1L",
  "WHISKY JAMESON 750ML",
  "WHISKY JAMESON IPA 750ML",
  "WHISKY JOHNNIE WALKER BLOND 750ML",
  "WHISKY ROYAL SALUTE 21 ANOS 700ML",
  "WHISKY WALKER BLACK",
  "WHISKY WALKER RED",
  "XAROPE DILUTE MACA",
  "XAROPE MATHIEU TEISSEIRE RASPBERRY 700ML",
  "XAROPE MONIN CARAMELO 700ML",
  "XAROPE MONIN CRANBERRY 700ML",
  "XAROPE MONIN GRENADINI 700ML",
  "XAROPE MONIN MAÇA VERDE 700ML",
  "XAROPE MONIN TANGERINA 700ML",
  "ALAMOS MALBEC",
  "ALAMOS RED BLEND",
  "ALMA NEGRA",
  "CARMEN INSIGNE CARMENERE",
  "CATENA MALBEC",
  "CRIOS ROSE",
  "DV CATENA CABERNET MALBEC",
  "EL ENEMIGO MALBEC",
  "EL VIAJERO BONARDA",
  "EL VIAJERO CABERNET SAUVGNON",
  "EL VIAJERO CHARDONNAY",
  "EL VIAJERO MALBEC",
  "EL VIAJERO MALBEC ROSE",
  "FINCA GABRIEL MERLOT",
  "FLOR DE CRASTO TINTO",
  "GOULEYANT MALBEC CAHORS",
  "KALFU SAUVIGNON BLANC",
  "LEVITY VINHO VERDE",
  "LOMAS DEL MARQUES",
  "PRIMITIVO LEVORATO PUGLIA",
  "QUINTA DAS MURÇAS ASSOBIO TINTO",
  "QUINTA DO CRASTO TINTO 375ML",
  "QUINTA DOS BONS VENTOS",
  "QUINTA DOS BONS VENTOS TINTO",
  "QUNQAY MALBEC",
  "SAN LORENZO ANTICO GAURO MERLOT",
  "VINHO ARG TORO MALBEC 750ML",
  "VINHO BRANCO CHARDONNAY",
  "VINHO BRANCO COZIMENTO",
  "VINHO BRANCO KALFU RESERA MOLU SAUV BLANC 750ML",
  "VINHO BRANCO LILLET 750ML",
  "VINHO CABERNET 750ML",
  "VINHO CHARDONNAY 750ML",
  "VINHO CHILENO CARMENERE 750ML",
  "VINHO CRIOS ROSE DE MALBEC 750ML",
  "VINHO ITA GAURO MERLOT 750ML",
  "VINHO ITA LEVORATO 750ML",
  "VINHO JORGE RUBIO FINCA GABRIEL MERLOT ROBLE ",
  "VINHO KUTRAL SAUVIGNON BLANC 1L",
  "VINHO LEVITY VERDE BRANCO BC750",
  "VINHO LOMAS DMARQUES 750ML",
  "VINHO MIOLO RESER PINOT NOIR 750ML",
  "VINHO ROSE BONS VENTOS 750ML",
  "VINHO ROSE BONS VENTOS FRESH 750ML",
  "VINHO ROSE LILLET 750ML",
  "VINHO TEMPRANILLO 750ML",
  "VINHO TINTO ALAMOS 2022 750ML",
  "VINHO TINTO ALAMOS MALBEC 2021",
  "VINHO TINTO ALAMOS RED BLEND 2021",
  "VINHO TINTO ALAMOS RED BLEND 2022",
  "VINHO TINTO ALMA NEGRA 2019",
  "VINHO TINTO ASSOBIO DOURO 750ML",
  "VINHO TINTO BONS VENTOS 375",
  "VINHO TINTO BONS VENTOS 750ML",
  "VINHO TINTO CABERNET MALBEC 2020",
  "VINHO TINTO CABERNET SAUVIGNON 2018",
  "VINHO TINTO CARMEN INS CARMENERE 2021",
  "VINHO TINTO CASTRO DOURO 375ML",
  "VINHO TINTO CATENA MALBEC 2019 ",
  "VINHO TINTO COZIMENTO",
  "VINHO TINTO CRIOS MALBEC 750ML",
  "VINHO TINTO ENEMIGO MALBEC 2019",
  "VINHO TINTO FLOR DE CASTRO 375ML",
  "VINHO TINTO FLOR DE CASTRO 750ML",
  "VINHO TINTO GOULEYANT MALBEC 2019",
  "VINHO TINTO GOULEYANT TINTO 750ML",
  "VINHO TINTO HSM COLHEITA SELEC BCO 750ML",
  "VINHO TINTO JORGE RUBIO ",
  "VINHO TINTO KALFU RESERVA MOLU PINOT NOIR 750ML",
  "VINHO TINTO SECO BONARDA VARIETAL",
  "VINHO TINTO SECO CABERNET SAUVIG VARIETAL",
  "VINHO TINTO SECO MALBEC ROSE VARIETAL",
  "VINHO TINTO SECO MALBEC VARIETAL",
  "VINHO TINTO SUAVE ANGELICA ZAPATA CABERNET SAUVIGNON 2018 750ML",
  "VINHO TINTO VENTISQUERO RESERVA CAB SAUVIG 750 ML",
  "VINHO TINTO VENTISQUERO RESERVA CARMENERE 750ML",
  "VINHO TINTO VENTISQUERO RESERVA PINOT NOIR 750ML",
  "VINHO TORO CENTENARIO MALBEC 750ML",
  "VINHO TORO CENTENARIO ROSE 750ML",
  "VINHO MARGARITA CHANCHOS MALBEC 750ML" 

];


                



                