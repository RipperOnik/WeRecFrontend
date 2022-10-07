import * as React from "react";
import Tag from "../subcomponents/Tag";
import Rating from "../subcomponents/cards/Rating";
import { useAppSelector } from "../../globalState/hooks";

function DetailedPage() {
  const props = useAppSelector((state) => state.currentDetailedPage);
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "30px" }}>{props.title}</h1>
      <h2>{props.description}</h2>
      {props.isMyCard && <p style={{ color: "grey" }}>{props.visiiblity}</p>}
      {props.tags.map((tag, id) => {
        return <Tag text={tag} key={id} />;
      })}
      <div style={{margin: "30px"}}>
        <Rating
          averageRating={props.averageRating ?? 0}
          totalReviewCount={props.totalReviewCount ?? 0}
        />
      </div>

      <div className="d-flex justify-content-center">
        <button type="button" className="btn custom-button">
          GET BOT
        </button>
        {props.isMyCard && (
          <button type="button" className="btn custom-button">
            MODIFY
          </button>
        )}
      </div>
    </div>
  );
}

export default DetailedPage;
