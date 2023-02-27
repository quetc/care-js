import { Columns, Container } from "react-bulma-components";
import { SocialIcon } from "react-social-icons";

const pink = {
    color: 'pink'
  };


const Footer = () => {
  return (
    <Container>
      <Columns className="is-vcentered mt-5">
        <Columns.Column>
          <h3 className="is-size-4"> Thank you for supporting us!</h3>
        </Columns.Column>
        <Columns.Column>
        <SocialIcon url="https://facebook.com" />
              <SocialIcon url="mailto:care@senior-care-solutions.com" network="email" />
              <SocialIcon url="https://linkedin.com/" />
        </Columns.Column>
      </Columns>
      < hr />
      <Columns>
        <Columns.Column>
        <small className="justify-content-start">© 2022 Senior Care Solutions | 
              <a href="/privacy"> Privacy Policy </a>
               |<a href="/disclosure"> Disclosure</a></small>
        </Columns.Column>
        <Columns.Column className="smallLinks">
        <small >web-design </small> <small style={ pink }>quetc</small>
        </Columns.Column>
      </Columns>


    </Container>
  );
};

export default Footer;
