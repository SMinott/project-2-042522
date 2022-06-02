import {useEffect} from "react";
import { gsap } from "gsap";

function Bus()
{
  //animates bus to float up and down
  useEffect(() =>
  {
    gsap.to(".bus", 1, 
    {
        y: 75,
        yoyo: true, 
        repeat: -1, 
        ease: "power1.inOut",
        delay: 1,
        stagger: 
        {
          amount: 1.5, 
          grid: "auto",
          from: "center"
        }
    });
  }, [])

  return (
    <div class="loadingScreen">
        <img className="bus" src="https://t4.ftcdn.net/jpg/01/76/26/25/360_F_176262588_5UBYLDB9mqLxdqavixo0d4XF4g6ydFpZ.jpg" />
        <h1 id="loadingText">Loading...</h1>
    </div>
  )
}

export default Bus