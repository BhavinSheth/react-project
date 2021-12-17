import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Comments from "../../components/comments/comments.js";
import VideoHorizontal from "../../components/videoHorizontal/videoHorizontal.js";
import VideoMetaData from "../../components/videoMetaData/videoMetaData.js";
import { getVideoById } from "../../redux/actions/videos.action.js";
import { useDispatch, useSelector } from "react-redux";
import "./watchScreen.scss";

const WatchScreen = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideoById);
  }, [dispatch, id]);

  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            title="vid"
            src={`https://www.youtube.com/embed/${id}`}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <VideoMetaData />
        <Comments />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoHorizontal />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
