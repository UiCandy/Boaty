import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Heading, Text, Image, Box } from "rebass";
import Wrapper from "app/components/Wrapper";

import BoatCard from "./BoatCard";
import fadeTransition from "app/assets/animations/fade.module.css";
import animate from "app/assets/animations/animate.module.css";
import empty from "app/assets/empty.png";

const BoatList = ({ loading, boats }) => {
  return (
    <TransitionGroup>
      <Wrapper>
        {!loading &&
          (!!boats.length ? (
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
            ))
          ) : (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent=" center"
              alignItems="center"
            >
              <Image src={empty} maxWidth={400} />{" "}
              <Heading>It's a busy summer. 🏖</Heading>
              <Text>Looks like all the boats have left ...</Text>
            </Box>
          ))}
      </Wrapper>
    </TransitionGroup>
  );
};

export default BoatList;
