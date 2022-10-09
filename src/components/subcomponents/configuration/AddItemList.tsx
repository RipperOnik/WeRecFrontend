import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../../globalState/hooks";
import { addFeed, editFeed } from "../../../globalState/reducerActions";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface AddItemList {
  action: "add" | "edit"; 
  itemName: string;
  itemsToAdd: string[];
  addItem: (item: string) => any;
  deleteItem: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => any;

}
function AddItemList(props: AddItemList) {
    const data = useAppSelector((state) => state.currentDetailedPage);

    // const [sourceLinks, setSourceLinks] = useState<string[]>(
    //   props.action === "add" ? [] : data.sourceLinks
    // );
    const [sourceLink, setSourceLInk] = useState("");

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  function onChangeSourceLink(event: React.ChangeEvent<HTMLInputElement>) {
    setSourceLInk(event.target.value);
  }
//   function addSourceLink() {
//     if (sourceLink.length === 0) {
//       alert("link should not be empty!")
//       return;
//     }
//     if(sourceLinks.includes(sourceLink)){
//       alert("Don't add the same link")
//       return
//     }
//     if (sourceLinks.length > 0) {
//       setSourceLinks([...sourceLinks, sourceLink]);
//     } else {
//       setSourceLinks([sourceLink]);
//     }
//     setSourceLInk("");
//   }



  return (
    <div>
      <h2>Add {props.itemName}</h2>
      <form style={{ textAlign: "left" }} onSubmit={(e) => submitHandler(e)}>
        <div className="mb-3">
          <label htmlFor="source" className="form-label">
            {props.itemName}
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
          onClick={props.addItem(sourceLink)}
        >
          ADD
        </button>
      </form>
      <h2>{props.itemName + "s"}</h2>
      <form style={{ textAlign: "left" }} onSubmit={(e) => submitHandler(e)}>
        {props.itemsToAdd.map((link, ind) => {
          return (
            <div className="mb-3 d-flex">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png?w=360"
                width="22px"
                style={{ margin: "0px 10px" }}
                alt="img"
                id={ind + ""}
                onClick={(e) => props.deleteItem(e)}
              />
              <div style={{ borderBottom: "1px solid rgb(50, 191, 243)" }}>
                {link}
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
}
export default AddItemList
