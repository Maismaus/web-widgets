/**
 * This file was generated from RangeSlider.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ActionValue, DynamicValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type MinValueTypeEnum = "static" | "dynamic" | "expression";

export type MaxValueTypeEnum = "static" | "dynamic" | "expression";

export type StepSizeTypeEnum = "static" | "dynamic" | "expression";

export type TooltipTypeLowerEnum = "value" | "customText";

export type TooltipTypeUpperEnum = "value" | "customText";

export type OrientationEnum = "horizontal" | "vertical";

export type HeightUnitEnum = "percentage" | "pixels";

export interface RangeSliderContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    lowerBoundAttribute: EditableValue<Big>;
    upperBoundAttribute: EditableValue<Big>;
    advanced: boolean;
    minValueType: MinValueTypeEnum;
    staticMinimumValue: Big;
    minAttribute?: EditableValue<Big>;
    expressionMinimumValue?: DynamicValue<Big>;
    maxValueType: MaxValueTypeEnum;
    staticMaximumValue: Big;
    maxAttribute?: EditableValue<Big>;
    expressionMaximumValue?: DynamicValue<Big>;
    stepSizeType: StepSizeTypeEnum;
    stepValue: Big;
    stepAttribute?: EditableValue<Big>;
    expressionStepSize?: DynamicValue<Big>;
    showTooltip: boolean;
    tooltipTypeLower: TooltipTypeLowerEnum;
    tooltipLower?: DynamicValue<string>;
    tooltipTypeUpper: TooltipTypeUpperEnum;
    tooltipUpper?: DynamicValue<string>;
    tooltipAlwaysVisible: boolean;
    noOfMarkers: number;
    decimalPlaces: number;
    orientation: OrientationEnum;
    heightUnit: HeightUnitEnum;
    height: number;
    onChange?: ActionValue;
}

export interface RangeSliderPreviewProps {
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    lowerBoundAttribute: string;
    upperBoundAttribute: string;
    advanced: boolean;
    minValueType: MinValueTypeEnum;
    staticMinimumValue: number | null;
    minAttribute: string;
    expressionMinimumValue: string;
    maxValueType: MaxValueTypeEnum;
    staticMaximumValue: number | null;
    maxAttribute: string;
    expressionMaximumValue: string;
    stepSizeType: StepSizeTypeEnum;
    stepValue: number | null;
    stepAttribute: string;
    expressionStepSize: string;
    showTooltip: boolean;
    tooltipTypeLower: TooltipTypeLowerEnum;
    tooltipLower: string;
    tooltipTypeUpper: TooltipTypeUpperEnum;
    tooltipUpper: string;
    tooltipAlwaysVisible: boolean;
    noOfMarkers: number | null;
    decimalPlaces: number | null;
    orientation: OrientationEnum;
    heightUnit: HeightUnitEnum;
    height: number | null;
    onChange: {} | null;
}
