import { Button, Flex } from "antd";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useState } from "react";

import { ResumeCard } from "../ResumeCard";
import { ResumeTabWrapperProps } from "./ResumeTabWrapper.models";

import "./ResumeTabWrapper.scss";

export const ResumeTabWrapper: FC<ResumeTabWrapperProps> = (props) => {
  const { tabName, entities, showExpandAll } = props;
  const [expandAll, setExpandAll] = useState<boolean>(false);

  return (
    <>
      <div className="resume-tab__title">
        <h1>{tabName}</h1>
        {showExpandAll && (
          <Button
            type="text"
            size="large"
            className="resume-tab__expand-all-button"
            onClick={() => setExpandAll(!expandAll)}
          >
            {!expandAll ? "Expand All" : "Collapse All"}
            <FontAwesomeIcon
              className={`resume-tab__expand-all-icon${expandAll ? " resume-tab__expand-all-icon--expanded" : ""}`}
              icon={faChevronCircleDown}
              size="lg"
            />
          </Button>
        )}
      </div>
      <Flex vertical gap={8} className="resume-tab__jobs-container">
        {entities.map((entity) => (
          <ResumeCard key={entity.id} entity={entity} expandAll={expandAll} />
        ))}
      </Flex>
    </>
  );
};
