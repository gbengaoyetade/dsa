using System;
using System.Collections;

namespace CSharp
{
    class Program
    {
        static Hashtable fibCache = new Hashtable();

        public static int fib(int num) {
            if(num <=2) {
              return 1;
            }

						if(fibCache.ContainsKey(num)) {
							return Int32.Parse(fibCache[num].ToString());
						}

            int response = fib(num -1) + fib(num -2);
						fibCache.Add(num, response);

            return response;
        }

        static void Main(string[] args)
        {
            Console.WriteLine(fib(50));
        }
    }
}
