import moment from "moment";
import numeral from "numeral";
import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import "./videoMetaData.scss";

const VideoMetaData = () => {
  const [ read, makeRead ] = useState(true);
  const [ style, makeStyle]  = useState({ display: "none" });

  function toggleText() {
    (!read ===true) ? makeStyle({ display: "none" }) : makeStyle({ display: "block" });
    makeRead(!read);
  }
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="py-1 d-flex justify-content-between align-items-center">
          <span>
            <AiFillEye />
            {numeral(123123).format("0a")} views •{" "}
            {moment("2021-03-1").fromNow()}
          </span>
          <div>
            <span className="pr-1">
              <MdThumbUp size={26} />
              {numeral(123123).format("0a")}
            </span>
            <span className="pl-2">
              <MdThumbDown size={26} />
              {numeral(123123).format("0a")}
            </span>
          </div>
        </div>
      </div>

      <div className="py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="mr-3 rounded-circle"
          />
          <div className="d-flex flex-column">
            <span>channelTitle</span>
            <span>{numeral(123123).format("0a")} Subscribers</span>
          </div>
        </div>

        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <span style={style}>
          Turpis massa sed elementum tempus egestas. Dolor morbi non arcu risus
          quis. Lorem ipsum dolor sit amet consectetur adipiscing. Lorem sed
          risus ultricies tristique nulla aliquet enim. Pretium vulputate sapien
          nec sagittis aliquam malesuada. Ipsum consequat nisl vel pretium.
          Suspendisse in est ante in nibh. Suspendisse potenti nullam ac tortor
          vitae purus faucibus ornare suspendisse. Mi eget mauris pharetra et
          ultrices neque ornare aenean euismod. Ornare aenean euismod elementum
          nisi. Sit amet nisl purus in mollis nunc sed. Euismod quis viverra
          nibh cras pulvinar. Consectetur adipiscing elit duis tristique.
          Facilisi morbi tempus iaculis urna id. Mattis nunc sed blandit libero
          volutpat sed cras.
        </span><br />
        
        <button onClick={toggleText} className="btn border-0 py-2 my-2">
          Read More/less
        </button>
      </div>
    </div>
  );
};

export default VideoMetaData;
