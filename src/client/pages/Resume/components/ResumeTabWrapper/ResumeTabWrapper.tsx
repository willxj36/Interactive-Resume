import { Button, Flex, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";

import { ExpandProvider, useAreAllExpanded, useSetAreAllExpanded } from "./AreAllExpandedContext";
import { ResumeCard } from "../ResumeCard";
import { ResumeTabWrapperProps } from "./ResumeTabWrapper.models";
import { ResumeEntity, ResumeEntitySection } from "../../../../../utils/models";

import "./ResumeTabWrapper.scss";

const { Title } = Typography;

export const ResumeTabWrapper: FC<ResumeTabWrapperProps> = (props) => {
  return (
    <ExpandProvider>
      <ResumeTab {...props} />
    </ExpandProvider>
  );
};

const ResumeTab: FC<ResumeTabWrapperProps> = (props) => {
  const { tabName, sections, showExpandAll } = props;

  const areAllExpanded = useAreAllExpanded();
  const setAreAllExpanded = useSetAreAllExpanded();

  return (
    <>
      <div className="resume-tab__title">
        <Title level={1}>
          <b>
            <em>{tabName}</em>
          </b>
        </Title>
        {showExpandAll && (
          <Button
            type="text"
            size="large"
            className="resume-tab__expand-all-button"
            onClick={() => setAreAllExpanded(!areAllExpanded)}
          >
            {!areAllExpanded ? "Expand All" : "Collapse All"}
            <FontAwesomeIcon
              className={`resume-tab__expand-all-icon${areAllExpanded ? " resume-tab__expand-all-icon--expanded" : ""}`}
              icon={faChevronCircleDown}
              size="lg"
            />
          </Button>
        )}
      </div>
      {sections.map((section) => (
        <ResumeTabSection section={section} />
      ))}
    </>
  );
};

const ResumeTabSection: FC<{ section: ResumeEntitySection<ResumeEntity> }> = ({ section }) => {
  return (
    <>
      <Title level={2}>{section.sectionTitle}</Title>
      <Flex vertical gap={8} className="resume-tab__jobs-container">
        {section.entities.map((entity) => (
          <ResumeCard key={entity.id} entity={entity} />
        ))}
      </Flex>
    </>
  );
};
