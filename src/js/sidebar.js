// SIDEBAR TOGGLE

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSidebar = document.querySelector('.toggle-sidebar');

    if (window.matchMedia('(min-width: 800px)').matches) {
        toggleSidebar.addEventListener('mouseover', function() {
            if (this.classList.contains('outside-sidebar')) {
                this.textContent = '>';
            } else {
                this.textContent = '<';
            }
        });

        toggleSidebar.addEventListener('mouseout', function() {
            this.textContent = '☰';
        });
    } else {
        toggleSidebar.addEventListener('click', function() {
            if (this.classList.contains('outside-sidebar')) {
                this.textContent = '>';
            } else {
                this.textContent = '<';
            }
        });
    }
});


function initializeSidebarToggle() {
    const button = document.querySelector('.toggle-sidebar');
    button.addEventListener('click', function() {
        const sidebar = document.querySelector('.sidebar');
        const content = document.querySelector('.content');
        toggleSidebar(sidebar, content, this);
    });
}

function toggleSidebar(sidebar, content, button) {
    const isPhoneSize = window.matchMedia('(max-width: 800px)').matches;
    const isIntermediate = window.matchMedia('(max-width: 1000px)').matches;
    
    if (isPhoneSize) {
        handleSidebarForPhone(sidebar, content, button);
    } else if (isIntermediate) {
        handleSidebarForIntermediate(sidebar, content, button);
    } else {
        handleSidebarForDesktop(sidebar, content, button);
    }
}

function handleSidebarForPhone(sidebar, content, button) {
    const isSidebarOpen = sidebar.style.left === '0%' || sidebar.style.left === '';
    
    if (isSidebarOpen) {
        sidebar.style.left = '-100%';
        content.style.width = '80%';
        document.body.appendChild(button);
        button.classList.add('outside-sidebar');
    } else {
        sidebar.style.left = '0%';
        sidebar.style.width = '50%';
        sidebar.style.transition = 'left 0.3s ease-in-out';
        content.style.marginLeft = '0';
        content.style.marginRight = '0';
        sidebar.appendChild(button);
        button.classList.remove('outside-sidebar');
    }
}

function handleSidebarForIntermediate(sidebar, content, button) {
    const isSidebarOpen = sidebar.style.left === '0%' || sidebar.style.left === '';
    
    if (isSidebarOpen) {
        sidebar.style.left = '-100%';
        content.style.width = '70%';
        content.style.marginLeft = '5%';
        content.style.marginRight = '3%';
        document.body.appendChild(button);
        button.classList.add('outside-sidebar');
    } else {
        sidebar.style.left = '0%';
        sidebar.style.width = '40%';
        sidebar.style.transition = 'left 0.3s ease-in-out';
        content.style.marginLeft = '40%';
        content.style.marginRight = '2%';
        sidebar.appendChild(button);
        button.classList.remove('outside-sidebar');
    }
}

function handleSidebarForDesktop(sidebar, content, button) {
    const isSidebarOpen = sidebar.style.left === '0px' || sidebar.style.left === '';
    
    if (isSidebarOpen) {
        sidebar.style.left = '-390px';
        content.style.width = '55%';
        content.style.marginLeft = '22.5%';
        content.style.marginRight = '22.5%';
        document.body.appendChild(button);
        button.classList.add('outside-sidebar');
    } else {
        sidebar.style.left = '0px';
        content.style.marginLeft = '35%';
        content.style.marginRight = '15%';
        sidebar.appendChild(button);
        button.classList.remove('outside-sidebar');
        sidebar.classList.remove('closed');
    }
}

// EXPANDER TITLE

function initializeSectionExpansion() {
    document.querySelectorAll('.expander-title').forEach(item => {
        item.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('expanded');
        });
    });
}

// LINK ACTIVATION

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const contentPath = this.getAttribute('data-content');

        document.querySelectorAll('.link').forEach(l => l.classList.remove('active'));

        this.classList.add('active');

        fetch(contentPath).then(response => response.text()).then(html => {
            const content = document.querySelector('.content');
            content.innerHTML = html;

            // Scroll to the specific section
            const sectionId = contentPath.split('#')[1];
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView();
            }
        }).catch(err => {
            console.error('Error loading the content', err);
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSidebar = document.querySelector('.toggle-sidebar');

    toggleSidebar.addEventListener('mouseover', function() {
        if (this.classList.contains('outside-sidebar')) {
            this.textContent = '>';
        } else {
            this.textContent = '<';
        }
    });

    toggleSidebar.addEventListener('mouseout', function() {
        this.textContent = '☰';
    });

    toggleSidebar.addEventListener('click', function() {
        if (this.classList.contains('outside-sidebar')) {
            this.textContent = '<';
        } else {
            this.textContent = '>';
        }
    });
});

