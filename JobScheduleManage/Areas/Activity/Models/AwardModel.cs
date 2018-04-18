using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoMvc.Areas.Activity.Models
{
    public class AwardModel
    {
        public string AwardId { get; set; }

        public string RatioBegain { get; set; }

        public string RatioEnd { get; set; }

        public string AwardMessage { get; set; }

        public bool IsAward { get; set; }
    }
}