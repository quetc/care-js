import { Box, Button, Columns, Container } from "react-bulma-components";
import SimpleForm from "./Contact_form";
import TestimonialForm from "./testimonialForm.js";
import { useState } from "react";

import contact from "../assets/contact.jpeg";

const FormSwitch = () => {
  const [formType, setFormType] = useState("contact");

  return (
    <div className="mainContent" style={{ backgroundColor: "#EDEAE5" }}>
      <Container id="contact">
        <Columns className="is-vcentered">
          <Columns.Column>
            
              <Box className="my-auto pt-2 col-md-12 col-lg-9 col-xl-6">
                <img src={contact} alt="Contact Us" />
              </Box>
            
          </Columns.Column>
          <Columns.Column>
          <Button className="is-info is-fullwidth"
            onClick={() =>
              setFormType(formType === "contact" ? "testimonial" : "contact")
            }
          >
            Switch to {formType === "contact" ? "Testimonial" : "Contact"} Form
          </Button>
              {formType === "contact" ? <SimpleForm /> : <TestimonialForm />}
            
          </Columns.Column>
        </Columns>

          
      </Container>
    </div>
  );
};

export default FormSwitch;
