using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Common.CommonService
{
    public static class TextProcessHelper
    {
        public static List<string> GetTextLines(string filePath)
        {
            var strList = new List<string>();
            using (var strReader = new StreamReader(filePath, Encoding.Default))
            {
                string line;
                while ((line = strReader.ReadLine()) != null && !string.IsNullOrEmpty(line))
                {
                    strList.Add(line);
                }
            }
            return strList;
        }

        public static void WriteText(string filePath, List<string> listContent)
        {
            using (FileStream fileStream = new FileStream(filePath, FileMode.Truncate, FileAccess.ReadWrite))
            {
                StreamWriter streamWrite = new StreamWriter(fileStream, Encoding.Default);
                foreach (var item in listContent)
                {
                    if (!string.IsNullOrEmpty(item))
                        streamWrite.WriteLine(item);
                }
                streamWrite.Flush();
                streamWrite.Close();
            }
        }
        /// <summary>
        /// GB2312转换成UTF8
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string gb2312_utf8(string text)
        {
            //声明字符集   
            System.Text.Encoding utf8, gb2312;
            //gb2312   
            gb2312 = System.Text.Encoding.GetEncoding("gb2312");
            //utf8   
            utf8 = System.Text.Encoding.GetEncoding("utf-8");
            byte[] gb;
            gb = gb2312.GetBytes(text);
            gb = System.Text.Encoding.Convert(gb2312, utf8, gb);
            //返回转换后的字符   
            return utf8.GetString(gb);
        }

        /// <summary>
        /// UTF8转换成GB2312
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string utf8_gb2312(string text)
        {
            //声明字符集   
            System.Text.Encoding utf8, gb2312;
            //utf8   
            utf8 = System.Text.Encoding.GetEncoding("utf-8");
            //gb2312   
            gb2312 = System.Text.Encoding.GetEncoding("gb2312");
            byte[] utf;
            utf = utf8.GetBytes(text);
            utf = System.Text.Encoding.Convert(utf8, gb2312, utf);
            //返回转换后的字符   
            return gb2312.GetString(utf);
        }
    }
}
