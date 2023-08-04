import styled from "styled-components/native"; // Importujemy styled-components/native

// Tworzymy komponent Text zastosowaniem globalnej czcionki
const CustomTextInput = styled.TextInput`
  font-family: ${(props) => props.theme.fontFamily};
`;
const CustomText = styled.Text`
  font-family: ${(props) => props.theme.fontFamily};
`;

export { CustomText, CustomTextInput };
