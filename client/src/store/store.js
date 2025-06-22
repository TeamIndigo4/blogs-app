import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            blogs: [
                {
                    id: 1,
                    title: 'Deployment in Vercel',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
                    category: 'cloud',
                    createdAt: '23/06/2025'
                },
                {
                    id: 2,
                    title: 'Understanding AutoML in Practice',
                    content: 'AutoML simplifies model selection and hyperparameter tuning through automation. This blog explores the basics of AutoML and how it can accelerate ML workflows.',
                    category: 'aiml',
                    createdAt: '15/06/2025'
                },
                {
                    id: 3,
                    title: 'Introduction to Operating Systems',
                    content: 'An operating system acts as an interface between the user and hardware. This article covers the functions of an OS, types, and examples.',
                    category: 'os',
                    createdAt: '10/06/2025'
                },
                {
                    id: 4,
                    title: 'Normal Forms in DBMS',
                    content: 'Database normalization involves decomposing a table to eliminate redundancy. Learn about 1NF, 2NF, 3NF and how they improve database structure.',
                    category: 'dbms',
                    createdAt: '01/06/2025'
                },
                {
                    id: 5,
                    title: 'CI/CD Pipeline with GitHub Actions',
                    content: 'This post guides you through setting up a CI/CD pipeline on GitHub for deploying apps to Vercel and other platforms.',
                    category: 'cloud',
                    createdAt: '18/06/2025'
                },
                {
                    id: 6,
                    title: 'Convolutional Neural Networks (CNNs)',
                    content: 'Explore the architecture and functioning of CNNs with examples in image classification and computer vision.',
                    category: 'aiml',
                    createdAt: '12/06/2025'
                },
                {
                    id: 7,
                    title: 'Process Scheduling Algorithms',
                    content: 'Discusses common OS scheduling algorithms like FCFS, SJF, Round Robin, and their pros and cons.',
                    category: 'os',
                    createdAt: '05/06/2025'
                },
                {
                    id: 8,
                    title: 'ACID Properties in Transactions',
                    content: 'ACID (Atomicity, Consistency, Isolation, Durability) properties ensure safe transaction execution in DBMS.',
                    category: 'dbms',
                    createdAt: '02/06/2025'
                }
            ],
        }
    },
    
    getters: {
        getBlogs(state) {
            return [...state.blogs].sort((a, b) => {
                const dateA = new Date(a.createdAt.split('/').reverse().join('/'));
                const dateB = new Date(b.createdAt.split('/').reverse().join('/'));
                return dateB - dateA; // Descending
            });
        }
    }

})