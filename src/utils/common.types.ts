interface LaunchItemLinks {
  article_link: string;
  video_link: string;
}

interface Rocket {
  rocket_name: string;
}

export interface LaunchItem {
  mission_name: string;
  launch_date_utc: string;
  links: LaunchItemLinks;
  rocket: Rocket;
}
