using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrderOnlineAPI.Models
{
    public class ShowPageModel
    {      
        public class Product
        {
            public string ProductName { get; set; }

            public string OpenTime { get; set; }
        }
    }
}