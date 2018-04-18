using DemoMvc.Areas.Activity.Models;
using LMS.Common;
using LMS.Common.CommonService;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Mvc;

namespace DemoMvc.Areas.Activity.Controllers
{
    public class MainController : Controller
    {
        // GET Activity/Home/
        public ActionResult ActivityIndex()
        {
            //var dbContext = ContextFactory.GetCurrentContext();
            var sessionKey = Session["firstTime"];
            if (sessionKey == null)
            {
                var baseNumber = 1000;
                var textPath = Server.MapPath("~") + "Areas\\Activity\\ActivityConfiguration.txt";
                var configContent = TextProcessHelper.GetTextLines(textPath);
                var awardModelList = new List<AwardModel>();
                var awardStrList = new List<string[]>();
                //configContent.RemoveAt(0);
                foreach (var content in configContent)
                {
                    var award = new AwardModel();
                    if (!content.StartsWith("id"))
                    {
                        var line = content.Split(',');
                        award.AwardId = line[0];
                        award.RatioBegain = line[1];
                        award.RatioEnd = line[2];
                        award.AwardMessage = line[3];
                        award.IsAward = bool.Parse(line[4]);
                        awardModelList.Add(award);
                        var strLine = new string[] { award.RatioBegain, award.RatioEnd, award.AwardId };
                        awardStrList.Add(strLine);
                    }
                }
                var awardId = ActivityHelper.GetAwardId(baseNumber, awardStrList);
                var awardModel = awardModelList.Where(o => o.AwardId == awardId).FirstOrDefault();
                Session["firstTime"] = true;
                return View("Index", awardModel);
            }
            else {
                var awardModel = new AwardModel() { AwardMessage="您已参过抽奖啦！",IsAward = false};
                return View("Index", awardModel);
            }
            
        }

        public ActionResult ActivityGetAwardConfigGet()
        {
            var textPath = Server.MapPath("~") + "Areas\\Activity\\ActivityConfiguration.txt";
            var configContent = TextProcessHelper.GetTextLines(textPath);
            var awardModelList = new List<AwardModel>();
            foreach (var content in configContent)
            {
                var award = new AwardModel();
                if (!content.StartsWith("id"))
                {
                    var line = content.Split(',');
                    award.AwardId = line[0];
                    award.RatioBegain = line[1];
                    award.RatioEnd = line[2];
                    award.AwardMessage = line[3];
                    award.IsAward = bool.Parse(line[4]);
                    awardModelList.Add(award);
                }
            }
            return View("AwardInfo", awardModelList.OrderBy(o=>o.AwardId).ToList());
        }

        public ActionResult EditActivityConfig(string id = "")
        {
            var textPath = Server.MapPath("~") + "Areas\\Activity\\ActivityConfiguration.txt";
            var configContent = TextProcessHelper.GetTextLines(textPath);
            var awardModelList = new List<AwardModel>();
            foreach (var content in configContent)
            {
                var award = new AwardModel();
                if (!content.StartsWith("id"))
                {
                    var line = content.Split(',');
                    award.AwardId = line[0];
                    award.RatioBegain = line[1];
                    award.RatioEnd = line[2];
                    award.AwardMessage = line[3];
                    award.IsAward = bool.Parse(line[4]);
                    awardModelList.Add(award);
                }
            }
            var awardModel = new AwardModel();
            if (!string.IsNullOrEmpty(id))
            {
                awardModel = awardModelList.Where(o => o.AwardId == id).FirstOrDefault();
            }
            return View("EditAwardConfig", awardModel);
        }

        [System.Web.Mvc.HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult EditActivityConfig(AwardModel award)
        {
            int count = 0;
            var IsNewAward = true;
            var newLine = award.AwardId + "," + award.RatioBegain + "," + award.RatioEnd + "," + award.AwardMessage + "," + (award.IsAward ? "true" : "false");
            var textPath = Server.MapPath("~") + "Areas\\Activity\\ActivityConfiguration.txt";
            var configContent = TextProcessHelper.GetTextLines(textPath);
            var newConfigContent = new List<string>();
            foreach (var content in configContent)
            {
                count++;
                if (content.StartsWith(award.AwardId))
                {
                    newConfigContent.Add(newLine);
                    IsNewAward = false;
                }
                else
                {
                    newConfigContent.Add(content);
                    if (count == configContent.Count && IsNewAward)
                        newConfigContent.Add(newLine);
                }
            }
            if (!configContent.Any())
            {
                newConfigContent.Add(newLine);
            }
            TextProcessHelper.WriteText(textPath, newConfigContent);
            return RedirectToAction("ActivityGetAwardConfigGet");
        }

        public ActionResult DeleteAwardbyId(string id)
        {
            var textPath = Server.MapPath("~") + "Areas\\Activity\\ActivityConfiguration.txt";
            var configContent = TextProcessHelper.GetTextLines(textPath);
            var newConfigContent = new List<string>();
            configContent = configContent.Where(o => !o.StartsWith(id)).ToList();
            TextProcessHelper.WriteText(textPath, configContent);
            return RedirectToAction("ActivityGetAwardConfigGet");
            //return Content("删除成功！");
        }
    }
}