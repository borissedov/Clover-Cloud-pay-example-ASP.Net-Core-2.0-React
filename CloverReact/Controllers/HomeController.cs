using Microsoft.AspNetCore.Mvc;

namespace CloverReact
{
    public class HomeController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}