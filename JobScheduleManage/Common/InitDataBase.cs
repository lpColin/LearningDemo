using DemoMvc.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DemoMvc.Common
{
    public class InitDataBase : DropCreateDatabaseIfModelChanges<DemoDBContext>
    {
        protected override void Seed(DemoDBContext context)
        {
            var users = new List<ActivityConfig>() {
                new  ActivityConfig {Id = 1,AwardContent="中奖了",AwardRatio=30},
                new  ActivityConfig {Id = 2,AwardContent="谢谢惠顾",AwardRatio=70},
            };
            users.ForEach(s => context.ActivityConfig.Add(s));
            context.SaveChanges();
        }
    }
}