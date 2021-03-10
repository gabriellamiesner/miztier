const CONFIG = {
  HEADING: "MizTier: Tier rank Mizzou classes", // for the top of the page
  META: {
    // for social sharing, search engine results, etc.
    TITLE: `MizTier: Tier rank Mizzou classes`,
    DESCRIPTION: `All in the title`,
    SITE_NAME: `MizTier`,
  },
  INITIAL_TIERS: {
    // object containing tier : list of classes
    S: [], // course IDs
    A: [],
    B: [],
    C: [],
    D: [],
  },
  TIER_COLORS: {
    // thanks https://colorswall.com/palette/3297/
    S: "#CD6155",
    A: "#F0B27A",
    B: "#F9E79F",
    C: "#7DCEA0",
    D: "#5DADE2",
  },
  SEARCH: {
    INPUT_PLACEHOLDER: "Search courses",
    NO_RESULTS_MESSAGE: "No results :(",
    LOADING_MESSAGE: "Loading...",
  },
};

export default CONFIG;
