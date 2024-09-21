// loadSidebar.js
document.addEventListener('DOMContentLoaded', function() {
    const sidebarElements = document.querySelectorAll('sidebar');

    sidebarElements.forEach(function(sidebar) {
        fetch('sidebar.html')
            .then(response => response.text())
            .then(data => {
                sidebar.innerHTML = data;

                // Initialize sidebar functionality
                initializeSidebar();
            })
            .catch(error => console.error('Error loading sidebar:', error));
    });

    function initializeSidebar() {
        var subMenus = document.querySelectorAll("#leftside-navigation .sub-menu > a");
        subMenus.forEach(function(subMenu) {
            subMenu.addEventListener('click', function(e) {
                var nextElement = this.nextElementSibling;

                document.querySelectorAll("#leftside-navigation ul ul").forEach(function(ul) {
                    if (ul !== nextElement) {
                        ul.style.display = 'none';
                    }
                });

                if (nextElement && nextElement.style.display !== 'block') {
                    nextElement.style.display = 'block';
                } else {
                    nextElement.style.display = 'none';
                }

                e.stopPropagation();
            });
        });
    }
});
