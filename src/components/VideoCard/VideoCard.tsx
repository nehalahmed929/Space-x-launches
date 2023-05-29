import React, { FC } from "react";
import { VideoCardProps } from "./videoCard.types";
import { URLS } from "@/utils/constants";
import "./index.css";

export const VideoCard: FC<VideoCardProps> = ({ item }) => {
  let videoId = item.links.video_link?.includes("=")
    ? item.links.video_link?.substring(
        item.links.video_link?.lastIndexOf("=") + 1
      )
    : item.links.video_link?.substring(
        item.links.video_link?.lastIndexOf("/") + 1
      );

  return (
    <div className="card shadow my-4 p-0 0">
      <div
        className="embed-responsive w-100 embed-responsive-16by9"
        style={{ height: "300px" }}
      >
        <iframe
          title={videoId}
          className="embed-responsive-item w-100 h-100 m-0"
          src={`${URLS.YOUTUBE_EMBED_URL}/${videoId}`}
        />
      </div>
      <div className="card-body">
        <h6 style={{ fontWeight: "700", fontSize: "16px" }}>
          Mission : {item.mission_name.slice(0, 20)}
        </h6>
        <p className="mb-1" style={{ fontSize: "14px", fontWeight: "500" }}>
          Rocket : {item.rocket.rocket_name}
        </p>
        <p className="text-secondary" style={{ fontSize: "14px" }}>
          Launch Date :{" "}
          {item.launch_date_utc.substring(0, item.launch_date_utc.indexOf("T"))}
        </p>
        <a
          href={item.links.article_link}
          target="blank"
          className="btn btn-primary btn-sm"
        >
          Read More
        </a>
      </div>
    </div>
  );
};
