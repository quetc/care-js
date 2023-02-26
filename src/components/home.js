import { Hero, Box, Columns, Image, Block, Container } from "react-bulma-components";

import carol from "../assets/carol.jpg";
import grbg from "../assets/grbg.jpeg";

function Home() {
  return (
    <div>
      
      <Hero className="is-large is-primary" style={{ backgroundImage: `url(${grbg})`, backgroundSize: "cover" }}>
        <Container>
        <Columns className="is-vcentered align-items-center is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
        <Columns.Column>
        <Box style={{ opacity: 0.7 }}>
          <h3 className="is-size-4"> WE ARE COMMITTED </h3>
          <br />{" "}
          <small className="is-size-6">
            {" "}
            To Providing the Best Possible Service Through Integrity, Kindness
            and Respect{" "}
          </small>
          <hr />
          We're here to help you find the right senior living community
                  for your aging parent or spouse. Allow us to guide you through
                  the process, answer all your pressing questions and deliver
                  sound advice based on your unique needs.
        </Box>
        </Columns.Column>
        <Columns.Column>
        <Block className="">
        <Image
                className="my-3 is-inline-block" size=""
                src={carol}
                style={{ width: "70%" }}
                rounded
              />
              </Block>
        </Columns.Column>
        </Columns>
        </Container>
      </Hero>
    </div>
  );
}

export default Home;
