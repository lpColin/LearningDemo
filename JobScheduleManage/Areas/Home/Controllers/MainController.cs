using DemoMvc.Areas.Activity.Models;
using LMS.Common;
using LMS.Common.CommonService;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Mvc;

namespace DemoMvc.Areas.Home.Controllers
{
    public class MainController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult PrPortal() {
            return View();
        }
    }
}