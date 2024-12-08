// scripts.js

function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    
    // Toggle the sidebar display between 'flex' and 'none'
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'flex';
        localStorage.setItem('sidebarState', 'open'); // Store state in local storage
    } else {
        sidebar.style.display = 'none';
        localStorage.setItem('sidebarState', 'closed'); // Store state in local storage
    }
}

// Optional: Close the sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.querySelector('.menu-icon');

    // Check if the click was outside the sidebar and the menu icon
    if (sidebar.style.display === 'flex' && !sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.style.display = 'none';
        localStorage.setItem('sidebarState', 'closed'); // Update local storage
    }
});

// Initial setup: Check the sidebar state on page load
window.onload = function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarState = localStorage.getItem('sidebarState');

    if (sidebarState === 'open') {
        sidebar.style.display = 'flex'; // Show the sidebar if state is 'open'
    } else {
        sidebar.style.display = 'none'; // Hide the sidebar if state is 'closed' or not set
    }
};
