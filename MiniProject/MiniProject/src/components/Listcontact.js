
const List = ({ contacts }) => {

  return (
    <table className="table">
        <thead>
            <tr>
              <th className="td">Name</th>
              <th className="td">Phone number</th>
              <th className="td">Email</th>
            </tr>
          </thead>
          <tbody>
         {contacts.map((contact, index) => (
          
    
        
            <tr key={contact.id}>
              <td className="td"> {contact.name}</td>
              <td className="td"> {contact.telephone}</td>
              <td className="td"> {contact.email}</td>
            </tr>
          ))}
          </tbody>
        </table>
      );
  
};

export default List;
