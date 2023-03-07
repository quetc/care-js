import adobe2 from "../assets/adobe-2.jpeg";
import activities1 from "../assets/activities1.jpeg";
import adobe5 from "../assets/adobe-5.jpeg";
import banner from "../assets/banner-bg1.jpeg";
import peepsparty from "../assets/peeps-party.jpeg";
import {
  Container,
  Columns,
  Box,
  Hero,
  Content,
  Block,
} from "react-bulma-components";

const Placement = () => {
  return (
    <body className="" style={{ backgroundColor: "#EDEAE5" }}>
      <div className="my-2">
        <Box
          className="px-3 mx-3"
          style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}
        >
          <Container>
            <Columns className="is-vcentered">
              <Columns.Column>
                <Box className="px-3 mx-3" style={{ opacity: 0.7 }}>
                  <Hero className="is-small">
                    <Content className="is-size-3">
                      About the Placement Process
                    </Content>
                  </Hero>
                </Box>
              </Columns.Column>
              <Columns.Column>
                <Box style={{ opacity: 0.7 }}>
                  <Block>
                    ☆ - AT NO COST TO YOU <br />
                  </Block>
                  <Block>
                    ☆ - You contact Senior CARE Solutions <br />
                  </Block>
                  <Block>
                    ☆ - We take care of the rest, giving you peace of mind.
                  </Block>
                </Box>
              </Columns.Column>
            </Columns>
          </Container>
        </Box>
      </div>
      <br />
      <Container>
        <Box>
          <Content className="pt-3 is-size-4">
            FINDING SENIOR LIVING OPTIONS
          </Content>{" "}
          <hr />
          <Content className="is-size-5">
            Making the right care decision for your loved one can be a daunting
            task. <br /> There are so many options; the terminology is often
            unfamiliar and the terrain unknown. Senior Care Solution of AZ will
            streamline the process to make it easier for you to make informed
            choices and reduce the stress and pressure associated with such
            important decisions.
          </Content>
        </Box>
        <Columns className="is-vcentered">
          <Columns.Column>
            <Box>
              <img src={peepsparty} />
              <Content className="is-size-3 pt-3">Independent Living</Content> <hr />
              <Content className="is-size-5">
                What does living independently actually entail? Independent
                living neighborhoods do not offer assistance with activities of
                daily life, in contrast to assisted living facilities. They are
                intended for independent, physically fit seniors who desire to
                interact socially with individuals their own age and have access
                to practical, pleasurable amenities.
              </Content>
            </Box>
            <Box>
              <img src={adobe5} />
              <Content className="is-size-3 pt-3">Memory Care</Content> <hr />
              <Content className="is-size-5">
                Caregiving for an elderly loved one who has memory loss brings
                particular difficulties. Neurodegenerative illnesses like
                Alzheimer's and dementia include emotional, behavioral, and
                physical side effects that call for specialized treatment and
                close supervision. The majority of caregivers are unable to
                offer this caliber of care at home.
              </Content>
            </Box>
          </Columns.Column>
          <Columns.Column>
            <Box>
              <img src={activities1} />
              <Content className="is-size-3 pt-3">Assisted Living</Content> <hr />
              <Content className="is-size-5">
                Your loved one may maintain the healthy, active lifestyles they
                are accustomed to while receiving a little more help as needed
                thanks to our assisted living lifestyle. While we take care of
                the necessities of daily life, the residents here live fuller,
                happier lives. Receive the care you require in a home you enjoy.
              </Content>
            </Box>
            <Box>
              <img src={adobe2} />
              <Content className="is-size-3 pt-3">Advocacy</Content> <hr />
              <Content className="is-size-5">
                An advocate can be a good friend to have on your side,
                especially when things get complicated. When navigating the
                healthcare system, sometimes there is so much information being
                offered that it is nearly impossible to hold it alone and sort
                out what you have been told. As your advocate and coach, we do
                our best to ensure that everyone understands the information
                being dispensed and that your questions are answered
                appropriately.
              </Content>
            </Box>
          </Columns.Column>
        </Columns>
      </Container>
    </body>
  );
};

export default Placement;
