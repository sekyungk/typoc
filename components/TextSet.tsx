import styled from "styled-components";
import TextBox from "./TextBox";

const Text = styled.span<{ fontSize: number; lineHeight: number }>`
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight}px;
  & + & {
    margin-top: 34px;
  }
`;

export default function TextSet() {
  return (
    <TextBox>
      <Text fontSize={10} lineHeight={12}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={12} lineHeight={16}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={14} lineHeight={19}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={16} lineHeight={22}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={18} lineHeight={24}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={20} lineHeight={27}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={22} lineHeight={29}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={24} lineHeight={32}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={26} lineHeight={35}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={28} lineHeight={37}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={30} lineHeight={40}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={32} lineHeight={43}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={34} lineHeight={45}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={36} lineHeight={48}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={38} lineHeight={51}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={40} lineHeight={53}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={42} lineHeight={56}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={44} lineHeight={60}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={46} lineHeight={62}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={48} lineHeight={64}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={50} lineHeight={68}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={52} lineHeight={70}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={54} lineHeight={73}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
      <Text fontSize={56} lineHeight={76}>
        요기요익스프레스 ABCDEFGabcdefg 1234!@#$
      </Text>
    </TextBox>
  );
}
