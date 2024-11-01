import dayjs from "dayjs";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useState, useRef, useCallback, useEffect, useLayoutEffect } from "react";

import { ResumeCardProps } from "./ResumeCard.models";

import "./ResumeCard.scss";

/**
 * generalized card with styling and animation for all info cards under the /resume/* path
 */
export const ResumeCard: FC<ResumeCardProps> = (props) => {
  const { entity, expandAll } = props;

  const [isExpanded, setIsExpanded] = useState<boolean>(!!expandAll);

  // refs/states used for animating height change on expand/collapse and resize
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const [titleComputedHeight, setTitleComputedHeight] = useState<number>(0);
  const [detailsComputedHeight, setDetailsComputedHeight] = useState<number>(0);

  const getSectionComputedHeights = useCallback(() => {
    if (titleRef.current) {
      const { marginTop, marginBottom } = window.getComputedStyle(titleRef.current);
      setTitleComputedHeight(titleRef.current.offsetHeight + parseInt(marginBottom) + parseInt(marginTop));
    }
    if (detailsRef.current) {
      const { marginTop, marginBottom } = window.getComputedStyle(detailsRef.current);
      setDetailsComputedHeight(detailsRef.current.offsetHeight + parseInt(marginBottom) + parseInt(marginTop));
    }
  }, [setTitleComputedHeight, setDetailsComputedHeight]);

  /**
   * calls getSectionComputedHeights both on component mount, and then adds the listener to do so on page resize
   */
  useEffect(() => {
    getSectionComputedHeights();

    window.addEventListener("resize", getSectionComputedHeights);

    return () => window.removeEventListener("resize", getSectionComputedHeights);
  }, []);

  /**
   * this is probably about as complicated as the logic for this useLayoutEffect should ever be for performance reasons,
   * but prevents flickers by grabbing this info pre-painting
   */
  useLayoutEffect(() => {
    if (containerRef.current && titleComputedHeight && detailsComputedHeight) {
      let finalHeight = titleComputedHeight;
      if (isExpanded) {
        finalHeight += detailsComputedHeight;
      }
      containerRef.current.setAttribute("style", `height: ${finalHeight}px`);
    }
  }, [isExpanded, titleComputedHeight, detailsComputedHeight]);

  useEffect(() => {
    setIsExpanded(!!expandAll);
  }, [expandAll]);

  // && will return first operand if it's falsy contrary to common misconception that it just means AND
  let formattedStartDate = entity.startDate && dayjs(entity.startDate).format("MMM YYYY");
  let formattedEndDate =
    entity.endDate !== undefined && (entity.endDate === null ? "present" : dayjs(entity.endDate).format("MMM YYYY"));

  return (
    <div ref={containerRef} className="resume-card__container">
      <div ref={titleRef} className="resume-card__title-container">
        <div className="resume-card__title-row">
          <h3>{entity.entityTitle}</h3>
          <FontAwesomeIcon
            onClick={() => setIsExpanded((prev) => !prev)}
            icon={faChevronCircleDown}
            size="lg"
            className={`resume-card__expand-icon${isExpanded ? " resume-card__expand-icon--expanded" : ""}`}
          />
        </div>
        {entity.entitySubTitle && <h4 className="resume-card__subtitle">{entity.entitySubTitle}</h4>}
        {formattedStartDate && <p>{`${formattedStartDate} to ${formattedEndDate}`}</p>}
      </div>
      <div ref={detailsRef} className="resume-card__details">
        {entity.detailSummary && <span>{entity.detailSummary}</span>}
        <ul>
          {entity.details.map((res) => (
            // highly arbitrary keys but should guarantee uniqueness for this specific usage
            <li key={res.description} className="">
              {res.description}
              {res.extraList && (
                <ul>
                  {res.extraList.map((extra) => (
                    <li key={extra}>{extra}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
