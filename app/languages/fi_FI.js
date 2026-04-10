/*
 * Copyright (c) 2017–present Felipe de Leon <fglfgl27@gmail.com>
 *
 * This file is part of SmartTwitchTV <https://github.com/fgl27/SmartTwitchTV>
 *
 * SmartTwitchTV is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * SmartTwitchTV is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with SmartTwitchTV.  If not, see <https://github.com/fgl27/SmartTwitchTV/blob/master/LICENSE>.
 *
 */

//Spacing for release maker not trow errors from jshint
function fi_FILang() {
    // This is a false/true var change if day comes first in your language eg (27/12/2010) day 27 month 12 year 2010
    //Then copy this and set it to true, if doesn't don't copy it
    Main_IsDayFirst = true;

    // This is the size of side pannel a adjustments may be needed here so it can fit all words in the horizontal axis
    // If it need ajustment or yours language just copy the below line and change it value until it does
    Sidepannel_MoveldefaultMargin = 14.5;

    //Below are variables to translate
    STR_NUMBER_SEPARATOR = ',';
    STR_KEY_UP_DOWN = 'PG up/down';
    STR_KEY_MEDIA_FF = 'tai eteenpäin kelaus -näppäintä';
    STR_GUIDE_EXTRA = 'tai paina näppäintä 2';
    STR_GUIDE_EXTRA2 = 'tai seuraava raita -medianäppäintä';
    STR_REFRESH = 'Päivitä';
    STR_SEARCH = 'Haku';
    STR_SETTINGS = 'Asetukset';
    STR_CONTROLS = 'Näppäimet';
    STR_ABOUT = 'Tietoja';
    STR_HIDE = 'Piilota';
    STR_SEARCH_EMPTY = 'Hakusana on tyhjä';
    STR_SEARCH_RESULT_EMPTY = 'Hakutuloksia ei löytynyt';
    STR_SWITCH = 'Vaihda näkymää';
    STR_SWITCH_USER = 'Vaihda käyttäjänäkymään';
    STR_SWITCH_VOD = 'Vaihda: VODit tai kohokohdat';
    STR_SWITCH_CLIP = 'Vaihda: Aika (24h, 7d, 30d, kaikki)';
    STR_GO_TO = 'Mene näkymään';
    STR_USER = 'Käyttäjä';
    STR_LIVE = 'Live';
    STR_GAMES = 'Pelit';
    STR_PLAYING = 'Playing';
    STR_FOR = ' ';
    STR_WATCHING = 'Katseluaika';
    STR_WAITING = 'Odotusaika';
    STR_SINCE = 'Alkaen';
    STR_AGAME = 'Peli';
    STR_PLACEHOLDER_PASS = 'Anna salasanasi...';
    STR_PLACEHOLDER_SEARCH = 'Kirjoita hakusi...';
    STR_PLACEHOLDER_OAUTH = 'Anna autorisointiavaimesi...';
    STR_PLACEHOLDER_USER = 'Anna käyttäjätunnuksesi ja paina Enter...';
    STR_PLACEHOLDER_PRESS = 'Paina Enter- tai Select-nappia, jotta ';
    STR_CHANNELS = 'Kanavat';
    STR_CHANNEL = 'Kanava';
    STR_GOBACK_START = 'Edellinen näkymä: Paina paluu';
    STR_IS_OFFLINE = 'on päättynyt';
    STR_CHECK_HOST = ', tarkistaa jakajaa';
    STR_IS_SUB_ONLY = 'Video on saatavilla vain tilaajille';
    STR_IS_SUB_ONLY_ERROR = 'on vain tilaajille.';
    STR_NOKEY_GENERAL_WARN = ', mene sivuvalikossa (ylin valinta) Lisää käyttäjä tai Käyttäjä: Vaihda, lisää, avain, paina enter';
    STR_REFRESH_PROBLEM = 'Yhteys epäonnistui tai sisältöä ei ole saatavilla. Yritä päivittää';
    STR_REFRESH_PROBLEM_ENTER = 'Yhteys epäonnistui tai sisältöä ei ole saatavilla. Yritä päivittää.';
    STR_REFRESH_PROBLEM_ENTER_LANG =
        'Yhteys epäonnistui tai valitulle kielelle ei ole sisältöä. Vaihde sisällön kieli (pidä vasemmalle-näppäintä) tai paina enter päivittääksesi';
    STR_NO = 'Ei';
    STR_FOR_THIS = 'tälle';
    STR_PLAYER_PROBLEM = 'Yhteys epäonnistui, videon lataamienen epäonnistui. Poistutaan ...';
    STR_VODS = 'VODit';
    STR_HIGHLIGHTS = 'Kohokohdat';
    STR_CLIPS = 'Klipit';
    STR_CONTENT = 'Sisältö';
    STR_STREAM_ON = 'Striimatut';
    STR_DURATION = 'Kesto';
    STR_VIEW = 'Katso';
    STR_VIEWS = 'Katseluita';
    STR_VIEWER = 'Katsoja';
    STR_VIEWERS = 'Katsojat';
    STR_EXIT_AGAIN = 'Paina uudelleen poistuaksesi';
    STR_EXIT_AGAIN_PICTURE = 'Paina uudelleen poistuaksesi kuva kuvassa -tilasta';
    STR_EXIT_AGAIN_MULTI = 'Paina uudelleen poistuaksesti multisriimitilasta';
    STR_EXIT_MESSAGE = 'Oletko varma, että haluat sulkea sovelluksen?';
    STR_EXIT = 'Poistu';
    STR_CHANGELOG = 'Muutosloki';
    STR_FULL_CHANGELOG = 'Tarkka muutosloki';
    STR_CHANGELOG_SUMMARY = 'Tässä ovat viimeisimmät muutokset. Täydellinen lista alla olevasta linkistä:';
    STR_UPDATE = 'Valitse päivittääksesi';
    STR_UPDATE_CHECK = 'Tarkista päivitykset';
    STR_UPDATE_CHECKING = 'Tarkistetaan päivityksiä...';
    STR_UPDATE_CHECKING_FAIL = 'Päivitysten tarkistaminen epäonnistui';
    STR_NO_UPDATES = 'Sovellus on ajan tasalla';
    STR_UPDATE_CHANGELOG = 'Päivitykset & muutosloki';
    STR_UPDATE_LATEST = 'Viimeisin muutos:';
    STR_UPDATE_FAIL = 'Päivitys automaattisesti epäonnistui, yritä manuaalisesti';
    STR_UPDATE_FAIL_DOWNLOAD = 'Päivityksen lataaminen epäonnistui. Yritä manuaalisesti';
    STR_UPDATE_AVAILABLE = 'APK pävitys saatavilla';
    STR_WEB_UPDATE_AVAILABLE = 'Web-päivitys saatavilla';
    STR_UPDATE_CHECK_SIDE = ', tarkista päivitykset sivuvalikosta';
    STR_UPDATE_LAST_CHECK = 'Viimeksi tarkistettu:';
    STR_UPDATE_OPT = 'Päivtys vaihtoehdot';
    STR_UPDATE_CHECK_FOR = 'Tarkista päivityksiä taustalla';
    STR_UPDATE_SHOW = 'Näytä päivitysikkuna kun päivityksiä on saatavilla';
    STR_UPDATE_SHOW_ARRAY = ['Kyllä', 'Vain pikailmoitukset', 'Ei'];
    STR_UPDATE_START = 'Päivitys alkoi. Tämä voi kestää hetkisen. Ole hyvä ja odota.';
    STR_UPDATE_PLAY = "Jos Play Store ei näytä päivitystä, yritä uudelleen vähän ajan kuluttua.";
    STR_UPDATE_ERROR = 'Tarvitset APK version 3.0.303 tai uudemman, jotta tämä toimisi. Päivitä vanhaan tapaan!';
    STR_UPDATE_WARNING_OK = 'Sovellus on päivitetty';
    STR_CLOSE = 'Sulje';
    STR_MINIMIZE = 'Pienennä';
    STR_CANCEL = 'Peruuta';
    STR_RERUN = 'Uusinta';
    STR_LIVE_CHANNELS = 'Kanavat live';
    STR_LIVE_HOSTS = 'Jakajat';
    STR_LIVE_GAMES = 'Pelit live';
    STR_USER_CHANNEL = 'Seuratut kanavat';
    STR_USER_MY_CHANNEL = 'Kanavani';
    STR_USER_ADD = 'Lisää käyttäjä';
    STR_USER_REMOVE = 'Poista käyttäjä';
    STR_USER_ERROR = "Käyttäjää ei ole";
    STR_USER_HOSTING = 'jakaa';
    STR_USER_HOSTED_BY = 'jaetaan toimesta';
    STR_USER_SET = 'jo asetettu';
    STR_USER_MAKE_ONE = 'Vaihda';
    STR_USER_NUMBER_ONE = 'Ensimmäinen käyttäjä voi nähdä live kanavien syötteen ja seurata tai lopettaa seuraamisen';
    STR_ADD_USER_SH = 'Lisää Twitch-käyttäjä nähdäksesi seuratun sisällön tässä';
    STR_CLIP_DAY = '24h';
    STR_CLIP_WEEK = '7d';
    STR_CLIP_MONTH = '30d';
    STR_CLIP_ALL = 'kaikki';
    STR_JUMP_TIME = 'Siirry'; // To jump (or to move) to a different point in time
    STR_JUMP_TIME_CLICK_AGAIN = 'Paina uudelleen siirtyäksesi';
    STR_JUMP_T0 = 'kohtaan';
    STR_JUMP_CANCEL = 'Siirto peruttu';
    STR_JUMP_TIME_BIG = ', siirtymä aika on pidempi kuin kesto';
    STR_SEC = 'Sek';
    STR_MIN = 'Min';
    STR_MS = 'Ms';
    STR_HR = 'Tuntia';
    STR_SOURCE = 'Lähde';
    STR_TWITCH_TV = 'SmartTV-sovellus Twitchille';
    STR_CLOSE_THIS = 'Paina paluu tai enter sulkeaksesi tämän';
    STR_CLOSE_THIS2 = 'Paina paluu sulkeaksesi tämän';
    STR_CLOSE_THIS3 = 'Paina paluu näyttääksesti päivitysnäkymän tai enter sulkeaksesi tämän';
    STR_PLAYER = 'Soittimeen liittyvät:';
    STR_CHAT = 'Chattiin liittyvät:';
    STR_CHAT_SHOW = 'Näytä chatti';
    STR_CURRENT_VERSION = 'Nyt asennettu versio';
    STR_LATEST_VERSION = 'uusin saatavilla oleva versio';
    STR_CONTROLS_MAIN_2 = 'Toista video: navigoi ylöspäin-, alaspäin-, vasemmalle-, oikealle-näppäimillä. Enter: toista/keskeytä. Esikatsele media näppäin tai 1';
    STR_CONTROLS_MAIN_3 = 'Päivitä näkymän sisältö:';
    STR_CONTROLS_MAIN_4 = 'Poistu sovelluksesta: Valitse poistu sivuvalikosta';
    STR_CONTROLS_MAIN_5 = 'Pakota lopetus: Paina paluu-nappia pohjassa';
    STR_CONTROLS_MAIN_6 = 'Vaihda näkymää: Paina paluu, sitten ylös/alas tai ' + STR_KEY_UP_DOWN + ' ' + STR_KEY_MEDIA_FF;
    STR_CONTROLS_MAIN_10 =
        'Tehdäksesi hakuja: Valitse haku sivuvalikossa. Kirjoita hakusanasi näppäimistöllä ja valitse yksi hakukohteista';
    STR_CONTROLS_MAIN_14 = 'Tietoja sovelluksesta: Valitse tietoja sivuvalikosta';
    STR_ABOUT_INFO_1 = 'Tämä on Android TV Twitch-sovellus, vapaasti kaikkien käytettävissä.';
    STR_ABOUT_INFO_2 =
        'Tämä sovellus ei ole sidoksissa Twitchin kanssa. Tämä on käyttäjän tekemä sovellus, jonka käyttö on mahdollista vain koska Twitch tarjoaa käytettäväksi sovellusrajapinnan (API), jonka kautta sisältöä voi näyttää.';
    STR_ABOUT_INFO_2_SOURCE = 'Tämä versio sovelluksesta on vain selaimessa testaamista varten!';
    STR_ABOUT_INFO_3 = 'Yhteystiedot:';
    STR_ABOUT_INFO_4 = 'Tämä on avoimen lähdekoodin sovellus (GNU General Public License v3.0), käy katsomassa sitä GitHubissa:';

    STR_ABOUT_INFO_6 = 'Nähdäksesi sovelluksen riippuvuudet käytä linkkiä:';
    STR_ABOUT_INFO_18 = 'Puhelinten ja tablettien käyttö:';
    STR_ABOUT_INFO_19 =
        'On mahdollista käyttää sovellusta puhelimella tai tabletilla, mutta se on suunniteltu pääasiassa televisioita varten. Tuki muille laitteille on rajoitettu, eikä sen vuoksi ole julkaistu Play Store -kaupassa. Voit ladata APK-asennustiedoston puhelimelle tai tabletille alla olevasta linkistä:';

    STR_CONTROLS_PLAY_0 = 'tai soittimen alla olevasta valikoista';
    STR_CONTROLS_PLAY_1 = "Näytä tietonäkymä: Paina 'enter', tai suuntanuolia jos chatti tai live-kanavien syöte ei ole näkyvillä";
    STR_CONTROLS_PLAY_2 = 'Sulje video: Paina kaksi kertaa paluu tai pysäytä-medianäppäintä';
    STR_CONTROLS_PLAY_3 = 'Pysäytä/toista video: avaa tietonäkymä ja valitse "Pysäytä"';
    STR_CONTROLS_PLAY_4 = 'Näytä esikaselu näkymä: "ylöspäin"-näppäin';
    STR_CONTROLS_PLAY_5 = "Vaihda videon kuvanlaatua: Valiste 'Kuvanlaatu' soittimen alavalikosta";
    STR_CONTROLS_PLAY_6 = 'Pakota videon päivitys (jos se on jumissa): Vaihda kuvanlaatu samaksi';
    STR_CONTROLS_PLAY_7 = 'Näytä tai piilota chatti: Alaspäin-näppäin tai 3 ' + STR_CONTROLS_PLAY_0;
    STR_CONTROLS_PLAY_8 = 'Muuta chatin sijaintia: Vasemmalle-näppäin, PG-ylös tai takaisinkelaus (VODit ja klipit) ' + STR_CONTROLS_PLAY_0;
    STR_CONTROLS_PLAY_9 = 'Muuta chatin kokoa: Oikealle-näppäin, PG-alas ' + STR_CONTROLS_PLAY_0;
    STR_CONTROLS_PLAY_10 = 'Muuta chatin taustan läpinäkyvyyttä: Muuta soittimen alareunan valikosta';
    STR_CONTROLS_PLAY_11 =
        "Päivitä chattin näkymä (jos se ei näy tai on jumiutunut): Valitse kahdesti 'Pakota chatin poisto' soittimen valikosta " + STR_CHAT_EXTRA;
    STR_CONTROLS_PLAY_12 = "Haku: Avaa tietonäkymä ja valitse 'Haku' ja paina enter";
    STR_CONTROLS_PLAY_13 =
        'Kaikki medianäppäimet ovat tuettuja (toista, pause, pysäytä, seuraava, kelaus jne.), joitain käytetään oikoteinä äänen- tai videonlaadun muutoksin';
    STR_CONTROLS_PLAY_14 =
        'Chatti ja video (vierekkäin): "2"- tai "kelaus eteenpäin"-näppäin. Tämä vaihtaa myös "kuva kuvassa"- ja "50/50"-toimintojen välillä';
    STR_F_DISABLE_CHAT = 'Pakota chatti pois käytöstä';
    STR_OAUTH_IN =
        'Avaimen lisääminen mahdollistaa chat-viestien lähettämisen, lahjatilausten vastaanottamisen, seuraamisasetusten muuttamisen, ja joihinkin sisältöihin nopeamman pääsyn.<br><br>Avaimen lisäämistä ei vaadita, ja se voidaan tehdä koska tahansa myöhemmin.<br><br>Lisätietoja tämän linkin takaa:<br><br>%x<br><br>Joillain laitteilla voi hiiren käyttö olla välttämätöntä autorisoinniin saattamiseksi loppuun.<br><br>Lisää avain';
    STR_USER_CODE = 'Lisää autorisointiavain';
    STR_USER_CODE_OK = 'Avain lisätty onnistuneesti';
    STR_KEY_BAD = 'Avaimen tarkistus epäonnistui. Uusi on lisättävä';
    STR_OAUTH_WRONG = 'Yritit lisätä avaimen käyttäjälle';
    STR_OAUTH_WRONG2 = 'mutta avain on käyttäjälle';
    STR_FOLLOWING = 'Seurattu';
    STR_FOLLOW = 'Ei seurattu';
    STR_IS_SUB_NOOAUTH = "etkä ole lisännyt autorisointiavainta, joten sovellus ei voi tarkistaa tilaustasi.";
    STR_IS_SUB_NOT_SUB = "etkä ole tilannut tätä kanavaa";
    STR_IS_SUB_IS_SUB = 'Olet kanavan tilaaja, mutta tunnistamaton ongelma estää toiston.';
    STR_OAUTH_FAIL = 'Autorisoinnin tarkistus avaimelle epäonnistui. Tarkista avain ja yritä uudelleen.';
    STR_OAUTH_FAIL_USER = "Lisätty avain ei kuulu käyttäjälle";
    STR_NOKEY = 'Ei käyttäjää';
    STR_NOKEY_WARN = 'Sinun tulee asettaa käyttäjä, jotta voit muuttaa kanavien seurantaa.';
    STR_FOLLOW_ISSUE =
        'Kolmannen osapuolen sovellukset eivät voi enää muuttaa kanavien seurantaa. Nappi tulee näkyviin vain jos seuraat jo kanavaa.';
    STR_NOKUSER_WARN = 'Sinun tulee asettaa käyttäjä, jotta voit katsella seurattua sisältöä.';
    STR_RESET = 'Aloita uudelleen';
    STR_CLIP = 'Klippi';
    STR_CHANNEL_CONT = 'Kanavan sisältö';
    STR_NET_DOWN = 'Ei verkkoyhteyttä. Sovellus vaatii toimiakseen internet-yhteyden.';
    STR_NET_UP = 'Verkkoyhteys palautettu';
    STR_FOLLOWERS = 'Seuraajat';
    STR_FOLLOWER = 'Seuraaja';
    STR_CANT_FOLLOW = ", Ei voi muuttaa 'seuraa'-asetusta";
    STR_GAME_CONT = 'Pelin sisältö';
    STR_YES = 'Yes';
    STR_REMOVE_USER = 'Haluatko varmasti poistaa käyttäjän';
    STR_PLACEHOLDER_PRESS_UP = 'Paina "ylöspäin" ';
    STR_FOLLOW_GAMES = 'Seuratut Live Pelit';
    STR_USER_GAMES_CHANGE = 'Vaihda välillä'; // The what now?
    STR_GUIDE = 'Paina "enter"';
    STR_MONTHS = ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marra', 'joulu'];
    STR_DAYS = ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'];
    STR_STARTED = 'Aloitettu';
    STR_VIDEOS = 'Videot';
    STR_REPLAY = 'Uusinta';
    STR_STREAM_END = 'poistutaa';
    STR_STREAM_END_EXIT = "Paina 'takaisin' poistuaksesi";
    STR_FEATURED = 'Etusivu';
    STR_CREATED_AT = 'Luotu';
    STR_OPEN_BROADCAST = 'Avaa video';
    STR_OPEN_LAST_BROADCAST = 'Avaa uusin video';
    STR_IS_LIVE = 'On nyt livenä';
    STR_OPEN_REWIND = 'Avaa takaisinkelaus';
    STR_OPEN_REWIND_SUMMARY = 'Avaa lähetys "takaisinkelaus"-tilassa';
    STR_OPEN_REWIND_FAIL = 'Tälle lähetykselle ei ole takaisinkelausta';
    STR_SHOW_ISLIVE_WARNING = "Näytä 'Lähetys on käynnissä' -ilmoitus";
    STR_SHOW_ISLIVE_WARNING_SUMMARY =
        'Klippejä ja videoita katsellessa, sovellus voi tarkistaa onko tekjiä livenä. Jos tämä on käytössä ilmoitus näytetään. Katsoaksesi suoraa lähetystä käytä soittimen alareunan valikkoa.';
    STR_OPEN_CHAT = 'Avaa chatti tai odota että lähetys jatkuu.';
    STR_STAY_OPEN = 'Pysy lähetyksessä';
    STR_STAY_OPEN_SUMMARY = 'Pysy lähetyksessä, ja sovellus tarkistaa säännöllisesti koska se jatkuu.';
    STR_STAY_CHECK = 'Tarkista onko lähetys jatkunut:';
    STR_STAY_CHECKING = 'Tarkistetaanko onko lähetys jatkunut...';
    STR_STAY_CHECK_LAST = 'Viimeinen tulos:';
    STR_STAY_IS_OFFLINE = 'Lähetys oli offline-tilassa';
    STR_NO_BROADCAST = 'Ei videota';
    STR_NO_BROADCAST_WARNING = 'Tälle leikkeelle ei ole videota';
    STR_NO_CHAT = 'ja sen vuoksi ei chattia';
    STR_IS_NOW = 'on nyt';
    STR_OPEN_HOST = 'Avaa lähettäjä';
    STR_SETTINGS_PLAYER = 'Pelaajaan liittyvä';
    STR_SETTINGS_BUFFER_SIZE = 'Aloituspuskurin koko:';
    STR_SETTINGS_BUFFER_SIZE_SHORT_SUMMARY = 'Hallitsee aloituspuskurin kokoa';
    STR_SETTINGS_BUFFER_SIZE_SUMMARY =
        'Määrittää kuinka paljon dataa ladataan ennen toiston aloittamista. Tämä ei liity maksimipuskurin kokoon, jonka taas määrittää laitteen käytettävissä oleva muistin määrä. Pienmpi asetus käynnistää toiston aiemmin, mikä on yleensä suositeltavaa. Arvon kasvattamien harvoin parantaa laatua ja saattaa aiheuttaa viivettä.';
    STR_SETTINGS_BUFFER_LIVE = 'Lähetyksen aloituspuskuri';
    STR_SETTINGS_BUFFER_VOD = 'Videoiden (menneet lähetykset ja kohokohdat) aloituspuskuri';
    STR_SETTINGS_BUFFER_CLIP = 'Leikkeiden aloituspuskuri';
    STR_SETTINGS_LANG = 'Kieli';
    STR_LOADING_CHAT = 'Chatti: yhdistetään...';
    STR_LOADING_FAIL = 'Yhdistämien aikakatkesi. Kirjautuminen epäonnistui ...';
    STR_CHAT_CONNECTED = 'Chatti: yhdistetty';
    STR_CHAT_SEND_DELAY = 'Viesti lähetetty. "Viive"-asetuksen vuoksi se tulee näyviin piakkoin.';
    STR_CHAT_DELAY = 'Chatti: viive';
    STR_VOD_HISTORY_BASE = 'Aloita toisto alusta, tai jatka siitä mihin aiemmin jäätiin.';
    STR_VOD_HISTORY = STR_VOD_HISTORY_BASE + ' Video?';
    STR_VOD_HISTORY_FORM_LIVE = STR_VOD_HISTORY_BASE + ' Lähetys?';
    STR_FROM = 'Kohdasta:' + STR_BR;
    STR_FROM_START = STR_FROM + 'alku';
    STR_CHAT_END = 'Chatti: Chatti on päättynyt.';
    STR_RECENT = ', Viimeisin';
    STR_VIWES = ', Eniten katsojia';
    STR_NOKEY_VIDEO_WARN = 'Lisää käyttäjä, saadaksesi pääsyn seurattuihin videoihin.';
    STR_SWITCH_TYPE = 'Vaihda: Viimeisin tai katsojia';
    STR_ENABLE = 'Ota käyttöön';
    STR_ENABLED = 'Käytössä';
    STR_DISABLE = 'Poista käytöstä';
    STR_DISABLED = 'Ei käytössä';
    STR_DARK_MODE = 'Tumma-tila';
    STR_BRIGHT_MODE = 'Kirkas-tila';
    STR_RESTORE_PLAYBACK_WARN = 'Sovellus suljettiin kesken toiston. Palautetaan aiempaan...';
    STR_RESTORE_PLAYBACK = 'Palauta aiempi toisto käyttöön';
    STR_RESTORE_PLAYBACK_SUMMARY =
        'Sovellus tallentaa toiston edistymisen tahattoman sulkemisen varalta. Toisten sovellusten käyttö voi johtaa muistiongelmiin, jotka sulkevat sovelluken. Uudelleen avattuna se jatkaa siitä mihin aiemmin jäätiin.';
    STR_CHAT_FONT = 'Chatti tekstin koko';
    STR_VIDEOS_ANIMATION = 'Animoidut videokuvakkeet';
    STR_VIDEOS_ANIMATION_SUMMARY =
        'Kun video tai kohokohta on valittuna, animoi sen kuvake, jos mahdollista (kaikilla videoilla ei ole animaatiota).';
    STR_SIDE_PANEL = 'Sivupaneeli: Paina "vasemmallepäin"- tai "takaisinpäin"-näppäintä ';
    STR_SIZE = 'Koko';
    STR_BRIGHTNESS = 'Kirkkaus';
    STR_FORBIDDEN = 'Tämä sisältö on rajattu alueeltasi tai se on saatavilla vain virallisen Twitch-sovelluksen kautta.';
    STR_JUMPING_STEP = 'Siirtymän askel';
    STR_SECOND = 'sekunti';
    STR_SECONDS = 'sekuntia';
    STR_MINUTE = 'minuutti';
    STR_MINUTES = 'minuuttia';
    STR_CLOCK_OFFSET = 'Kellon siirtymä';
    STR_CLOCK_OFFSET_SUMMARY = 'Säädä sovelluksen aikaa haluamallasin aikasiirtymällä.';
    STR_CLOCK_AM_PM = 'Kellon tyyli';
    STR_CLOCK_AM_PM_SUMMARY = 'Aseta 24H tai 12H AM PM tai 12H.';
    STR_CONTENT_LANG = 'Sisällön kieli';
    STR_CONTENT_LANG_SUMMARY = 'Varsinaisen sisällön kieli, lähetykset, videot, leikkeet (tekijän ilmoittama).';
    STR_APP_LANG = 'Sovelluksen kieli';
    STR_APP_LANG_SUMMARY = "Sovelluksen käyttämä tekstin kieli.";
    STR_ENTER_TO_OPEN = 'Paina "enter" avataksesi';
    STR_LANG_ALL = 'Kaikki';
    STR_NO_GAME = "Tälle ei löydy peliä";
    STR_EMPTY = 'Tyhjä';
    STR_JUMP_BUFFER_WARNING = "Ei ole mahdollista siirtyä puskuroinnin aikana";
    STR_CHAT_DISABLE = "Chatti ei ole käytössä. Voit ottaa sen käyttöön 'Pakota chat pois'-valinnalla valikossa " + STR_CHAT_EXTRA;
    STR_CLIP_FAIL = "Tämän leikkeen/videon lataus ei onnistunut. Uusinta ei onnistu";
    STR_CHAT_BRIGHTNESS = 'Chatin taustan kirkkaus';
    STR_PLAY_NEXT = 'Toista seuraava';
    STR_PLAY_NEXT_IN = 'Toistetaan seuraava';
    STR_PLAY_ALL = 'Toista kaikki';
    STR_AUTO_PLAY_NEXT = 'Toista seuraava leike automaattisesti';
    STR_SIDE_PANEL_BACK_MAIN_MENU = 'Palaa päävalikkoon';
    STR_UP = 'Paina "ylöspäin"-näppäintä';
    STR_HOLD_UP = 'Pidä "ylöspäin"- tai "2"-näppäintä';
    STR_LIVE_FEED = 'Lähetysten syöte';
    STR_VOD_DIALOG = 'Videoiden toiston valinnat';
    STR_VOD_DIALOG_SUMMARY =
        "Asetukset historiassasi olevien videoiden toistamiseen. Aloita aina alusta, sovelletaan myös videoiden esikatseluun.";
    STR_VOD_DIALOG_START = 'Aloita aina alusta';
    STR_VOD_DIALOG_LAST = 'Jatka aina edellisestä';
    STR_VOD_DIALOG_SHOW = 'Kysy erikseen';
    STR_END_DIALOG_OPT = 'Toiston päättymisen valinnat';
    STR_END_DIALOG_SETTINGS = 'Toiston päättymisen aikaraja';
    STR_END_DIALOG_SETTINGS_SUMMARY =
        'Kun lähetys, video tai leike päättyy, aukeaa valintanäkymä seuravalle toimelle. Aseta sekunteina aikaraja minkä jälkeen tehdään oletustoiminto.';
    //TODO improve more after this
    STR_END_DIALOG_DISABLE = 'Poista ajastin käytöstä';
    STR_CHAT_SIZE = 'Chatin koko';
    STR_CHAT_POS = 'Chatin sijainti';
    STR_CHAT_VIDEO_MODE = 'Videon kuvatila';
    STR_CHAT_SIDE_FULL = 'Kokoruudun-tila';
    STR_CHAT_PP_SIDE_FULL = 'Suuri ja pieni näyttö';
    STR_CHAT_SIDE = 'Rinnakkain (video ja chatti)';
    STR_CHAT_5050 = '50/50 ja chatit';
    STR_SPEED = 'Toistonopeus';
    STR_QUALITY = 'Kuvanlaatu';
    STR_NORMAL = 'Normaali';
    STR_AUTO = 'Automaattinen';
    STR_VERY_LOW = 'Hyvin matala';
    STR_LOW = 'Matala';
    STR_HIGH = 'Korkea';
    STR_VERY_HIGH = 'Hyvin korkea';
    STR_THUMB_RESOLUTION = 'Kuvakkeen laatu';
    STR_THUMB_RESOLUTION_SUMMARY =
        "Kuvakkeen tarkkuus lähetyksille, videoille ja peleille (ei päde leikkeille). Matalampi laatu nopeuttaa latausta, mutta kuvakkeet voivat näyttää sumeilta..";
    STR_PAYPAL_SUMMARY = 'Paypal-lahjoitukset, käytä linkkiä tai QR-koodia:';
    STR_BITCOIN_SUMMARY = 'Bitcoin-lahjoitukset, käytä lompakon osoitetta tai lue QR-koodi:';
    STR_PLAYER_PROBLEM_2 = 'Yhteys epäonnistui, lähetyksen tietojen lataus ei onnistunut';
    STR_PLAYER_RESYNC = 'Uudelleen käynnistä toisto';
    STR_PLAYER_MULTI_ALL = 'Kaikki';
    STR_QUALITY_PP = ['Pieni', 'Suuri', STR_PLAYER_MULTI_ALL];
    STR_QUALITY_MULTI = [STR_PLAYER_MULTI_ALL, 'Ylävasen', 'Yläoikea', 'Alavasen', 'Alaoikea'];
    STR_QUALITY_MULTI_BIG = [STR_PLAYER_MULTI_ALL, 'Ylhäällä', 'Alavasen', 'Alhaalla keskellä', 'Alaoikea'];
    STR_PLAYER_BITRATE_UNLIMITED = 'Rajoittamaton';
    STR_PLAYER_BITRATE = 'Automaattisen kuvanlaadun suurin sallittu kuvatarkkuus/bittinopeus';
    STR_PLAYER_BITRATE_SHORT_SUMMARY = 'Rajoitta kuvatarkkuutta/bittinopeutta kun automaattinen kuvanlaatu on valittu';
    STR_PLAYER_BITRATE_SUMMARY =
        "Tällä asetuksella voi vähentää viivettä heikompitehoisilla laiteilla, kun toistetaan useaa videota samaan aikaan. Useimmat laitteet jättävät kuvia välistä sillä ne on suunniteltu toistamaan vain yhtä videota kerrallaan. Tällä voi myös rajoittaa internet kaistan käyttöä, jos sitä on tarpeen rajoittaa. Suositeltu kuvatarkkuus/bittinopeus kaikille pienille toistimille on 720p/3 Mbps ja rajoittamaton suurille toistimille suurimmalle osalle heikkotehoisempia laitteita.";
    STR_PLAYER_BITRATE_SUMMARY_ETC =
        'Eri arvot päätoistimelle ja pienelle toistimelle voivat aiheuttaa lyhyttä puskurointia/latausta kun vaihdetaan päätoistimen tai kuva-kuvassa-tilan valintaa ("alaspäin"-näppäimella vaihdetaan soittimia). Viiveen estämiseksi aseta molemmille sama arvo. Tämä tosin saattaa aiheuttaa kuvataajuuden heikentymistä. Hyvänä indikaattorina liian suurelle bittinopeudelle toimii väliin jääneet kuvat ja jatkuva puskurointi.';
    STR_PLAYER_MAIN = 'Päätoistin, suurempi toistin "kuva kuvassa"-tilassa tai ylempi soitin 50/50-näkymässä';
    STR_PLAYER_RES_SMALL = 'Pieni toistin, pienempi toistin "kuva kuvassa"-tilassa ja kaikki multilähetyksen toistimet';
    STR_PLAYER_BITRATE_MAIN = 'Bittinopeus - ' + STR_PLAYER_MAIN;
    STR_PLAYER_BITRATE_SMALL = 'Bittinopeus - ' + STR_PLAYER_RES_SMALL;
    STR_PLAYER_RES_MAIN = 'Kuvatarkkuus - ' + STR_PLAYER_MAIN;
    STR_PLAYER_RES_SMALL = 'Kuvatarkkuus - ' + STR_PLAYER_RES_SMALL;
    STR_BLOCK_RES = 'Estetyt kuvatarkkuudet';
    STR_BLOCK_RES_SHORT_SUMMARY = 'Valittujen kuvatarkkuuksien käyttö estetään kokonaan';
    STR_BLOCK_RES_SUMMARY =
        "Automaattista kuvatarkkuutta käytettäessä, on mahdollista estää joidekin kuvatarkkuuksien käyttö. Tämä voi olla käytännöllistä, jos toistossa ilmenee viivettä vain tietyllä kuvatarkkuudella. Leikkeitä ei voi toistaa automaattisella kuvatarkkuudella, joten tämä asetus voi estää joidenkin leikkeiden toistamisen.";
    STR_BLOCK_RES_SUMMARY_EXTRA =
        'Käyttäjä voi ylikirjoittaa valinnan toiston aikana.<br><br>Arvolla XX tarkoittaen, että kaikki kuvatarkkuudet alkaen arvolla XX ja estetään.';
    STR_BLOCKED = 'Estetty';
    STR_BLOCKED_NOT = 'Ei estetty';
    STR_AUDIO_SOURCE = 'Äänilähde';
    STR_VOLUME_CONTROLS = 'Äänen ja voimakkuuden hallinta';
    STR_AUDIO_ALL = 'Ääni salli kaikki';
    STR_AUDIO_ALL_ENA = 'Kaikki äänilähteet käytössä';
    STR_AUDIO_ALL_100 = 'Voimakkuus kaikkiin 100%';
    STR_AUDIO_ALL_100_SET = 'Kaikkien soittimien äänen voimakkuus asetetaan 100%';
    STR_VOLUME = 'Äänenvoimakkuus -';
    STR_AUDIO = 'Äänilähde -';
    STR_DEF_QUALITY = 'Oletus soitimen laatu';
    STR_DEF_QUALITY_SUMMARY =
        "Yksittäistä kuvalähdettä käyttäessa käytä näitä asetukisa. Multisoittimien tilassa toisto käyttää automaattista kuvanlaatua. Syy tälle on asetuksessa '" +
        STR_PLAYER_BITRATE +
        "'.";
    STR_PICTURE_PICTURE = 'Kuva-kuvassa, 50/50 tai multilähetys (vain suorille lähetyksille):';
    STR_PICTURE_CONTROLS1 =
        'Käytä "kuva kuvassa"-tilaa: Paina "ylöspäin"-näppäintä toiston aikana näyttääksesi esikatselun. Valitse lähetys ja paina "1"-näppäintä tai pidä "enter"-näppäintä';
    STR_PICTURE_CONTROLS2 =
        'Vaihda videon sisältöä: Multilähetys-tilassa, yksittäinen valinta esikatselusta. "Kuva kuvassa"- tai "50/50"-tilassa yksittäinen painallus päivittää suuren tai ylimmän lähetyksen, pohjassa painamalla "enter"-näppäintä tai painamalla "1"-näppäintä päivittää pienen tai alemman lähetyksen.';
    STR_PICTURE_CONTROLS4 = 'Vaihda lähetysten paikka ("kuva kuvassa"-toiminnossa): "alaspäin"-näppäin. Suuri ja pieni lähetysikkuna vaihtavat paikkoja.';
    STR_PICTURE_CONTROLS5 = 'Vaihda pienen lähetyksen sijaintia ("kuva kuvassa"-toiminnossa): "vasemmallepäin"-näppäin';
    STR_PICTURE_CONTROLS6 = 'Vaihda pienen läheyksen kuvakokoa ("kuva kuvassa"-toiminnossa): "oikeallepäin"-näppäin';
    STR_PICTURE_CONTROLS7 =
        "Vaihda äänilähde: Valitse äänilähde soittimen valikosta. '50/50'- tai multilähetyksessä käytä  'vasemmallepäin'- ja 'oikeallepäin'-näppäimiä. 'Kuva kuvassa'-toiminnolla käytä 'edellinen'- tai 'seuraava'-medianäppäimiä";
    STR_PICTURE_CONTROLS3 = 'Vaihda äänilähde kaikille lähetyksille: Pidä "alaspäin"-näppäintä';
    STR_PICTURE_CONTROLS8 =
        "Soittimen uudelleen käynnistys: Valitse 'Soittimen uudelleen käynnistys' soittimen alavalikosta. Tämä käynnistää soittimen uudelleen ja voi auttaa synkronoimana lähetyksen ja chatin. Tämä ei synkronoi eri lähetyksiä keskenään.";
    STR_PICTURE_CONTROLS9 =
        "Synkronoi soittimet: Vain 'kuva kuvassa'-tilassa. Soittimen valikossa hidasta toistonopeutta sillä lähetyksellä joka kulkee edellä.";
    STR_PICTURE_CONTROLS10 = "'Kuva kuvassa'-lähetyksen kuvanlaatu: Katso '" + STR_PLAYER_BITRATE + "' asetukset";
    STR_PICTURE_CONTROLS11 =
        'Sulje pieni tai alempi lähetys ("kuva kuvassa"-toiminnossa): Paina "poistu"-näppäintä kahdesti. Tämä lopettaa "kuva kuvassa"-toiminnon tai "50/50"-toiminnon';
    STR_PICTURE_CONTROLS12 =
        "Ota käyttöön '50/50'-tila (kaksi lähetystä ja kaksi chattia): Jos 'kuva kuvassa'-toiminto on käytössä, paina '2'-näppäintä, 'eteenpäin'-näppäintä tai käytä 'Videon kuvatila'-asetusta. Jos käytössä on Rinnakkain-tila, valitse lähetys esikatselusta.";
    STR_PICTURE_CONTROLS13 = 'Ota käyttöön multilähetys: Käytä alavalikon näppäimiä tai "takaisinpäin"-medianäppäintä.';
    STR_PLAYER_INFO_VISIBILITY_ARRAY = ['Kun soittimen tiedot ovat näkyvillä', 'Aina näkyvillä', 'Ei koskaan näkyvillä'];
    STR_SINGLE_EXIT = 'Poistun yhdellä painalluksella';
    STR_SINGLE_EXIT_SUMMARY = 'Poistu soittimesta, "kuva kuvassa"-toiminnosta, "50/50"-toiminnosta tai multilähetystilasta yhdellä "poistu"-näppäimen painalluksella.';
    STR_NOTIFICATION_OPT = 'Ilmoitusten valinnat';
    STR_NOW_LIVE_SHOW = "Näytä 'Lähetys on käynnissä'-ilmoitus seuratuista kanavista";
    STR_TITLE_CHANGE_SHOW = "Näytä 'Lähetyksen otsikko vaihtui'-ilmoitus seuratuista kanavista";
    STR_GAME_CHANGE_SHOW = "Näytä 'Lähetyksen peli vaihtui'-ilmoitus seuratuista kanavista";
    STR_NOW_LIVE_GAME_SHOW = "Näytä 'Pelistä on lähetyksiä'-ilmoitus seuratuista peleistä";
    STR_NOTIFICATION_BACKGROUND = 'Ilmoitus toisen sovellusten päällä, kun sovellus on taustalla';
    STR_NOTIFICATION_BACKGROUND_SUMMARY =
        'Salliaksesi, tämän ominaisuuden, varmista, että sovelluksela on Android-asetuksissa lupa lähettää ilmoituksia. Android 11 tai uudemmilla sovellus näyttää yksinkertasen yksirivisen ilmoituksen ollessaan taustalla.';
    STR_NOTIFICATION_BACKGROUND_WARNING = 'Android järjestelmän ilmoituksille puuttuu lupa!';
    STR_NOTIFICATION_REPEAT = 'Kuinka monta kertaa yksittäinen ilmoitus näytetään';
    STR_NOTIFICATION_REPEAT_SUMMARY =
        "Yksittäinen ilmoitus pysyy näkyvillä noin 3 sekuntia, eikä tätä voida muuttaa. Tällä asetuksella voit kuitenkin vaihtaa saman ilmoituksen näkymään useamman kerran peräkkäin.";
    STR_NOTIFICATION_SINCE = "Estä 'Lähetys on käynnissä'-ilmoituksen näyttäminen lähetyksille jotka ovat olleet käynnissä yli";
    STR_NOTIFICATION_SINCE_SUMMARY =
        'Estää näyttämästä mahdollisesti pitkää listaa ilmoituksa, jos sovellus on ollut pitäkän aikaa käyttämättä.';
    STR_GLOBAL_FONT = 'Sovelluksen tekstin koon muutos';
    STR_GLOBAL_FONT_SUMMARY =
        'Muuta tekstin kokoa sovelluksen laajuisesti. Koskee kaikkea tekstiä ja kuvakkeita, poislukien chatin tekstikoko, jolle on oma asetuksensa. Liian pieni voi estää näkyvyyden, liian suuriella arvolla teksti voi vuotaa yli. Asetuksen muutos päivitää kaikki näkymät.';
    STR_MAIN_MENU = 'Päävalikko';
    STR_USER_MENU = 'Käyttäjävalikko';
    STR_CH_IS_OFFLINE = 'On offline';
    STR_ROUND_IMAGES = 'Pyöristetyt kanavakuvakkeet';
    STR_ROUND_IMAGES_SUMMARY = 'Koska suurin osa kuvakkeista on nelikulmaisia, tämä ei aina näytä hyvältä.';
    STR_SCREEN_COUNTER = 'Piilota sivunumerot';
    STR_SCREEN_COUNTER_SUMMARY =
        'Sisältöä ladataan paloissa. Näkymässä voidaan kertoa kuinka monta toistattavaa sisältöä on ladattu, ja kokonaismäärä kasvaa sitä mukaa kun uutta sisältöä haetaan näkymää alas vierittäessä.';
    STR_SWITCH_POS = 'Vaihda: Aloituskohdan siirtymä';
    STR_SWITCH_POS_SUMMARY =
        'Ensimmäisen videon sijaan kohdista valinta listalla alemmaksi. Vähentää sivuvieritystä, kun esim. halutaan etsiä jokin vanhempi video.';
    STR_USER_OPTION = 'Valitse käyttäjä';
    STR_MAIN_USER = 'Pääkäyttäjä';
    STR_USER_TOP_LABEL = 'Valitse käyttäjä nähdäksesi vaihtoehdot';
    STR_USER_EXTRAS = 'Käyttäjä: Vaihda, lisää, avain';
    STR_LOW_LATENCY = 'Matala latenssi';
    STR_LOW_LATENCY_SUMMARY =
        'Jos puskuroinnin kanssa on ongelmia, poista käytöstä  ' +
        STR_LOW_LATENCY +
        '<br>Use ' +
        STR_SETTINGS_BUFFER_LIVE +
        ' samaan tai alle 1 jotta tällä on vaikutusta';
    STR_GAME_SORT = 'Pelien esikatselun lajittelu';
    STR_LIVE_FEED_SORT = 'Sivuvalikon tai soittimen esikatselun lajittelu';
    STR_LIVE_FEED_SORT_SUMMARY =
        "Lajittele sivuvalikon lähetykset ja soittimen esikatselun lähetykset. Esikatselussa tämä koskeevain käyttäjän lähetysten ja etusivun lähetyksiin. Oletuksena katsojamäärän mukaan, katseluhistoriaan liittyvä lajitellaan viimeksi katsottu ensin, ja videoissa viimeisin ensin.";
    STR_A_Z = 'Aakkostettu A - Ö';
    STR_Z_A = 'Aakkostettu Ö - A';
    STR_APP_ANIMATIONS = 'Salli sovelluksen animaatiot';
    STR_APP_ANIMATIONS_SUMMARY = 'Ota käytöön sivuvalikkoon ja vieritykseen jne. liittyvät animaatiot';
    STR_UI_SETTINGS = 'Muuta käyttöliittymää, värityyliä, animaatoita jne.';
    STR_GENERAL_CUSTOM = 'Muuta sisältöä, lajittelua, päivitystaajuutta, aikarajoja jne.';
    STR_RUNNINGTIME = 'Sovellus ollut käynnissä:';
    STR_410_ERROR = 'Videolinkkiä ei saatu';
    STR_PRESS_ENTER_TO_CHANGE = 'Paina "enter"-näppäintä vaihtaaksesi -';
    STR_CLICK_UNFOLLOW = '(Paina "enter"-näppäintä lopettaaksesi seuraamisen)';
    STR_CLICK_FOLLOW = '(Paina "enter"-näppäintä seurataksesi)';
    STR_TODAY = 'Tänään';
    STR_DROOPED_FRAMES = 'Pudotetut kuvat:';
    STR_BUFFER_HEALT = 'Puskurin koko (sek):';
    STR_NET_ACT = 'Lataukset (Mb):';
    STR_NET_SPEED = 'Nopeus (Mb):';
    STR_LATENCY_TO_BROADCASTER = 'Viive lähettäjään';
    STR_LATENCY = 'Viive lähettäjään (sek):';
    STR_CHAT_DELAY_LATENCY_TO_BROADCASTER = 'Perustuu ' + STR_LATENCY_TO_BROADCASTER;
    STR_PING = 'Ping Twitchille (Ms):';
    STR_WARNINGS = 'Varoitukset';
    STR_WELCOME = 'Tervetuloa';
    STR_WELCOME_SUMMARY =
        'Sovelluksella on paljon ominaisuuksia. Tarkista asetukset ja ohjaimen opasteet ymmärtääksesi paremmin miten sitä käytetään. Play Storessa on esittelyvideo, ja jos kysymyksiä vielä on käytä yhteystietoja.';
    STR_WARNING_PHONE = 'Varoitus matkapuhelimille';
    STR_WARNING_PHONE_SUMMARY =
        "Sovelus on suunniteltu etupäässä televisioita varten, ja muille leitteille ei juuri ole tukea. Jos sinulla ei ole näppäimistöä tai muita ohjaimia, voit käyttäää virtuaalista näppäimistöä navidointiin. Tämä on näkyvissä vain puhelimilla ja tableteilla. Voit muuttaa sen läpinäkyvyyttä asetuksissa. Mistä tahansa näytöllä painamalla saat näppäimistön esiin. Se ei toimi piilotettuna.";
    STR_DPAD_POSTION = 'Ohjaimen sijoitus näytöllä';
    STR_DPAD_OPACITY = 'Ohjaimen läpinäkyvyys';
    STR_DPAD_OPT = 'Ohjaimen asetukset';

    STR_MAX_RES = 'Korkein kuvatarkkuus:';
    STR_MAX_BIT = 'Korkein bittinopeus:';
    STR_MAX_LEVEL = 'Korkein taso:';
    STR_MAX_FPS = 'Korkein fps/kuvatarkkuus:';
    STR_MAX_INSTANCES = 'Maksimimäärä instansseille:';
    STR_UNKNOWN = 'Tuntematon';
    STR_USER_LIVE = 'Käyttäjän lähetysten sivupaneeli: "vasemmallepäin"-näppäin sivupaneelissa tai "3"-näppäin muualla';
    STR_PP_WORKAROUND = 'Multisointin, "kuva kuvassa" ja esikatselun korjauskeino';
    STR_PP_WORKAROUND_SUMMARY =
        "Osallalaitteista on välttämätöntä ottaa tämä asetus käyttöön multiläheysten sallimiseksi. Yleisin ongelma on, että toinen lähetyksistä on kokonaan musta. Älä ota tätä asetusta käyttöön, ellei sinulla ole erityisesti ongelmia sillä se huonontaa kuvanlaatua ja muuta toimintaa.";
    STR_HISTORY = 'Historia';
    STR_WATCHED = 'Katsottu';
    STR_UNTIL = 'asti';
    STR_SORTING = 'Lajittelu';
    STR_DELETE_HISTORY = 'Poista tämä historia';
    STR_DELETE_UNREACHABLE = 'Poista automaattisesti sisältö joka ei ole käytettävissä';
    STR_DELETE_UNREACHABLE_SUMMARY =
        'Poista historiasta automaattisesti videot ja leikkeet, jotka eivät enää ole saatavilla, joissa esim. tekijä on voinut poistaa ne.';
    STR_NAME_A_Z = 'Nimi A - Ö';
    STR_NAME_Z_A = 'Nimi Ö - A';
    STR_GAME_A_Z = 'Peli A - Ö';
    STR_GAME_Z_A = 'Peli Ö - A';
    STR_VIWES_MOST = 'Eniten katsojia';
    STR_VIWES_LOWEST = 'Vähiten katsojia';
    STR_CHANNELS_MOST = 'Suurin kavana lukumäärä';
    STR_CHANNELS_LOWEST = 'Pienin kanava lukumäärä';
    STR_NEWEST = 'Viimeksi katsottu';
    STR_OLDEST = 'Vanhin katsottu';
    STR_PRESS_ENTER_D = 'Paina "enter"-näppäintä poistaaksesi';
    STR_LIVE_VOD = 'Tämä lähetys on nyt tallennettu video<br>Toistetaan video kohdasta johon lähetyksen seuraaminen viimeksi päättyi:<br>';

    STR_DELETE_SURE = 'Oletko varma, että haluta poistaa kaikki';
    STR_CREATED_NEWEST = 'Luotu / Lähetysaika uusin';
    STR_CREATED_OLDEST = 'Luotu / Lähetysiaka vanhin';
    STR_THUMB_OPTIONS = 'Kuvakkeet astukset';
    STR_HISTORY_LIVE_DIS = 'Salli lähetysten historia';
    STR_HISTORY_VOD_DIS = 'Salli videoiden historia';
    STR_HISTORY_CLIP_DIS = 'Salli leikkiden historia';
    STR_OPEN_GAME = 'Avaa peli';
    STR_OPEN_CHANNEL = 'Avaa kanava';
    STR_THUMB_OPTIONS_KEY = 'Paina "enter"-näppäintä toiminnon kohdalla avataksesi tai valitaksesi sen. Paina "paluu"-näppäintä palataksesi tekemättä muutoksia';
    STR_DELETE_FROM_HISTORY = 'Poista tämä historiasta';
    STR_CHECK_FOLLOW = 'Tarkistetaan seuraamisen tila...';
    STR_REFRESH_DELETE = 'Päivitä näkymä poiston jälkeen nähdäksesi muutokset.';
    STR_THUMB_OPTIONS_TOP = 'Pidä "vasemmallepäin"-näppäintä kuvakkeiden valintoja varten';
    STR_REPLACE_MULTI = 'Valitse millä yllä oleva korvataan?';
    STR_REPLACE_MULTI_ENTER = 'Paina "enter"-näppäintä korvataksesi tai "paluu"-näppäin poistuaksesti.';
    STR_ALREDY_PLAYING = 'Tätä toistetaan jo';
    STR_STREAM_ERROR = 'Esikatselun avaaminen ei onnistunut';
    STR_PP_MODO = '"Kuva kuvassa"-tila';
    STR_4_WAY_MULTI_INSTANCES = "Laitteesi sallii vain %x instanssia samaan aikaan. Käyttö ei onnistu";
    STR_MULTI_EMPTY = 'Päättynyt ja/tai tyhjä';
    STR_4_WAY_MULTI = '4-tie multilähetys';
    STR_CONTROLS_MULTI_0 = 'Multilähetyksen apu:';
    STR_CONTROLS_MULTI_1 =
        "Jos sinulla on ongelmia viiveen kanssa multilähetyksen käytössä, kokeile mahdaltaa 'Pienen toistimen bittinopeus' asetusta. Väliin jääneet kuvat ja jatkuva puskurointi ovat merkki liian korkeasta bittinopeudesta tai liian hitaasta verkkoyhteydestä.";
    STR_CONTROLS_MULTI_2 = 'Lisää lähetyksiä: avaa esikatselu ja valitse lähetys';
    STR_CONTROLS_MULTI_3 = 'Korvaa lähetys: kun multilähetys on täynnä, valitse ensin uusi lähetys esikatselusta ja sen jälkeen korvattava lähetys';
    STR_CONTROLS_MULTI_4 = 'Vaihda äänilähde: "vasemmallepäin"- ja "oikeallepäin"-näppäimet tai medianäppäimissä "seuraava" esikatselee, paina "alaspäin"-näppäintä valitaksesi äänilähteeksi kaikki lähetykset';
    STR_CONTROLS_MULTI_5 = 'Poistu multiläheyksestä: Paina "paluu"-näppäintä kahdesti tai valitse soittimen alareunasta poistumisvalinta.';
    STR_CONTROLS_MULTI_6 = 'Sulkeaksesi tämän, avaa 4 lähetystä';
    STR_PICTURE_LIVE_FEED = 'Picture in picture: Hold enter or press key 1, after use D-Pad left to move, right to resize or down to change videos';
    STR_MULTI_TITLE = ', Click on a thumbnail to open or replace a stream, use D-pad left/right to change audio source';
    STR_FEED_END_DIALOG = ', Press return to go back to top menu';
    STR_BACK_USER_GAMES = 'Press return to go back to';
    STR_SHOW_LIVE_PLAYER = 'Show preview on the live screens';
    STR_SHOW_VOD_PLAYER_WARNING = 'Starting playback from where it last stopped:';
    STR_SHOW_VOD_PLAYER = 'Show preview on the VOD screens';
    STR_SHOW_CLIP_PLAYER = 'Show preview on the clip screens';
    STR_PREVIEW_CLIP_NEXT = 'When a clip preview ends, automatically switch to the next available clip.';
    STR_SHOW_SIDE_PLAYER = 'Show preview on the side panel';
    STR_SHOW_FEED_PLAYER = 'Show preview on the player preview thumbnails';
    STR_SHOW_FEED_PLAYER_SUMMARY = "If you don't want to, or your device lags when more than one player is active, set this to NO.";
    STR_DISABLED_FEED_PLAYER_MULTI = 'Disable preview when multistream is enabled';
    STR_DISABLED_FEED_PLAYER_MULTI_SUMMARY =
        'For performance reasons, some devices may lag with multiple players. If yours is fine for multistream, but lags when the preview player and a multistream are active, set this option to NO.';
    STR_PREVIEW_ERROR_LOAD = 'Preview failed to load:';
    STR_PREVIEW_ERROR_LINK = 'unreachable';
    STR_PREVIEW_VOD_DELETED = ', this VOD may have been deleted';
    STR_PREVIEW_END = 'Preview video has ended';
    STR_PLAYER_LAG_ERRO = 'Player unable to play due to a network connection issue';
    STR_PLAYER_ERROR = 'Player unable to play due to player error';
    STR_PLAYER_ERROR_MULTI = ', try to lower small player bitrate value in settings';
    STR_PREVIEW_SIZE = 'Player preview size';
    STR_PREVIEW_SIZE_SUMMARY =
        'Set the size of the preview player the small preview player that show when pressing up when a Live, VOD or clip is open.';
    STR_PREVIEW_SIZE_ARRAY = ['Small', 'Medium', 'Large', 'Extra large'];
    STR_PREVIEW_SIZE_SCREEN = 'Screen preview size';
    STR_PREVIEW_SIZE_SCREEN_SUMMARY = 'Set the size of the preview player that show above the main app screens.';
    STR_PREVIEW_VOLUME_SCREEN = 'Screen preview volume';
    STR_PREVIEW_VOLUME_SCREEN_SUMMARY = 'Set the volume of the preview player that show above the main app screens and side panel.';
    STR_PREVIEW_SIZE_SCREEN_ARRAY = ['Thumbnail size', 'Larger'];
    STR_SIDE_PANEL_PLAYER_DELAY = 'Preview delay';
    STR_SIDE_PANEL_PLAYER_DELAY_SUMMARY =
        'Set the delay time that the preview will take to start loading after a thumbnail is selected. This helps with slow devices which lag when scrolling.';
    STR_PREVIEW_VOLUME = 'Player Preview volume';
    STR_PREVIEW_VOLUME_SUMMARY = 'Set preview player volume, the small preview player that show when pressing up when a Live, VOD or clip is open.';
    STR_PREVIEW_OTHERS_VOLUME = 'Main player volume (When preview is showing)';
    STR_PREVIEW_OTHERS_VOLUME_SUMMARY =
        'The main player (all picture in picture players, multistream players) volume can be lowered when the preview player is showing.';
    STR_SIDE_PANEL_PLAYER = 'Preview thumbnail player settings';
    STR_START_AT_USER = 'Always start the app in the user screen';
    STR_START_AT_USER_SUMMARY = "This option disables the 'Restore playback' option, but allows you to choose the user upon opening the app.";
    STR_LAST_REFRESH = 'Last refreshed:';
    STR_PP_VOD_ERROR = 'Exit picture in picture or multistream to open this VOD';
    STR_SETTINGS_ACCESSIBILITY = "Show 'an accessibility service is running' warning";
    STR_SETTINGS_ACCESSIBILITY_SUMMARY =
        "If the device has an accessibility service enabled, the app will show a warning. It's a known android issue that accessibility service can lag some devices and cause freezes or lags on this app.";
    STR_ACCESSIBILITY_WARN = 'Accessibility service(s) detected';
    STR_ACCESSIBILITY_WARN_EXTRA = 'Read more on this link:';
    STR_ACCESSIBILITY_WARN_EXTRA2 =
        'If you have freezes or lag related issues, close this app and disable all accessibility services, after that, all issues will be gone.<br>To not show this warning ever again, disable it in settings.';
    STR_AUTO_REFRESH = 'Auto refresh timeout';
    STR_AUTO_REFRESH_SUMMARY = 'When this is enabled, the app will auto-refresh the content in the background.';
    STR_AUTO_REFRESH_BACKGROUND = 'Auto refresh in the background';
    STR_AUTO_REFRESH_BACKGROUND_SUMMARY =
        "When 'Auto refresh timeout' is set and this is enabled, the auto refresh will happen in the background (but with the app visible, android doesn't allow to run unrestrictedly in the background in order to avoid lagging other apps). When the screen is not visible or when you go back to a screen that the refresh didn't run before, be careful, because if the app has too many screens when this option is enabled, the auto refresh may cause random lag on some low-end devices.";
    STR_MAIN_WINDOW = 'Main video';
    STR_MULTI_MAIN_WINDOW = 'Multistream main video';
    STR_MAIN_MULTI_BIG =
        STR_MULTI_MAIN_WINDOW + ' bigger and chat: Press the down key and after that use the left/right keys to change the big video';
    STR_SOURCE_CHECK = 'Automatically change player quality from Source to Auto when the player lags';
    STR_SOURCE_CHECK_SUMMARY =
        'When enabled, and not using auto quality, the player will switch to auto quality and warn about it if the player is lagging. A Player lag is when the player is unable to play for a few seconds (the algorithm is more complex than just time), if you play something else it will go back to the original quality.';
    STR_PLAYER_LAG = "Player is lagging, quality changed to 'Auto mode'";
    STR_PLAYER_SOURCE = 'Player is lagging, quality was lowered';
    STR_TOO_ERRORS = 'or too many errors';
    STR_STREAM_ERROR_SMALL = 'Preview, stream ended' + STR_TOO_ERRORS;
    STR_CONTROLS_MEDIA_FF = 'Forward or rewind (only for VODs and clips): Use the left/right D-pad or the fast forward/rewind media keys';
    STR_VOD_MUTED = 'A portion of this is muted as it contains copyrighted content, indicated by the darker colored portions on the play bar';
    STR_GIFT_SUB = 'has gifted you a sub!';
    STR_ANONYMOUS = 'Anonymous';
    STR_CHAT_BANNED = 'You are permanently banned from talking in';
    STR_CHAT_WRITE = 'Write to chat';
    STR_CHAT_EXTRA = 'Chat lisäasetukset';
    STR_PLACEHOLDER_CHAT =
        'When this is selected, press enter to show onscreen keyboard. If you have a physical keyboard connected, press return or esc to hide the onscreen keyboard';
    STR_CHAT_ROOMSTATE = 'Chat ROOMSTATE:';
    STR_CHAT_NO_RESTRICTIONS = 'No restrictions';
    STR_OPTIONS = 'Options';
    STR_CHAT_DELL_ALL = 'Delete all';
    STR_CHAT_UNICODE_EMOJI = 'Unicode Emoji';
    STR_CHAT_TW_EMOTES = 'Twitch emotes';
    STR_CHAT_BTTV_GLOBAL = 'BTTV global';
    STR_CHAT_BTTV_STREAM = 'BTTV streamer';
    STR_CHAT_FFZ_GLOBAL = 'FFZ global';
    STR_CHAT_FFZ_STREAM = 'FFZ streamer';
    STR_CHAT_SEVENTV_GLOBAL = '7TV global';
    STR_CHAT_SEVENTV_STREAM = '7TV streamer';
    STR_CHAT_AT_STREAM = '@streamer';
    STR_CHAT_RESULT = 'In Chat expected result:';
    STR_CHAT_SEND = 'Send';
    STR_CHAT_EMOTE_EMPTY = 'This emote list is empty';
    STR_CHAT_FOLLOWER_ONLY = 'Chat is in Followers-only mode, and you are not a follower of';
    STR_CHAT_FOLLOWER_ONLY_USER_TIME = 'and you have only been following for';
    STR_CHAT_EMOTE_ONLY = 'Twitch Emote-only mode';
    STR_CHAT_CHOOSE = 'Choose which chat to write to or press return to close this';
    STR_CHAT_OPTIONS_TITLE = 'Write to chat options';
    STR_CHAT_OPTIONS_KEYBOARD = 'Software Keyboard auto hide';
    STR_CHAT_OPTIONS_KEYBOARD_SUMMARY =
        'Allows to control the behavior of the on-screen software keyboard. If you have a physical keyboard connected, use it, if not, set to never';
    STR_CHAT_OPTIONS_KEYBOARD_1 = 'Never';
    STR_CHAT_OPTIONS_KEYBOARD_2 = 'If Keyboard detected';
    STR_CHAT_OPTIONS_KEYBOARD_3 = 'Always';
    STR_CHAT_OPTIONS_EMOTE_SORT = 'Emotes sorting';
    STR_CHAT_OPTIONS_EMOTE_SORT_SUMMARY = 'If this is disabled, the lists of emotes will be shown in the order, provided by the server.';
    STR_CHAT_OPTIONS_FORCE_SHOW = 'Force show chat';
    STR_CHAT_OPTIONS_FORCE_SHOW_SUMMARY = 'If you want to see the chat when write to chat is used, enable this';
    STR_NOKEY_CHAT_WARN = 'Add a user authorization key to be able to log and write to chat';
    STR_CHAT_NOT_READY = 'Chat not ready to send! Try again is a second or two.';
    STR_CHAT_REDEEMED_MESSAGE_HIGH = 'Redeemed highlight My Message';
    STR_CHAT_FIRST_MESSAGE_HIGH = 'FIRST MESSAGE';
    STR_CHAT_REDEEMED_MESSAGE_SUB = 'Redeemed send a message in sub-only mode';
    STR_CHAT_OPTIONS = 'Chat options';
    STR_CHAT_HIGHLIGHT_STREAMER_MSG = 'Highlight messages from the streamer (Dark pink background)';
    STR_CHAT_HIGHLIGHT_MOD_MSG = 'Highlight messages from moderators (Dark cyan background)';
    STR_CHAT_HIGHLIGHT_REDEEMED = 'Highlight reward messages (Purple background message only)';
    STR_CHAT_HIGHLIGHT_FIRST = 'Highlight First-Time Chatter (Dark pink background)';
    STR_CHAT_HIGHLIGHT_STREAMER = "Highlight @streamer messages (Dark red background, the '@' is blue)";
    STR_CHAT_HIGHLIGHT_USER = "Highlight your @username messages (Dark Green background, the '@' is blue)";
    STR_CHAT_HIGHLIGHT_USER_SEND = 'Highlight your sent messages (Dark Green background)';
    STR_CHAT_SHOW_SUB = 'Show sub messages in chat (Dark orange background)';
    STR_CHAT_HIGHLIGHT_BIT = 'Highlight bits messages (Dark Yellow background)';
    STR_CHAT_HIGHLIGHT_ACTIONS = 'Show Action messages (usually from stream bots)';
    STR_CHAT_HIGHLIGHT_ACTIONS_SUMMARY =
        "These messages are usually equal to sub messages, but sent via a stream bot, so if you have 'Show sub ...' enabled, it's redundant.";
    STR_CHAT_INDIVIDUAL_BACKGROUND = 'Background color difference between individual messages';
    STR_CHAT_INDIVIDUAL_BACKGROUND_SUMMARY =
        "Modes are 'disable', 'enable' (auto), Bright, or Darker. In auto mode, messages alternate between darker and lighter accents if the chat is above the stream; otherwise, the background is bright.";
    STR_CHAT_INDIVIDUAL_LINE = 'Insert a line to separate individual chat messages';
    STR_CHAT_LINE_ANIMATION = 'Animated scrolling when adding a new chat message';
    STR_CHAT_LOGGING = 'Logging in the chat with the current user';
    STR_CHAT_LOGGING_SUMMARY =
        "When an authorization key is provided, the app logs into chat as the current user unless chat is disabled in the player's controls. If this is net to NO, it logs in anonymously, allowing messages but hiding bans and ROOMSTATE.";
    STR_CHAT_BOTS = 'Block bots and bot commands (!command) from show in chat';
    STR_CHAT_TIMESTAMP = 'Show message timestamp';
    STR_CHAT_USER_NOTICE = 'Display chat user notification warning';
    STR_CHAT_USER_NOTICE_SUMMARY =
        'Show an on-screen warning when the chat receives an indirect user notification. Eg.: Chat: This room is now in emote-only mode.';
    STR_CHAT_NICK_COLOR = 'Readable nick colors';
    STR_CHAT_NICK_COLOR_SUMMARY =
        "Instead of using the default nick color that sometimes can't be readable on a dark background, use a custom easily visible color.";
    STR_CHAT_CLEAR_MSG = 'Clear chat, delete user messages';
    STR_CHAT_SHOW_BADGES = 'Show user badges (excluding the ones below)';
    STR_CHAT_SHOW_BADGES_MOD = 'Show Moderator badges';
    STR_CHAT_SHOW_BADGES_VIP = 'Show VIP badges';
    STR_CHAT_SHOW_BADGES_SHARED = 'Show Shared chat badges';
    STR_CHAT_MESSAGE_DELETED = 'This single user message was requested to be deleted';
    STR_CHAT_MESSAGE_DELETED_ALL = 'All messages from this user were requested to be deleted';
    STR_CHAT_MESSAGE_DELETED_TIMEOUT = ", they've been timed out for";
    STR_CHAT_CLEAR_MSG_SUMMARY =
        'Delete messages from specific users (e.g., after a timeout or ban). If enabled, messages are removed; otherwise, only the background changes to blue.';
    STR_OPEN_HOST_SETTINGS = 'Always open the hosted live at the end of the stream if available';
    STR_ALWAYS_STAY = 'Always stay with the player opened after a live ends';
    STR_PING_WARNING = "Show 'Ping to Twitch fail' warning";
    STR_PING_WARNING_SUMMARY =
        'The app constantly checks the connection with Twitch via a ping. If it fails too many times, a warning will show. If you believe this warning is showing unintentionally, set this option to NO.';
    STR_KEY_UP_TIMEOUT = 'Key hold timeout (in milliseconds)';
    STR_KEY_UP_TIMEOUT_SUMMARY =
        'How long you need to hold a key for until a hold action happens. Actions such as refresh the screen, show thumbnails options etc.';
    STR_CURRENT_THUMB_STYLE = 'Current focus style';
    STR_NEW_THUMB_STYLE = 'New focus style';
    STR_COLOR_STYLE_TEXT = "Press up/down to select an option, press return to exit this, press enter on 'Apply changes' to confirm before exiting.";
    STR_SHADOWS = 'Shadows';
    STR_SHADOWS_NONE = 'None';
    STR_SHADOWS_WHITE = 'White';
    STR_SHADOWS_GRAY = 'Gray';
    STR_SHADOWS_BLACK = 'Black';
    STR_COLORS = 'Colors';
    STR_RESULT = 'Result';
    STR_APPLY = 'Apply changes';
    STR_COLOR_TYPE = 'Color type';
    STR_STYLES = 'Styles';
    STR_ENTER = 'Press enter';
    STR_COLOR_ARRAY = 'Background,Text,Border,Watched progress bar';
    STR_STYLES_ARRAY = 'Default,Custom,White,Grey,Red,Orange,Yellow,Green,Blue,Purple,Pink';
    STR_ENTER_RGB = STR_ENTER + ' to accept RGB change';
    STR_THUMB_STYLE = 'Selected thumbnail style';
    STR_OPEN_EXTERNAL_PLAYER = 'Open in an external player';
    STR_CHAT_SIDE_ARRAY = ['Left', 'Right'];
    STR_CHAT_BASE_ARRAY = ['Bottom right', 'Center right', 'Top right', 'Center top', 'Top left', 'Center left', 'Bottom left', 'Center bottom'];
    STR_CHAT_100_ARRAY = ['Right', 'Center', 'Left'];
    STR_NOTIFICATION_POS = 'Notification position on the screen';
    STR_NOTIFICATION_POS_ARRAY = ['Top right', 'Top center', 'Top left', 'Bottom left', 'Bottom center', 'Bottom right'];
    STR_LOWLATENCY_ARRAY = [STR_DISABLE, 'Normal mode, may cause re-buffers', 'Lowest mode, may cause even more re-buffers'];
    STR_LOWLATENCY_ENABLE_ARRAY = [STR_LOW_LATENCY + ' - ' + STR_DISABLED, STR_LOW_LATENCY + ' - Normal mode', STR_LOW_LATENCY + ' - Lowest mode'];
    STR_VOD_SEEK = 'VOD fast backward/forward controls';
    STR_VOD_SEEK_SUMMARY =
        'Controls how fast the backwards/forward steps will work. When clicking and holding left/right, the step time will increase. After the increase timeout has passed, it will increase up to the maximum step time. Then, after releasing the key, and not clicking for one second, the step time will reset back to the minimum step time.<br><br>Pressing up will overwrite the mim/max value, allowing you to go through all the possible steps and lock the value until the progress bar is dismissed.<br><br>Doing single-clicks without holding the key will not increase the time.<br><br>These options only work with VODs. For clips, the step is always 1 second.';
    STR_VOD_SEEK_MIN = 'Minimum (starting) step time';
    STR_VOD_SEEK_MAX = 'Maximum step time';
    STR_VOD_SEEK_TIME = 'Increase timeout after holding for';
    STR_UP_LOCKED = 'press up to lock the step value';
    STR_LOCKED = 'locked press up to change';
    STR_IN_CHAT = 'In Chat';
    STR_IN_SHARED_CHAT = 'In Shared Chat';
    STR_SHOW_IN_CHAT = 'Show total logged in users on top of the chat or viewers';
    STR_SHOW_IN_CHAT_SUMMARY =
        'This helps identify if the offline chat has active users and shows the difference between total viewers and chat users.';
    STR_SHOW_IN_CHAT_VIEWERS = 'Show viewers';
    STR_SHOW_IN_CHAT_CHATTERS = 'Show chatters';
    STR_PLAYED = 'Played';
    STR_CHAPTERS = 'Chapters';
    STR_FROM_SIMPLE = 'from';
    STR_HIDE_MAIN_CLOCK = 'Hide main screen clock';
    STR_HIDE_PLAYER_CLOCK = 'Hide player clock';
    STR_HIDE_MAIN_SCREEN_TITLE = 'Hide main screen title';
    STR_HIDE_MAIN_SCREEN_TITLE_SUMMARY = 'The center title, lives, clips, settings etc ...';
    STR_HIDE_ETC_HELP_INFO = 'Hide on-screen navigation tips';
    STR_HIDE_ETC_HELP_INFO_SUMMARY = "Navigation tips, such as 'Hold a key for an action' and related.";
    STR_INACTIVE_SETTINGS = 'Automatically minimize the app when inactive for';
    STR_INACTIVE_SETTINGS_SUMMARY =
        'Prevent the app from keep running when no one is watching it. A warning will show up, giving the user 15 seconds to press any key to prevent the minimizing.';
    STR_INACTIVE_WARNING = 'The app will auto minimize due to inactivity in<br><br>%x<br><br>Press any key to cancel';
    STR_REMAINING = 'Remaining:';
    STR_PLAYER_INFO_VISIBILITY = 'Player status visibility';
    STR_PREVIEW_SET = 'Preview settings';
    STR_PREVIEW_SHOW = 'Show preview';
    STR_PREVIEW_SIZE_CONTROLS = 'Preview size';
    STR_OLED_BURN_IN = 'OLED Burn in protection';
    STR_OLED_BURN_IN_SUMMARY =
        'When this is enabled the screen will fully turn black for 50 ms once every 20 minutes. Only needed for devices with OLED displays that have issues of burn-ins.';
    STR_AS = 'as';
    STR_MILLISECONDS = 'milliseconds';
    STR_HOUR = 'hour';
    STR_HOURS = 'hours';
    STR_RIGHT = 'Right';
    STR_LEFT = 'Left';
    STR_BOTTOM = 'Bottom';
    STR_TOP = 'Top';
    STR_AVG = 'Avg';
    STR_OFFSET = 'Offset';

    STR_HISTORY_EMPTY_CONTENT = 'The app history shows what you have watched in the app only if history is enabled';
    STR_PREVIEW = 'the preview';

    STR_EMBED = 'Embed player ';
    STR_CLICK_EXIT = 'Click here to exit the player';
    STR_GO_FULL = 'Full screen';
    STR_GO_FULL_HELP = 'Click, press 9 or F11';
    STR_NOT_SUPPORT_BROWSER = 'This is not supported on a browser';

    STR_WARNING_BROWSER = 'Browser warning';
    STR_WARNING_BROWSER_SUMMARY =
        'This app is designed to be used mainly on TVs, the support for other devices is limited. You can control the app using a mouse but it works better using the keyboard keys up, down, left, right, enter and return controller (ESC works as a return).';
    STR_THUMB_OPTIONS_CLICK = 'Click twice above an action (to open or apply it), click outside the dialog to exit without applying';
    STR_CLOSE_THIS_BROWSER = 'Press return, enter or mouse click outside to close this';

    STR_DISABLE_EMBED = 'Enable Live and Vod Twitch player';
    STR_DISABLE_EMBED_SUMMARY =
        'This is only needed to disable if you want to see the Android player to check its strings and layout for testing proposes';

    STR_SPECIAL_FEATURE = 'Use the keyboard for this feature';
    STR_FAIL_VOD_INFO = 'Fail to load VOD info';

    STR_PROXY_DONATE_SUMMARY = 'If you wanna know more or thanks the proxy server maintainer use the link:';

    STR_TTV_LOL = 'TTV LOL';
    STR_K_TWITCH = 'K-Twitch-Bypass';
    STR_T1080 = 'T1080';

    STR_PROXY_TIMEOUT = 'Proxy timeout (time in seconds)';
    STR_PROXY_TIMEOUT_SUMMARY =
        'If the proxy server is out this will be the time that will take to "give up" on the connection and fallback to default Twitch implementation';

    PROXY_SERVICE = 'Proxy: ';
    PROXY_SERVICE_STATUS = 'Enabled and working';
    PROXY_SERVICE_OFF = 'Disabled in settings';
    PROXY_SERVICE_FAIL = 'Not working, fail %x times';

    PROXY_SETTINGS = 'Proxy Settings (Internet censorship and related proxy)';
    PROXY_SETTINGS_SUMMARY =
        'Only one proxy can be enable, enables proxy server to get stream links from a different server, that may allow you to see content that is forbidden on yours region and avoid ads, disable this if you have any live stream issue too many or longer buffers, freezes or slow connection that may cause the stream quality to drop.';
    SEEK_PREVIEW = 'Seek Preview';
    SEEK_PREVIEW_SUMMARY =
        "Allows to control the VOD seek preview image that shows when rewind or fast forward, seek preview isn't available to all VODs.";
    SEEK_PREVIEW_SINGLE = 'Single image';
    SEEK_PREVIEW_CAROUSEL = 'Carousel of images';

    OPEN_NEW_ISSUE = '(Click New issue)';

    STR_CONFIRM = 'Confirm';

    STR_MATURE_NO_CHANGES = 'No changes to mature content due to missing password';
    STR_MATURE_PROTECT = 'Protect mature changes with a password';
    STR_MATURE_HELP_SET_PASS = 'Set an password and click Confirm, exit will reset the mature settings';
    STR_MATURE_HELP_CHECK_PASS = 'Enter the saved password and click Confirm, exit will reset the mature settings';

    STR_MATURE_DISABLED = 'Mature content is disabled';
    STR_ENABLE_MATURE = 'Mature content';
    STR_ENABLE_MATURE_SUMMARY =
        'When disabled the app will block all content marked as mature including followed content, that includes lives marked as mature, and all content from clip and VOD sections';

    STR_SCREEN_OFF = 'Screen off (Audio only)';

    STR_UNBLOCK_CHANNEL = 'Unblock channel';
    STR_UNBLOCK_GAME = 'Unblock game';
    STR_BLOCK_CHANNEL = 'Block channel';
    STR_BLOCK_GAME = 'Block game';
    STR_BLOCK_NO_USER = 'Add a user first before being able to block';
    STR_BLOCK_NO_CHANNEL = "Can't get the channel for this";
    STR_BLOCK_OVERWRITE = 'Show blocked';
    STR_BLOCK_SORT_DATE = 'Sorted by blocked date';
    STR_BLOCK_SORT_NAME = 'Sorted by name A to Z';
    STR_BLOCK_EMPTY_CONTENT = 'There is no blocked content of this type';

    STR_NO_TOKEN_WARNING = 'Without adding a user the app, may fail to load the content, this is a Twitch API limitation';
    STR_NO_TOKEN_WARNING_429 = 'The app is failing to load the content due to a Twitch API limitation, to fix this add a user.';

    STR_ADD_USER_TEXT = 'Visit %site on another device and enter the code: %code';
    STR_ADD_USER_TEXT_COUNTER = 'Checking access confirmation in %d...';
    STR_ADD_USER_TEXT_COUNTER_NOW = 'Checking now!';
    STR_ADD_ERROR = "Can't access the add user service";
    STR_USER_TOKEN_ERROR = 'Lost access to current user, please revise the user section';

    STR_WRONG_PASS = 'Wrong password!';
    STR_PASS_MATURE_ENABLED = 'Mature content is enabled, old password deleted';

    STR_PLAYER_EXTRA_CODEC = 'Enhanced Broadcasting HEVC, AV1, 1440p 4k support';
    STR_PLAYER_EXTRA_CODEC_SUMMARY = 'Most streams use AVC (H.264) up to 1080p60; HEVC/AV1 enable 1440p, 4K, and 60+fps where available.';

    STR_PLAYER_EXTRA_CODEC_SUMMARY1 =
        'This feature only works for logged-in users. Not all streams are supported — it depends on the streamer enabling it and whether Twitch provides it in your region.';

    STR_PLAYER_EXTRA_CODEC_SUMMARY_EXTRA = 'The app checks if your device supports HEVC or AV1 for higher-quality streams.';

    STR_PLAYER_EXTRA_CODEC_SUMMARY_EXTRA2 = 'Without device support, playback will be limited and may not work for enhanced streams.';

    STR_PLAYER_CODEC_AV1 = 'AV1';
    STR_PLAYER_CODEC_HEVC = 'HEVC';

    STR_PLAYER_CODEC_SUPPORTED = 'device supported';
    STR_PLAYER_CODEC_NOT_SUPPORTED = 'Device Not supported! Enabling this codec can cause playback errors.';

    STR_PLAYER_EXTRA_CODEC_SUMMARY_EXTRA3 = 'To better understand the device capability check the settings option: ';

    STR_BLOCKED_CODEC = 'Codec capability & Blocked codecs';
    STR_BLOCKED_CODEC_SUMMARY = 'List used codec capabilities and allow blocking codecs from being used.';

    STR_CODEC_DIALOG_SUMMARY_1 = 'This section lists all device-supported codec types AVC H.264, HEVC H.265, and AV1  used by this app.';

    STR_CODEC_DIALOG_SUMMARY_2 =
        'Software codecs (OMX.google) are disabled by default if a hardware codec is available, if you have a playback problem try to disable the software codec and enable the hardware or vice versa (A constant accumulation of skipped frames is indicative of a codec issue).';

    STR_CODEC_DIALOG_SUMMARY_3 = 'At least one codec of each type must be enabled at all times.';

    STR_SPEED_ADJUST = 'Catch-up with low latency';
    STR_SPEED_ADJUST_SUMMARY =
        'When low latency is enabled, auto-adjust the latency if it is off the expected target, by slowing or speeding the stream by 1%, the speed change can cause minor audio noise when the latency is being adjusted.';

    STR_SW_CODEC = 'Software codec';
    STR_HW_CODEC = 'Hardware codec';

    STR_LOAD_ALL_LANG = 'Auto Switch Content to "All" language';
    STR_LOAD_ALL_LANG_SUMMARY =
        'Auto Switch to All language when current language has no content, only applies to the no content screen and to only some screens (Games and Front page)';
    STR_LOAD_ALL_LANG_WARNING = STR_LOAD_ALL_LANG + ' due to empty content';

    STR_DISABLE_SHARED_CHAT = 'Disable shared chat';
    STR_DISABLE_SHARED_CHAT_SUMMARY = 'If set to yes will only show chat messages from the stream you open';

    STR_BACKUP_ACCOUNT_REMOVE = 'Remove Google Drive account';
    STR_BACKUP_ACCOUNT_ADD = 'Add Google Drive account for backup';
    STR_BACKUP_ACCOUNT_ADD_SUMMARY = 'To restore a backup, add an account and the app will show you available restore options.';
    STR_BACKUP_ACCOUNT_DIALOG_TITLE = 'Add Google drive account';

    STR_BACKUP_ACCOUNT_DIALOG_BODY = 'Retrieving API information please wait...';
    STR_BACKUP_ACCOUNT_DIALOG_CODE_FAIL = 'Access denied';
    STR_BACKUP_ACCOUNT_DIALOG_CODE_SUCCESS = 'Access success, Please wait while the app verifies...';

    STR_BACKUP_ACCOUNT_DIALOG_CODE_SUCCESS_END = 'The app will restore and close this dialog in a few';
    STR_BACKUP_NO_BACKUP_FOUND = 'No previously made backup found, backup created with success';
    STR_BACKUP_ACCOUNT_REFRESH_ERROR = 'Lost access the Backup and Sync account, backup account removed!';

    STR_BACKUP_SIZE = 'Backup size:';
    STR_BACKUP_NAME = 'Backup name:';
    STR_BACKUP_SYNC = 'Sync, Backup and Restore';
    STR_BACKUP_SYNC_SUMMARY =
        'The app will be able to view, create, edit, and delete only the specific Google Drive files it creates, it will NOT be able to view, modify, or delete any other files in your Google Drive.' +
        '<br><br>' +
        'It will also be able to read your email address and profile image to display the currently active account, This information will only be displayed and will NOT be modified.';

    STR_BACKUP_USER_INFO = '(User info: Users, history, blocked, and settings)';

    STR_BACKUP_SYNC_USER = 'Sync users';
    STR_BACKUP_SYNC_HISTORY = "Sync users' history and blocked list.";
    STR_BACKUP_SYNC_SETTINGS = 'Sync settings';
    STR_BACKUP_RESTORE_USER = 'Restore users';
    STR_BACKUP_RESTORE_HISTORY = "Restore users' history and blocked list.";
    STR_BACKUP_RESTORE_SETTINGS = 'Restore settings';
    STR_BACKUP_RESTORE_SUMMARY = 'If you experience issues after restoring, try clearing the app data and restoring with one option skipped.';

    STR_BACKUP_SYNC_SETTINGS_SUMMARY =
        'The backup has only one set of unified settings for all your devices. Any changes you make will be applied on your other devices the next time you open the app.';
    STR_BACKUP_SYNC_RESTORE = 'Backup found';
    STR_BACKUP_SYNC_RESTORE_SUMMARY = 'Backup found. Select items to restore, then press Return or Enter to confirm.';
    STR_BACKUP_SYNC_RESTORE_SUCCESS = 'Restore success!';
    STR_BACKUP_RESTORE_FAIL = 'Fail to restore backup';

    STR_BACKUP_ENABLE = 'Backup enable';
    STR_BACKUP_ENABLE_SUMMARY = 'If set to YES the app will keep a backup of all user info ' + STR_BACKUP_USER_INFO;

    STR_BACKUP_SYNC_ENABLE = 'Sync across devices';
    STR_BACKUP_SYNC_ENABLE_SUMMARY =
        "Enabling this will add a slight delay to the application's startup process, and is unnecessary if you are using the app in a single device. The app will sync all enabled options below between this device and others using the same Google Drive account. To switch devices and continue watching seamlessly, minimize the app on the current device by pressing the Home key. Then, make sure the app is fully closed on the other device before opening it.";
}
