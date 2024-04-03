import { useState } from "react";
import { Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

//import ButtonCollapse from "react-bootstrap/Button";
//import Collapse from "react-bootstrap/Collapse";

interface Props {
  value: string;
  label: any;
}

export default function CollapseButton({ value, label }: Props) {
  const [openCollapse, setOpenCollapse] = useState(false);

  return (
    <>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {value}
            <div className="accordion__arrow" role="presentation" />
          </Accordion.Header>
          <Accordion.Body>
            <p>{label.line1}</p>
            <p>{label.line2}</p>
            <p>{label.line3}</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

{
  /* <ButtonCollapse
onClick={() => setOpenCollapse(!openCollapse)}
aria-controls="example-collapse-text"
aria-expanded={openCollapse}
className="Btn-collapse"
style={{
  width: "100%",
  backgroundColor: "#033c5a",
  color: "#ec720b!important",
  marginTop: "10px",
  marginBottom: "0px",
}}
>
{value}
</ButtonCollapse>
<Collapse in={openCollapse}>
<div id="example-collapse-text">
  <Card
    body
    style={{ width: "100%", border: "none", fontSize: "20px" }}
  >
    <p>{label.line1}</p>
    <p>{label.line2}</p>
    <p>{label.line3}</p>
  </Card>
</div>
</Collapse> */
}
