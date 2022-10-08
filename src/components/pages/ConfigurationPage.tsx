import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../globalState/hooks";
import { addFeed, editFeed } from "../../globalState/reducerActions";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface ConfigurationPage {
  action: "add" | "edit";
}

function ConfigurationPage(props: ConfigurationPage) {
  const data = useAppSelector((state) => state.currentDetailedPage);
  const myFeeds = useAppSelector((state) => state.myFeeds);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [name, setName] = useState(props.action === "add" ? "" : data.title);
  const [description, setDescription] = useState(
    props.action === "add" ? "" : data.description
  );
  const [numberOfVideosPerRequest, setNumberOfVideosPerRequest] = useState(
    props.action === "add" ? 0 : data.numberOfVideosPerRequest
  );
  const [keyword, setKeyword] = useState(
    props.action === "add" ? "" : data.keyword
  );
  const [sourceLinks, setSourceLinks] = useState<string[]>(
    props.action === "add" ? [] : data.sourceLinks
  );
  const [sourceLink, setSourceLInk] = useState("");

  function onChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function onChangeKeyword(event: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }
  function onChangeNumber(event: React.ChangeEvent<HTMLInputElement>) {
    setNumberOfVideosPerRequest(Number(event.target.value));
  }
  function onChangeDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }
  function onChangeSourceLink(event: React.ChangeEvent<HTMLInputElement>) {
    setSourceLInk(event.target.value);
  }

  function addSourceLink() {
    if (sourceLink.length === 0) {
      alert("link should not be empty!");
      return;
    }
    if (sourceLinks.length > 0) {
      setSourceLinks([...sourceLinks, sourceLink]);
    } else {
      setSourceLinks([sourceLink]);
    }
    setSourceLInk("");
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Configure your feed</h1>
      <div className="row">
        <div className="col">
          <h2>Parameters</h2>
          {/* <form style={{ textAlign: "left" }}>
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
          </form> */}
          <form
            style={{ textAlign: "left" }}
            onSubmit={(e) => submitHandler(e)}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              {props.action === "edit" ? (
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={onChangeName}
                  value={name}
                />
              ) : (
                // >{data.title}</input>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={onChangeName}
                  value={name}
                />
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              {props.action === "edit" ? (
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows={4}
                  value={description}
                  onChange={onChangeDescription}
                />
              ) : (
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows={4}
                  onChange={onChangeDescription}
                  value={description}
                />
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="numberOfRequests" className="form-label">
                Number of requests per video
              </label>
              {props.action === "edit" ? (
                <input
                  type="number"
                  className="form-control"
                  id="numberOfRequests"
                  name="numberOfRequests"
                  value={numberOfVideosPerRequest}
                  onChange={onChangeNumber}
                />
              ) : (
                <input
                  type="number"
                  className="form-control"
                  id="numberOfRequests"
                  name="numberOfRequests"
                  onChange={onChangeNumber}
                  value={numberOfVideosPerRequest}
                />
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="keyword" className="form-label">
                Keyword
              </label>
              {props.action === "edit" ? (
                <input
                  type="text"
                  className="form-control"
                  id="keyword"
                  name="keyword"
                  value={keyword}
                  onChange={onChangeKeyword}
                />
              ) : (
                <input
                  type="text"
                  className="form-control"
                  id="keyword"
                  name="keyword"
                  onChange={onChangeKeyword}
                  value={keyword}
                />
              )}
            </div>
            {/* <div className="mb-3">
              <label htmlFor="visibility" className="form-label">
                Visibility
              </label>
              <select className="form-select" id="visibility" name="visibility">
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div> */}

            <button
              type="submit"
              className="btn custom-button"
              style={{ margin: "20px 0" }}
              onClick={() => {
                if (
                  name.length === 0 ||
                  description.length === 0 ||
                  numberOfVideosPerRequest === 0 ||
                  keyword.length === 0 ||
                  sourceLinks.length === 0
                ) {
                  alert("Fill out all the required fields");
                  return;
                }

                if (props.action === "add") {
                  dispatch(
                    addFeed({
                      id: myFeeds.length,
                      title: name,
                      description: description,
                      numberOfVideosPerRequest: numberOfVideosPerRequest,
                      keyword: keyword,
                      sourceLinks: sourceLinks,
                    })
                  );
                } else if (props.action === "edit") {
                  dispatch(
                    editFeed({
                      id: data.id,
                      title: name,
                      description: description,
                      numberOfVideosPerRequest: numberOfVideosPerRequest,
                      keyword: keyword,
                      sourceLinks: sourceLinks,
                    })
                  );
                }
                navigate("/");
              }}
            >
              SAVE
            </button>
          </form>
        </div>

        <div className="col">
          <h2>Add source</h2>
          <form
            style={{ textAlign: "left" }}
            onSubmit={(e) => submitHandler(e)}
          >
            <div className="mb-3">
              <label htmlFor="source" className="form-label">
                Source Link
              </label>
              <input
                type="text"
                className="form-control"
                id="source"
                name="source"
                value={sourceLink}
                onChange={onChangeSourceLink}
              />
            </div>
            <button
              type="submit"
              className="btn custom-button"
              style={{ margin: "20px 0" }}
              onClick={addSourceLink}
            >
              ADD
            </button>
          </form>
          <h2>Source Links</h2>
          <form
            style={{ textAlign: "left" }}
            onSubmit={(e) => submitHandler(e)}
          >
            {sourceLinks.map((link, ind) => {
              return (
                <div className="mb-3 d-flex">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png?w=360"
                    width="22px"
                    style={{ margin: "0px 10px" }}
                    alt="img"
                    id={ind + ""}
                    onClick={(e) => {
                      const index = Number((e.target as HTMLButtonElement).id);
                      setSourceLinks([
                        ...sourceLinks.slice(0, index),
                        ...sourceLinks.slice(index + 1),
                      ]);
                    }}
                  />
                  <div style={{ borderBottom: "1px solid rgb(50, 191, 243)" }}>
                    {link}
                  </div>
                </div>
              );
            })}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConfigurationPage;
