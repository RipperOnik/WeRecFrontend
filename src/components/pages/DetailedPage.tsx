import * as React from "react";
import Tag from "../subcomponents/Tag";
import Rating from "../subcomponents/cards/Rating";
import { useAppSelector } from "../../globalState/hooks";
import { Link } from "react-router-dom";

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
      <div style={{ margin: "30px" }}>
        <Rating
          averageRating={props.averageRating ?? 0}
          totalReviewCount={props.totalReviewCount ?? 0}
        />
      </div>

      <div className="d-flex justify-content-center">
        <button type="button" className="btn custom-button" style={{margin: "20px 30px"}}>
          GET UNIQUE CODE
        </button>
        {props.isMyCard && (
          <Link to={`/configuration/${props.id}`}>
            <button type="button" className="btn custom-button" style={{margin: "20px 30px"}}>
              MODIFY
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default DetailedPage;
