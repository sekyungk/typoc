import styled from "styled-components";
import TextBox from "./TextBox";

const BoldText = styled.span<{ fontSize: number; lineHeight: number }>`
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight}px;
  font-weight: bold;
  & + & {
    margin-top: 34px;
  }
`;

export default function BoldTextSet() {
  return (
    <TextBox>
      <BoldText fontSize={10} lineHeight={12}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={12} lineHeight={16}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={14} lineHeight={19}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={16} lineHeight={22}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={18} lineHeight={24}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={20} lineHeight={27}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={22} lineHeight={29}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={24} lineHeight={32}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={26} lineHeight={35}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={28} lineHeight={37}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={30} lineHeight={40}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={32} lineHeight={43}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={34} lineHeight={45}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={36} lineHeight={48}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={38} lineHeight={51}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={40} lineHeight={53}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={42} lineHeight={56}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={44} lineHeight={60}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={46} lineHeight={62}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={48} lineHeight={64}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={50} lineHeight={68}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={52} lineHeight={70}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={54} lineHeight={73}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
      <BoldText fontSize={56} lineHeight={76}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </BoldText>
    </TextBox>
  );
}
