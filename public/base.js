function init() {
    let a = document.createElement( "a" ); a.setAttribute( "href" , "../pubic/database/miprimerabd" );
    let aTexto = document.createTextNode( "Google" ); a.appendChild(aTexto);
    document.body.appendChild(a);
    }
    window.onload = init;


init();