using LibraryManageSys.DAL;
using OrderOnlineAPI.dbModel;
using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OrderOnlineAPI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult ShowProducts(int? page)
        {
            using (var dbContext = ContextFactory.GetCurrentContext())
            {
                var products = dbContext.production_info.ToList();
                //var productsList = new List<production_info>();
                //if (products != null)
                //{
                //    foreach (var product in products)
                //    {
                //        productsList.Add(new production_info { ProdName = product.ProdName, ProdPrice = product.ProdPrice });
                //    }
                //}
                int currentPageIndex = page.HasValue ? page.Value : 1;
                return View(products.ToPagedList(currentPageIndex, 1));
            }
        }
    }
}
