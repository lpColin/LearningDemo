using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OrderOnlineAPI.dbModel;
using LMS.Common;

namespace UnitTestOrderOnline
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod] 
        public void SaveEntityToDb()
        {

            //var ss = ActivityHelper.GetAwardId(100, new string[]{"0","10%"});


            using (var dbContext = new orderOnlineModelContainer())
            {
                try
                {
                    //var user = new user_info { UserName = "Lp", PhoneNumber = "18862241924", CrearDate = DateTime.Now };
                    //dbContext.user_info.Add(user);
                    //dbContext.SaveChanges();

                    var product = new production_info[]
                    {
                        new production_info { ProdName="黄焖鸡米饭"},
                        new production_info { ProdName="糖醋排骨"},
                        new production_info { ProdName = "香辣蟹" },
                        new production_info { ProdName = "宫保鸡丁" }
                    };
                    for (int i=0;i< product.Length;i++)
                    {
                        dbContext.production_info.Add(product[i]);
                    }
                    dbContext.SaveChanges();
                }
                catch (Exception e)
                { 
                    LogHelper.WriteLog(typeof(UnitTest1),e);
                }
            }
        }

        [TestMethod]
        public void StoreArray() {
            int[] array = new int[] {10,2,3,4,7,9,1,5,6,8};
            int temp;
            for (int i = 0; i < array.Length; i++)
            {
                for (int j = i+1; j < array.Length; j++)
                {
                    if (array[j] < array[i]) {
                        temp = array[j];
                        array[j] = array[i];
                        array[i] = temp;
                    }
                }
            }
            for (int i = 0; i < array.Length; i++)
            {
                Console.WriteLine(array[i]);
            }          
        }

        [TestMethod]
        public void StringStore() {
            var stringValue = "student";
            char[] valueChar = stringValue.ToCharArray();
            Array.Reverse(valueChar);
            var newValue = new string(valueChar);
        }


    }
}
