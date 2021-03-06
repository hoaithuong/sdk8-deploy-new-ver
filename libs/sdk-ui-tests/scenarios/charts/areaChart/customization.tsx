// (C) 2007-2019 GoodData Corporation
import { AreaChart, IAreaChartProps } from "@gooddata/sdk-ui-charts";
import { scenariosFor } from "../../../src";
import { dataLabelCustomizer } from "../_infra/dataLabelVariants";
import { AreaChartWithTwoMeasuresAndViewBy } from "./base";
import { legendCustomizer } from "../_infra/legendVariants";
import { ScenarioGroupNames } from "../_infra/groupNames";

const legendScenarios = scenariosFor<IAreaChartProps>("AreaChart", AreaChart)
    .withGroupNames(ScenarioGroupNames.ConfigurationCustomization)
    .withVisualTestConfig({ groupUnder: "legend position" })
    .withDefaultTags("vis-config-only", "mock-no-scenario-meta")
    .addScenarios("legend position", AreaChartWithTwoMeasuresAndViewBy, legendCustomizer);

const dataLabelScenarios = scenariosFor<IAreaChartProps>("AreaChart", AreaChart)
    .withGroupNames(ScenarioGroupNames.ConfigurationCustomization)
    .withGroupNames("customization")
    .withVisualTestConfig({ groupUnder: "data labels" })
    .withDefaultTags("vis-config-only", "mock-no-scenario-meta")
    .addScenarios("data labels", AreaChartWithTwoMeasuresAndViewBy, dataLabelCustomizer);

export default [legendScenarios, dataLabelScenarios];
