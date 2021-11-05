import { createElement, ReactNode } from "react";
import { Slider } from "./components/Slider";
import { SliderPreviewProps as SliderPreviewPropsGenerated } from "../typings/SliderProps";
import { getPreviewValues } from "./utils/getPreviewValues";
import { parseStyle } from "@mendix/piw-utils-internal";
import { createMarks } from "./utils/marks";
import { isVertical } from "./utils/isVertical";

interface SliderPreviewProps extends Omit<SliderPreviewPropsGenerated, "class"> {
    className?: string;
}

export function getPreviewCss(): string {
    return (
        require("rc-slider/assets/index.css") + require("rc-tooltip/assets/bootstrap.css") + require("./ui/Slider.scss")
    );
}

export function preview(props: SliderPreviewProps): ReactNode {
    const values = getPreviewValues(props);
    const marks = createMarks({
        min: values.min,
        max: values.max,
        numberOfMarks: props.noOfMarkers ?? 2,
        decimalPlaces: props.decimalPlaces ?? 2
    });

    return (
        <Slider
            {...props}
            {...values}
            onChange={undefined}
            marks={marks}
            style={parseStyle(props.style)}
            vertical={isVertical(props)}
        />
    );
}
