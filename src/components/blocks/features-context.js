import React from "react";
import { features } from "../../mocks/mocks";

export const FeaturesContext = React.createContext(features);
export const FeaturesProvider = FeaturesContext.Provider;
