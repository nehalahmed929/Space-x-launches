import React, { FC, useState } from "react";
import { useQuery } from "@apollo/client";

import { VideoCard, PaginationButtons } from "@/components";
import GET_PAST_LAUNCHES from "@/queries/pastLaunches";
import { LaunchItem } from "@/utils/common.types";

const Cards: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 8;

  const handlePrevPage = () => setCurrentPage(currentPage - 1);

  const handleNextPage = () => setCurrentPage(currentPage + 1);

  const { data } = useQuery(GET_PAST_LAUNCHES, {
    variables: {
      offset: PAGE_SIZE * currentPage - PAGE_SIZE,
      limit: PAGE_SIZE * currentPage,
    },
  });

  if (data === undefined) {
    <h2>No More Data</h2>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col pt-3 float-right">
          <PaginationButtons
            prevHandler={handlePrevPage}
            nextHandler={handleNextPage}
            disableNextButton={data === undefined}
            disablePrevButton={currentPage === 1}
          />
        </div>
      </div>
      <div className="row">
        {data?.launchesPast?.map((item: LaunchItem) => {
          return (
            <div className="col-12 col-sm-6 col-md-3">
              <VideoCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
