import React, { useState, useEffect } from "react";
import cn from "classnames";

import styles from "./style.module.css";

const Mtrack = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [counter, setCounter] = useState(null);
  const displayItems = [
    "3 mm",
    "Fine Dust",
    "6 mm",
    "10 mm",
    "14 mm",
    "20 mm",
    "28 mm",
    "",
    "Slurry Dust",
    "6 mm BEST",
    "10 mm BEST",
    "14 mm BEST",
    "20 mm BEST",
    "",
    "40 mm",
    "Rail + Ballas",
    "Formpave",
    "Type 3",
    "Blend 66",
    "75 / 40",
    "20 / 5",
    "ROAD BLEND",
    "WGS",
    "Oversized",
    "6F5",
    "10S/D",
    "6S/D",
    "",
  ];
  const stopCounter = () => {
    setCounter(null);
    setSelectedItem(null);
  };
  const selectItem = (item) => {
    if (item === "") {
      return;
    }
    setCounter(0);
    setSelectedItem(item);
  };

  useEffect(() => {
    let timer1;
    if (counter !== null) {
      timer1 = setTimeout(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timer1);
    };
  }, [counter]);
  return (
    <div>
      {selectedItem && (
        <div className={styles.on} onClick={stopCounter}>
          <div className={styles.selectedItem}>{selectedItem}</div>
          {counter !== null && (
            <div className={styles.counter}>
              <span>
                {Math.floor((counter % (60 * 60 * 24)) / (60 * 60))
                  .toString()
                  .padStart(2, "0")}
              </span>
              <span className={styles.blinker}>:</span>
              <span>
                {Math.floor((counter % (60 * 60)) / 60)
                  .toString()
                  .padStart(2, "0")}
              </span>
              <span className={styles.blinker}>:</span>
              <span>
                {Math.floor(counter % 60)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
          )}
        </div>
      )}
      {!selectedItem && (
        <div className={styles.container}>
          {displayItems.map((item, index) => (
            <div
              key={index}
              className={cn(styles.gridItem)}
              onClick={() => selectItem(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mtrack;
