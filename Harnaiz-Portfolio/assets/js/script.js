
        const projectData = {
            pharmavend: {
                title: 'OJT Monitoring & Tracking System',
                description: 'A web application that automates internship management by replacing paper records with digital Daily Time Records (DTR), real-time task logging, performance evaluations, and automated hour tracking for interns, supervisors, and academic coordinators.',
                stack: 'Python,System, SQLite',
                outcome: 'Operational Prototype',
                highlights: [
                    'Built a medication dispensing workflow focused on speed and reliability.',
                    'Integrated inventory tracking to better monitor product movement and availability.',
                    'Designed for practical deployment in health and community support environments.'
                ]
            },
            attendance: {
                title: 'Student Attendance Management System',
                description: 'A school-focused system for managing attendance records, generating reports, and improving day-to-day monitoring for students and faculty.',
                stack: 'HTML, Python, SQLite',
                outcome: 'Academic Tracking System',
                highlights: [
                    'Simplified attendance monitoring for easier daily updates and record review.',
                    'Structured data handling to support clearer reporting and analysis.',
                    'Created a user-friendly flow for day-to-day school operations.'
                ]
            },
            barangay: {
                title: 'Barangay Online System',
                description: 'A digital service platform for barangay records, residency information, certificates, and document-related civic transactions.',
                stack: 'HTML, Python, SQLite',
                outcome: 'Public Service Workflow',
                highlights: [
                    'Organized records and resident information in a cleaner digital structure.',
                    'Supported faster access to barangay-related transactions and services.',
                    'Improved management of resident and document data with better workflow visibility.'
                ]
            },
            pos: {
                title: 'Cafe Delights POS',
                description: 'A point-of-sale system built for sales processing, product tracking, and efficient receipt-based transaction handling in café settings.',
                stack: 'Python, Dart, SQLite',
                outcome: 'Retail Operations Support',
                highlights: [
                    'Managed order flow and inventory movement for smoother café operations.',
                    'Designed a POS interface with practical daily business handling in mind.',
                    'Focused on inventory awareness and straightforward transaction processing.'
                ]
            },
            inventory: {
                title: 'Inventory Control System',
                description: 'An inventory management solution for tracking stock, monitoring movement, and maintaining organized records across departments.',
                stack: 'Python, MySQL, SQL',
                outcome: 'Operational Inventory Visibility',
                highlights: [
                    'Created a structured process for monitoring stock levels and supply movement.',
                    'Designed clean database interaction for easier inventory oversight.',
                    'Supported more reliable tracking and maintenance of essential assets.'
                ]
            },
            records: {
                title: 'Records & Data Management System',
                description: 'A records-based platform for organizing data and improving relational database handling through clean, manageable system logic.',
                stack: 'SQL, Python, MySQL',
                outcome: 'Data Organization Platform',
                highlights: [
                    'Structured records to make information access and organization more manageable.',
                    'Built around relational data design and cleaner database maintenance.',
                    'Improved visibility into stored data and processing workflows.'
                ]
            }
        };

        const modal = document.getElementById('projectModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalStack = document.getElementById('modalStack');
        const modalOutcome = document.getElementById('modalOutcome');
        const modalHighlights = document.getElementById('modalHighlights');

        function openProjectModal(projectKey) {
            const project = projectData[projectKey];
            if (!project) return;

            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalStack.textContent = project.stack;
            modalOutcome.textContent = project.outcome;
            modalHighlights.innerHTML = project.highlights.map(item => `<li>${item}</li>`).join('');
            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
        }

        function closeProjectModal() {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
        }

        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', (event) => {
                if (event.target.closest('button')) return;
                openProjectModal(card.dataset.project);
            });

            card.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openProjectModal(card.dataset.project);
                }
            });
        });

        document.querySelectorAll('.project-link').forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                openProjectModal(button.dataset.project);
            });
        });

        document.querySelector('[data-close-modal]').addEventListener('click', closeProjectModal);
        document.querySelector('.modal-close').addEventListener('click', closeProjectModal);

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.classList.contains('open')) {
                closeProjectModal();
            }
        });

        // Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    updateActiveNav();
                }
            });
        });

        function updateActiveNav() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');

            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (pageYOffset >= sectionTop - 200) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').slice(1) === current) {
                        link.classList.add('active');
                    }
                });
            });
        }

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Form submission
        function handleSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            alert(`Thank you ${name}! Your message has been received. I'll get back to you soon at ${email}`);
            e.target.reset();
        }

        // Initialize
        updateActiveNav();
    