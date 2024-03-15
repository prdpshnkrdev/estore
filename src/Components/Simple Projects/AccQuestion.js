import React, { useState } from "react";

function Question({ question }) {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <div className={open ? "open" : "closed"}>
        <h4>{question.title}</h4>
        <button onClick={() => setOpen(!open)}>{open ? "-" : "+"}</button>
      </div>
      {open && <p>{question.info}</p>}
    </section>
  );
}

export default Question;
