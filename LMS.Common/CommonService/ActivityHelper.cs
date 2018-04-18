using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LMS.Common
{
    /// <summary>
    /// 获取工具类 add by 陆鹏
    /// </summary>
    public class ActivityHelper
    {
        /// <summary>
        /// 根据所给的计数，与比例计算出合适的中奖Id,从0开始
        /// baseNumber设置基数，arrayPercent字符数组,每个奖品的配置，不同的比例,beign end,奖品id
        /// </summary>
        /// <param name="baseNumber"></param>
        /// <param name="AwardList"></param>
        /// <returns></returns>
        public static string GetAwardId(int baseNumber, List<string[]> AwardList)
        {
            float minNum = 0;
            var generatedNumber = new Random().Next(0, baseNumber);
            foreach (var arrayPercent in AwardList)
            {
                for (int i = 0; i < 2; i++)
                {
                    var getFolatPercent = StrConvertFloat(arrayPercent[i].TrimEnd('%')) / 100;
                    var maxNum = baseNumber * getFolatPercent;
                    if (minNum <= generatedNumber && generatedNumber <= maxNum)
                        return arrayPercent[2];
                    minNum = maxNum;
                }
            }
            return "0";
        }


        public static float StrConvertFloat(string str)
        {
            float value = 0;
            float.TryParse(str, out value);
            return value;
        }
    }
}
