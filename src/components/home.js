import {
  Hero,
  Box,
  Columns,
  Image,
  Block,
  Container,
  Section,
  Button,
  Content
} from "react-bulma-components";

import TestimonialCarousel from "./carousel";

import carol from "../assets/carol.jpg";
import grbg from "../assets/grbg.jpeg";
import how from "../assets/How-we-help.jpeg";

function Home() {
  return (
    <div style={{ backgroundColor: "#EDEAE5" }}>
      <Hero
        className="is-large is-primary is-mobile mainContent"
        style={{ backgroundImage: `url(${grbg})`, backgroundSize: "cover" }}
      >
        <Container>
          <Columns className="is-vcentered ">
            <Columns.Column>
              <Box style={{ opacity: 0.7 }}>
                <h3 className="is-size-4"> WE ARE COMMITTED </h3>
                
                <small className="is-size-6">
                  {" "}
                  To Providing the Best Possible Service Through Integrity,
                  Kindness and Respect{" "}
                </small>
                <hr />
                <Content className="is-size-5">
                We're here to help you find the right senior living community
                for your aging parent or spouse. Allow us to guide you through
                the process, answer all your pressing questions and deliver
                sound advice based on your unique needs.</Content>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <Block className="">
                <Image
                  className="my-3 is-inline-block"
                  size=""
                  src={carol}
                  style={{ width: "70%" }}
                  rounded
                />
              </Block>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero>
        <Container>
      <Section className="mainContent">
        <Columns className="is-vcentered">
          <Columns.Column className="mx-4">
            <Block>
              <div>
                <h3 class="fw-bold lh-1 mb-3">How We Help Seniors</h3>
                <hr style={{ backgroundColor: "#D3D3D3" }}/>
              </div>
              <p class="lead">
                When a physical, cognitive, or emotional condition hinders
                someone’s ability to live without frequent assistance, elder
                care becomes necessary. Feel peace of mind knowing that you have
                made the best possible choices for the care of your elderly
                loved one.
              </p>
              <br />{" "}
              <Button className="is-info" href="placement">
                Learn about placement options
              </Button>
            </Block>
          </Columns.Column>
          <Columns.Column className="mx-4">
          
            <img 
              src={how}
              className="d-block is-rounded"
              style={{ borderRadius: "10px" }}
            />
          </Columns.Column>
        </Columns>
      </Section>
      
        <Box className="pb-6">
          <TestimonialCarousel />
        </Box>
        </Container>
      

    </div>
  );
}

export default Home;
