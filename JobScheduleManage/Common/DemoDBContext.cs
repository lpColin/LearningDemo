using DemoMvc.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DemoMvc.Common
{
    public class DemoDBContext : DbContext
    {
        public DemoDBContext()
            : base("name=DemoContionString")
        {

        }
        public virtual DbSet<ActivityConfig> ActivityConfig { get; set; }


    }
}