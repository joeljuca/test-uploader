import { useEffect, useState } from "react";
import Head from "next/head";
import { DefaultLayout } from "../layouts/default";

// https://reactpatterns.com/#container-component
const UploadsContainer = () => {
  let [file, setFile] = useState(null);
  let [headers, setHeaders] = useState(null);
  let [entries, setEntries] = useState(null);

  return (
    <Uploads
      headers={headers}
      entries={entries}
      onSubmitFile={(event) => {
        event.preventDefault();

        // - [ ] Send the file to the server
        // - [ ] Receive and set the headers and entries states
        setHeaders("One Two Three".split(" "));
        setEntries([
          ["1", "2", "3"],
          ["1", "2", "3"],
          ["1", "2", "3"],
        ]);
      }}
      onChangeFile={(event) => {
        const file = event.target.files[0];
        setFile(file);
      }}
    />
  );
};

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

export default UploadsContainer;
