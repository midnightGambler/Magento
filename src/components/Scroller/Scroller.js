import React from "react";

export const Scroller = ({ children }) => {
  return (
    <div className="scroller">
      <p className="scroller-text">{children}</p>
      <svg
        className="scroller-icon"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        width="32px"
        height="32px"
      >
        <image
          width="32px"
          height="32px"
          href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkBw8TOCHu1I7+AAADdklEQVRIx12V3WtcVRTFf+saS7ANttL60RK1VlMtlmpTZ5LUYEnph1qJJFSFIoIg6Kt/gq++CqLokx8IVoLVCMVqME2amXxUSy0FoZY2NRptZEaRSgguH+6595zJhZl7uOfsvdfae+191EDwjt/SeQMgXP6DYNUqfwsGOMpr0MbN/lxPMuhdLObbKh3lv/hEt+7SKO3u4EU1vtARIzzPbl13GcElFoqYEcE2ZlkvjN7L+DjE7dQMt7USIBilzgxbmWa9AG4wogbqZzxEuUS3m1plkiIQvluzbALDv9rjCxlw2gPOY25jWh2RgkoMZQ62qO5NYLSsHl8QmTAa40CI1eU6ayOCdAW+S9O+E4xW6PU5YbKQ71M+HE49RE3t0ShWwbdT92YA/ec+zubOs5LjSZ4OMB92zWuUmArwRtXVGb7u1Uyxl0WO+sqD4fgupmhzhI42qM69YIwed81ljrJ8ESCfYCiY7eaMslIDt7ru+0KoJzxZuHWBIKaLER0NRB7zRL6jddR4IN/XgMZztRYUsyK+Cpkc54Ug4V5OC+OaHwzUDnisqEuhEjUTkZTaO6YPg3A/8zoOBSqHdTLqoqCXAVv8PcciK6GPeCkkcJhD+Xcfyc3L53XPuUOo+ai/ZLPgIF9H2Rq9zPtJ+wzqREs7P88nwEWG1PzGAwHOfn2bwuMV3g0mQ4wU5kYwzPGw84GaXR7V/SEP+/gu7US96rcFz/Fp7EzgWY2EAzMMq4k3aI6tIYn9TMRYoDf4228mckbPUJA5S9UragDa6FndE1z0eaqESjrmAHiK0UDyHBWWCc10naqv5cc8SSVVWnQmOKjRsPqRXi87F5IBFlXxAhjEpLpb2qhAsp+ikBfp4Ua+l5VRfqWqfKy2+QyPqIwdRLuPUyEXP7mHf4qSZoqxrrnKHwBa4ynvTImoX2NhfYmq/oqzO4ujC7iiqv8EQ7tq7CC0jfsYD2K/TJWGia2epekCLlNVA4BbqHm7AKpMBJpXVWWJsvGMi2aKKjNs14w7ANR0pzq4yk1G8AvdLLqlxModsLrmOzTNWgBfUbvvAMFvdLPQ0k55ihuJVGJbeyfTak/E9Lv2MO+yiSOKjGSgJFfJeXpZzgeH0JIqnk8mZDI9sqh8t+L7wX1eEUDDFa6k125x3oUOUtEWd6HQHHtZ0gIVfm69K5NJzv+OU6UnXQQFhwAAAABJRU5ErkJggg=="
        />
      </svg>
    </div>
  );
};
