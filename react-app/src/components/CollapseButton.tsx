import { useState } from "react";
import { Card } from "react-bootstrap";
import ButtonCollapse from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

interface Props {
  value: string;
  label: any;
}

export default function CollapseButton({ value, label }: Props) {
  const [openCollapse, setOpenCollapse] = useState(false);

  return (
    <>
      <ButtonCollapse
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
      </Collapse>
    </>
  );
}

/* export default function Dropdown({ value, label }: Props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [{ value: value, label: label }];
  return (
    <div className="Dropdown">
      <p className="d-inline-flex gap-1">
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Link with href
        </a>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button with data-bs-target
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
    </div>
  );
}
 */
