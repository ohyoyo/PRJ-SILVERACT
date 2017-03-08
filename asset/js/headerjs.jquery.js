var _pageName = window.location.pathname.replace('/', '');

var _headerJS_nav = [
    '<a href="index.html">'+
        '<li class="index">'+
            'Accueil'+
        '</li>'+
    '</a>'+
    ' | '+
    '<a href="qui-sommes-nous.html">'+
        '<li class="qui-sommes-nous">'+
            'Qui sommes-nous ?'+
        '</li>'+
    '</a>'+
    ' | '+
    '<a href="activites.html">'+
        '<li class="activites">'+
            'Activités <div class="menu"> </div>'+
        '</li>'+
    '</a>'+
    ' | '+
    '<a href="evenement.html">'+
        '<li class="evenement">'+
            'Évènements'+
        '</li>'+
    '</a>'+
    ' | '+
    '<a href="fonctionnement.html">'+
        '<li class="fonctionnement">'+
            'Fonctionnement'+
        '</li>'+
    '</a>'
].join(''),
    
    _headerJS_contact = [
    '<button class="box-header" id="sup-contact">'+
        'Nous contacter'+
    '</button>'+
        '<hr/>'+
    '<div class="box-header" id="number">'+
        '<div id="phone"></div>'+
        '<a href="tel:0782824168">07 82 82 41 68</a>'+
    '</div>'
    ];

$('ul.headerjs-nav').append(_headerJS_nav);

$('.headerjs-contact').append(_headerJS_contact);

if(_pageName == 'index.html' || _pageName == '')
    $('ul.headerjs-nav li.index').addClass('active');
else if(_pageName == 'qui-sommes-nous.html')
    $('ul.headerjs-nav li.qui-sommes-nous').addClass('active');
else if(_pageName == 'activites.html')
    $('ul.headerjs-nav li.activites').addClass('active');
else if(_pageName == 'evenement.html')
    $('ul.headerjs-nav li.evenement').addClass('active');
else if(_pageName == 'fonctionnement.html')
    $('ul.headerjs-nav li.fonctionnement').addClass('active');