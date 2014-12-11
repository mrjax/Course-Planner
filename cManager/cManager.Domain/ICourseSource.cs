using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cManager.Domain
{
    public interface ICourseSource
    {
        IQueryable<Course> Courses { get; }
        IQueryable<Major> Majors
        { get; }
    }
}
