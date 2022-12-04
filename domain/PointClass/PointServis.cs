using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace PointClass
{
    public class Point
    {
        public Point MyPoint { get; set; }
        public double Radius { get; set; }
        public Color PointColor { get; set; }
        public List<Comment> Comments { get; set; }
        public Point(Point point, double radius, Color color)
        {
            MyPoint = point;
            Radius = radius;
            PointColor = color;
            Comments = new List<Comment>();
        }
    }
}
