using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace JobScheduleManage
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "ng2 App",
                url: "App/{*.}",
                defaults: new { controller = "Main", action = "PrPortal", id = UrlParameter.Optional },
                namespaces: new[] {"DemoMvc.Areas.Home.Controllers"}
            ).DataTokens.Add("area", "Home");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
