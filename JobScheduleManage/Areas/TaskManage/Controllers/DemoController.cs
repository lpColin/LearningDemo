using DemoMvc.Areas.TaskManage.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DemoMvc.Areas.TaskManage.Controllers
{
    public class DemoController : Controller
    {
        //TaskManage/Demo/ShowIndex
        public ActionResult ShowIndex()
        {
            var student = new Student();
            var item1 = new SelectListItem { Text = "xiaoming", Value = "1"};
            var item2 = new SelectListItem { Text = "xiaoming2", Value = "2" };
            var item3 = new SelectListItem { Text = "xiaoming3", Value = "3" };
            var selectList = new List<SelectListItem>();
            var selectList2 = new List<SelectListItem>();
            selectList.Add(item1);
            //item2.Selected = true;
            selectList.Add(item2);
            selectList.Add(item3);
            ViewBag.select1 = selectList;

            //item1 = new SelectListItem { Text = "xiaoming", Value = "1" };
            //item2 = new SelectListItem { Text = "xiaoming2", Value = "2" };
            //item3 = new SelectListItem { Text = "xiaoming3", Value = "3" };
            selectList2.Add(item1);
            //item2.Selected = false ;
            //item3.Selected = true;
            selectList2.Add(item2);
            selectList2.Add(item3);
            //ViewData["select1"] = selectList;
            ViewBag.select2 = selectList2;


            student.id = "2";
            return View("SelectListPage", student);
        }

    }
}