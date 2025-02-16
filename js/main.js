$(document).ready(function() {
    // obiekt z całym taryfikatorem
    var obj = {
        'Wykroczenia drogowe': {
            'Jazda pod wpływem alkoholu lub substancji odurzających': {
                'Dodatkowe': 'Odholowanie pojazdu, Konfiskata prawo jazdy',
                'Kwota min': 400,
                'Kwota max': 800,
                'Więzienie min': 6,
                'Więzienie max': 12,
            },
            'parkowanie/zatrzymywanie sie na parkingu prywatnym LVMPD': {
                'Dodatkowe': 'wezwanie dot',
                'Kwota min': 200,
                'Kwota max': 450,
                'Więzienie min': 0,
                'Więzienie max': 6,
            },
            'wprowadzanie pojazdu w niekontrolowany poślizg (drift)': {
                'Dodatkowe': 'wezwanie dot',
                'Kwota min': 200,
                'Kwota max': 400,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Wyścigi uliczne': {
                'Dodatkowe': 'konfiskata prawa jazdy',
                'Kwota min': 300,
                'Kwota max': 600,
                'Więzienie min': 0,
                'Więzienie max': 6,
            },
            'Jazda bez prawa jazdy': {
                'Dodatkowe': 'Odholowanie pojazdu',
                'Kwota min': 180,
                'Kwota max': 600,
                'Więzienie min': 0,
                'Więzienie max': 6,
            },
            'Przekroczenie prędkości 10-20 mph': {
                'Dodatkowe': 'Dopuszczalny błąd radaru - 10mph',
                'Kwota min': 100,
                'Kwota max': 400,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Przekroczenie prędkości 20-40 mph': {
                'Dodatkowe': 'Dopuszczalny błąd radaru - 10mph',
                'Kwota min': 400,
                'Kwota max': 550,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Przekroczenie prędkości 40+ mph': {
                'Dodatkowe': 'Dopuszczalny błąd radaru - 10mph',
                'Kwota min': 550,
                'Kwota max': 800,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Brawurowa jazda': {
                'Dodatkowe': '',
                'Kwota min': 200,
                'Kwota max': 600,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Stwarzanie zagrożenia w ruchu lądowym': {
                'Dodatkowe': 'Konfiskata prawo jazdy',
                'Kwota min': 300,
                'Kwota max': 750,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Niezatrzymanie pojazdu do kontroli': {
                'Dodatkowe': '',
                'Kwota min': 100,
                'Kwota max': 300,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Niewłaściwe parkowanie': {
                'Dodatkowe': '',
                'Kwota min': 50,
                'Kwota max': 120,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Zły stan techniczny pojazdu': {
                'Dodatkowe': 'Odholowanie pojazdu/Odholowanie pojazdu/Skierowanie Na inspekcje DOT',
                'Kwota min': 80,
                'Kwota max': 300,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Przejazd na czerwonym świetle': {
                'Dodatkowe': '',
                'Kwota min': 50,
                'Kwota max': 300,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Zniszczenie mienia': {
                'Dodatkowe': 'Naprawa Uszkodzenia',
                'Kwota min': 100,
                'Kwota max': 400,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Spowodowanie kolizji/wypadku': {
                'Dodatkowe': '',
                'Kwota min': 100,
                'Kwota max': 600,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Jazda pod prąd': {
                'Dodatkowe': '',
                'Kwota min': 150,
                'Kwota max': 700,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Potrącenie przechodnia': {
                'Dodatkowe': '',
                'Kwota min': 300,
                'Kwota max': 500,
                'Więzienie min': 0,
                'Więzienie max': 8,
            },
            'Przechodzenie przez jezdnię w niedozwolonym miejscu': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 50,
                'Kwota max': 250,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
        },
        'Przestępstwa lekkie': {
            'Niszczenie mienia publicznego': {
                'Dodatkowe': '',
                'Kwota min': 200,
                'Kwota max': 500,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Niewykonywanie poleceń funkcjonariusza': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 100,
                'Kwota max': 350,
                'Więzienie min': 0,
                'Więzienie max': 12,
            },
            'Obraza funkcjonariusza': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 200,
                'Kwota max': 300,
                'Więzienie min': 0,
                'Więzienie max': 6,
            },
            'Utrudnianie pracy służbom publicznym': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 100,
                'Kwota max': 400,
                'Więzienie min': 0,
                'Więzienie max': 6,
            },
            'Fałszywe zgłoszenie': {
                'Dodatkowe': '',
                'Kwota min': 200,
                'Kwota max': 400,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Niszczenie cudzej własności': {
                'Dodatkowe': 'Pokrycie szkód',
                'Kwota min': 200,
                'Kwota max': 600,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Składanie fałszywych zeznań': {
                'Dodatkowe': '',
                'Kwota min': 200,
                'Kwota max': 600,
                'Więzienie min': 6,
                'Więzienie max': 12,
            },
            'Kradzież pojazdu': {
                'Dodatkowe': 'Odholowanie pojazdu',
                'Kwota min': 400,
                'Kwota max': 800,
                'Więzienie min': 8,
                'Więzienie max': 15,
            },
            'Posiadanie kontrabandy': {
                'Dodatkowe': 'Konfiskata',
                'Kwota min': 250,
                'Kwota max': 500,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
            'Stawianie oporu': {
                'Dodatkowe': '',
                'Kwota min': 300,
                'Kwota max': 500,
                'Więzienie min': 6,
                'Więzienie max': 12,
            },
            'Kradzież cudzej własności': {
                'Dodatkowe': 'Pokrycie szkód',
                'Kwota min': 200,
                'Kwota max': 400,
                'Więzienie min': 6,
                'Więzienie max': 12,
            },
            'Chodzenie zamaskowanym po mieście': {
                'Dodatkowe': 'Upomnienie/Rewizja',
                'Kwota min': 100,
                'Kwota max': 300,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Próba przekupstwa': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 250,
                'Kwota max': 500,
                'Więzienie min': 0,
                'Więzienie max': 10,
            },
            'Kradzież radiowozu': {
                'Dodatkowe': 'Konfiskata',
                'Kwota min': 400,
                'Kwota max': 900,
                'Więzienie min': 12,
                'Więzienie max': 20,
            },
        },
        'Przestępstwa ciężkie': {
            'Włamanie': {
                'Dodatkowe': '',
                'Kwota min': 400,
                'Kwota max': 600,
                'Więzienie min': 0,
                'Więzienie max': 12,
            },
            'Ucieczka przed policją': {
                'Dodatkowe': '',
                'Kwota min': 300,
                'Kwota max': 550,
                'Więzienie min': 12,
                'Więzienie max': 15,
            },
            'Porwanie': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 300,
                'Kwota max': 800,
                'Więzienie min': 15,
                'Więzienie max': 30,
            },
            'Pomoc w ucieczce': {
                'Dodatkowe': '',
                'Kwota min': 200,
                'Kwota max': 600,
                'Więzienie min': 12,
                'Więzienie max': 18,
            },
            'włamanie na teren zbrojowni LVMPD': {
                'Dodatkowe': '',
                'Kwota min': 200,
                'Kwota max': 400,
                'Więzienie min': 0,
                'Więzienie max': 20,
            },
            'Współudział w przestępstwie': {
                'Dodatkowe': '',
                'Kwota min': 300,
                'Kwota max': 600,
                'Więzienie min': 12,
                'Więzienie max': 40,
            },
            'Napad na sklep/stacje': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 200,
                'Kwota max': 500,
                'Więzienie min': 15,
                'Więzienie max': 25,
            },
            'Napad na konwój': {
                'Dodatkowe': 'Konfiskata licencji na broń, Konfiskata gotówki przy sobie',
                'Kwota min': 300,
                'Kwota max': 600,
                'Więzienie min': 15,
                'Więzienie max': 40,
            },
            'Napad na Bank/jubiler': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 300,
                'Kwota max': 700,
                'Więzienie min': 20,
                'Więzienie max': 45,
            },
            'Prowokacja policji': {
                'Dodatkowe': '',
                'Kwota min': 50,
                'Kwota max': 250,
                'Więzienie min': 0,
                'Więzienie max': 15,
            },
            'Próba napadu/napaści': {
                'Dodatkowe': '',
                'Kwota min': 200,
                'Kwota max': 500,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
            'Podszywanie się pod funkcjonariusza NYPD': {
                'Dodatkowe': '',
                'Kwota min': 300,
                'Kwota max': 600,
                'Więzienie min': 10,
                'Więzienie max': 15,
            },
            'Nękanie obywatela/obywatelki': {
                'Dodatkowe': '',
                'Kwota min': 200,
                'Kwota max': 400,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Terroryzm': {
                'Dodatkowe': 'Dożywocie/Rozprawa sądowa',
                'Kwota min': 50000,
                'Kwota max': 500000,
                'Więzienie min': 360,
                'Więzienie max': 360,
            },
        },
        'Przestępstwa związane z bronią i nielegalnymi substancjami': {
            'Posiadanie narkotyków miękkich (marihuana powyżej 5g)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 150,
                'Kwota max': 600,
                'Więzienie min': 6,
                'Więzienie max': 12,
            },
            'Posiadanie narkotyków twardych (metamfetamina/kokaina)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 300,
                'Kwota max': 800,
                'Więzienie min': 12,
                'Więzienie max': 20,
            },
            'Handel narkotykami miękkimi (marihuana)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 250,
                'Kwota max': 450,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
            'Handel narkotykami twardymi (metamfetamina/kokaina)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 200,
                'Kwota max': 600,
                'Więzienie min': 15,
                'Więzienie max': 30,
            },
            'Groźby przy użyciu broni': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 300,
                'Kwota max': 600,
                'Więzienie min': 12,
                'Więzienie max': 20,
            },
            'Posiadanie broni bez zezwolenia': {
                'Dodatkowe': 'Konfiskata',
                'Kwota min': 300,
                'Kwota max': 500,
                'Więzienie min': 20,
                'Więzienie max': 20,
            },
            'Posiadanie rejestrowanej broni krótkiej': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 200,
                'Kwota max': 400,
                'Więzienie min': 12,
                'Więzienie max': 20,
            },
            'Posiadanie nielegalnej broni': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 300,
                'Kwota max': 650,
                'Więzienie min': 30,
                'Więzienie max': 60,
            },
            'Handel bronią': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 300,
                'Kwota max': 600,
                'Więzienie min': 15,
                'Więzienie max': 30,
            },
            'Bezpodstawne użycie broni': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 400,
                'Kwota max': 700,
                'Więzienie min': 6,
                'Więzienie max': 20,
            },
        },
        'Przestępstwa związane z użyciem siły/uszczerbkiem na zdrowiu': {
            'Usiłowanie zabójstwa': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 800,
                'Kwota max': 3000,
                'Więzienie min': 15,
                'Więzienie max': 25,
            },
            'Usiłowanie zabójstwa funkcjonariusza LVMPD': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 500,
                'Kwota max': 800,
                'Więzienie min': 25,
                'Więzienie max': 40,
            },
            'Napaść na funkcjonariusza LVMPD': {
                'Dodatkowe': '',
                'Kwota min': 200,
                'Kwota max': 500,
                'Więzienie min': 15,
                'Więzienie max': 30,
            },
            'Groźby karalne': {
                'Dodatkowe': '',
                'Kwota min': 200,
                'Kwota max': 500,
                'Więzienie min': 0,
                'Więzienie max': 12,
            },
            'Nieumyślne spowodowanie uszczerbku na zdrowiu': {
                'Dodatkowe': '',
                'Kwota min': 200,
                'Kwota max': 500,
                'Więzienie min': 0,
                'Więzienie max': 10,
            },
            'Naruszenie nietykalności cielesnej': {
                'Dodatkowe': '',
                'Kwota min': 200,
                'Kwota max': 500,
                'Więzienie min': 0,
                'Więzienie max': 6,
            },
            'Udział w bójce': {
                'Dodatkowe': '',
                'Kwota min': 150,
                'Kwota max': 300,
                'Więzienie min': 0,
                'Więzienie max': 6,
            },
            'Morderstwo': {
                'Dodatkowe': 'Dożywocie/Rozprawa sądowa',
                'Kwota min': 300000,
                'Kwota max': 500000,
                'Więzienie min': 360,
                'Więzienie max': 360,
            },
        }
    };

    //tworzenie htmla
    $("body").append('<input type="submit" id="show" value="Pokaż"/>');
    var i = 1;
    $.each(obj, function(k, v) {
        $("body").append('<div id="cat' + i + '">');
        var category = $('<p class="category"></p>').text(k);
        $("#cat" + i + "").append(category);
        $("#cat" + i + "").append('<div class="checkboxes" id="cb' + i + '"style="display: none">');
        $.each(v, function(k2, v2) {
            var name = $('<p id="values"></p>');
            var name2 = $('<label></label>');
            var name3 = '<input type="checkbox" value="' + k2 +'">' + k2 + ' <input type="text" id="' + k2.split(/[\s, )(/]+/).join('') +'" value=1>';
            $(name2).append(name3);
            $(name).append(name2);
            $("#cb" + i + "").append(name);
            name.append('<br>');
            name.append(document.createTextNode("("));
            $.each(v2, function(k3, v3) {
                if(v3 == ''){
                    v3 = 'Brak';
                };
                name.append(document.createTextNode(" " + k3 + ": " + v3 + ","));
            });
            name.append(document.createTextNode(")"));
        });
        i = i+1;
    });
    $("body").append('<div class="footer"><p>Copyright 2025 © by Kadrixter and white1225</p></div>');

    // tablice przechowująca zaznaczone wartości
    var arrayDodatkowe = [];
    var arrayMinKwota = [];
    var arrayMaxKwota = [];
    var arrayMinWiezienie = [];
    var arrayMaxWiezienie = [];

    // rozwijanie kategorie
    $('.category').click(function() {
        $(this).next().toggle();
    });

    $('#show').click(function() {
        // przy każdym kliknięciu pokaż należy wyczyścić tablicę
        arrayWyrok = [];
        arrayDodatkowe = [];
        arrayMinKwota = [];
        arrayMaxKwota = [];
        arrayMinWiezienie = [];
        arrayMaxWiezienie = [];
        $('input:checkbox:checked').each(function() {
            var name = $(this).val();
            var quantity = $('#' + name.split(/[\s, )(/]+/).join('') + '');
            var q2 = quantity.val();
            // dodawanie zaznaczonych wartości do 5 tablic
            if (q2 <= 1) {
                arrayWyrok.push(name);
                $.each(obj, function(k, v) {
                    $.each(v, function(k2, v2) {
                        if(k2 == name){
                            $.each(v2, function(k3, v3) {
                                if(k3 == 'Dodatkowe'){
                                    if(v3 != ''){
                                        if(arrayDodatkowe.length == 0){
                                            arrayDodatkowe.push(v3);
                                        } else {
                                            var exists = false;
                                            arrayDodatkowe.forEach(function(item){
                                                if(item == v3){
                                                    exists = true;
                                                }
                                            });
                                            if(exists == false){
                                                arrayDodatkowe.push(v3);
                                            }
                                        }
                                    }
                                } else if (k3 == 'Kwota min') {
                                    arrayMinKwota.push(v3);
                                } else if(k3 == 'Kwota max') {
                                    arrayMaxKwota.push(v3);
                                } else if(k3 == 'Więzienie min') {
                                    arrayMinWiezienie.push(v3);
                                } else if(k3 == 'Więzienie max') {
                                    arrayMaxWiezienie.push(v3);
                                };
                            });
                        }
                    });
                });
            } else {
                arrayWyrok.push(name + " x" + q2);
                $.each(obj, function(k, v) {
                    $.each(v, function(k2, v2) {
                        if(k2 == name){
                            $.each(v2, function(k3, v3) {
                                if(k3 == 'Dodatkowe'){
                                    if(v3 != ''){
                                        if(arrayDodatkowe.length == 0){
                                            arrayDodatkowe.push(v3);
                                        } else {
                                            var exists = false;
                                            arrayDodatkowe.forEach(function(item){
                                                if(item == v3){
                                                    exists = true;
                                                }
                                            });
                                            if(exists == false){
                                                arrayDodatkowe.push(v3);
                                            }
                                        }
                                    }
                                } else if (k3 == 'Kwota min') {
                                    arrayMinKwota.push(v3 * q2);
                                } else if(k3 == 'Kwota max') {
                                    arrayMaxKwota.push(v3 * q2);
                                } else if(k3 == 'Więzienie min') {
                                    arrayMinWiezienie.push(v3 * q2);
                                } else if(k3 == 'Więzienie max') {
                                    arrayMaxWiezienie.push(v3 * q2);
                                };
                            });
                        }
                    });
                });
            }
            //not checked
            $(this).prop('checked', false);
        });

        //zmienne do wyświetlania
        var wyrok = '';
        var dodatkowe = '';
        var minKwota = 0;
        var maxKwota = 0;
        var minWiezienie = 0;
        var maxWiezienie = 0;

        //połączenie wszystkich wartości w tablicach
        arrayWyrok.forEach(function(item){
            wyrok = wyrok + item + ", ";
        });
        arrayDodatkowe.forEach(function(item){
            dodatkowe = dodatkowe + item + ", ";
        });
        arrayMinKwota.forEach(function(item){
            minKwota += parseInt(item);
        });
        arrayMaxKwota.forEach(function(item){
            maxKwota += parseInt(item);
        });
        arrayMinWiezienie.forEach(function(item){
            minWiezienie += parseInt(item);
        });
        arrayMaxWiezienie.forEach(function(item){
            maxWiezienie += parseInt(item);
        });

        //pokazywanie wyroku
        if(wyrok == ''){
            alertify.error("Najpierw wybierz wykroczenie!");
        } else {
            //sprawdź czy mandat czy służba więzienna
            if(maxWiezienie > 0){
                alertify.success("Pomyślnie uzyskano sugestię wyroku");
                setTimeout(function(){
                    alertify.alert("<b>Wyrok:</b><br>"+wyrok+"<br><br><b>Proponowana kara:</b><br>Grzywna: Od "+minKwota+"$ do "+maxKwota+"$<br>Więzienie: Od "+minWiezienie+" miesięcy do "+maxWiezienie+" miesięcy<br>Dodatkowe: "+dodatkowe, ).setting({
                        'title': "<b><font size='4'>Sugestia wyroku</font></b>",
                        'movable': false,
                    }).show();
                },700);
            } else {
                alertify.success("Pomyślnie uzyskano sugestię wyroku");
                setTimeout(function(){
                    alertify.alert("<b>Wykroczenie:</b><br>"+wyrok+"<br><br><b>Proponowana kara:</b><br>Mandat: Od "+minKwota+"$ do "+maxKwota+"$<br>Dodatkowe: "+dodatkowe, ).setting({
                        'title': "<b><font size='4'>Sugestia mandatu</font></b>",
                        'movable': false,
                    }).show();
                },700);
            }
        }
    });
});

