import { gql } from "@apollo/client";

const GET_PAST_LAUNCHES = gql`
  query GET_PAST_LAUNCHES($offset: Int!, $limit: Int!){
    launchesPast(offset: $offset, limit: $limit) {
      mission_name
      launch_date_utc
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
  `;
export default GET_PAST_LAUNCHES;
