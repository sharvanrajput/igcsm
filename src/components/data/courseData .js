// IGCSM Course Data
// Categories based on the course selection page
// Subcategories and courses mapped from Excel data

export const courseData = [
    {
        id: "software",
        category: "Software Programs",
        icon: "💻",
        subcategories: [
            {
                id: "crash-courses",
                name: "Crash Courses",
                courses: [
                    {
                        name: "Certificate in Basic Computing",
                        duration: "2 Months",
                        normalFee: 250,
                        fastTrackFee: 350,
                        subjects: "Information Technology",
                        syllabus: "Computer Fundamentals, Windows, Basic Software Usage",
                    },
                    {
                        name: "Basic Programming in C / C++ / Java",
                        duration: "2 Months (60 Hours)",
                        normalFee: 250,
                        fastTrackFee: 350,
                        subjects: "Information Technology, Computer Language",
                        syllabus: "Programming basics, Syntax, OOP Concepts",
                    },
                    {
                        name: "Python",
                        duration: "2 Months (60 Hours)",
                        normalFee: 250,
                        fastTrackFee: 350,
                        subjects: "Information Technology, Computer Language",
                        syllabus: "Python fundamentals, Data Types, Functions, Libraries",
                    },
                    {
                        name: "Adobe Photoshop",
                        duration: "1 Month (60 Hours)",
                        normalFee: 250,
                        fastTrackFee: 350,
                        subjects: "Information Technology, Multimedia",
                        syllabus: "Image editing, Layers, Retouching, Design",
                    },
                    {
                        name: "Adobe Illustrator",
                        duration: "1 Month (60 Hours)",
                        normalFee: 250,
                        fastTrackFee: 350,
                        subjects: "Information Technology, Multimedia",
                        syllabus: "Vector graphics, Typography, Logo design",
                    },
                    {
                        name: "AUTO CAD",
                        duration: "1 Month (60 Hours)",
                        normalFee: 250,
                        fastTrackFee: 350,
                        subjects: "Information Technology, Computer Software",
                        syllabus: "Engineering Drawing, 2D and 3D Modelling",
                    },
                ],
            },
            {
                id: "certificate",
                name: "Certificate Courses",
                courses: [
                    {
                        name: "Certificate course in C",
                        duration: "3 Months",
                        subjects: "Information Technology, Computer Language",
                        syllabus:
                            "Month 1: History of C, Compiling, debugging. Month 2: Lexical Elements, Data Types, Flow control. Month 3: Advanced functions, arrays, pointers.",
                    },
                    {
                        name: "Certificate course in C++",
                        duration: "3 Months",
                        subjects: "Information Technology, Computer Language",
                        syllabus:
                            "Month 1: Data types, variables, control structures. Month 2: OOP - classes, objects, inheritance. Month 3: Data Structures and Algorithms.",
                    },
                    {
                        name: "Certificate course in JAVA",
                        duration: "3 Months",
                        subjects: "Information Technology, Computer Language",
                        syllabus:
                            "Month 1: Pre-Programming Foundations, CS Fundamentals. Month 2: Java OOP, Data Structures. Month 3: JUnit, Java 8, MySQL.",
                    },
                    {
                        name: "Certificate course in Python",
                        duration: "3 Months",
                        subjects: "Information Technology, Computer Language",
                        syllabus:
                            "Month 1: Python basics, Data Types. Month 2: Operators, String, List, Tuple methods. Month 3: Loops, Functions, File operations.",
                    },
                    {
                        name: "Certificate course in Machine Learning",
                        duration: "3 Months",
                        subjects: "Information Technology, Machine Learning",
                        syllabus:
                            "Month 1: ML Intro, Linear Regression, Gradient Descent. Month 2: Multiple Variables, Polynomial Regression. Month 3: Logistic Regression, Regularization.",
                    },
                    {
                        name: "Certificate course in Data Science",
                        duration: "3 Months",
                        subjects: "Information Technology, Database Management",
                        syllabus:
                            "Month 1: Intro to Data Science, Deep Learning basics. Month 2: Python for data science, visualization. Month 3: SQL, Github, R Studio.",
                    },
                    {
                        name: "Certificate course in Artificial Intelligence",
                        duration: "3 Months",
                        subjects: "Information Technology, Artificial Intelligence",
                        syllabus:
                            "Month 1: AI Principles, Computer Vision. Month 2: Search algorithms, NLP. Month 3: AI and Society, TensorFlow.",
                    },
                    {
                        name: "Certificate course in DEEP Learning",
                        duration: "3 Months",
                        subjects: "Information Technology, Computer Language",
                        syllabus:
                            "Month 1: Neural Networks, PyTorch, Sentiment Analysis. Month 2: CNN, RNN, LSTM. Month 3: GANs, Model Deployment.",
                    },
                    {
                        name: "Certificate course in Android with Flutter",
                        duration: "3 Months",
                        subjects: "Information Technology",
                        syllabus:
                            "Month 1: Flutter Intro, Architecture. Month 2: Windows Installation, Advantages. Month 3: Flutter vs React, Responsive UIs.",
                    },
                    {
                        name: "Certificate course in Data Analytics",
                        duration: "3 Months",
                        subjects: "Information Technology, Database Management",
                        syllabus:
                            "Month 1: Intro, Data Cleaning, Aggregation. Month 2: Predictive Analytics, Visualization. Month 3: Text Analytics, Manipulation Techniques.",
                    },
                    {
                        name: "Certificate course in Computer Operation (CCO)",
                        duration: "3 Months",
                        subjects: "Information Technology, Microsoft Office",
                        syllabus:
                            "Month 1: OS, Window and Software Installation. Month 2: MS Office Suite 365. Month 3: Internet, Email, Google Drive.",
                    },
                    {
                        name: "Certificate course in MS Office",
                        duration: "3 Months",
                        subjects: "Information Technology, Microsoft Office",
                        syllabus:
                            "Month 1: MS Windows, Computer Basics. Month 2: MS Word, Excel, PowerPoint. Month 3: Internet, E-Mail, Outlook.",
                    },
                    {
                        name: "Advanced Excel",
                        duration: "3 Months",
                        subjects: "Microsoft Office",
                        syllabus:
                            "Month 1: Basic Excel, Formulas and Functions. Month 2: Computer Network, Data Analysis. Month 3: Macros, Graphic Operations.",
                    },
                ],
            },
            {
                id: "diploma",
                name: "Diploma Courses",
                courses: [
                    {
                        name: "Diploma in Full Stack Developer - Python (DFD)",
                        duration: "6 Months",
                        subjects: "Information Technology, Computer Language",
                        syllabus:
                            "Foundations of Python, Intermediate Python, Managing Data, Enterprise Web Apps, HTML/CSS/JS/Bootstrap, Aptitude Skills.",
                    },
                    {
                        name: "Diploma in Full Stack Developer - JAVA (DFD)",
                        duration: "6 Months",
                        subjects: "Information Technology, Computer Language, Multimedia",
                        syllabus:
                            "JAVA Foundations, Agile, Git, SQL, HTML, CSS, JavaScript, ReactJS, Data Structures, Spring Boot, AWS, Jenkins.",
                    },
                    {
                        name: "Diploma in Full Stack Developer - .NET (DFD)",
                        duration: "6 Months",
                        subjects: "Information Technology, Computer Language",
                        syllabus: ".NET Full Stack Development curriculum.",
                    },
                    {
                        name: "Diploma in Machine Learning (DML)",
                        duration: "6 Months",
                        subjects: "Information Technology, Computer Language, Machine Learning",
                        syllabus:
                            "ML Concepts, Deep Learning, Python, Linear/Ridge Regression, Logistic Regression, Decision Tree, K-Means Clustering.",
                    },
                    {
                        name: "Diploma in Data Analytics",
                        duration: "6 Months",
                        subjects: "Information Technology, Database Management",
                        syllabus:
                            "Data Analytics, Excel, SQL, Python, Power BI, Data Cleaning, R for Data Science, Tableau, Alteryx.",
                    },
                ],
            },
            {
                id: "advanced",
                name: "Advanced Diploma",
                courses: [
                    {
                        name: "Advanced Diploma in Data Analytics (ADDA)",
                        duration: "6 Months - 1 Year",
                        subjects: "Database Management, IT, Machine Learning",
                        syllabus:
                            "Python for Analytics, MySQL, Excel, Statistics, Power BI, Applied Data Analytics, Machine Learning, Capstone.",
                    },
                    {
                        name: "Advanced Diploma in Computer Application (ADCA)",
                        duration: "6 Months - 1 Year",
                        subjects: "IT, Operating Systems, Multimedia, Computer Language",
                        syllabus:
                            "Communicative English, Computer Fundamentals, OS, Web Designing, Multimedia, DBMS, OOP, MS Office, Tally.",
                    },
                    {
                        name: "Advanced Diploma in Full Stack Development (ADFD)",
                        duration: "6 Months - 1 Year",
                        subjects: "IT, Computer Language, Computer Software, Operating Systems",
                        syllabus:
                            "Full-Stack Introduction, Programming, Algorithms, Front-end, Backend, Software Engineering, Cloud Computing, Product Management.",
                    },
                    {
                        name: "Post Graduate Diploma in Information Technology (PGDIT)",
                        duration: "1 Year",
                        subjects: "IT, Database Management, Cybersecurity, ML, AI, Management",
                        syllabus:
                            "IT Fundamentals, DBMS, Algorithms, IT Project Management, ERP, Data Warehousing, ML and AI, Cloud Computing, Information Security.",
                    },
                    {
                        name: "Masters in AI and Data Science",
                        duration: "1-2 Years",
                        subjects: "Machine Learning, AI, Cybersecurity",
                        syllabus:
                            "Deep Learning, Ethics in AI, ML, Reinforcement Learning, AI in Healthcare, NLP, Online Learning and Optimization.",
                    },
                    {
                        name: "Masters in Software Engineering (MSE)",
                        duration: "1-2 Years",
                        subjects: "OS, Computer Software, Machine Learning, IT",
                        syllabus:
                            "Software Architecture, Agile, API Design, Prompt Engineering, Applied ML, Distributed Systems, Quantum Computing, Quality Management.",
                    },
                ],
            },
        ],
    },
    {
        id: "web-designing",
        category: "Web Designing Programs",
        icon: "🎨",
        subcategories: [
            {
                id: "certificate",
                name: "Certificate Courses",
                courses: [
                    {
                        name: "Certificate course in 2D Animation",
                        duration: "3 Months",
                        subjects: "IT, Multimedia, Animation",
                        syllabus:
                            "Month 1: 2D Animation Intro, Character Designing, Animation Principles. Month 2: Storyboarding, Photoshop. Month 3: Motion Graphics, Character Animation.",
                    },
                    {
                        name: "Certificate course in 3D Animation",
                        duration: "3 Months",
                        subjects: "IT, Multimedia, Animation",
                        syllabus:
                            "Month 1: 3D Modelling Intro, Photoshop. Month 2: Compositing, Texturing, Lighting. Month 3: Rigging, Autodesk Maya.",
                    },
                    {
                        name: "Desk Top Publishing (DTP)",
                        duration: "3 Months",
                        subjects: "IT, Multimedia",
                        syllabus:
                            "Month 1: Photoshop, Layers, Illustration. Month 2: Interactive PDFs, Graphic Communications. Month 3: Printing and Layout, Colour Corrections.",
                    },
                ],
            },
            {
                id: "diploma",
                name: "Diploma Courses",
                courses: [
                    {
                        name: "Diploma in Web Designing (DWD)",
                        duration: "6 Months",
                        subjects: "IT, Multimedia, Computer Software, Computer Language",
                        syllabus:
                            "Design Basics, Illustrator, Photoshop, Dreamweaver, HTML5, CSS3, JavaScript, Responsive Design, PHP, MySQL, WordPress.",
                    },
                    {
                        name: "Diploma in Digital Imaging (DDI)",
                        duration: "6 Months",
                        subjects: "IT, Computer Software, Multimedia",
                        syllabus:
                            "Adobe Photoshop, Corel Draw, Adobe Illustrator, Adobe InDesign, Adobe Pagemaker, Graphic Designing, Pre-press Specializing.",
                    },
                    {
                        name: "Diploma in Graphics and IT (DGIT)",
                        duration: "6 Months",
                        subjects: "IT, Multimedia, Computer Software",
                        syllabus:
                            "Graphic Design Intro, Corel Draw, Ideation, Photoshop, Illustrator, InDesign, Canva Pro, Portfolio Management.",
                    },
                    {
                        name: "Diploma in Building Design and Animation (DBA)",
                        duration: "6 Months",
                        subjects: "IT, Multimedia, Animation, Designing",
                        syllabus:
                            "Animation Basics, AutoCAD, 2D and 3D Modelling, Photoshop, Premiere, Video Editing, Walkthrough Creation.",
                    },
                ],
            },
            {
                id: "advanced",
                name: "Advanced Diploma",
                courses: [
                    {
                        name: "Advanced Diploma in Web Designing (ADWD)",
                        duration: "6 Months - 1 Year",
                        subjects: "IT, Computer Language, Computer Software, Multimedia",
                        syllabus:
                            "Visual Studio Code, HTML/HTML5, CSS/CSS3, JavaScript ES6, jQuery, Bootstrap 5, Photoshop, Figma, CorelDRAW, Domain and Hosting.",
                    },
                    {
                        name: "Masters in Multimedia and Animation (MMA)",
                        duration: "1-2 Years",
                        subjects: "IT, Animation, Multimedia, Designing",
                        syllabus:
                            "Design Theory, Storyboarding, Sound Design, Animation Film Making, VFX, Motion Graphics, Game Programming, Visual Arts.",
                    },
                    {
                        name: "Masters in Interior Design and Animation (MIDA)",
                        duration: "1-2 Years",
                        subjects: "IT, Animation, Computer Software, Designing",
                        syllabus:
                            "Architecture Drawing, Animation Fundamentals, AutoCAD, 2D and 3D Animation, Graphic and Web Designing, Gaming and VFX.",
                    },
                ],
            },
        ],
    },
    {
        id: "accounting",
        category: "Accounting Programs",
        icon: "📊",
        subcategories: [
            {
                id: "crash-courses",
                name: "Crash Courses",
                courses: [
                    {
                        name: "Tally",
                        duration: "1.5 Months (90 Hours)",
                        normalFee: 300,
                        fastTrackFee: 400,
                        subjects: "IT, Computer Software, Accounting",
                        syllabus: "Tally fundamentals, Ledgers, GST, Balance Sheet",
                    },
                    {
                        name: "Peachtree",
                        duration: "1.5 Months (90 Hours)",
                        normalFee: 300,
                        fastTrackFee: 400,
                        subjects: "IT, Computer Software, Accounting",
                        syllabus: "Peachtree setup, Transactions, Reporting",
                    },
                    {
                        name: "Quickbooks",
                        duration: "1.5 Months (90 Hours)",
                        normalFee: 300,
                        fastTrackFee: 400,
                        subjects: "IT, Computer Software, Accounting",
                        syllabus: "Quickbooks setup, Invoicing, Payroll",
                    },
                ],
            },
            {
                id: "certificate",
                name: "Certificate Courses",
                courses: [
                    {
                        name: "Certificate course in Tally with GST",
                        duration: "3 Months",
                        subjects: "IT, Computer Software, Accounting",
                        syllabus:
                            "Month 1: Accounting Fundamentals, Company Formation, Ledgers. Month 2: Bank Reconciliation, TDS, VAT. Month 3: GST, Sales and Purchase Vouchers, Balance Sheet.",
                    },
                    {
                        name: "Certificate course in GST",
                        duration: "3 Months",
                        subjects: "Accounting",
                        syllabus:
                            "Month 1: GST Fundamentals, Reverse Charge. Month 2: Debit and Credit Notes, Tax Planning. Month 3: GST Returns Filing, GST Framework.",
                    },
                    {
                        name: "Certificate course in Peachtree",
                        duration: "3 Months",
                        subjects: "IT, Computer Software, Accounting",
                        syllabus:
                            "Month 1: Installation, Company Setup, General Ledger. Month 2: Customer and Vendor Transactions, Invoicing. Month 3: General Journal, Book Keeping.",
                    },
                    {
                        name: "Certificate course in Quickbooks",
                        duration: "3 Months",
                        subjects: "IT, Computer Software, Accounting",
                        syllabus:
                            "Month 1: Quickbooks Desktop, Chart of Accounts, Products. Month 2: Invoices, Accounts Payable, Reporting. Month 3: Advanced functions.",
                    },
                    {
                        name: "Certificate course in Manual Accounting (CMA)",
                        duration: "3 Months",
                        subjects: "Accounting",
                        syllabus:
                            "Month 1: Accounting Concepts, Account Information. Month 2: Balance Sheet, Payroll, Ledger. Month 3: Ratio Analysis, Journal Entries, Cash Flow.",
                    },
                    {
                        name: "Data Entry Operator (DEO)",
                        duration: "2 Months",
                        normalFee: 300,
                        fastTrackFee: 400,
                        subjects: "IT",
                        syllabus: "Data Entry fundamentals, Typing, Spreadsheets",
                    },
                ],
            },
            {
                id: "diploma",
                name: "Diploma Courses",
                courses: [
                    {
                        name: "Diploma in Data Entry Operation (DDEO)",
                        duration: "6 Months",
                        subjects: "IT, Microsoft Office, Database Management",
                        syllabus:
                            "Computer components, Windows OS, Typing Skills, MS Office, Image Editing, Networking, Internet, Remote Access.",
                    },
                    {
                        name: "Diploma in Foreign Accounting",
                        duration: "6 Months",
                        subjects: "IT, Computer Language, Accounting",
                        syllabus:
                            "Practical Accounting, GST, Tally Prime, Zoho Books, Advanced Excel, Gulf VAT, SAP FICO, IFRS.",
                    },
                    {
                        name: "Diploma in Computerized Financial Accounting (DCFA)",
                        duration: "6 Months",
                        subjects: "IT, Computer Language, Accounting",
                        syllabus:
                            "Business Accounting Basics, Accounting Cycle, Taxation Fundamentals, Financial Markets, Financial Statement Analysis, Tally ERP.",
                    },
                ],
            },
            {
                id: "advanced",
                name: "Advanced Diploma",
                courses: [
                    {
                        name: "Advanced Diploma in Financial Accounting (ADFA)",
                        duration: "6 Months - 1 Year",
                        subjects: "Accounting, Computer Software, Microsoft Office, IT",
                        syllabus:
                            "Manual Accounting, Commercial Law, Tally ERP, Advanced Excel, Taxation - TDS/VAT/Income Tax, VB.Net, Auditing, E-filing.",
                    },
                    {
                        name: "Advanced Diploma in Office Management (ADOM)",
                        duration: "6 Months - 1 Year",
                        subjects: "IT, Management, Aptitude Skills",
                        syllabus:
                            "Office Management, Computer Basics, Business Communication, Corporate Management, Marketing, Finance Management, HRM.",
                    },
                    {
                        name: "Professional Gulf Accounting (PGA)",
                        duration: "1-2 Years",
                        subjects: "Microsoft Office, Accounting, IT",
                        syllabus:
                            "MS Office, Advanced Excel, Manual Accounting, Tally Essential, GCC VAT, SAGE 50, QuickBooks Advanced, IFRS.",
                    },
                ],
            },
        ],
    },
    {
        id: "teacher-training",
        category: "Teacher Training Programs",
        icon: "👩‍🏫",
        subcategories: [
            {
                id: "vocational",
                name: "Vocational / Professional",
                courses: [
                    {
                        name: "NTT (Nursery Teacher Training)",
                        duration: "1 Year",
                        subjects: "Aptitude Skills, Management, Education, IT",
                        syllabus:
                            "Indian Education System, Child Care and Health, Pre-primary Education, Teaching Methodology, Child Psychology, Computers in Education, Practical Workshops.",
                    },
                    {
                        name: "PTT (Primary Teacher Training)",
                        duration: "1 Year",
                        subjects: "Aptitude Skills, Management, Education, IT, Designing",
                        syllabus:
                            "Science, Computer Applications, EVS, Literature, Methods of Teaching, Child Psychology, School Management, Creative Art, Visual Arts.",
                    },
                    {
                        name: "NPTT (Nursery and Primary Teacher Training)",
                        duration: "1 Year",
                        subjects: "Aptitude Skills, Management, Education, IT, Designing",
                        syllabus:
                            "Indian Education System, Child Psychology, Teaching Methods, Child Nutrition, Abacus, Computer Aided Teaching, Practical Workshops.",
                    },
                    {
                        name: "CTTC (Computer Teachers Training Course)",
                        duration: "1 Year",
                        subjects: "IT, Accounting, Computer Software, Microsoft Office",
                        syllabus:
                            "Computer Fundamentals, MS Office (Basic and Advanced), Internet, Operating Systems, Accounting, Photoshop, CSS, Corel Draw, Java, HTML.",
                    },
                ],
            },
        ],
    },
    {
        id: "web-development",
        category: "Web Development Programs",
        icon: "🌐",
        subcategories: [
            {
                id: "diploma",
                name: "Diploma Courses",
                courses: [
                    {
                        name: "Diploma in Full Stack Developer - Python (DFD)",
                        duration: "6 Months",
                        subjects: "IT, Computer Language",
                        syllabus:
                            "Python Foundations, Intermediate Python, Web Frameworks, Enterprise Web Apps, HTML/CSS/JS/jQuery/Bootstrap, Aptitude Skills.",
                    },
                    {
                        name: "Diploma in Full Stack Developer - JAVA (DFD)",
                        duration: "6 Months",
                        subjects: "IT, Computer Language, Multimedia",
                        syllabus:
                            "JAVA Foundations, Git, SQL, HTML, CSS, JS, ReactJS, Data Structures, Spring Boot, AWS, Docker, Jenkins.",
                    },
                    {
                        name: "Diploma in Full Stack Developer - .NET (DFD)",
                        duration: "6 Months",
                        subjects: "IT, Computer Language",
                        syllabus: ".NET Full Stack Development - Frontend and Backend.",
                    },
                ],
            },
            {
                id: "advanced",
                name: "Advanced Diploma",
                courses: [
                    {
                        name: "Advanced Diploma in Web Designing (ADWD)",
                        duration: "6 Months - 1 Year",
                        subjects: "IT, Computer Language, Multimedia",
                        syllabus:
                            "HTML5, CSS3, JavaScript ES6, jQuery, Bootstrap 5, Photoshop, Figma, CorelDRAW, Domain and Hosting.",
                    },
                    {
                        name: "Advanced Diploma in Full Stack Development (ADFD)",
                        duration: "6 Months - 1 Year",
                        subjects: "IT, Computer Language, Computer Software",
                        syllabus:
                            "Programming Foundations, Algorithms, Front-end, Backend, Software Engineering, Cloud Computing, Product Management.",
                    },
                    {
                        name: "Masters in Software Engineering (MSE)",
                        duration: "1-2 Years",
                        subjects: "OS, Computer Software, Machine Learning, IT",
                        syllabus:
                            "API Design, Agile, Software Architecture, Prompt Engineering, Applied ML, Distributed Systems, Quality Management.",
                    },
                ],
            },
        ],
    },
    {
        id: "hardware-networking",
        category: "Hardware and Networking Programs",
        icon: "🖥️",
        subcategories: [
            {
                id: "crash-courses",
                name: "Crash Courses",
                courses: [
                    {
                        name: "Laptop Repairing",
                        duration: "2 Months (120 Hours)",
                        normalFee: 599,
                        fastTrackFee: 999,
                        subjects: "IT, Computer Hardware",
                        syllabus: "Laptop components, Repair techniques, Troubleshooting",
                    },
                    {
                        name: "CHT (Computer Hardware Technician)",
                        duration: "1.5 Months (90 Hours)",
                        normalFee: 300,
                        fastTrackFee: 400,
                        subjects: "IT, Computer Hardware",
                        syllabus: "Hardware basics, Motherboard, Repair techniques",
                    },
                ],
            },
            {
                id: "certificate",
                name: "Certificate Courses",
                courses: [
                    {
                        name: "Certificate course in Hardware and Networking (CHN)",
                        duration: "3 Months",
                        subjects: "IT, OS, Computer Hardware",
                        syllabus:
                            "Month 1: Hardware basics, Motherboard, OS. Month 2: Cloud computing, Routing, Wireless. Month 3: Network Security, Topologies.",
                    },
                    {
                        name: "Certificate Course in Computer Hardware (CCH)",
                        duration: "3 Months",
                        subjects: "IT, OS, Computer Hardware",
                        syllabus:
                            "Month 1: OS Technologies, Booting Sequence. Month 2: Digital Electronics, Microprocessor. Month 3: Advanced Microprocessor, System Resources.",
                    },
                    {
                        name: "Certificate Course in Security Systems (CSS)",
                        duration: "3 Months",
                        subjects: "IT, Database Management, Cybersecurity",
                        syllabus:
                            "Month 1: Cybersecurity Foundations, Network Security. Month 2: Threat Actors, Hackers. Month 3: Enterprise Security, Hacking Process.",
                    },
                    {
                        name: "Certificate course in Laptop Engineering",
                        duration: "3 Months",
                        subjects: "IT, OS, Computer Hardware",
                        syllabus:
                            "Month 1: Laptop principles, Assembly. Month 2: Hardware repair, BGA Soldering. Month 3: BIOS, Data recovery, Formatting.",
                    },
                    {
                        name: "Certificate course in Mobile Phone Technology (CMT)",
                        duration: "3 Months",
                        subjects: "IT",
                        syllabus:
                            "Month 1: Basic Electronics, Mobile theory. Month 2: Hardware and Software practice. Month 3: Schematic charts, Repair and Maintenance.",
                    },
                    {
                        name: "Certificate course in Ethical Hacking",
                        duration: "3 Months",
                        subjects: "IT, Database Management, Cybersecurity",
                        syllabus:
                            "Month 1: Security Fundamentals, Ethical Hacking Intro, Password Cracking. Month 2: Social Engineering, Network attacks. Month 3: Mobile attacks, IoT, Cloud threats, Penetration Testing.",
                    },
                ],
            },
            {
                id: "diploma",
                name: "Diploma Courses",
                courses: [
                    {
                        name: "Diploma in Hardware and Networking (DHN)",
                        duration: "6 Months",
                        subjects: "IT, Computer Hardware, Computer Software, OS",
                        syllabus:
                            "Basic Electronics, Computer Fundamentals, PC Hardware, Assembly, OS, Computer Networks, Linux Administration, Antivirus.",
                    },
                    {
                        name: "Diploma in Mobile Phone Technology (DMT)",
                        duration: "6 Months",
                        subjects: "IT, Computer Hardware",
                        syllabus:
                            "Basic Electronics, SMT, Smartphone Disassembly, PCB Troubleshooting, Chip Level Repair, Software Repairing, Service Center Management.",
                    },
                    {
                        name: "Diploma in CCTV and Security Systems",
                        duration: "6 Months",
                        subjects: "IT, Cybersecurity",
                        syllabus: "CCTV Systems, Security Configuration, Network Setup.",
                    },
                    {
                        name: "Diploma in CCTV Installation",
                        duration: "6 Months",
                        subjects: "IT, Cybersecurity, CCTV Hardware and Software",
                        syllabus:
                            "CCTV Basics, Camera Installation, NVR Setup, Network Switch, Firewall, Display Wall, NAS, Cable Termination.",
                    },
                ],
            },
            {
                id: "advanced",
                name: "Advanced Diploma",
                courses: [
                    {
                        name: "Advanced Diploma in Computer Hardware (ADCH)",
                        duration: "6 Months - 1 Year",
                        subjects: "IT, Computer Hardware, Computer Software, OS",
                        syllabus:
                            "Computer Hardware and Internet, Networking, LINUX, Basic Electronics, Analog and Digital Electronics, Windows Server Administration.",
                    },
                    {
                        name: "Advanced Diploma in Networking and Security (ADNS)",
                        duration: "6 Months - 1 Year",
                        subjects: "IT, OS, Cybersecurity, Aptitude Skills",
                        syllabus:
                            "PC Architecture, OS and Diagnostics, Networks, Windows and Linux Networking, Cloud Computing, Wireless Networks, Ethical Hacking.",
                    },
                ],
            },
        ],
    },
    {
        id: "advance-computer",
        category: "Advance Computer Programs",
        icon: "🖱️",
        subcategories: [
            {
                id: "certificate",
                name: "Certificate Courses",
                courses: [
                    {
                        name: "Certificate in Computer Operation (CCO)",
                        duration: "3 Months",
                        subjects: "IT, Microsoft Office",
                        syllabus:
                            "Operating Systems, MS Office Suite 365, Internet and Email, Google Drive.",
                    },
                    {
                        name: "Certificate in Data Entry Operation - English (CDEO)",
                        duration: "3 Months",
                        subjects: "IT",
                        syllabus:
                            "Data Entry Introduction, Typing, Data Validation, Database Management, MS Office, Quality Control.",
                    },
                    {
                        name: "Certificate in Data Entry Operation - Hindi (CDEO)",
                        duration: "3 Months",
                        subjects: "IT",
                        syllabus:
                            "Hindi Data Entry, Typing, Data Validation, Database Management, MS Office.",
                    },
                ],
            },
            {
                id: "diploma",
                name: "Diploma Courses",
                courses: [
                    {
                        name: "DCA (Diploma in Computer Application)",
                        duration: "6 Months",
                        subjects: "IT, Microsoft Office, OS, Multimedia, Cybersecurity",
                        syllabus:
                            "Computer Fundamentals, Hardware and Software, MSDOS, Windows 11, MS Office, PC Assembly, Multimedia, Internet, Digital Services, Cybersecurity.",
                    },
                    {
                        name: "Diploma in Data Entry Operation (DDEO)",
                        duration: "6 Months",
                        subjects: "IT, Microsoft Office, Database Management, OS",
                        syllabus:
                            "Computer Components, Windows, Typing, MS Office, Image Editing, Networking, Internet Concepts.",
                    },
                ],
            },
            {
                id: "advanced",
                name: "Advanced Diploma",
                courses: [
                    {
                        name: "Advanced Diploma in Computer Application (ADCA)",
                        duration: "6 Months - 1 Year",
                        subjects: "IT, OS, Multimedia, Computer Language, Microsoft Office",
                        syllabus:
                            "Computer Fundamentals, OS, Internet and Web Designing, Multimedia, DBMS, OOP with C++, MS Office, Visual Basic, Tally.",
                    },
                    {
                        name: "Post Graduate Diploma in Information Technology (PGDIT)",
                        duration: "1 Year",
                        subjects: "IT, Database Management, Cybersecurity, ML, AI, Management",
                        syllabus:
                            "IT Fundamentals, DBMS, IT Project Management, ERP, Data Warehousing, ML and AI, Cloud Computing, Information Security.",
                    },
                ],
            },
        ],
    },
    {
        id: "mobile-app",
        category: "Mobile App Development Programs",
        icon: "📱",
        subcategories: [
            {
                id: "certificate",
                name: "Certificate Courses",
                courses: [
                    {
                        name: "Certificate course in Android with Flutter (CAF)",
                        duration: "3 Months",
                        subjects: "IT",
                        syllabus:
                            "Flutter Introduction, Architecture, Windows Installation, Flutter vs React, Responsive and Adaptive UIs.",
                    },
                ],
            },
            {
                id: "diploma",
                name: "Diploma Courses",
                courses: [
                    {
                        name: "Diploma in Full Stack Developer - Python (DFD)",
                        duration: "6 Months",
                        subjects: "IT, Computer Language",
                        syllabus:
                            "Python Foundations, Web Development, HTML/CSS/JS, Bootstrap, Enterprise Applications.",
                    },
                    {
                        name: "Diploma in Mobile Phone Technology (DMT)",
                        duration: "6 Months",
                        subjects: "IT, Computer Hardware",
                        syllabus:
                            "Electronics, Smartphone Technology, Software Repair, OS Installation, Service Center Management.",
                    },
                ],
            },
        ],
    },
    {
        id: "multimedia",
        category: "Multimedia and Animation Programs",
        icon: "🎬",
        subcategories: [
            {
                id: "certificate",
                name: "Certificate Courses",
                courses: [
                    {
                        name: "Certificate course in 2D Animation",
                        duration: "3 Months",
                        subjects: "IT, Multimedia, Animation",
                        syllabus:
                            "2D Animation Intro, Character Designing and Sketching, Principles of Animation, Storyboarding, Photoshop, Motion Graphics.",
                    },
                    {
                        name: "Certificate course in 3D Animation",
                        duration: "3 Months",
                        subjects: "IT, Multimedia, Animation",
                        syllabus:
                            "3D Modelling Intro, Photoshop, Compositing, Texturing, Lighting, VFX, Rigging, Autodesk Maya.",
                    },
                    {
                        name: "Certificate course in Photoshop",
                        duration: "3 Months",
                        subjects: "IT, Multimedia, Computer Software",
                        syllabus:
                            "Photoshop Intro, Adjustment Layers, Image Manipulation, Retouching and Restoration, Bitmap and Vector.",
                    },
                    {
                        name: "Certificate course in Illustrator",
                        duration: "3 Months",
                        subjects: "IT, Multimedia, Computer Software",
                        syllabus:
                            "Graphic Design, Infographics, Typography, Logo, Vector Drawing, 3D Perspective, Advanced Illustrator Tools.",
                    },
                    {
                        name: "Desk Top Publishing (DTP)",
                        duration: "3 Months",
                        subjects: "IT, Multimedia",
                        syllabus:
                            "Photoshop, Layers, Interactive PDFs, Layout Designing, Image Retouching, Colour Corrections.",
                    },
                    {
                        name: "AUTO CAD (Civil/Mechanical/Electrical)",
                        duration: "3 Months",
                        subjects: "IT, Multimedia, Computer Software",
                        syllabus:
                            "Engineering Drawing, AutoCAD Introduction, 3D Techniques, Isometric Drawings, 3D Modelling, AutoCAD Architecture.",
                    },
                ],
            },
            {
                id: "diploma",
                name: "Diploma Courses",
                courses: [
                    {
                        name: "Diploma in Digital Imaging (DDI)",
                        duration: "6 Months",
                        subjects: "IT, Computer Software, Multimedia",
                        syllabus:
                            "Adobe Photoshop, Corel Draw, Adobe Illustrator, Adobe InDesign, Adobe Pagemaker, Graphic Designing, Matte Painting.",
                    },
                    {
                        name: "Diploma in Graphics and IT (DGIT)",
                        duration: "6 Months",
                        subjects: "IT, Multimedia, Computer Software",
                        syllabus:
                            "Graphic Design, Corel Draw, Photoshop, Illustrator, InDesign, Canva Pro, Abstract Objects, Portfolio Management.",
                    },
                    {
                        name: "Diploma in Building Design and Animation (DBA)",
                        duration: "6 Months",
                        subjects: "IT, Multimedia, Animation, Designing",
                        syllabus:
                            "Animation Basics, AutoCAD, 2D and 3D Modelling, Photoshop, Premiere, Video Editing, Walkthrough Creation.",
                    },
                ],
            },
            {
                id: "advanced",
                name: "Advanced Diploma",
                courses: [
                    {
                        name: "Masters in Multimedia and Animation (MMA)",
                        duration: "1-2 Years",
                        subjects: "IT, Animation, Multimedia, Designing",
                        syllabus:
                            "Design Theory, Storyboarding, Sound Design, Animation Film Making, Cinematography, VFX, Motion Graphics, Cartoon Animation.",
                    },
                    {
                        name: "Masters in Interior Design and Animation (MIDA)",
                        duration: "1-2 Years",
                        subjects: "IT, Animation, Designing",
                        syllabus:
                            "Architecture Drawing, Urban Planning, AutoCAD, 2D and 3D Animation, Graphic and Web Designing, Gaming and VFX.",
                    },
                ],
            },
        ],
    },
    {
        id: "management",
        category: "Management Programs",
        icon: "📋",
        subcategories: [
            {
                id: "advanced",
                name: "Advanced Diploma",
                courses: [
                    {
                        name: "Advanced Diploma in Office Management (ADOM)",
                        duration: "6 Months - 1 Year",
                        subjects: "IT, Management, Aptitude Skills",
                        syllabus:
                            "Office Management, Computer Basics, Business English, Corporate Management, Marketing, Finance Management, HRM, Internet Fundamentals.",
                    },
                    {
                        name: "Post Graduate Diploma in Information Technology (PGDIT)",
                        duration: "1 Year",
                        subjects: "IT, Database Management, Cybersecurity, ML, AI, Management",
                        syllabus:
                            "Principles of Management, Business Communication, IT Fundamentals, DBMS, IT Project Management, ERP, E-Business, Cloud Computing.",
                    },
                    {
                        name: "Masters in Software Engineering (MSE)",
                        duration: "1-2 Years",
                        subjects: "OS, Computer Software, Machine Learning, IT",
                        syllabus:
                            "Business and Marketing Strategy, Agile Methods, Software Project Management, Software Architecture, Quality Management.",
                    },
                ],
            },
            {
                id: "higher-education",
                name: "Higher Education",
                courses: [
                    {
                        name: "BBA (Bachelor of Business Administration)",
                        duration: "3 Years",
                        subjects: "Management, Finance, Marketing",
                        syllabus: "Business fundamentals, Finance, Marketing, HR, Operations.",
                    },
                    {
                        name: "MBA (Masters of Business Administration)",
                        duration: "2 Years",
                        subjects: "Advanced Management",
                        syllabus: "Advanced Business Strategy, Finance, Leadership, Analytics.",
                    },
                ],
            },
        ],
    },
    {
        id: "interior-designing",
        category: "Interior Designing Programs",
        icon: "🏠",
        subcategories: [
            {
                id: "diploma",
                name: "Diploma Courses",
                courses: [
                    {
                        name: "Diploma in Interior Designing (DID)",
                        duration: "6 Months",
                        subjects: "IT, Computer Software, Multimedia, Designing",
                        syllabus:
                            "Interior Design Theory, Sketching and Lettering, Geometrical Shapes, Colors in Design, AutoCAD, Google Sketchup, Climatology, Concept Design.",
                    },
                    {
                        name: "Diploma in Building Design and Animation (DBA)",
                        duration: "6 Months",
                        subjects: "IT, Multimedia, Animation, Designing",
                        syllabus:
                            "Animation Basics, AutoCAD, 2D and 3D Modelling, Adobe Photoshop, Video Editing, Walkthrough Creation.",
                    },
                ],
            },
            {
                id: "advanced",
                name: "Advanced Diploma",
                courses: [
                    {
                        name: "Masters in Interior Design and Animation (MIDA)",
                        duration: "1-2 Years",
                        subjects: "IT, Animation, Computer Software, Designing",
                        syllabus:
                            "Architecture Drawing, Landscape Designing, Building Services, AutoCAD, 2D and 3D Animation, Web Designing, Gaming and VFX.",
                    },
                    {
                        name: "Masters in CAD (Civil)",
                        duration: "1-2 Years",
                        subjects: "IT, Computer Software, Multimedia, Designing",
                        syllabus:
                            "AutoCAD Civil, BIM, Revit Architecture, 3Ds Max, STAAD.pro, Building Estimation and Costing.",
                    },
                ],
            },
        ],
    },
    {
        id: "fashion-designing",
        category: "Fashion Designing Programs",
        icon: "👗",
        subcategories: [
            {
                id: "diploma",
                name: "Diploma Courses",
                courses: [
                    {
                        name: "Diploma in Fashion Designing (DFD)",
                        duration: "6 Months",
                        subjects: "IT, Designing, Multimedia",
                        syllabus:
                            "Fashion Studies, History of Costumes, Foundation Art, Pattern Making, Product Development, Merchandising, CAD for Fashion, Sustainability.",
                    },
                ],
            },
            {
                id: "advanced",
                name: "Advanced / Masters",
                courses: [
                    {
                        name: "Fashion Designing",
                        duration: "1-2 Years",
                        subjects: "IT, Animation, Multimedia, Designing",
                        syllabus:
                            "Fashion Design Intro, Fashion Construction, History of 20th Century Fashion, 2D and 3D Designing, Apparel Manufacturing, Retail Marketing, Computer Designing.",
                    },
                ],
            },
        ],
    },
    {
        id: "architecture",
        category: "Architecture Programs",
        icon: "🏛️",
        subcategories: [
            {
                id: "certificate",
                name: "Certificate Courses",
                courses: [
                    {
                        name: "AUTO CAD (Civil/Mechanical/Electrical)",
                        duration: "3 Months",
                        subjects: "IT, Multimedia, Computer Software",
                        syllabus:
                            "Engineering Drawing, AutoCAD Introduction, AutoCAD 3D, Isometric Drawings, 3D Modelling, AutoCAD Architecture.",
                    },
                ],
            },
            {
                id: "advanced",
                name: "Advanced / Masters",
                courses: [
                    {
                        name: "Masters in CAD (Civil)",
                        duration: "1-2 Years",
                        subjects: "IT, Computer Software, Multimedia, Designing",
                        syllabus:
                            "AutoCAD Civil, BIM, Revit Architecture, 3Ds Max, STAAD.pro, Building Estimation and Costing, Civil Design with Python.",
                    },
                    {
                        name: "Masters in Interior Design and Animation (MIDA)",
                        duration: "1-2 Years",
                        subjects: "IT, Animation, Designing, Multimedia",
                        syllabus:
                            "Architecture Drawing, Fundamentals of Animation, Urban Design Planning, Landscape Design, AutoCAD, 2D and 3D Animation.",
                    },
                ],
            },
            {
                id: "higher-education",
                name: "Higher Education",
                courses: [
                    {
                        name: "BSc Computer Science / IT",
                        duration: "3 Years",
                        subjects: "IT, Computer Science",
                        syllabus: "Computer Science fundamentals, Programming, Databases, Networks.",
                    },
                ],
            },
        ],
    },
    {
        id: "spoken-english",
        category: "Spoken English Programs",
        icon: "🗣️",
        subcategories: [
            {
                id: "crash-courses",
                name: "Crash Courses",
                courses: [
                    {
                        name: "Spoken English",
                        duration: "1.5 Months (90 Hours)",
                        normalFee: 300,
                        fastTrackFee: 400,
                        subjects: "Aptitude Skills, Management",
                        syllabus: "Basic to Advanced English speaking, Grammar, Communication",
                    },
                ],
            },
            {
                id: "vocational",
                name: "Vocational Courses",
                courses: [
                    {
                        name: "Spoken English and Life Skills, Career Skills (21st Century Skills)",
                        duration: "Flexible",
                        subjects: "Aptitude Skills, Management",
                        syllabus:
                            "Spoken English, Life skills, Career development, Communication, Interpersonal skills.",
                    },
                ],
            },
        ],
    },
    {
        id: "skill-vocational",
        category: "Skill and Vocational Courses",
        icon: "🎓",
        subcategories: [
            {
                id: "vocational",
                name: "Vocational Courses",
                courses: [
                    {
                        name: "NTT (Nursery Teacher Training)",
                        duration: "1 Year",
                        subjects: "Education, Child Development, IT",
                        syllabus: "Child Psychology, Teaching Methods, Practical Workshops.",
                    },
                    {
                        name: "PTT (Primary Teacher Training)",
                        duration: "1 Year",
                        subjects: "Education, Science, Arts",
                        syllabus: "Teaching Methodologies, Child Psychology, School Administration.",
                    },
                    {
                        name: "NPTT (Nursery and Primary Teacher Training)",
                        duration: "1 Year",
                        subjects: "Education, IT, Arts",
                        syllabus: "Comprehensive Teacher Training for Nursery and Primary levels.",
                    },
                    {
                        name: "CTTC (Computer Teachers Training Course)",
                        duration: "1 Year",
                        subjects: "IT, Accounting, Computer Software",
                        syllabus: "Computer Fundamentals, MS Office, Programming Languages, Photoshop.",
                    },
                    {
                        name: "Beautician",
                        duration: "1-2 Years",
                        subjects: "Designing, Management, Hairstyling",
                        syllabus:
                            "Hairstyling, Skincare, Makeup, Bridal Looks, Airbrushing, Stage Makeup, Herbal Beauty Care.",
                    },
                ],
            },
            {
                id: "iti",
                name: "ITI Courses",
                courses: [
                    {
                        name: "Fitter",
                        courseCode: "453",
                        duration: "ITI",
                        subjects: "Technical, Engineering",
                        syllabus: "Mechanical fitting, Engineering principles.",
                    },
                    {
                        name: "Turner",
                        courseCode: "578",
                        duration: "ITI",
                        subjects: "Technical, Engineering",
                        syllabus: "Turning operations, Lathe machine operations.",
                    },
                    {
                        name: "Machinist",
                        courseCode: "493",
                        duration: "ITI",
                        subjects: "Technical, Engineering",
                        syllabus: "Machining operations, CNC.",
                    },
                    {
                        name: "Electrician",
                        courseCode: "442",
                        duration: "ITI",
                        subjects: "Technical, Engineering",
                        syllabus: "Electrical installations, Maintenance.",
                    },
                    {
                        name: "Electronics Mechanic",
                        courseCode: "446",
                        duration: "ITI",
                        subjects: "Technical, Electronics",
                        syllabus: "Electronic components, Circuits, Repair.",
                    },
                    {
                        name: "Mechanic (Motor Vehicle)",
                        courseCode: "502",
                        duration: "ITI",
                        subjects: "Technical, Automotive",
                        syllabus: "Motor vehicle repair and maintenance.",
                    },
                    {
                        name: "Computer Operator and Programming Assistant",
                        courseCode: "421",
                        duration: "ITI",
                        subjects: "IT",
                        syllabus: "Computer Operations, Programming basics.",
                    },
                    {
                        name: "Fashion Design and Technology",
                        courseCode: "449",
                        duration: "ITI",
                        subjects: "Designing",
                        syllabus: "Fashion design fundamentals, Technology.",
                    },
                    {
                        name: "Basic Cosmetology",
                        courseCode: "409",
                        duration: "ITI",
                        subjects: "Beauty, Personal Care",
                        syllabus: "Cosmetology basics, Beauty treatments.",
                    },
                    {
                        name: "Welder",
                        courseCode: "969",
                        duration: "ITI",
                        subjects: "Technical, Engineering",
                        syllabus: "Welding techniques and safety.",
                    },
                ],
            },
            {
                id: "polytechnic",
                name: "Polytechnic Courses",
                courses: [
                    {
                        name: "Civil Engineering",
                        duration: "3 Years",
                        subjects: "Engineering",
                        syllabus: "Civil Engineering principles, Structural design, Construction.",
                    },
                    {
                        name: "Mechanical Engineering",
                        duration: "3 Years",
                        subjects: "Engineering",
                        syllabus: "Mechanical design, Thermodynamics, Manufacturing.",
                    },
                    {
                        name: "Electrical Engineering",
                        duration: "3 Years",
                        subjects: "Engineering",
                        syllabus: "Electrical circuits, Power systems, Electronics.",
                    },
                    {
                        name: "Diploma in Pharmacy",
                        duration: "2 Years",
                        subjects: "Medical, Pharmacy",
                        syllabus: "Pharmacology, Drug interactions, Hospital pharmacy.",
                    },
                ],
            },
        ],
    },
    {
        id: "beautician",
        category: "Beautician Programs",
        icon: "💄",
        subcategories: [
            {
                id: "advanced",
                name: "Advanced / Masters",
                courses: [
                    {
                        name: "Beautician",
                        duration: "1-2 Years",
                        subjects: "Designing, Management, Hairstyling",
                        syllabus:
                            "Introduction to Hairstyling, Safety and Hygiene, Types of Braids, Classic Styles (Makeup + Hair), Bridal and Corporate Looks, Film and Fashion, Airbrushing and Stage Makeup, Bleaching, Waxing, Threading, Herbal Beauty Care, Client Management.",
                    },
                ],
            },
        ],
    },
    {
        id: "photography",
        category: "Photography Programs",
        icon: "📷",
        subcategories: [
            {
                id: "certificate",
                name: "Certificate Courses",
                courses: [
                    {
                        name: "Certificate course in Photoshop",
                        duration: "3 Months",
                        subjects: "IT, Multimedia, Computer Software",
                        syllabus:
                            "Photoshop Intro, Adjustment Layers, Image Manipulation, Retouching, Restoration, Bitmap and Vector images.",
                    },
                ],
            },
            {
                id: "diploma",
                name: "Diploma Courses",
                courses: [
                    {
                        name: "Diploma in Digital Imaging (DDI)",
                        duration: "6 Months",
                        subjects: "IT, Computer Software, Multimedia",
                        syllabus:
                            "Photoshop, Corel Draw, Illustrator, InDesign, Pagemaker, Digital Painting, Photo Studio Professional.",
                    },
                ],
            },
        ],
    },
    {
        id: "call-center",
        category: "Call Center Executive (CCE)",
        icon: "📞",
        subcategories: [
            {
                id: "vocational",
                name: "Vocational Courses",
                courses: [
                    {
                        name: "Spoken English and Life Skills",
                        duration: "Flexible",
                        subjects: "Aptitude Skills, Communication",
                        syllabus: "Spoken English, Communication Skills, Customer Handling, Interpersonal Skills.",
                    },
                    {
                        name: "CCA (Certificate in Computer Application)",
                        duration: "1.5 Months",
                        normalFee: 300,
                        fastTrackFee: 400,
                        subjects: "IT, Microsoft Office",
                        syllabus: "Computer basics, MS Office, Internet for business.",
                    },
                ],
            },
        ],
    },
    {
        id: "yoga",
        category: "Yoga Programs",
        icon: "🧘",
        subcategories: [
            {
                id: "vocational",
                name: "Vocational Courses",
                courses: [
                    {
                        name: "Yoga and Wellness Programs",
                        duration: "Flexible",
                        subjects: "Health and Wellness",
                        syllabus: "Yoga asanas, Pranayama, Meditation, Anatomy, Teaching methodology.",
                    },
                ],
            },
        ],
    },
    {
        id: "handicraft",
        category: "Handicraft Programs",
        icon: "🧵",
        subcategories: [
            {
                id: "vocational",
                name: "Vocational Courses",
                courses: [
                    {
                        name: "Handicraft and Creative Arts",
                        duration: "Flexible",
                        subjects: "Arts and Crafts",
                        syllabus: "Traditional crafts, Modern crafts, Design principles, Entrepreneurship.",
                    },
                ],
            },
        ],
    },
    {
        id: "toy-making",
        category: "Toy Making Programs",
        icon: "🧸",
        subcategories: [
            {
                id: "vocational",
                name: "Vocational Courses",
                courses: [
                    {
                        name: "Toy Making and Design",
                        duration: "Flexible",
                        subjects: "Designing, Arts and Crafts",
                        syllabus: "Toy design principles, Safety standards, Manufacturing techniques.",
                    },
                ],
            },
        ],
    },
    {
        id: "jewellery-designing",
        category: "Jewellery Designing Programs",
        icon: "💎",
        subcategories: [
            {
                id: "vocational",
                name: "Vocational Courses",
                courses: [
                    {
                        name: "Jewellery Design and Crafting",
                        duration: "Flexible",
                        subjects: "Designing, Arts and Crafts",
                        syllabus: "Jewellery design, Metal crafting, Gemology basics, Business aspects.",
                    },
                ],
            },
        ],
    },
    {
        id: "hotel-hospitality",
        category: "Hotel and Hospitality Programs",
        icon: "🏨",
        subcategories: [
            {
                id: "vocational",
                name: "Vocational Courses",
                courses: [
                    {
                        name: "Hotel Management and Hospitality",
                        duration: "Flexible",
                        subjects: "Management, Service Industry",
                        syllabus: "Front Office, Housekeeping, Food and Beverage, Customer Service, Hotel Operations.",
                    },
                ],
            },
        ],
    },
    {
        id: "occupational-health",
        category: "Occupational Health Programs",
        icon: "🏥",
        subcategories: [
            {
                id: "vocational",
                name: "Vocational Courses",
                courses: [
                    {
                        name: "Occupational Health and Safety",
                        duration: "Flexible",
                        subjects: "Health and Safety, Management",
                        syllabus: "Workplace safety, Health regulations, Risk assessment, First Aid.",
                    },
                ],
            },
        ],
    },
];

 