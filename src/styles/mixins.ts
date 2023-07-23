export const flexbox = ({
  dir = "row",
  jc = "center",
  ai = "center",
  wr = "nowrap",
} = {}) => `
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${dir};
    flex-wrap: ${wr};
`;
