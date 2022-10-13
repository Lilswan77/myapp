export const Content = () => {
  return (
    <content>
      <h1 className="Title">Hello world</h1>
      <div className="hiddenborder">
        <p className="txt">
          <b>
            There was something beautiful in his hate. It wasn't the hate itself
            as it was a disgusting display of racism and intolerance. It was
            what propelled the hate and the fact that although he had this hate,
            he didn't understand where it came from. It was at that moment that
            she realized that there was hope in changing him.
          </b>
        </p>
      </div>
      <table className="parent">
        <tbody>
          <tr>
            <td>
              <div className="child one"></div>
            </td>
            <td>
              <div className="child two"></div>
            </td>
            <td>
              <div className="child three"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </content>
  );
};

export default Content;
