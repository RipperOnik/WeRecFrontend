import * as React from "react";

function ConfigurationPage() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Configure your feed</h1>
      <div className="row">
        <div className="col">
          <h2>Parameters</h2>
          <form style={{ textAlign: "left" }}>
            <div className="mb-3">
              <label htmlFor="importSource" className="form-label">
                Import source
              </label>
              <input type="text" className="form-control" id="importSource" />
            </div>
            <button
              type="submit"
              className="btn custom-button"
              style={{ margin: "20px 0" }}
            >
              IMPORT
            </button>
          </form>
          <form style={{ textAlign: "left" }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows={4}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="numberOfRequests" className="form-label">
                Number of requests per video
              </label>
              <input
                type="text"
                className="form-control"
                id="numberOfRequests"
                name="numberOfRequests"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="keyword" className="form-label">
                Keyword
              </label>
              <input
                type="text"
                className="form-control"
                id="keyword"
                name="keyword"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="visibility" className="form-label">
                Visibility
              </label>
              <select className="form-select" id="visibility" name="visibility">
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn custom-button"
              style={{ margin: "20px 0" }}
            >
              SAVE
            </button>
          </form>
        </div>

        <div className="col">
          <h2>Add source</h2>
          <form style={{ textAlign: "left" }}>
            <div className="mb-3">
              <label htmlFor="source" className="form-label">
                Source Link
              </label>
              <input
                type="text"
                className="form-control"
                id="source"
                name="source"
              />
            </div>
            <button
              type="submit"
              className="btn custom-button"
              style={{ margin: "20px 0" }}
            >
              ADD
            </button>
          </form>
          <h2>Source Links</h2>
          <form style={{ textAlign: "left" }}>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                <div style={{ borderBottom: "1px solid rgb(50, 191, 243)"}}>link</div>
              </label>
            </div>
            <button
              type="submit"
              className="btn custom-button"
              style={{ margin: "20px 20px 20px 0px" }}
            >
              DELETE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConfigurationPage;
