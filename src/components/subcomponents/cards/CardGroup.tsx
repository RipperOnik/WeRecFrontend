import * as React from "react";
import FoodCard from "./FoodCard";

interface CardGroup {
  isMyCards: boolean;
}

function CardGroup(props: CardGroup) {
  return (
    <div className="container">
      <div
        className="row d-flex justify-content-center"
        style={{ textAlign: "center" }}
      >
        <FoodCard
          id={"1"}
          title={"title"}
          author={"author"}
          description={"description"}
          averageRating={2}
          totalReviewCount={0}
          visiiblity="public"
          tags={["tag1", "tag2", "tag1", "tag2", "tag1", "tag2"]}
          isMyCard={props.isMyCards}
        />
        <FoodCard
          id={"2"}
          title={"title"}
          author={"author"}
          description={"description"}
          averageRating={2}
          totalReviewCount={0}
          visiiblity="public"
          tags={["tag1", "tag2", "tag1", "tag2", "tag1", "tag2"]}
          isMyCard={props.isMyCards}
        />
      </div>
    </div>
  );
}

export default CardGroup;
