export const DefaultLayout = ({ children }) => (
  <>
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

    {children}

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
