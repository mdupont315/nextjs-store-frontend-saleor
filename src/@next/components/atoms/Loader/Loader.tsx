import React from "react";

import * as S from "./styles";
import { IProps } from "./types";

export const Loader: React.FC<IProps> = ({
  fullScreen,
  transparent,
}: IProps) => {
  return (
    <S.Wrapper fullScreen={!!fullScreen} transparent={!!transparent}>
      <S.Items>
        <span />
        <span />
        <span />
      </S.Items>
    </S.Wrapper>
  );
};
