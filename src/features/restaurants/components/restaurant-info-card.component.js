import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Andrew Chikubi",
    icon,
    photos = [
      "https://instagram.fsyd10-2.fna.fbcdn.net/v/t51.2885-19/575721108_18334831846229275_7915769890048543997_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fsyd10-2.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QHZXqlBlAyAm1QARas_FX3QB7wrNXTmNLe4SemPg_cE8WSJ1U6mvt6UfKdC8N-XmBk&_nc_ohc=L1R3MOwG8t4Q7kNvwFZRYaJ&_nc_gid=Z8CO3ka-ALiQmVMhSv_JVg&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_Afk0Fh5TAvUoRDFs84UcQDdDSucOoyNW4PDbEHVwp8-3SA&oe=69497489&_nc_sid=7d3ac5",
    ],
    address = "69 Random street",
    isOpenNow = true,
    rating = 1,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
