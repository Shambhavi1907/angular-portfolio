// Initialize AngularJS app
var app = angular.module("portfolioApp", []);

app.controller("MainController", function ($scope) {
  // ---------- BASIC INFO ----------
  $scope.name = "Shambhavi Raj";
  $scope.title = "Front-End Developer | UI/UX Enthusiast";
  $scope.about =
    "I'm a creative and detail-oriented front-end developer passionate about building interactive and elegant web designs. I love bringing ideas to life using HTML, CSS, and AngularJS. Currently pursuing B.Tech in CSE at Pimpri Chinchwad University, Pune, Maharashtra.";

  // ---------- SKILLS ----------
  $scope.skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "AngularJS",
    "Bootstrap",
    "Git & GitHub",
    "Responsive Design",
    "UI/UX Design"
  ];

  // ---------- PROJECTS ----------
  $scope.projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built using AngularJS showcasing education, projects, and certificates."
    },
    {
      title: "Weather App",
      description:
        "Interactive weather web app using open APIs and AngularJS for real-time updates."
    },
    {
      title: "Task Manager",
      description:
        "Single-page AngularJS app to manage daily tasks with animations and local storage."
    }
  ];
});
