import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Schitt's Creek</h1>
      <br />
      <br />
      <hr />
      <div class="container">
        <img
          src="https://static0.srcdn.com/wordpress/wp-content/uploads/2020/01/schitts-creek-cast-photo-Edited.jpg"
          alt="Schitt's Creek"
          style={{ width: "100%" }}
        />
      </div>
      <br />
      <br />
      <hr></hr>
      <p>
        Schitt's Creek is a Canadian sitcom that follows the Rose family, who
        lose their fortune and move to a small town they once owned as a joke.{" "}
      </p>
      <br />
      <h2>Couples list with their partners</h2>
      <table>
        <tbody>
          <tr>
            <th>Partner 1</th>
            <th>Partner 2</th>
          </tr>
          <tr>
            <td>Ted Mullens</td>
            <td>Alexis Rose</td>
          </tr>
          <tr>
            <td>David Rose</td>
            <td>Patrick Brewer</td>
          </tr>
          <tr>
            <td>Emir Kaplan</td>
            <td>Stevie Budd</td>
          </tr>
          <tr>
            <td>Jhonny Rose</td>
            <td>Moira Rose</td>
          </tr>
          <tr>
            <td>Roland Schitt</td>
            <td>Jocelyn Schitt</td>
          </tr>
          <tr>
            <td>Mutt Schitt</td>
            <td>Twyla Sands</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
