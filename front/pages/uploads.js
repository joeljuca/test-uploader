import Head from "next/head";
import { DefaultLayout } from "../layouts/default";

const Uploads = ({ headers, entries, onSubmitFile, onChangeFile }) => {
  return (
    <DefaultLayout>
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

      <main style={{ padding: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="column">
              <form onSubmit={onSubmitFile}>
                <fieldset>
                  <p>
                    <label htmlFor="f-file">File</label>
                    <input type="file" id="f-file" onChange={onChangeFile} />
                  </p>
                  <p>
                    <button type="submit">Send</button>
                  </p>
                </fieldset>
              </form>

              {entries && (
                <table>
                  <thead>
                    {headers && (
                      <tr>
                        {headers.map((header) => (
                          <th key={header}>{header}</th>
                        ))}
                      </tr>
                    )}
                    {entries.map((entry, i) => (
                      <tr key={i}>
                        {entry.map((field, j) => (
                          <td key={j}>{field}</td>
                        ))}
                      </tr>
                    ))}
                  </thead>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Uploads;
