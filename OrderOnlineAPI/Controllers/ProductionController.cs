using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using OrderOnlineAPI.Models;
using LMS.Common;
using LibraryManageSys.DAL;
using Newtonsoft.Json;

namespace OrderOnlineAPI.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/Products")]
    public class ProductionController : ApiController
    {
        //[Route("AllProducts")]
        //public IEnumerable<ShowPageModel.Product> getAllProducts()
        //{
        //    using (var dbContext = ContextFactory.GetCurrentContext())
        //    {
        //        var products = dbContext.production_info;
        //        if (products != null)
        //        {
        //            var productsList = new List<ShowPageModel.Product>();
        //            foreach (var product in products)
        //            {
        //                productsList.Add(new ShowPageModel.Product { ProductName = product.ProdName, OpenTime = "8:00 - 22:00" });
        //            }
        //            return productsList;
        //        }
        //    } 
        //        return null;
        //}

        [Route("AllProducts")]
        public string getAllProducts()
        {
            using (var dbContext = ContextFactory.GetCurrentContext())
            {
                var products = dbContext.production_info;
                if (products != null)
                {
                    var productsList = new List<ShowPageModel.Product>();
                    foreach (var product in products)
                    {
                        productsList.Add(new ShowPageModel.Product { ProductName = product.ProdName, OpenTime = "8:00 - 22:00" });
                    }
                    return JsonConvert.SerializeObject(productsList);
                }
            }
            return null;
        }
    }
}
