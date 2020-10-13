import Head from "next/head";

function Uploads({ onFileSubmit }) {
  return (
    <>
      <Head>
        <title>Super Koa-React File Uploader X-3000</title>

        {/* Milligram. https://milligram.io */}
        {[
          "https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic",
          "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css",
          "https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css",
        ].map((url) => (
          <link rel="stylesheet" href={url} key={url} />
        ))}
      </Head>

      <header style={{ background: "black", color: "white", padding: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="column">
              <h1>
                <small>Welcome to the</small>
                <br />
                <strong>Super Koa-React File Uploader X-3000</strong>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main style={{ padding: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="column">
              <form>
                <fieldset onSubmit={onFileSubmit || (() => undefined)}>
                  <p>
                    <label htmlFor="f-file">File</label>
                    <input type="file" id="f-file" placeholder="asdf" />
                  </p>
                  <p>
                    <button type="submit">Send</button>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer style={{ background: "#eee", padding: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="column column-66">
              <h4>Super Koa-React File Uploader X-3000</h4>
              <p>
                <small>
                  Built with ❤️ in Maracanaú, BR by{" "}
                  <a
                    href="https://www.linkedin.com/in/joelwallis"
                    target="_blank"
                  >
                    Joel Jucá
                  </a>
                </small>
              </p>
            </div>
            <div className="column column-33" style={{ textAlign: "right" }}>
              <p>
                <small>
                  Technologies used:
                  <br />
                  {[
                    ["Koa", "https://koajs.com"],
                    ["Next.js", "https://nextjs.org"],
                    ["React", "https://reactjs.org"],
                  ].map(([name, url], index, list) => (
                    <React.Fragment key={name}>
                      <a href={url} target="_blank">
                        {name}
                      </a>
                      {index < list.length - 2 ? ", " : ""}
                      {index === list.length - 2 ? ", and " : ""}
                    </React.Fragment>
                  ))}
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Uploads;
