import React, { useState } from "react";
import { Task } from "../containers/Task";
import { Bar, Line } from "react-chartjs-2";

export const Home = (props) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="home-container">
      <div className="home-container__item">
        <Line
          data={{
            labels: ["11/1", "11/2", "11/3", "11/4", "11/5", "11/6", "11/7","11/8","11/9","11/10","11/11","11/12","11/13","11/14","11/15","11/16","11/17","11/18","11/19","11/20","11/21", "11/22"],
            datasets: [
              {
                label: "how moody",
                data: [14, 5, 4, 5, 8, 10, 9, 12,11,6,9,12,13,13,11,10, 11, 12, 10, 9, 9, 12,11],
                backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: ["black"],
                borderWidth: 2,
                fill:true,
                showLine:true,
                hoverBackgroundColor:['rgba(255, 206, 86, 0.2)']
              },
            ],
          }}
          height={900}
          width={window.innerWidth}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
      <div
        className={`${
          toggle ? "home-container__float-out" : "home-container__float-in"
        }`}
      >
        <div className={"float-toggler"} onClick={() => setToggle(!toggle)}>
          <img
            src={"https://www.freeiconspng.com/uploads/right-arrow-icon-27.png"}
            alt="arrow"
          />
        </div>
        <Task user={props.user} />
      </div>
    </div>
  );
};
