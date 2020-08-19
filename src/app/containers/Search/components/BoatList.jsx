import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Wrapper from "app/components/Wrapper";

import BoatCard from "./BoatCard";
import fadeTransition from "app/assets/animations/fade.module.css";
import animate from "app/assets/animations/animate.module.css";

const BoatList = ({ loading, boats }) => {
  return (
    <TransitionGroup sx={{ flexGrow: 1 }}>
      <Wrapper variant="wrapper.row">
        {!loading &&
          !!boats.length &&
          boats.map((boat) => (
            <CSSTransition
              key={boat.id}
              timeout={200}
              classNames={fadeTransition}
            >
              <BoatCard
                boat={boat}
                key={boat.id}
                className={animate.entryFade}
              />
            </CSSTransition>
          ))}
      </Wrapper>
    </TransitionGroup>
  );
};

export default BoatList;
