
const List = ({ blogs }) => {

    return (
      <table className="table">
          <thead>
              <tr>
                <th className="td">Subject</th>
                <th className="td">Description</th>
                <th className="td">Date</th>
              </tr>
            </thead>
            <tbody>
           {blogs.map((blog, index) => (
            
      
          
              <tr key={blog.id}>
                <td className="td"> {blog.subject}</td>
                <td className="td"> {blog.description}</td>
                <td className="td"> {blog.date}</td>
              </tr>
            ))}
            </tbody>
          </table>
        );
    
  };
  
  export default List;
  