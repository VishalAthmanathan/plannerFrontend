const eventData = [
    {
        id: 1,
        title: "Certified UX & Usability Professional Seminar",
        date: "Mon, 7.10.2020, 09:00 - 10:00",
        location: "Online-Event",
        price: "€ 25,00 - € 50,00",
        image: "https://picsum.photos/400/225",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        speaker: {
          name: "AshSpidy",
          title: "Microsoft MVP",
          image: "https://picsum.photos/400/400"
        },
        venue: {
          address: "8th Floor, InduQbe Alpine, next to Ekkattuthangal Metro Station, Labour Colony, SIDCO Industrial Estate",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sChennai%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=1", "https://picsum.photos/100/100?random=2"],
        photos: ["https://picsum.photos/200/200?random=1", "https://picsum.photos/200/200?random=2"],
        sponsors: ["https://picsum.photos/100/100?random=3", "https://picsum.photos/100/100?random=4"],
        interests: ["https://picsum.photos/100/100?random=5", "https://picsum.photos/100/100?random=6"]
    },
    {
        id: 2,
        title: "Introduction to React",
        date: "Tue, 8.10.2020, 11:00 - 12:00",
        location: "Online-Event",
        price: "€ 30,00 - € 60,00",
        image: "https://picsum.photos/401/225",
        details: "An introductory session on React.js fundamentals and practices.",
        speaker: {
          name: "Jane Doe",
          title: "React Expert",
          image: "https://picsum.photos/400/400?random=7"
        },
        venue: {
          address: "Virtual Event Platform",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sVirtual%20Event%20Platform!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=8", "https://picsum.photos/100/100?random=9"],
        photos: ["https://picsum.photos/200/200?random=8", "https://picsum.photos/200/200?random=9"],
        sponsors: ["https://picsum.photos/100/100?random=10", "https://picsum.photos/100/100?random=11"],
        interests: ["https://picsum.photos/100/100?random=12", "https://picsum.photos/100/100?random=13"]
    },
    {
        id: 3,
        title: "Advanced JavaScript Workshop",
        date: "Wed, 9.10.2020, 14:00 - 16:00",
        location: "Online-Event",
        price: "€ 35,00 - € 70,00",
        image: "https://picsum.photos/402/225",
        details: "Deep dive into advanced JavaScript concepts and techniques.",
        speaker: {
          name: "John Smith",
          title: "JavaScript Guru",
          image: "https://picsum.photos/400/400?random=14"
        },
        venue: {
          address: "Virtual Workshop Space",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sVirtual%20Workshop%20Space!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=15", "https://picsum.photos/100/100?random=16"],
        photos: ["https://picsum.photos/200/200?random=15", "https://picsum.photos/200/200?random=16"],
        sponsors: ["https://picsum.photos/100/100?random=17", "https://picsum.photos/100/100?random=18"],
        interests: ["https://picsum.photos/100/100?random=19", "https://picsum.photos/100/100?random=20"]
    },
    {
        id: 4,
        title: "HTML & CSS Basics",
        date: "Thu, 10.10.2020, 10:00 - 12:00",
        location: "Online-Event",
        price: "€ 20,00 - € 40,00",
        image: "https://picsum.photos/403/225",
        details: "Learn the fundamentals of HTML and CSS in this basic workshop.",
        speaker: {
          name: "Emily Johnson",
          title: "Web Development Specialist",
          image: "https://picsum.photos/400/400?random=21"
        },
        venue: {
          address: "Online Classroom",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sOnline%20Classroom!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=22", "https://picsum.photos/100/100?random=23"],
        photos: ["https://picsum.photos/200/200?random=22", "https://picsum.photos/200/200?random=23"],
        sponsors: ["https://picsum.photos/100/100?random=24", "https://picsum.photos/100/100?random=25"],
        interests: ["https://picsum.photos/100/100?random=26", "https://picsum.photos/100/100?random=27"]
    },
    {
        id: 5,
        title: "Node.js Development",
        date: "Fri, 11.10.2020, 13:00 - 15:00",
        location: "Online-Event",
        price: "€ 40,00 - € 70,00",
        image: "https://picsum.photos/404/225",
        details: "Explore the capabilities of Node.js for backend development.",
        speaker: {
          name: "Michael Brown",
          title: "Node.js Expert",
          image: "https://picsum.photos/400/400?random=28"
        },
        venue: {
          address: "Virtual Node.js Hub",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sVirtual%20Node.js%20Hub!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=29", "https://picsum.photos/100/100?random=30"],
        photos: ["https://picsum.photos/200/200?random=29", "https://picsum.photos/200/200?random=30"],
        sponsors: ["https://picsum.photos/100/100?random=31", "https://picsum.photos/100/100?random=32"],
        interests: ["https://picsum.photos/100/100?random=33", "https://picsum.photos/100/100?random=34"]
    },
    {
        id: 6,
        title: "Python for Data Science",
        date: "Sat, 12.10.2020, 09:00 - 11:00",
        location: "Online-Event",
        price: "€ 45,00 - € 75,00",
        image: "https://picsum.photos/405/225",
        details: "Dive into Python's role in data science and analytics.",
        speaker: {
          name: "Sarah Wilson",
          title: "Data Scientist",
          image: "https://picsum.photos/400/400?random=35"
        },
        venue: {
          address: "Virtual Data Science Lab",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sVirtual%20Data%20Science%20Lab!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=36", "https://picsum.photos/100/100?random=37"],
        photos: ["https://picsum.photos/200/200?random=36", "https://picsum.photos/200/200?random=37"],
        sponsors: ["https://picsum.photos/100/100?random=38", "https://picsum.photos/100/100?random=39"],
        interests: ["https://picsum.photos/100/100?random=40", "https://picsum.photos/100/100?random=41"]
    },
    {
        id: 7,
        title: "Machine Learning with Python",
        date: "Sun, 13.10.2020, 10:00 - 12:00",
        location: "Online-Event",
        price: "€ 50,00 - € 80,00",
        image: "https://picsum.photos/406/225",
        details: "Learn how to implement machine learning models using Python.",
        speaker: {
          name: "David Lee",
          title: "Machine Learning Engineer",
          image: "https://picsum.photos/400/400?random=42"
        },
        venue: {
          address: "Virtual Machine Learning Hub",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sVirtual%20Machine%20Learning%20Hub!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=43", "https://picsum.photos/100/100?random=44"],
        photos: ["https://picsum.photos/200/200?random=43", "https://picsum.photos/200/200?random=44"],
        sponsors: ["https://picsum.photos/100/100?random=45", "https://picsum.photos/100/100?random=46"],
        interests: ["https://picsum.photos/100/100?random=47", "https://picsum.photos/100/100?random=48"]
    },
    {
        id: 8,
        title: "Understanding APIs",
        date: "Mon, 14.10.2020, 11:00 - 13:00",
        location: "Online-Event",
        price: "€ 30,00 - € 50,00",
        image: "https://picsum.photos/407/225",
        details: "An overview of APIs and how they are used in modern web development.",
        speaker: {
          name: "Laura Green",
          title: "API Specialist",
          image: "https://picsum.photos/400/400?random=49"
        },
        venue: {
          address: "Virtual API Lab",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sVirtual%20API%20Lab!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=50", "https://picsum.photos/100/100?random=51"],
        photos: ["https://picsum.photos/200/200?random=50", "https://picsum.photos/200/200?random=51"],
        sponsors: ["https://picsum.photos/100/100?random=52", "https://picsum.photos/100/100?random=53"],
        interests: ["https://picsum.photos/100/100?random=54", "https://picsum.photos/100/100?random=55"]
    },
    {
        id: 9,
        title: "Introduction to Docker",
        date: "Tue, 15.10.2020, 12:00 - 14:00",
        location: "Online-Event",
        price: "€ 35,00 - € 55,00",
        image: "https://picsum.photos/408/225",
        details: "Learn the basics of Docker and containerization.",
        speaker: {
          name: "James Turner",
          title: "Docker Specialist",
          image: "https://picsum.photos/400/400?random=56"
        },
        venue: {
          address: "Virtual Docker Space",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sVirtual%20Docker%20Space!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=57", "https://picsum.photos/100/100?random=58"],
        photos: ["https://picsum.photos/200/200?random=57", "https://picsum.photos/200/200?random=58"],
        sponsors: ["https://picsum.photos/100/100?random=59", "https://picsum.photos/100/100?random=60"],
        interests: ["https://picsum.photos/100/100?random=61", "https://picsum.photos/100/100?random=62"]
    },
    {
        id: 10,
        title: "Kubernetes for Beginners",
        date: "Wed, 16.10.2020, 09:00 - 11:00",
        location: "Online-Event",
        price: "€ 40,00 - € 60,00",
        image: "https://picsum.photos/409/225",
        details: "Introduction to Kubernetes and container orchestration.",
        speaker: {
          name: "Olivia Harris",
          title: "Kubernetes Consultant",
          image: "https://picsum.photos/400/400?random=63"
        },
        venue: {
          address: "Virtual Kubernetes Classroom",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sVirtual%20Kubernetes%20Classroom!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=64", "https://picsum.photos/100/100?random=65"],
        photos: ["https://picsum.photos/200/200?random=64", "https://picsum.photos/200/200?random=65"],
        sponsors: ["https://picsum.photos/100/100?random=66", "https://picsum.photos/100/100?random=67"],
        interests: ["https://picsum.photos/100/100?random=68", "https://picsum.photos/100/100?random=69"]
    },
    {
        id: 11,
        title: "Introduction to SQL",
        date: "Thu, 17.10.2020, 10:00 - 12:00",
        location: "Online-Event",
        price: "€ 25,00 - € 45,00",
        image: "https://picsum.photos/410/225",
        details: "Get started with SQL and database management.",
        speaker: {
          name: "Sophia Martinez",
          title: "SQL Trainer",
          image: "https://picsum.photos/400/400?random=70"
        },
        venue: {
          address: "Virtual SQL Lab",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sVirtual%20SQL%20Lab!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=71", "https://picsum.photos/100/100?random=72"],
        photos: ["https://picsum.photos/200/200?random=71", "https://picsum.photos/200/200?random=72"],
        sponsors: ["https://picsum.photos/100/100?random=73", "https://picsum.photos/100/100?random=74"],
        interests: ["https://picsum.photos/100/100?random=75", "https://picsum.photos/100/100?random=76"]
    },
    {
        id: 12,
        title: "Advanced SQL Queries",
        date: "Fri, 18.10.2020, 13:00 - 15:00",
        location: "Online-Event",
        price: "€ 35,00 - € 55,00",
        image: "https://picsum.photos/411/225",
        details: "Explore advanced SQL techniques and optimization strategies.",
        speaker: {
          name: "Lucas White",
          title: "SQL Developer",
          image: "https://picsum.photos/400/400?random=77"
        },
        venue: {
          address: "Virtual Advanced SQL Room",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sVirtual%20Advanced%20SQL%20Room!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=78", "https://picsum.photos/100/100?random=79"],
        photos: ["https://picsum.photos/200/200?random=78", "https://picsum.photos/200/200?random=79"],
        sponsors: ["https://picsum.photos/100/100?random=80", "https://picsum.photos/100/100?random=81"],
        interests: ["https://picsum.photos/100/100?random=82", "https://picsum.photos/100/100?random=83"]
    },
    {
        id: 13,
        title: "Web Development with Django",
        date: "Sat, 19.10.2020, 09:00 - 11:00",
        location: "Online-Event",
        price: "€ 50,00 - € 80,00",
        image: "https://picsum.photos/412/225",
        details: "Learn web development using the Django framework.",
        speaker: {
          name: "Emma Scott",
          title: "Django Developer",
          image: "https://picsum.photos/400/400?random=84"
        },
        venue: {
          address: "Virtual Django Workshop",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sVirtual%20Django%20Workshop!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=85", "https://picsum.photos/100/100?random=86"],
        photos: ["https://picsum.photos/200/200?random=85", "https://picsum.photos/200/200?random=86"],
        sponsors: ["https://picsum.photos/100/100?random=87", "https://picsum.photos/100/100?random=88"],
        interests: ["https://picsum.photos/100/100?random=89", "https://picsum.photos/100/100?random=90"]
    },
    {
        id: 14,
        title: "React Native for Mobile Apps",
        date: "Sun, 20.10.2020, 10:00 - 12:00",
        location: "Online-Event",
        price: "€ 60,00 - € 90,00",
        image: "https://picsum.photos/413/225",
        details: "Develop mobile applications using React Native.",
        speaker: {
          name: "Liam Taylor",
          title: "React Native Expert",
          image: "https://picsum.photos/400/400?random=91"
        },
        venue: {
          address: "Virtual Mobile Dev Hub",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sVirtual%20Mobile%20Dev%20Hub!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=92", "https://picsum.photos/100/100?random=93"],
        photos: ["https://picsum.photos/200/200?random=92", "https://picsum.photos/200/200?random=93"],
        sponsors: ["https://picsum.photos/100/100?random=94", "https://picsum.photos/100/100?random=95"],
        interests: ["https://picsum.photos/100/100?random=96", "https://picsum.photos/100/100?random=97"]
    },
    {
        id: 15,
        title: "Introduction to Cloud Computing",
        date: "Mon, 21.10.2020, 11:00 - 13:00",
        location: "Online-Event",
        price: "€ 40,00 - € 60,00",
        image: "https://picsum.photos/414/225",
        details: "Understand the basics of cloud computing and its applications.",
        speaker: {
          name: "Charlotte Davis",
          title: "Cloud Architect",
          image: "https://picsum.photos/400/400?random=98"
        },
        venue: {
          address: "Virtual Cloud Classroom",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sVirtual%20Cloud%20Classroom!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=99", "https://picsum.photos/100/100?random=100"],
        photos: ["https://picsum.photos/200/200?random=99", "https://picsum.photos/200/200?random=100"],
        sponsors: ["https://picsum.photos/100/100?random=101", "https://picsum.photos/100/100?random=102"],
        interests: ["https://picsum.photos/100/100?random=103", "https://picsum.photos/100/100?random=104"]
    },
    {
        id: 12,
        title: "Advanced SQL Queries",
        date: "Fri, 18.10.2020, 13:00 - 15:00",
        location: "Online-Event",
        price: "€ 35,00 - € 55,00",
        image: "https://picsum.photos/411/225",
        details: "Explore advanced SQL techniques and optimization strategies.",
        speaker: {
          name: "Lucas White",
          title: "SQL Developer",
          image: "https://picsum.photos/400/400?random=77"
        },
        venue: {
          address: "Virtual Advanced SQL Room",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sVirtual%20Advanced%20SQL%20Room!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
        },
        attendees: ["https://picsum.photos/100/100?random=78", "https://picsum.photos/100/100?random=79"],
        photos: ["https://picsum.photos/200/200?random=78", "https://picsum.photos/200/200?random=79"],
        sponsors: ["https://picsum.photos/100/100?random=80", "https://picsum.photos/100/100?random=81"],
        interests: ["https://picsum.photos/100/100?random=82", "https://picsum.photos/100/100?random=83"]
    },
]
;
  export default eventData;