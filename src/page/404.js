import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      navigate("/");
    }
  });

  return (
    <>
      <main className=" m-10 text-[30px]">
        {" "}
        <div className="font-bold">Page Not Found  ╥﹏╥ </div>
        <p id="result">Will be redirect to Home in {counter} seconds</p>
      </main>
    </>
  );
}
export default NotFound;
