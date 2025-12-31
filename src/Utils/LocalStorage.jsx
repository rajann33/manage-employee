const employees = [
  {
    "id": 1,
    "firstname": "सुरज",
    "email": "e1@e.c",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare project report",
        "description": "Compile weekly progress and submit to the admin.",
        "date": "2025-11-03",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Update task tracker",
        "description": "Review and update the overall task tracker sheet.",
        "date": "2025-11-05",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Design landing page mockup",
        "description": "Create a Figma design for the new homepage layout.",
        "date": "2025-10-15",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Update client database",
        "description": "Add new client entries and verify existing ones.",
        "date": "2025-10-25",
        "category": "Database"
      }
    ]
  },
  {
    "id": 2,
    "firstname": "राजन",
    "email": "e2@e.c",
    "password": "123",
    "taskNumber": {
      "active": 3,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Fix login bug",
        "description": "Resolve the authentication issue in user login.",
        "date": "2025-11-02",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Add new API endpoint",
        "description": "Implement new API for report data aggregation.",
        "date": "2025-11-04",
        "category": "Backend"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Optimize API requests",
        "description": "Reduce API load time and improve caching.",
        "date": "2025-11-03",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Implement search filter",
        "description": "Add filtering by category and date on the dashboard.",
        "date": "2025-10-20",
        "category": "Frontend"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Refactor authentication flow",
        "description": "Improve security and reduce redundant requests.",
        "date": "2025-11-05",
        "category": "Security"
      }
    ]
  },
  {
    "id": 3,
    "firstname": "बिबेक",
    "email": "e3@e.c",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Write blog post",
        "description": "Draft a new technical article about REST APIs.",
        "date": "2025-11-01",
        "category": "Content"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Plan Q4 marketing campaign",
        "description": "Outline ideas for upcoming quarter's marketing push.",
        "date": "2025-11-03",
        "category": "Planning"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Record podcast episode",
        "description": "Discuss company updates and tech highlights.",
        "date": "2025-11-04",
        "category": "Media"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Post social media update",
        "description": "Share the product launch post on all social channels.",
        "date": "2025-10-28",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Design blog banner",
        "description": "Create banner for latest post featuring new API.",
        "date": "2025-10-27",
        "category": "Design"
      }
    ]
  },
  {
    "id": 4,
    "firstname": "अनुजा",
    "email": "e4@e.c",
    "password": "123",
    "taskNumber": {
      "active": 0,
      "newTask": 3,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Update payroll records",
        "description": "Verify attendance and update payment sheets.",
        "date": "2025-11-03",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Organize team meeting",
        "description": "Set up agenda and meeting notes for next week.",
        "date": "2025-11-04",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Plan employee training session",
        "description": "Schedule next training program for department staff.",
        "date": "2025-11-05",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Prepare monthly budget",
        "description": "Summarize department expenses and projections.",
        "date": "2025-10-30",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Schedule performance reviews",
        "description": "Coordinate with department heads for employee evaluations.",
        "date": "2025-10-18",
        "category": "HR"
      }
    ]
  },
  {
    "id": 5,
    "firstname": "सीता",
    "email": "e5@e.c",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 0,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Test new UI components",
        "description": "Perform manual and automated testing on new UI.",
        "date": "2025-11-03",
        "category": "QA"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Validate bug fixes",
        "description": "Re-test previously failed cases after fixes.",
        "date": "2025-11-02",
        "category": "QA"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Submit test reports",
        "description": "Send detailed testing results to dev team.",
        "date": "2025-10-31",
        "category": "QA"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Review automation logs",
        "description": "Check for flakiness and stability in CI results.",
        "date": "2025-11-04",
        "category": "Automation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Automate login test case",
        "description": "Create Cypress script for login and registration flow.",
        "date": "2025-10-21",
        "category": "Automation"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]

export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage =()=>{
 const employees = JSON.parse(localStorage.getItem('employees'))
 const admin = JSON.parse(localStorage.getItem('admin'))
//  console.log(employees,admin)
//  console.log(JSON.parse(employees))
return {employees, admin } 
}