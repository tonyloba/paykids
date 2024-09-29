import React from "react";
import Button from "muicss/lib/react/button";

function ChildrensRequestForm() {
  return (
    <main className="container">
       <p className="heading">Request Money to Mom & Dad </p>
      <article className="frame-send-money">
        <div className="text">
          <p>Request Money</p>
        </div>
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css"
          />
          <div className="form-row">
            <form /*onSubmit={this.handleSubmit}*/>
              <label>
                <p className= "top">Purpose</p>
                <input
                  type="text"
                  placeholder="type here"
                  /*value={this.state.value}*/
                  /*onChange={this.handleChange}*/
                />
              </label>
            </form>
            <form /*onSubmit={this.handleSubmit}*/>
              <label>
                <p className= "top">Amount</p>
                <input
                  type="text"
                  placeholder="$"
                  /*value={this.state.value}*/
                  /*onChange={this.handleChange}*/
                />
              </label>
            </form>
          </div>
        </div>
        <div>
          <Button className="button-confirm" type="submit" value="Submit">
            Submit
          </Button>
        </div>
      </article>
    </main>
  );
}

export default ChildrensRequestForm;
