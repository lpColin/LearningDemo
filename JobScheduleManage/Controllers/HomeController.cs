using DemoMvc.Areas.Activity.Models;
using LMS.Common;
using LMS.Common.CommonService;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Mvc;

namespace DemoMvc.Controllers
{
    public class HomeController : Controller
    {
        [System.Web.Http.Authorize]
        public ActionResult Index()
        {
            return View();
        }
    }
}