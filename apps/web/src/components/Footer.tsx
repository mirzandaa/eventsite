export const Footer = () => {
  return (
    <div className="mx-0 w-full h-96 bg-background text-text shadow flex flex-col justify-center items-start p-10">
      <table className="border-separate border-spacing-5">
        <tr>
          <th>Eventales</th>
          <th>Connect with us</th>
        </tr>
        <tr>
          <td>About Us</td>
          <td>Contact Support</td>
        </tr>
        <tr>
          <td>FAQs</td>
          <td>Instagram</td>
        </tr>
      </table>
      <span className="self-end">eventales@co.id</span>
    </div>
  );
};
