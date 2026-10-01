const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "e@e.com",
    "password": "123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Login Page UI", "taskdescription": "Create login page using React", "taskdate": "2025-01-02", "category": "Frontend" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Navbar Fix", "taskdescription": "Fix navbar responsiveness", "taskdate": "2024-12-22", "category": "Bug Fix" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "Deploy App", "taskdescription": "Deploy app to Vercel", "taskdate": "2024-12-15", "category": "Deployment" }
    ]
  },
  {
    "id": 2,
    "firstname": "Vivaan",
    "email": "employee2@company.com",
    "password": "emp2@123",
    "taskNumbers": { "active": 2, "newtask": 0, "completed": 1, "failed": 0 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "JWT Authentication", "taskdescription": "Implement JWT based authentication", "taskdate": "2025-01-05", "category": "Backend" },
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "User Model", "taskdescription": "Create MongoDB user schema", "taskdate": "2025-01-04", "category": "Database" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "API Testing", "taskdescription": "Test APIs using Postman", "taskdate": "2024-12-25", "category": "Testing" }
    ]
  },
  {
    "id": 3,
    "firstname": "Aditya",
    "email": "employee3@company.com",
    "password": "emp3@123",
    "taskNumbers": { "active": 2, "newtask": 0, "completed": 1, "failed": 0 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Dashboard UI", "taskdescription": "Create admin dashboard layout", "taskdate": "2025-01-07", "category": "Frontend" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Responsive Design", "taskdescription": "Fix responsiveness issues", "taskdate": "2024-12-29", "category": "UI/UX" },
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Charts Integration", "taskdescription": "Add charts using Recharts", "taskdate": "2025-01-08", "category": "Frontend" }
    ]
  },
  {
    "id": 4,
    "firstname": "Rohan",
    "email": "employee4@company.com",
    "password": "emp4@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Profile Page", "taskdescription": "Create employee profile page", "taskdate": "2025-01-06", "category": "Frontend" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "CSS Refactor", "taskdescription": "Clean and refactor CSS", "taskdate": "2024-12-24", "category": "Refactor" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "Dark Mode", "taskdescription": "Add dark mode support", "taskdate": "2024-12-18", "category": "UI/UX" }
    ]
  },
  {
    "id": 5,
    "firstname": "Kunal",
    "email": "employee5@company.com",
    "password": "emp5@123",
    "taskNumbers": { "active": 2, "newtask": 0, "completed": 1, "failed": 0 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Task CRUD API", "taskdescription": "Create task CRUD APIs", "taskdate": "2025-01-09", "category": "Backend" },
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Error Handling", "taskdescription": "Add global error handling", "taskdate": "2025-01-10", "category": "Backend" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Env Setup", "taskdescription": "Setup environment variables", "taskdate": "2024-12-20", "category": "Setup" }
    ]
  },

  {
    "id": 6,
    "firstname": "Sahil",
    "email": "employee6@company.com",
    "password": "emp6@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Toast Notifications", "taskdescription": "Add toast notifications", "taskdate": "2025-01-11", "category": "Frontend" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Loader Component", "taskdescription": "Create reusable loader", "taskdate": "2024-12-26", "category": "UI" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "Socket Setup", "taskdescription": "Implement WebSocket", "taskdate": "2024-12-17", "category": "Backend" }
    ]
  },

  {
    "id": 7,
    "firstname": "Ankit",
    "email": "employee7@company.com",
    "password": "emp7@123",
    "taskNumbers": { "active": 2, "newtask": 0, "completed": 1, "failed": 0 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Search Feature", "taskdescription": "Add search functionality", "taskdate": "2025-01-12", "category": "Frontend" },
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Pagination", "taskdescription": "Implement pagination", "taskdate": "2025-01-13", "category": "Frontend" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Debounce Logic", "taskdescription": "Optimize search with debounce", "taskdate": "2024-12-28", "category": "Optimization" }
    ]
  },

  {
    "id": 8,
    "firstname": "Neeraj",
    "email": "employee8@company.com",
    "password": "emp8@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Role Management", "taskdescription": "Implement user roles", "taskdate": "2025-01-14", "category": "Backend" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Access Control", "taskdescription": "Restrict routes", "taskdate": "2024-12-21", "category": "Security" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "OAuth Login", "taskdescription": "Google login integration", "taskdate": "2024-12-16", "category": "Auth" }
    ]
  },

  {
    "id": 9,
    "firstname": "Rahul",
    "email": "employee9@company.com",
    "password": "emp9@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Email Service", "taskdescription": "Send email notifications", "taskdate": "2025-01-15", "category": "Backend" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Template Design", "taskdescription": "Design email templates", "taskdate": "2024-12-23", "category": "Design" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "SMTP Config", "taskdescription": "Configure SMTP server", "taskdate": "2024-12-14", "category": "Setup" }
    ]
  },

  {
    "id": 10,
    "firstname": "Piyush",
    "email": "employee10@company.com",
    "password": "emp10@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Unit Testing", "taskdescription": "Write unit tests", "taskdate": "2025-01-16", "category": "Testing" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Code Coverage", "taskdescription": "Improve test coverage", "taskdate": "2024-12-27", "category": "Testing" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "Mock APIs", "taskdescription": "Setup mock APIs", "taskdate": "2024-12-13", "category": "Testing" }
    ]
  },

  {
    "id": 11,
    "firstname": "Ishaan",
    "email": "employee11@company.com",
    "password": "emp11@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "SEO Optimization", "taskdescription": "Improve SEO", "taskdate": "2025-01-17", "category": "SEO" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Meta Tags", "taskdescription": "Add meta tags", "taskdate": "2024-12-22", "category": "SEO" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "Lighthouse Fix", "taskdescription": "Fix performance issues", "taskdate": "2024-12-12", "category": "Performance" }
    ]
  },

  {
    "id": 12,
    "firstname": "Mohit",
    "email": "employee12@company.com",
    "password": "emp12@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "State Management", "taskdescription": "Implement Context API", "taskdate": "2025-01-18", "category": "Frontend" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Prop Drilling Fix", "taskdescription": "Optimize component tree", "taskdate": "2024-12-24", "category": "Refactor" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "Redux Setup", "taskdescription": "Setup Redux store", "taskdate": "2024-12-11", "category": "State" }
    ]
  },

  {
    "id": 13,
    "firstname": "Arjun",
    "email": "employee13@company.com",
    "password": "emp13@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Accessibility", "taskdescription": "Improve accessibility", "taskdate": "2025-01-19", "category": "UI/UX" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "ARIA Labels", "taskdescription": "Add ARIA labels", "taskdate": "2024-12-23", "category": "UI/UX" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "Keyboard Nav", "taskdescription": "Keyboard navigation support", "taskdate": "2024-12-10", "category": "Accessibility" }
    ]
  },

  {
    "id": 14,
    "firstname": "Varun",
    "email": "employee14@company.com",
    "password": "emp14@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "File Upload", "taskdescription": "Add file upload feature", "taskdate": "2025-01-20", "category": "Backend" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Cloud Storage", "taskdescription": "Integrate cloud storage", "taskdate": "2024-12-25", "category": "Cloud" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "File Validation", "taskdescription": "Validate file types", "taskdate": "2024-12-09", "category": "Security" }
    ]
  },

  {
    "id": 15,
    "firstname": "Nikhil",
    "email": "employee15@company.com",
    "password": "emp15@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Audit Logs", "taskdescription": "Implement audit logging", "taskdate": "2025-01-21", "category": "Backend" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Log Cleanup", "taskdescription": "Optimize logs", "taskdate": "2024-12-26", "category": "Maintenance" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "Log Rotation", "taskdescription": "Setup log rotation", "taskdate": "2024-12-08", "category": "DevOps" }
    ]
  },

  {
    "id": 16,
    "firstname": "Saurabh",
    "email": "employee16@company.com",
    "password": "emp16@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "CI Pipeline", "taskdescription": "Setup CI pipeline", "taskdate": "2025-01-22", "category": "DevOps" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Lint Rules", "taskdescription": "Add lint rules", "taskdate": "2024-12-27", "category": "Code Quality" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "Build Failure", "taskdescription": "Fix build issues", "taskdate": "2024-12-07", "category": "CI/CD" }
    ]
  },

  {
    "id": 17,
    "firstname": "Deepak",
    "email": "employee17@company.com",
    "password": "emp17@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Rate Limiting", "taskdescription": "Implement API rate limiting", "taskdate": "2025-01-23", "category": "Security" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "API Docs", "taskdescription": "Document APIs", "taskdate": "2024-12-28", "category": "Documentation" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "Throttling Bug", "taskdescription": "Fix throttling bug", "taskdate": "2024-12-06", "category": "Backend" }
    ]
  },

  {
    "id": 18,
    "firstname": "Pranav",
    "email": "employee18@company.com",
    "password": "emp18@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Caching", "taskdescription": "Add Redis caching", "taskdate": "2025-01-24", "category": "Performance" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Cache Invalidation", "taskdescription": "Handle cache invalidation", "taskdate": "2024-12-29", "category": "Backend" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "Cache Miss", "taskdescription": "Fix cache miss issue", "taskdate": "2024-12-05", "category": "Performance" }
    ]
  },

  {
    "id": 19,
    "firstname": "Ritesh",
    "email": "employee19@company.com",
    "password": "emp19@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Analytics", "taskdescription": "Integrate analytics", "taskdate": "2025-01-25", "category": "Analytics" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Event Tracking", "taskdescription": "Track user events", "taskdate": "2024-12-30", "category": "Analytics" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "Data Loss", "taskdescription": "Fix missing events", "taskdate": "2024-12-04", "category": "Bug Fix" }
    ]
  },

  {
    "id": 20,
    "firstname": "Manish",
    "email": "employee20@company.com",
    "password": "emp20@123",
    "taskNumbers": { "active": 1, "newtask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      { "active": true, "newtask": false, "completed": false, "failed": false, "tasktitle": "Production Release", "taskdescription": "Prepare production release", "taskdate": "2025-01-26", "category": "Release" },
      { "active": false, "newtask": false, "completed": true, "failed": false, "tasktitle": "Release Notes", "taskdescription": "Write release notes", "taskdate": "2024-12-31", "category": "Documentation" },
      { "active": false, "newtask": false, "completed": false, "failed": true, "tasktitle": "Rollback Plan", "taskdescription": "Prepare rollback plan", "taskdate": "2024-12-03", "category": "DevOps" }
    ]
  }
];
const admins=[{
    "id":1,
    "email":"admin@example.com",
    "password":"123"
}];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admins',JSON.stringify(admins));
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'));
    const admins=JSON.parse(localStorage.getItem('admins'));
    return {employees,admins};    
}