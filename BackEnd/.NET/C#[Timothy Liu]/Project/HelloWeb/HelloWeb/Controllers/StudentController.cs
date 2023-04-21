using Microsoft.AspNetCore.Mvc;
using HelloWeb.Models;
using System.Collections.Generic;

namespace HelloWeb.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult Index()
        {
            var students = new List<Student>
            {
                new Student{ Id=1, Name="Student_1"},
                new Student{ Id=2, Name="Student_2"},
                new Student{ Id=3, Name="Student_3"},
                new Student{ Id=4, Name="Student_4"},
                new Student{ Id=5, Name="Student_5"},
                new Student{ Id=6, Name="Student_6"},
                new Student{ Id=7, Name="Student_7"},
            };
            return View(students);
        }
    }
}
