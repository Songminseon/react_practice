import React from "react";
import PhoneItem from "../PhoneItem";
import styled from "styled-components";

const ListWrapper = styled.div `
  display: flex;
  flex-direction: column;
`;

const PhoneList = ({list, ondelete}) => {
    return(
        <ListWrapper>
          {Object.values(list).map(item=>
            <PhoneItem id={item.id} name={item.name} phone={item.phone} onClick={ondelete}/>) }
        </ListWrapper>
    );
};

export default PhoneList;

