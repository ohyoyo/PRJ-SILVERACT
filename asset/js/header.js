$(document).ready(function() {
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
        '</a>'+
        ' | '+
        '<a href="contact.html">'+
            '<li class="contact">'+
                'Contact'+
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
        ],
        _footerJS = [
       '<div class="container" id="container">'+
            '<img width="45px" src="asset/img/logo-silver_act.svg" class="un-footer row" >'+
            '<span></span>'+
            '<form class="un-footer row input-btn" action="">'+
                '<input type="email" placeholder="S\'inscrire à la newsletter">'+
                '<button type="submit" id="v"></button>'+
            '</form>'+
            '<span></span>'+
            '<button class="box-header un-footer row" id="sup-contact">'+
                'Nous contacter'+
            '</button>'+
        '</div>'+
        
        '<div class="container" id="footer-nav">'+
            '<div class="nav row">'+
                '<h3>Votre plaisir, notre ambition</h3>'+
                '<p>Silver Act’ propose une gamme complête d’activités sur mesure à Paris et sa région, en direct ou par l’intermédiaire de vos enfants, dans un but tant récréatif que de stimulation de l’ensemble des sens</p>'+
            '</div>'+
            '<div class="nav row" id="navigation">'+
                '<h3>Navigation :</h3>'+
                '<ul>'+
                    '<li>'+
                        '<a href="index.html">> Accueil</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="qui-sommes-nous.html">> Qui sommes-nous ?</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="evenement.html">> Événements</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="fonctionnement.html">> Fonctionnement</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="contact.html">> Contact</a>'+
                    '</li>'+
                '</ul>'+
            '</div>'+
            '<div class="nav row" id="contact">'+
                '<h3>Cordonnées :</h3>'+
                '<div id="number">'+
                    '<div id="phone"></div>'+
                    '<a href="tel:0782824168">07 82 82 41 68</a>'+
                '</div>'+
            '</div>'+
        '</div>'
        ];

    $('ul.headerjs-nav').append(_headerJS_nav);

    $('.headerjs-contact').append(_headerJS_contact);
    
    $('footer#footerJS').append(_footerJS);

    if(_pageName == 'index' || _pageName == '')
        $('ul.headerjs-nav li.index').addClass('active');
    else if(_pageName == 'qui-sommes-nous')
        $('ul.headerjs-nav li.qui-sommes-nous').addClass('active');
    else if(_pageName == 'activites')
        $('ul.headerjs-nav li.activites').addClass('active');
    else if(_pageName == 'evenement')
        $('ul.headerjs-nav li.evenement').addClass('active');
    else if(_pageName == 'fonctionnement')
        $('ul.headerjs-nav li.fonctionnement').addClass('active');
    else if(_pageName == 'contact')
        $('ul.headerjs-nav li.contact').addClass('active');
});