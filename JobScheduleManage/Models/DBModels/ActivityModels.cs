using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoMvc.Models.DBModels
{
    public partial class ActivityConfig
    {
        public int Id { get; set; }

        public string AwardContent { get; set; }

        public int AwardRatio { get; set; }
    }
}