import React from "react";

export const Scroller = ({ children }) => {
  return (
    <div className="scroller">
      <p className="scroller-text">{children}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        width="32px"
        height="32px"
        className="scroller-icon"
      >
        <image
          width="32px"
          height="32px"
          href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkBxASNRbqf3hCAAADf0lEQVRIx12VX2jVZRzGP8/Pk4xyLEWzlKUmaf8txXN2pmYsNK1kMbECEaG73XbbXbfddhPRXfaP0VCaIG0M3ObO2dpMZklRDc1WKxerkMkYPV383ve8v9MPzuHl/b7v832e779Xgwje87uaMQDC4T//QdwnWMj3uzhBL5S4y2d1lG7vYj43qwEUIeKnBph3aIAWt3KqxOc6arTRk9rNLTc8uHA8snAA8nbqbhE6yVLGR8FvO5OsSwLi5wZgA2obE9wrwEv0Z3zMs+HoViZoa6arICox40HqWieM72ivz2fAiLuc+9zOhFqTBDURB+HNqnsDGC2rw9+ITBgNcygEa4fr3EMhAi4I8gOa8P1gtELVV4TJAsFBHwmnHqWmlnQpZcH3UfcmAP3rTqZz8CyGShd4KdB8wjWvVuGqAK9XXe1hd58moy1LGnXe3eH4LsYpOVFHa1VnKxij/a65EaMsXwTK5+gJ13ZzSVkMotpc90PB1UGPRVhHBilc9OtEELLXo7lFa6jxcG5Xly4qpDeHz9TIdSiTPl4Pea8yIoxrfiRIO+ThmJdYWCWKRZKjfuqSPgRgP32s4fEg5YgGU2XEVQZs9mVOJlVCZzgdAnicF/J9v6wLFL83PeVWoaFn/AWbBIf5shFzjN7gg0IDd+tcUzu/xifANXpWnT7DUwI45RHNxv4TXGaOY0F7j85CmhM6zmcGtIG2jF5+CMYhH4wejPH79ILgVfqLbe1X6AtOJnlLQ3itptgWRscBRpMv0Nv843cK5YyOEcVMU/GKBgGt91faEiA6PV5s4OIkAl5kILC5QpllQjPdouKb+TGPUS5WWgITHNZAWF2l6mXnhWSAeZU9BwYxpj1NbRSZPE9M5DU6WMptWcPLr1SUj9WSL/F0mkShaJ8jlBHfu4PbMaWZkq+brvAHgFZ73E8WheiAhsP6Ryr6O83uLI0u4Loq/hMMLarxWKwJd3IxFPssFRZNavWsGC5glooWAbibmncKoMJokHlDFRZS4xmjocLQDqudmnQrgP5yu1q5wSoj+IU9zDe/WIoM4kgxgu/codtC0MYM086v/0b5/28X+USKwQp6EfrWVd8Boy1sBPDvlJkrno2cs8K1Qp8zQ5XlfHAILajsnwsTsvBmZgkrPSAAfO1OVgSw6DLXm6mLmIksVXyCCeUz5X0saI4yPzW/lcUb/wHAgqCXCL4OpwAAAABJRU5ErkJggg=="
        />
      </svg>
    </div>
  );
};
