import { useState } from "react";
import Button from 'muicss/lib/react/button';

export default function ParentsSendMoneyForm(props) {
  const [sendMoney, setSendMoney] = useState(0);

  const five = function () {
    setSendMoney(5);
  };
  const ten = function () {
    setSendMoney(10);
  };
  const fifteen = function () {
    setSendMoney(15);
  };
  const twenty = function () {
    setSendMoney(20);
  };
  const fifty = function () {
    setSendMoney(50);
  };
  const hundred = function () {
    setSendMoney(100);
  };
  const clear = function () {
    setSendMoney(0);
  };

  return (
    <main className="container">
      <article className="frame-send-money">
        <div className="text">
          <p>Send Money: Tina</p>
        </div>
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css"/>
          <div>
            <Button onClick={five} className="button-money">$5</Button>
            <Button onClick={ten} className="button-money">$10</Button>
            <Button onClick={fifteen} className="button-money">$15</Button>
          </div>
          <div>
            <Button onClick={twenty} className="button-money">$20</Button>
            <Button onClick={fifty} className="button-money">$50</Button>
            <Button onClick={hundred} className="button-money2">$100</Button>
          </div>
          <p>Amount to give: {sendMoney}</p>
          {/* this is a form need event prvent default */}
          <div>
            <Button className="button-confirm">Confirm</Button>
            <Button onClick={clear} className="button-cancel">Reset</Button>
          </div>
        </div>
      </article>
    </main>
  );
}
