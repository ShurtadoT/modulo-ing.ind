function openTab(event, tabName) {
    // Ocultar todas las pestañas
    var i, tabinfo, tablinks;
    tabinfo = document.getElementsByClassName("tab-info");
    for (i = 0; i < tabinfo.length; i++) {
        tabinfo[i].style.display = "none";
    }
    // Eliminar la clase "active" de todos los enlaces de pestaña
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Mostrar la pestaña actual y añadir la clase "active"
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}
