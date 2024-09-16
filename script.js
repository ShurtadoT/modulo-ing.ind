function openTab(event, tabName) {
    // Ocultar todas las pestañas
    const tabinfo = document.querySelectorAll(".tab-info");
    tabinfo.forEach(tab => tab.style.display = "none");

    // Eliminar la clase "active" de todos los enlaces de pestaña
    const tablinks = document.querySelectorAll(".tab-link");
    tablinks.forEach(link => link.classList.remove("active"));

    // Mostrar la pestaña actual y añadir la clase "active"
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

