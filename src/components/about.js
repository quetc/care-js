import carol2 from "../assets/about.jpeg";
import placeholder1 from "../assets/adobe-3.jpeg";

import {
  Container,
  Box,
  Columns,
  Content,
  Button,
  Block,
  Hero,
  Image,
} from "react-bulma-components";

const About = () => {
  return (
    <div style={{ backgroundColor: "#EDEAE5" }}>
      <Container className="mainContent py-3">
        <Box className="has-background-primary-light">
          <Columns className="is-vcentered">
            <Columns.Column className="is-one-fifth" size={5}>
              <Button className="has-background-success">
                Get A Personalized Care Strategy
              </Button>
            </Columns.Column>
            <Columns.Column className="is-half">
            <Block>
              <Content className="is-size-6">
                We're here to guide you through the entire process. We won't
                just send you a list of resources and hope for the best. <br />{" "}
                Our team will work closely with you and your family every step
                of the way, touring homes and providing expert guidance to help
                you find a care facility that fits your unique needs. Our
                personalized approach sets us apart from other placement
                agencies. <br /> <hr />
                We believe that every story deserves individualized attention
                and care, and we're committed to finding the perfect fit for
                your family.
              </Content>
              </Block>
            </Columns.Column>
          </Columns>
        </Box>

        <Box className="">
          <Columns className="is-vcentered">
            <Columns.Column>
              <img
                className="is-inline-block is-rounded is-mobile"
                src={carol2}
                style={{ maxWidth: "80%", width: "auto", borderRadius: "20px" }}
              />
            </Columns.Column>
            <Columns.Column className="has-text-centered ">
              <h3
                className="is-size-3 is-size-5-mobile"
                style={{ textDecoration: "underline" }}
              >
                {" "}
                About Carole-Lynne{" "}
              </h3>

              <small className="is-inline-block is-size-6-mobile is-size-5-tablet is-size-4">
                {" "}
                <b>C</b>aring <b>A</b>ssistance <b>R</b>esource <b>E</b>
                xpert
              </small>
              <hr />
              <Content className="is-size-5 is-size-6-mobile">
                Navigating resources and researching senior living options can
                be very overwhelming. With over 13 years of experience,
                Carole-Lynne has the vast knowledge of all resources and
                placement options available for when the need arises. She will
                save your time and energy, by recommending top quality options,
                and give you peace and mind that all of the details are taken
                care of. She then in turn educates you and negotiates for you so
                that you can make informed decisions for yourself or your loved
                one.{" "}
              </Content>
            </Columns.Column>
          </Columns>
        </Box>

        <Box>
          <Columns className="is-vcentered">
            <Columns.Column>
              <Content className="is-size-3 is-size-5-mobile">
                Expectations <hr />{" "}
              </Content>
              <Block className="is-size-6-mobile">
                <h5>
                  We will be with you, helping you tour our recommended
                  communities, learning about what they offer, and helping them
                  learn about your needs as well. Successful placement in a
                  senior community depends on factors such as the personal
                  living space, level of social interaction, and attentiveness
                  of the staff and medical professionals.
                </h5>{" "}
                <br />
                <h5>
                  {" "}
                  Our services are 100% free to you, and we will be with you
                  every step of the way. Our expert knowledge of local
                  communities in the valley allows us to find successful
                  placements in under a week.
                </h5>
              </Block>
              <Button href="/contact" className="m-3 is-info ">
                Contact Senior Care Solutions today!
              </Button>
            </Columns.Column>
            <Columns.Column>
              <img
                className="my-3 "
                src={placeholder1}
                style={{ maxWidth: "90%", width: "auto", borderRadius: "20px" }}
              />
            </Columns.Column>
          </Columns>
        </Box>
      </Container>
    </div>
  );
};

export default About;
