import React, { FC } from "react";
import { PaginationButtonProps } from "./paginationButton.types";

export const PaginationButtons: FC<PaginationButtonProps> = ({
  prevHandler,
  nextHandler,
  disableNextButton,
  disablePrevButton,
}) => {
  return (
    <>
      <button
        className="btn btn-outline-primary p-2 px-3 me-2"
        onClick={prevHandler}
        disabled={disablePrevButton}
      >
        Previous
      </button>
      <button
        className="btn btn-primary px-4 p-2"
        onClick={nextHandler}
        disabled={disableNextButton}
      >
        Next
      </button>
    </>
  );
};
